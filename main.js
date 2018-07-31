
var x = 170;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

 // les variable  de cercle 

  var x_cercle = 100 ;
  var y_cercle = 100 ;
  var rayon = 20 ; 
  // le rect 

  var larg_rect = 120;
  var long_rect = 50 ; 

  var coefx = 1 ; 
  var coefy = 1 ; 
      ctx.fillStyle = "red";
      ctx.fillRect(x, canvas.height-long_rect ,larg_rect, long_rect);
  // /* 
      
      ctx.arc(x_cercle, y_cercle, rayon, 0, 2 * Math.PI);
      ctx.fill(); //*/

function tranlate1(event){
    var key = event.keyCode;
  
   // for (var i=0 ; i+){

    if( event.keyCode == '39') { 


        if(x+larg_rect < canvas.width ){
     ctx.clearRect(x, canvas.height-long_rect ,larg_rect, long_rect);
     x=x+20;
     ctx.fillRect(x, canvas.height-long_rect ,larg_rect, long_rect);
     
        }

   }
   if( event.keyCode == '37') {
       
    
    if(x  > 0 ){

     ctx.clearRect(x, canvas.height-long_rect ,larg_rect, long_rect);
     x=x-20;
     ctx.fillRect(x, canvas.height-long_rect ,larg_rect, long_rect);
    }
 }
  
 
}


function mov_cercle(){
setInterval(repeter_cr, 100);
  
}

function repeter_cr() {



    // 
    test();
    x_cercle += (10 * coefx)  ;
    y_cercle += (10 * coefy) ; 


    dessin();  
}


function test(){

    if( x_cercle + rayon > canvas.width  ) {

        coefx = -1 ;
    }
    if(  x_cercle - rayon < 0 ){
      
        coefx = 1 ;

    }

    if( y_cercle + rayon > canvas.height  ) {
 
        coefy= -1 ;
      //  alert('you lose');
    }
    if(  y_cercle - rayon < 0 ){
      
        coefy = 1 ;

    }
  
   if( (y_cercle + rayon > canvas.height-long_rect )  && (x_cercle + rayon > x ) && (x_cercle - rayon < x + larg_rect )    ){


      coefy = -1 ; 

    } 


}

function dessin(){
 
    ctx.beginPath();
    ctx.clearRect(0,0,  canvas.width,  canvas.height);
    ctx.closePath();
    ctx.arc(x_cercle, y_cercle+10, rayon, 0, 2 * Math.PI);
    ctx.fillRect(x, canvas.height-long_rect ,larg_rect, long_rect);
    ctx.fill();
}