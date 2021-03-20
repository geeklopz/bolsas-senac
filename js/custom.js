// add new morador

$(document).ready(function() {

  $("#qtd_moradores").change( function() {

    let qtd = 1;
    const qtdValue = $("#qtd_moradores option:selected").val();

    const original = document.getElementById('row-morador');
    const copy = document.getElementById('mais-moradores');

    var newSelect = original.cloneNode(true, true);

    while(qtd < qtdValue) {
      copy.appendChild(newSelect);
      console.log(qtd);
      qtd++;
    }

  });

  $("#add-comprovante").click( function() {

    const original = document.getElementById('row-comprovante');
    var newSelect = original.cloneNode(true);

    original.after(newSelect);

  });

});
