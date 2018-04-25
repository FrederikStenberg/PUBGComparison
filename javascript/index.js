$(document).ready(function() {
    
    var selectedRegion; 
    var player1;
    var player2;
    
    $(document).keypress(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
        if(keycode == '13') { 
            if($('#option1').is(':checked')) {
                selectedRegion = "pc-eu";
            } else if ($('#option2').is(':checked')) {
                selectedRegion = "pc-krjp";
            } else if ($('#option3').is(':checked')) {
                selectedRegion = "pc-na";
            } else if ($('#option4').is(':checked')) {
                selectedRegion = "pc-oc";
            } else if ($('#option5').is(':checked')) {
                selectedRegion = "pc-kakao";
            } else if ($('#option6').is(':checked')) {
                selectedRegion = "pc-sea";
            } else if ($('#option7').is(':checked')) {
                selectedRegion = "pc-sa";
            } else if ($('#option8').is(':checked')) {
                selectedRegion = "pc-as";
            }
            var player1 = document.getElementById('searchplayer1').value;
            var player2 = document.getElementById('searchplayer2').value;
        }
    });
});

/* JS for dropdown */
var colors = ['1abc9c', '2c3e50', '2980b9', '7f8c8d', 'f1c40f', 'd35400', '27ae60'];

colors.each(function (color) {
  $$('.color-picker')[0].insert(
    '<div class="square" style="background: #' + color + '"></div>'
  );
});

$$('.color-picker')[0].on('click', '.square', function(event, square) {
  background = square.getStyle('background');
  $$('.custom-dropdown select').each(function (dropdown) {
    dropdown.setStyle({'background' : background});
  });
});