var A = 3; // Nombre éléments +1
function aff_img(sel){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
	if(sel.value != "Asset"){var value = sel.value;document.getElementById('BMT'+value).style.display = "block";}
}

function dimdim(){
    var grille = document.getElementById('tuile_val').value;
	var ligne = document.getElementById('inputLigne').value;
	var colonne = document.getElementById('inputColonne').value;
	if(ligne > colonne){var T = Number(Math.floor((window.innerHeight-50)/ligne));}else{var T = Number(Math.floor((window.innerHeight-50)/colonne));}
		var largeur = T*colonne;
		var hauteur = T*ligne;
	document.getElementById('dimensions').innerHTML = 'width: '+T*colonne*grille+', height: '+T*ligne*grille;
}

function dimgrid(e){
	var ligne = document.getElementById('inputLigne').value;
	var colonne = document.getElementById('inputColonne').value;
	if(ligne > colonne){var T = Number(Math.floor((window.innerHeight-50)/ligne));}else{var T = Number(Math.floor((window.innerHeight-50)/colonne));}
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
		image_change();
        };

        fileReader.readAsDataURL(file[i]);
        }
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



