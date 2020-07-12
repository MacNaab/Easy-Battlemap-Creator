var A = 3; // Nombre éléments +1
function aff_img(sel){  
    for (let i = 1; i < A; i++) {var x = "BMT"+i;document.getElementById(x).style.display = "none";}
	var value = sel.value; 
	document.getElementById('BMT'+value).style.display = "block";
}

function gen() {
    var ligne = document.getElementById('inputLigne').value;
    var colonne = document.getElementById('inputColonne').value;
    if(ligne == "" || ligne < "0"){var ligne = 1;}if(colonne == "" || colonne < "0"){var colonne = 1;}

    var T = Number(Math.floor(684/colonne));
    var carré = '<div style="display: inline-block;" class="DropZone" onclick="tintin(this)" ondrop="drop(event)" ondragover="allowDrop(event)"></div>';

    var aff1 = "";
    for (let i = 0; i < colonne; i++) {
        var aff1 = aff1+carré; 
    }
    var aff = aff1+'<br>';

    document.getElementById('Emplacement_Drop').innerHTML = aff;

    for (let i = 1; i < ligne; i++) {
        $("#Emplacement_Drop").append(aff);
    }


    $(".DropZone").width(T+'px');
    $(".DropZone").height(T+'px');
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    document.getElementById('TTCT').innerHTML = ev.target.src;
  }
  
  function drop(ev) {
    var lieux = document.getElementById('TTCT').innerHTML;
//    ev.target.innerHTML = '<img class="POTI" src="'+lieux+'">';
    ev.target.style.background = 'no-repeat center/100% url("'+lieux+'")';
  }

  function tintin(obj){
    var ValID = document.getElementById('AI_ID').innerHTML;
    var IDe = obj.id;
    if(IDe != ""){
        document.getElementById('Sauvegarde_ID').innerHTML = IDe;
    }
    else{
          obj.id = "tuile_"+ValID;
          document.getElementById('Sauvegarde_ID').innerHTML = "tuile_"+ValID;
          document.getElementById('AI_ID').innerHTML = Number(ValID)+1;
    }
  }


function Rotation90(){
    var ValID = document.getElementById('Sauvegarde_ID').innerHTML;
    var Rot = document.getElementById(ValID).style.transform;
    var Rot1 = Rot.replace('rotate(', '');
    var Rot2 = Rot1.replace('deg)', '');
    var NewR = Number(Number(Rot2)+90);
    document.getElementById(ValID).style.transform = "rotate("+NewR+"deg)";
}

function RotationM90(){
    var ValID = document.getElementById('Sauvegarde_ID').innerHTML;
    var Rot = document.getElementById(ValID).style.transform;
    var Rot1 = Rot.replace('rotate(', '');
    var Rot2 = Rot1.replace('deg)', '');
    var NewR = Number(Number(Rot2)-90);
    document.getElementById(ValID).style.transform = "rotate("+NewR+"deg)";
}

function dimdim(){
    var tuil = document.getElementById('tuile_val').value;
    var ligne = document.getElementById('inputLigne').value;
    var colonne = document.getElementById('inputColonne').value;
    var hauteur = Number(ligne)*Number(tuil);
    var largeur = Number(colonne)*Number(tuil);
    document.getElementById('dimensions').innerHTML = largeur+" x "+hauteur+" pixels.";

    var tuil = Number(tuil)-Number(2);
    $(".DropZone").width(tuil+'px');
    $(".DropZone").height(tuil+'px');
    document.getElementById('Emplacement_Drop').style.width = largeur+"px";
    document.getElementById('Emplacement_Drop').style.height = hauteur+"px";
}


function exportation() {
    var grid = document.getElementById('dimension grille').innerHTML;
    var grid = grid.replace('<br>','');
    var nom = document.getElementById("nom de la carte").value;if(nom == ""){var nom = "Battlemap";}
    var type = document.getElementById("type_fichier").value;if(type == ""){var type = "jpg";}
    var exportname = nom+" "+grid;
    $(".DropZone").css('border','none');
  domtoimage.toBlob(document.getElementById('Emplacement_Drop'))
    .then(function(blob) {
      window.saveAs(blob, exportname+'.'+type);
    });
}

function grille000(){
    var tuil = document.getElementById('tuile_val').value;
    var ligne = document.getElementById('inputLigne').value;
    var colonne = document.getElementById('inputColonne').value;
    var hauteur = Number(ligne)*Number(tuil);
    var largeur = Number(colonne)*Number(tuil);

    var DimGrille = 50;
    var TableHaut = Math.floor(Number(hauteur)/Number(DimGrille));    
    var TableLarge = Math.floor(Number(largeur)/Number(DimGrille));

    $("tr").css('width',DimGrille+'px');
    $("tr").css('height',DimGrille+'px');

    var TD = "";
    for (let i = 0; i < TableLarge; i++) {
        var TD = TD+"<td></td>"; 
    }
    var TR = "";
    for (let i = 0; i < TableHaut; i++) {
        var TR = TR+"<tr>"+TD+"</tr>"; 
    }

    if(document.getElementById('grille')){
        document.getElementById('grille').innerHTML = TR;
    }
    else{
        // ajouter le tableau
        var tableau = "<table id='grille'>"+TR+"</table>";   
        $("#Emplacement_Drop").append(tableau); 
    }
}

function dimgrid(){
    var grille = document.getElementById('grille_val').value;
    var dimension = document.getElementById('dimensions').innerHTML;
    let split = dimension.split(' x ')
        var hauteur = split[1].replace(' pixels.', '');
        var largeur = split[0];

    var largeur_aff = Number(largeur)/Number(grille);
    var hauteur_aff = Number(hauteur)/Number(grille);
    document.getElementById('dimension grille').innerHTML = "<br>["+largeur_aff+"] ["+hauteur_aff+"]";
}

function previewImage() {
    var file = document.getElementById("file").files;
    if (file.length > 0) {     
        for (let i = 0; i < file.length; i++) {
            var fileReader = new FileReader();

        fileReader.onload = function (event) {
            $("#BMT2").append( '<img draggable="true" ondragstart="drag(event)" class="IMAGE_AFF" src='+event.target.result+'>' );
        };

        fileReader.readAsDataURL(file[i]);
        }
    }
}

function imagelink(){
    var lien = document.getElementById("inputLink").value;
    if(lien != ""){
        $("#BMT2").append( '<img draggable="true" ondragstart="drag(event)" class="IMAGE_AFF" src='+lien+'>' );
        document.getElementById("inputLink").value = "";
    }
}