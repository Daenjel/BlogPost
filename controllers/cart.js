$(document).ready(function(){

    var config = {
    apiKey: "AIzaSyC7reL53IQC2stfUI8_31Oxb-R_W2d4NHY",
    authDomain: "forevertrendy.firebaseapp.com",
    databaseURL: "https://forevertrendy.firebaseio.com",
    projectId: "forevertrendy",
    storageBucket: "forevertrendy.appspot.com",
    messagingSenderId: "326076939838"
    };
    firebase.initializeApp(config);
    var mRef = firebase.database().ref("CART");
    
    mRef.on("child_added", snap => {
        $("#progress").hide();
        var cover = snap.child("cover").val();
        var product = snap.child("product").val();
        var cost = snap.child("cost").val();
    
        $('#cart').append("$('.buttons')<span>$('.delete-btn')</span><span>$('.like-btn')</span>$('.image')<img alt='denim' src="+cover+ "/><label>" + product + "</label><p>"+"Ksh: " +cost+ "</p>");
    });

    $('.minus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value > 1) {
            value = value - 1;
        } else {
            value = 0;
        }

    $input.val(value);

    });

    $('.plus-btn').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div').find('input');
        var value = parseInt($input.val());

        if (value < 100) {
          value = value + 1;

      var price = $('#price').text();
      var sell = price * value;
      price  = sell;
      console.log(price);
        } else {
            value =100;
        }

        $input.val(value);
    });

  $('.like-btn').on('click', function() {
    $(this).toggleClass('is-active');
  });
});