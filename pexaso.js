window.addEventListener("load", init, false);
function init(){
  document.getElementById("pex1").addEventListener("click", function(){method(1)}, false);
  document.getElementById("pex2").addEventListener("click", function(){method(2)}, false);
  document.getElementById("pex3").addEventListener("click", function(){method(3)}, false);
  document.getElementById("pex4").addEventListener("click", function(){method(4)}, false);
  document.getElementById("pex5").addEventListener("click", function(){method(5)}, false);
  document.getElementById("pex6").addEventListener("click", function(){method(6)}, false);
  document.getElementById("pex7").addEventListener("click", function(){method(7)}, false);
  document.getElementById("pex8").addEventListener("click", function(){method(8)}, false);
  document.getElementById("pex9").addEventListener("click", function(){method(9)}, false);
  document.getElementById("pex10").addEventListener("click", function(){method(10)}, false);
  document.getElementById("pex11").addEventListener("click", function(){method(11)}, false);
  document.getElementById("pex12").addEventListener("click", function(){method(12)}, false);
  document.getElementById("pex13").addEventListener("click", function(){method(13)}, false);
  document.getElementById("pex14").addEventListener("click", function(){method(14)}, false);
  document.getElementById("pex15").addEventListener("click", function(){method(15)}, false);
  document.getElementById("pex16").addEventListener("click", function(){method(16)}, false);
}
var f=0;
var g=0;
var num;
var nah=[];
var dva = 0;
var pom = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var hrac1 = true;
var hrac1skore = 0;
var hrac2skore = 0;
var hrac2 = false;

while(nah.length < 16){
  var a = Math.round((Math.random()*7)+1);  
  if(pom[a] < 2){
    nah.push(a);
    pom[a] = pom[a] + 1;
  }
}

method = function(num){  
  var stri = document.getElementById("pex"+num).src;
  var s = stri.match(/back/gi); 
  if(s == "back" && dva < 2){ 
    if(dva < 2){
      if(f==0){
        f=num;
      }
      else{
        g=num;
      }  
      document.getElementById("pex"+num).src="img/"+nah[num-1]+".JPG";
      dva++;   
    }
    if(nah[f-1] == nah[g-1] && dva == 2){       
      if(hrac1 == true){
        hrac1skore++;
        document.getElementById("hrac1").value = hrac1skore;        
      }
      else{
        hrac2skore++;
        document.getElementById("hrac2").value = hrac2skore;
      }
      dva=0;
      f=0;
      g=0;
      if(hrac1skore + hrac2skore == 8){
        if(hrac1skore<hrac2skore){
          window.alert("Vyhr·l hr·Ë 2!");
          setTimeout(function(){location.reload(true)},2000);
        }
        if(hrac1skore==hrac2skore){
        window.alert("Je to nerozhodnÏ!");  
        setTimeout(function(){location.reload(true)},2000)
        }
        if(hrac1skore>hrac2skore){
        window.alert("Vyhr·l hr·Ë 1!");
        setTimeout(function(){location.reload(true)},2000)
        }
      }
    }
    else if(dva == 2){
      setTimeout("reverse()",2000);
    }     
  }
}

function reverse(){
  document.getElementById("pex"+f).src="img/back.JPG";
  document.getElementById("pex"+g).src="img/back.JPG";
  dva=0;
  f=0;
  g=0;
  if(hrac1==true){
    document.getElementById("hraje").value = "hraje hrac 2";
    hrac1=false;
    hrac2=true;
  }
  else{
    document.getElementById("hraje").value = "hraje hrac 1";
    hrac1=true;
    hrac2=false;
  }  
}