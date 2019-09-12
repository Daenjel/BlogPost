var express = require('express');

var app = express();

app.set('view engine', 'ejs');
//using middleware
app.use('/assets',express.static('assets'));

var options = function(req,res,next){
      console.log('Request was made from: '+req.url);
      if(req.url === '/home' || req.url === '/'){
        req.options = Date.now();
        res.render('index');
        console.log(req.options);
      }else if(req.url === '/login'){
        res.render('login');
      }else if(req.url === '/signIn'){
        res.render('signin');
      }else{
        res.render('404');
      }
      next();
};
app.use(options);

app.listen(process.env.PORT || 5000);
console.log('Listening to port 5000');
//$('#table_body').hide();
