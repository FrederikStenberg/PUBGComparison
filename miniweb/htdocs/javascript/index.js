var player1;
var player2;
var player1ID;
var player2ID;
var region1;
var region2;
var APIkey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5Mjk1YWExMC0yYWIxLTAxMzYtZTNhNi0wOTkxMzhmZmQ5ZTEiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTI0NjU5MDg5LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmctY29tcGFyaXNvbiIsInNjb3BlIjoiY29tbXVuaXR5IiwibGltaXQiOjEwfQ.45-CAzKJIChq3z7h-9He_dUTFOvDHzDesnvWOcS719w";

function compare() {
    var regionElement1 = document.getElementById('regionplayer1');
    var regionElement2 = document.getElementById('regionplayer2');
    player1 = document.getElementById('searchplayer1').value;
    player2 = document.getElementById('searchplayer2').value;
    region1 = regionElement1.options[regionElement1.selectedIndex].value;
    region2 = regionElement2.options[regionElement2.selectedIndex].value;
    
    var req = new XMLHttpRequest();
    var req2 = new XMLHttpRequest();
    var urlForPlayer1ID = "https://api.playbattlegrounds.com/shards/" + region1 + "/players?filter[playerNames]=" + player1;
    //var urlForPlayer2ID = "https://api.playbattlegrounds.com/shards/" + region2 + "/players?filter[playerNames]=" + player2;
    
    req.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var obj = this.responseText;
            var objJSON = JSON.parse(obj);
            player1ID = objJSON.data["0"].id;
            alert(player1ID);
            //Begin second API call to get player1 data
            var urlForSeasonObject1 = "https://api.playbattlegrounds.com/shards/" + region1 + "/players/" + player1ID + "/seasons/division.bro.official.2018-04";
        }
    }
    
    /*req2.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var obj2 = this.responseText;
            var obj2JSON = JSON.parse(obj2);
            var amountOfMatches2 = obj2JSON.data["0"].relationships.matches.data.length;
            sessionStorage.setItem("amountOfMatches2", amountOfMatches2);
            window.location.href = "selectmatch.html";
        }
    }*/
    
    req.open('GET', urlForPlayer1ID, true);
    req.setRequestHeader('Authorization', 'Bearer ' + APIkey);
    req.setRequestHeader('Accept', 'application/vnd.api+json');
    req.send();
    
    /*req2.open('GET', url2, true);
    req2.setRequestHeader('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI5Mjk1YWExMC0yYWIxLTAxMzYtZTNhNi0wOTkxMzhmZmQ5ZTEiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTI0NjU5MDg5LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmctY29tcGFyaXNvbiIsInNjb3BlIjoiY29tbXVuaXR5IiwibGltaXQiOjEwfQ.45-CAzKJIChq3z7h-9He_dUTFOvDHzDesnvWOcS719w');
    req2.setRequestHeader('Accept', 'application/vnd.api+json');
    req2.send();*/
    
    //var amountOfMatches = objJSON.data["0"].relationships.matches.data.length;
    //sessionStorage.setItem("amountOfMatches", amountOfMatches);
};

