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
    var req3 = new XMLHttpRequest();
    var req4 = new XMLHttpRequest();
    var urlForPlayer1ID = "https://api.playbattlegrounds.com/shards/" + region1 + "/players?filter[playerNames]=" + player1;
    var urlForPlayer2ID = "https://api.playbattlegrounds.com/shards/" + region2 + "/players?filter[playerNames]=" + player2;
    
    sessionStorage.setItem("playerName1", player1);
    sessionStorage.setItem("playerName2", player2);
    
    //Getting info for Player 1
    req.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var obj = this.responseText;
            var objJSON = JSON.parse(obj);
            player1ID = objJSON.data["0"].id;
            
            //Begin second API call to get player1 data
            var urlForSeasonObject1 = "https://api.playbattlegrounds.com/shards/" + region1 + "/players/" + player1ID + "/seasons/division.bro.official.2018-05";
            req2.open('GET', urlForSeasonObject1, true);
            req2.setRequestHeader('Authorization', 'Bearer ' + APIkey);
            req2.setRequestHeader('Accept', 'application/vnd.api+json');
            req2.send();
        }
    } 
    req2.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var obj2 = this.responseText;
            var obj2JSON = JSON.parse(obj2);
            
            player1Kills = obj2JSON.data.attributes.gameModeStats["duo-fpp"].kills;
            player1Assists = obj2JSON.data.attributes.gameModeStats["duo-fpp"].assists; 
            player1RoundMostKills = obj2JSON.data.attributes.gameModeStats["duo-fpp"].roundMostKills;
            player1Suicides = obj2JSON.data.attributes.gameModeStats["duo-fpp"].suicides;
            player1Top10s = obj2JSON.data.attributes.gameModeStats["duo-fpp"].top10s;
            player1LongestKillString = obj2JSON.data.attributes.gameModeStats["duo-fpp"].longestKill;
            player1LongestKill = parseFloat(player1LongestKillString).toFixed(2);
            player1Teamkills = obj2JSON.data.attributes.gameModeStats["duo-fpp"].teamkills;
            
            //Calculate winratio
            player1Wins = obj2JSON.data.attributes.gameModeStats["duo-fpp"].wins;
            player1Rounds = obj2JSON.data.attributes.gameModeStats["duo-fpp"].roundsPlayed;
            player1WinRatio = ((player1Wins / player1Rounds) * 100).toFixed(2);
            
            
            //Put variables into storage
            sessionStorage.setItem("player1Kills", player1Kills);
            sessionStorage.setItem("player1Assists", player1Assists);
            sessionStorage.setItem("player1RoundMostKills", player1RoundMostKills);
            sessionStorage.setItem("player1Suicides", player1Suicides);
            sessionStorage.setItem("player1Top10s", player1Top10s);
            sessionStorage.setItem("player1LongestKill", player1LongestKill);
            sessionStorage.setItem("player1Teamkills", player1Teamkills);
            sessionStorage.setItem("player1WinRatio", player1WinRatio);
            
            req3.open('GET', urlForPlayer2ID, true);
            req3.setRequestHeader('Authorization', 'Bearer ' + APIkey);
            req3.setRequestHeader('Accept', 'application/vnd.api+json');
            req3.send();
        }
    }  
    //Getting info on Player 2
    req3.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var obj3 = this.responseText;
            var obj3JSON = JSON.parse(obj3);
            player2ID = obj3JSON.data["0"].id;
                                
            //Begin second API call to get player2 data
            var urlForSeasonObject1 = "https://api.playbattlegrounds.com/shards/" + region2 + "/players/" + player2ID + "/seasons/division.bro.official.2018-05";
            req4.open('GET', urlForSeasonObject1, true);
            req4.setRequestHeader('Authorization', 'Bearer ' + APIkey);
            req4.setRequestHeader('Accept', 'application/vnd.api+json');
            req4.send();
        }
    }
    req4.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            var obj4 = this.responseText;
            var obj4JSON = JSON.parse(obj4);
            
            player2Kills = obj4JSON.data.attributes.gameModeStats["duo-fpp"].kills;
            player2Assists = obj4JSON.data.attributes.gameModeStats["duo-fpp"].assists; 
            player2RoundMostKills = obj4JSON.data.attributes.gameModeStats["duo-fpp"].roundMostKills;
            player2Suicides = obj4JSON.data.attributes.gameModeStats["duo-fpp"].suicides;
            player2Top10s = obj4JSON.data.attributes.gameModeStats["duo-fpp"].top10s;
            player2LongestKillString = obj4JSON.data.attributes.gameModeStats["duo-fpp"].longestKill;
            player2LongestKill = parseFloat(player2LongestKillString).toFixed(2);
            player2Teamkills = obj4JSON.data.attributes.gameModeStats["duo-fpp"].teamkills;
            
            //Calculate winratio
            player2Wins = obj4JSON.data.attributes.gameModeStats["duo-fpp"].wins;
            player2Rounds = obj4JSON.data.attributes.gameModeStats["duo-fpp"].roundsPlayed;
            player2WinRatio = ((player2Wins / player2Rounds) * 100).toFixed(2);
            
            //Put variables into storage
            sessionStorage.setItem("player2Kills", player2Kills);
            sessionStorage.setItem("player2Assists", player2Assists);
            sessionStorage.setItem("player2RoundMostKills", player2RoundMostKills);
            sessionStorage.setItem("player2Suicides", player2Suicides);
            sessionStorage.setItem("player2Top10s", player2Top10s);
            sessionStorage.setItem("player2LongestKill", player2LongestKill);
            sessionStorage.setItem("player2Teamkills", player2Teamkills);
            sessionStorage.setItem("player2WinRatio", player2WinRatio);
            
            window.location.replace("comparison.html");
        }
    }
    
    req.open('GET', urlForPlayer1ID, true);
    req.setRequestHeader('Authorization', 'Bearer ' + APIkey);
    req.setRequestHeader('Accept', 'application/vnd.api+json');
    req.send();
};

