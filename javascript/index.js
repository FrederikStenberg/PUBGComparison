var player1;
var player2;
var region1;
var region2;

function compare() {
    var regionElement1 = document.getElementById('regionplayer1');
    var regionElement2 = document.getElementById('regionplayer2');
    player1 = document.getElementById('searchplayer1').value;
    player2 = document.getElementById('searchplayer2').value;
    region1 = regionElement1.options[regionElement1.selectedIndex].value;
    region2 = regionElement2.options[regionElement2.selectedIndex].value;
};

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