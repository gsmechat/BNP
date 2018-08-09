$(".deconnect").toggle();
$(".suite_perso").toggle();
$(".suite_demande").toggle();
$(".adm").toggle();
$(".adm").slideDown(500);

$(document).ready(function(){
    $(".ok").click(function(){
        $(".deconnect").toggle();
        $(".co").toggle();
        $('#fade, a.close, #popup_name').remove();
    });
});

$(document).ready(function(){
    $(".off").click(function(){
        $(".deconnect").toggle();
        $(".co").toggle();
    });
});

function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      alert("Mauvais mail !");
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifTel(champ)
{
   	var tel = parseInt(champ.value);
   	var n = champ.value.length;
   if(isNaN(tel) || tel < 0100000000 || tel > 0999999999 || n != 10)
   {
      surligne(champ, true);
      alert("Numéro de téléphone incorrecte !");
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

$(function() {
  $('#addrow').click(function() {
  	  	$("<tr><td><input type='text' name='fname' id='fnam' value=''></td><td><input type='text' name='fne' id='fname' value=''></td><td><input type='text' name='fn' id='fname' value=''></td><td><input type='text' name='fme' id='fname' value=''></td><td><input type='text' name='fname' id='fae' value=''></td><td><input id='deleterow' type='submit' value='Sup' class='btn btn-primary' disabled></td></tr>").insertAfter(".table tr:last");
   		$('#addrow').attr('disabled', 'disabled');
   	});
});

$(function() {
  $('#deleterow').click(function() {
  	  	$('.table tbody tr:last').remove();
   	});
});;

$(function() {
  $('#saverow').click(function() {
  		$("#addrow").remove();
		$("#addrow").add("btn btn-primary");
   	});
});

$(function() {
	$( "#editrib" ).click(function() {
	  $("#rib1").replaceWith('<input type="text" name="fname" id="fname" value="209">');
	  $("#rib2").replaceWith('<input type="text" name="fname" id="fname" value="34">');
	  $("#rib3").replaceWith('<input type="text" name="fname" id="fname" value="3443">');
	  $("#rib4").replaceWith('<input type="text" name="fname" id="fname" value="853">');
	  $("#rib5").replaceWith('<input type="text" name="fname" id="fname" value="LA BANQUE POSTALE CENTRE FINANCIER 54900 NANCY CEDEX 9">');
	  $("#rib6").replaceWith('<input type="text" name="fname" id="fname" value="FR48">');
	  $("#rib7").replaceWith('<input type="text" name="fname" id="fname" value="2004">');
	  $("#rib8").replaceWith('<input type="text" name="fname" id="fname" value="1010">');
	  $("#rib9").replaceWith('<input type="text" name="fname" id="fname" value="0207">');
	  $("#rib10").replaceWith('<input type="text" name="fname" id="fname" value="8814">');
	  $("#rib11").replaceWith('<input type="text" name="fname" id="fname" value="5E02">');
	  $("#rib12").replaceWith('<input type="text" name="fname" id="fname" value="297">');
	 // $("#rib13").replaceWith('<input type="text" name="fname" id="fname" value="853">');
	});
});

var j = 0;
 $(document).ready(function(){
      var i=1;
      if (j == 0){
      //$('#addr'+i).html("<td><input name='name"+i+"' type='text' placeholder='Name' class='form-control input-md'  /> </td><td><input  name='mail"+i+"' type='text' placeholder='Mail'  class='form-control input-md'></td><td><input  name='mobile"+i+"' type='text' placeholder='Mobile'  class='form-control input-md'></td>");
      $('#addr'+i).html("<td><input type='text' name='name"+i+"'  placeholder='Nom' class='form-control'/></td><td><input type='text' name='prenom"+i+"' placeholder='Prenom' class='form-control'/></td><td><input type='text' name='DateNaiss"+i+"' placeholder='Date de naissance' class='form-control'/></td><td><input type='text' name='lien"+i+"' placeholder='Lien' class='form-control'/></td><td><input type='text' name='droit"+i+"' value='1200 €' disabled placeholder='Droit' class='form-control'/></td><td><a onclick=supp_row('addr"+i+"') class='btn btn-primary btn-primary addr"+i+" addrr'>Supprimer</a></td>");       
        $('#tab2').append('<tr id="addr'+(i+1)+'"></tr>');
      i++; 
      j++;
      }
     $("#add_row").click(function(){
      //$('#addr'+i).html("<td><input name='name"+i+"' type='text' placeholder='Name' class='form-control input-md'  /> </td><td><input  name='mail"+i+"' type='text' placeholder='Mail'  class='form-control input-md'></td><td><input  name='mobile"+i+"' type='text' placeholder='Mobile'  class='form-control input-md'></td>");
    	$('#addr'+i).html("<td><input type='text' name='name"+i+"'  placeholder='Nom' class='form-control'/></td><td><input type='text' name='prenom"+i+"' placeholder='Prenom' class='form-control'/></td><td><input type='text' name='DateNaiss"+i+"' placeholder='Date de naissance' class='form-control'/></td><td><input type='text' name='lien"+i+"' placeholder='Lien' class='form-control'/></td><td><input type='text' name='droit"+i+"' value='1200€' disabled placeholder='Droit' class='form-control'/></td><td><a onclick=supp_row('addr"+i+"') class='btn btn-primary btn-primary addr"+i+" addrr'>Supprimer</a></td>");				
      	$('#tab2').append('<tr id="addr'+(i+1)+'"></tr>');
      i++; 
  });
     $("#delete_row").click(function(){
    	 if(i>1){
		 $("#addr"+(i-1)).html('');
		 i--;
		 }
	 });

});

$(function() {
  $("#la").click(function() {
	 	$("#la").prop('disabled', true);
	 });
});

//$("#la").prop('disabled', false);
$(function() {
  $('#edit_droit').click(function() {
  		$("#tab2 input").removeAttr('disabled');
   	});
});

$(function() {
  $('#edit_info').click(function() {
  		$("#tab1 input").removeAttr('disabled');
   	});
});

$(function() {
  $('#save_info').click(function() {
  		var tel = document.getElementById("tel");
  		var mail = document.getElementById("mail");
   		if(verifTel(tel) == true && verifMail(mail) == true)
   		{
  			$("#tab1 input").prop('disabled', true);
  			alert("Changement effectuez avec succés !");
   		}
   	});
});

$(function() {
  $('#save_droit').click(function() {
  		$("#tab2 input").prop('disabled', true);
   	});
});

$(function() {
  $('#edit_rib').click(function() {
  		$("#tab3 input").removeAttr('disabled');
   	});
});

$(function() {
  $('#save_rib').click(function() {
  		$("#tab3 input").prop('disabled', true);
   	});
});

function supp_row(champ) {
    var obj = document.getElementById(champ);
    obj.deleteCell(5);
    obj.deleteCell(4);
    obj.deleteCell(3);
    obj.deleteCell(2);
    obj.deleteCell(1);
    obj.deleteCell(0);
}

//Lorsque vous cliquez sur un lien de la classe poplight et que le href commence par #
$('a.poplight[href^=#]').click(function() {
  var popID = $(this).attr('rel'); //Trouver la pop-up correspondante
  var popURL = $(this).attr('href'); //Retrouver la largeur dans le href

  //Récupérer les variables depuis le lien
  var query= popURL.split('?');
  var dim= query[1].split('&amp;');
  var popWidth = dim[0].split('=')[1]; //La première valeur du lien

  //Faire apparaitre la pop-up
  $('#' + popID).fadeIn().css({
    'width': Number(popWidth)
  });

  //Récupération du margin, qui permettra de centrer la fenêtre - on ajuste de 80px en conformité avec le CSS
  var popMargTop = ($('#' + popID).height() + 80) / 2;
  var popMargLeft = ($('#' + popID).width() + 80) / 2;

  //On affecte le margin
  $('#' + popID).css({
    'margin-top' : -popMargTop,
    'margin-left' : -popMargLeft
  });

  //Effet fade-in du fond opaque
  $('body').append('<div id="fade"></div>'); //Ajout du fond opaque noir
  //Apparition du fond - .css({'filter' : 'alpha(opacity=80)'}) pour corriger les bogues de IE
  $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn();

  return false;
});

// var j = 2;
// $(function() {
//   $("#suite_info_clik").click(function() {
//     $(".suite_perso").toggle();
//     $(".indic").toggle();
//       if (j % 2 === 0)
//        {
//         document.getElementById("suite_info_clik").innerHTML = "/\\";
//         j++;
//       }
//       else
//       {
//         document.getElementById("suite_info_clik").innerHTML = "\\/";
//         j++;
//       }
//    });
// });

// var k = 2;
// $(function() {
//   $("#suite_demande_clik").click(function() {
//     $(".suite_demande").toggle();
//     $(".indic_demande").toggle();
//       if (k % 2 === 0)
//        {
//         document.getElementById("suite_demande_clik").innerHTML = "/\\";
//         k++;
//       }
//       else
//       {
//         document.getElementById("suite_demande_clik").innerHTML = "\\/";
//         k++;
//       }
//    });
// });

var i = 0;
$(document).ready(function(){
    $("#suite_info_clik").click(function(){
          if(i % 2 == 0){
          $(".fondu1_1").fadeIn(500);
          $(".fondu1_2").fadeIn(1000);
          $(".fondu1_3").fadeIn(1500);
          $(".fondu1_4").fadeIn(2000);
          $(".fondu1_5").fadeIn(2500);
          $(".fondu1_6").fadeIn(3000);
          $(".fondu1_7").fadeIn(3500);
          $(".fondu1_8").fadeIn(4000);
          $(".fondu1_9").fadeIn(4500);
          document.getElementById("suite_info_clik").innerHTML = "/\\";
          i++;
       }
      else
      {
        $(".suite_perso").toggle();
        document.getElementById("suite_info_clik").innerHTML = "\\/";
        i++;
      }
    });
});

var l = 0;
$(document).ready(function(){
    $("#suite_demande_clik").click(function(){
          if(l % 2 == 0){
          $(".fondu2_1").fadeIn(500);
          $(".fondu2_2").fadeIn(1000);
          $(".fondu2_3").fadeIn(1500);
          $(".fondu2_4").fadeIn(2000);
          $(".fondu2_5").fadeIn(2500);
          $(".fondu2_6").fadeIn(3000);
          $(".fondu2_7").fadeIn(3500);
          document.getElementById("suite_demande_clik").innerHTML = "/\\";
          l++;
       }
      else
      {
        $(".suite_demande").toggle();
        document.getElementById("suite_demande_clik").innerHTML = "\\/";
        l++;
      }
    });
});

$(document).ready(function(){
    $("#drag").draggable();
    $("#drag1").draggable();
    $("#drag2").draggable();
});


