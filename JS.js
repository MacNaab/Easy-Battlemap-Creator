var A = 18; // Nombre éléments +1
function aff1(){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
    document.getElementById('BMT1').style.display = "block";
}
function aff2(){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
    document.getElementById('BMT2').style.display = "block";
}
function aff3(){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
    document.getElementById('BMT3').style.display = "block";
}
function aff4(){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
    document.getElementById('BMT4').style.display = "block";
}
function aff5(){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
    document.getElementById('BMT5').style.display = "block";
}
function aff6(){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
    document.getElementById('BMT6').style.display = "block";
}
function aff7(){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
    document.getElementById('BMT7').style.display = "block";
}
function aff8(){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
    document.getElementById('BMT8').style.display = "block";
}
function aff9(){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
    document.getElementById('BMT9').style.display = "block";
}
function aff10(){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
    document.getElementById('BMT10').style.display = "block";
}
function aff11(){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
    document.getElementById('BMT11').style.display = "block";
}
function aff12(){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
    document.getElementById('BMT12').style.display = "block";
}
function aff13(){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
    document.getElementById('BMT13').style.display = "block";
}
function aff14(){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
    document.getElementById('BMT14').style.display = "block";
}
function aff15(){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
    document.getElementById('BMT15').style.display = "block";
}
function aff16(){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
    document.getElementById('BMT16').style.display = "block";
}
function aff17(){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
    document.getElementById('BMT17').style.display = "block";
}

function dimdim(){
    var grille = document.getElementById('tuile_val').value;
	var ligne = document.getElementById('inputLigne').value;
	var colonne = document.getElementById('inputColonne').value;
	if(ligne > colonne){var T = Number(Math.floor(684/ligne));}else{var T = Number(Math.floor(684/colonne));}
		var largeur = T*colonne;
		var hauteur = T*ligne;
	document.getElementById('dimensions').innerHTML = 'width: '+T*colonne*grille+', height: '+T*ligne*grille;
}

function dimgrid(e){
	var ligne = document.getElementById('inputLigne').value;
	var colonne = document.getElementById('inputColonne').value;
	if(ligne > colonne){var T = Number(Math.floor(684/ligne));}else{var T = Number(Math.floor(684/colonne));}
		document.getElementById('tuile_val').value = Number(e)/Number(T);
		dimdim()
}

function previewImage() {
    var file = document.getElementById("file").files;
    if (file.length > 0) {     
        for (let i = 0; i < file.length; i++) {
            var fileReader = new FileReader();

        fileReader.onload = function (event) {
            $("#BMT2").append( '<img class="IMAGE_AFF" src='+event.target.result+'>' );
        };

        fileReader.readAsDataURL(file[i]);
        }
	image_change();
    }
}

function imagelink(){
    var lien = document.getElementById("inputLink").value;
    if(lien != ""){
        $("#BMT2").append( '<img class="IMAGE_AFF" src='+lien+'>' );
        document.getElementById("inputLink").value = "";
	image_change();
    }
}

$( document ).ready(function() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var calc = (Number(width)-Number(height)-15)/2;
      var calc2 = Number(height)-15;
	$(".centrerlekonva").css({"margin-left": calc+"px","width":calc2+"px"});
});
