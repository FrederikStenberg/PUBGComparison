//Call all the information stored by sessionStorage to this page
window.onload = function() {
    document.getElementById("PlayerName1Session").innerHTML = sessionStorage.getItem("playerName1");
    document.getElementById("PlayerName2Session").innerHTML = sessionStorage.getItem("playerName2");

    document.getElementById("player1Kills").innerHTML = sessionStorage.getItem("player1Kills");
    document.getElementById("player1Assists").innerHTML = sessionStorage.getItem("player1Assists");
    document.getElementById("player1WinRatio").innerHTML = sessionStorage.getItem("player1WinRatio") + "%";
    document.getElementById("player1MostKills").innerHTML = sessionStorage.getItem("player1RoundMostKills");
    document.getElementById("player1Suicides").innerHTML = sessionStorage.getItem("player1Suicides");
    document.getElementById("player1Teamkills").innerHTML = sessionStorage.getItem("player1Teamkills");
    document.getElementById("player1Top10s").innerHTML = sessionStorage.getItem("player1Top10s");
    document.getElementById("player1LongestKill").innerHTML = sessionStorage.getItem("player1LongestKill") + "m";

    document.getElementById("player2Kills").innerHTML = sessionStorage.getItem("player2Kills");
    document.getElementById("player2Assists").innerHTML = sessionStorage.getItem("player2Assists");
    document.getElementById("player2WinRatio").innerHTML = sessionStorage.getItem("player2WinRatio") + "%";
    document.getElementById("player2MostKills").innerHTML = sessionStorage.getItem("player2RoundMostKills");
    document.getElementById("player2Suicides").innerHTML = sessionStorage.getItem("player2Suicides");
    document.getElementById("player2Teamkills").innerHTML = sessionStorage.getItem("player2Teamkills");
    document.getElementById("player2Top10s").innerHTML = sessionStorage.getItem("player2Top10s");
    document.getElementById("player2LongestKill").innerHTML = sessionStorage.getItem("player2LongestKill") + "m";
};

//Change page to index.html
function goHome() {
    window.location.assign("index.html");
}

//Change page to howto.html
function goHowTo() {
    window.location.assign("howto.html")
}