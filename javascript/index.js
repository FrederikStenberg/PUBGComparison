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
    
    var req = new XMLHttpRequest();
    var url = "https://api.playbattlegrounds.com/shards/pc-eu/matches/3f7710e9-daf9-49f5-bd73-e5789c60cae5";

    req.open('GET', url, true);
    req.setRequestHeader('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5Mjk1YWExMC0yYWIxLTAxMzYtZTNhNi0wOTkxMzhmZmQ5ZTEiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTI0NjU5MDg5LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmctY29tcGFyaXNvbiIsInNjb3BlIjoiY29tbXVuaXR5IiwibGltaXQiOjEwfQ.45-CAzKJIChq3z7h-9He_dUTFOvDHzDesnvWOcS719w');
    req.setRequestHeader('Accept', 'application/json');
    req.send();
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