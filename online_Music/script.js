
let spotify = '<button onclick="Spotify()">Spotify</button>'
let local = '<button onClick="goLocal()">Local</button>'
function startFunction(){
//     // window.open("https://www.google.com/","_blank")
//     // console.log("hello")
    eel.toStart()
    document.getElementById("sb").innerHTML = spotify;
    document.getElementById("loc").innerHTML = local;
// eel.test("Testiin")
}
let pred=null;
let emotion = "HIIHelllo";


eel.expose(getemo)
function getemo(emo_score , emo_name){
    pred= emo_score
    emotion = emo_name
    document.getElementById("mood").innerHTML = emo_name;
}

function Spotify(){
    switch(pred){
        case 0:
            window.open("https://open.spotify.com/playlist/71Xpaq3Hbpxz6w9yDmIsaH","_blank")
        case 1:
            window.open("https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC","_blank")
        case 2:
            window.open("https://open.spotify.com/playlist/37i9dQZF1DX7qK8ma5wgG1","_blank")
        case 3:
            window.open("https://open.spotify.com/playlist/3xwHZ0pVRK5RjYox1ebf0B","_blank")
        case 4:
            window.open("https://open.spotify.com/album/1MPAXuTVL2Ej5x0JHiSPq8","_blank")
        default:
            window.open('https://www.google.com/',"_blank")
    }
}

function goLocal(){
    eel.playLocal()
    console.log("local")
}


