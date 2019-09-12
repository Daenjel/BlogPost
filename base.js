$(document).ready(function(){
// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCBgmaAc1ogFfqU4-MtVWTp_GBAl3GUN9Q",
  authDomain: "ilearn-1c5f7.firebaseapp.com",
  databaseURL: "https://ilearn-1c5f7.firebaseio.com",
  projectId: "ilearn-1c5f7",
  storageBucket: "ilearn-1c5f7.appspot.com",
  messagingSenderId: "335420601348",
  appId: "1:335420601348:web:0872fd333b952824"
};

  firebase.initializeApp(firebaseConfig);
    // var mRef = firebase.database().ref("TRENDING");
    // var mData = firebase.storage().ref("shoes.jpg");
    
    // mRef.on("child_added", snap => {
    //   $("#progress").hide();
    //     var cover = snap.child("cover").val();
    //     var product = snap.child("product").val();
    //     var cost = snap.child("cost").val();
    
    //     $("#table_body").append("<section><img alt="+ product +" src="+cover+ "/><label>" + product + "</label><p>"+"Ksh: " +cost+ "</p><button>View</button></section>");
    // });
    $("#denim").click(function(){
      var mRef = firebase.database().ref("Denim");
      $("#table_body").empty();
      mRef.on("child_added", snap => {
          var cover = snap.child("cover").val();
          var product = snap.child("product").val();
          var cost = snap.child("cost").val();
      
          $('#iframe').hide();
          $("#table_body").append("<section><img alt="+ product +" src="+cover+ "/><label>" + product + "</label><p>"+"Ksh: " +cost+ "</p><button>View</button></section>");
      });
    });
    $("#cropTop").click(function(){
      var mRef = firebase.database().ref("CropTops");
      $("#table_body").empty();
      mRef.on("child_added", snap => {
          var cover = snap.child("cover").val();
          var product = snap.child("product").val();
          var cost = snap.child("cost").val();
          $('#iframe').hide();
          $("#table_body").append("<section><img alt="+ product +" src="+cover+ "/><label>" + product + "</label><p>"+"Ksh: " +cost+ "</p><button>View</button></section>");
      });
    });
    $("#bags").click(function(){
      var mRef = firebase.database().ref("Bags");
      $("#table_body").empty();
      mRef.on("child_added", snap => {
          var cover = snap.child("cover").val();
          var product = snap.child("product").val();
          var cost = snap.child("cost").val();
          $('#iframe').hide();
          $("#table_body").append("<section><img alt="+ product +" src="+cover+ "/><label>" + product + "</label><p>"+"Ksh: " +cost+ "</p><button>View</button></section>");
      });
    });
    $("#logs").click(function(){
      // var mRef = firebase.database().ref("Shoes");
      // $("#table_body").empty();
      // mRef.on("child_added", snap => {
      //     var cover = snap.child("cover").val();
      //     var product = snap.child("product").val();
      //     var cost = snap.child("cost").val();
      //     $('#iframe').hide();
      //     $("#table_body").append("<section><img alt="+ product +" src="+cover+ "/><label>" + product + "</label><p>"+"Ksh: " +cost+ "</p><button>View</button></section>");
      $('#iframe').hide();
      $('#table_body').hide();
      });
    });

    $("#locate").click(function(){
      $("#maps").fadeToggle(2500);
    });
    // Open the Modal
    /*mData.getDownloadURL().then(function(url) {
      var test = url;
      //alert(url);
      console.log(url);
      document.querySelector('img').src = test;
    }).catch(function(error) {
      console.log(error);
    });
    
    mRef.on("value", function(datasnapshot){
        mRef.innerHTML = datasnapshot.val();
      });*/

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("demo");
//   var captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndex-1].alt;
// }
