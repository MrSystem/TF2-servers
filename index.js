"use strict"

function makeOrder(packageName, event) {
    const ref = new URLSearchParams(window.location.search).get("ref")
    const refString = ref ? "%20[referred%20by%20" + ref + "]" : ""
    window.open("mailto:sales@tf2lobby.eu?subject=TF2%20server:%20" + packageName + refString)
    event.preventDefault()
}

function openLobbyCreationVideo(video) {
    video.pause()
    video.style.visibility = "hidden"
    window.open(isMp4Supported() ? "assets/Lobby creation in 3 clicks.mp4" : "assets/Lobby creation in 3 clicks.webm")
}

function isMp4Supported() {
    return !!document.createElement("video").canPlayType("video/mp4; codecs=avc1.42E01E,mp4a.40.2")
}

function displayTickrateTip(tickrateWhy) {
    tickrateWhy.style.display = "none"
    const tickrateTip = document.getElementById("tickrateTip")
    tickrateTip.style.display = "block"
}

function displayMumbleTip(mumbleWhy) {
    mumbleWhy.style.display = "none"
    const mumbleTip = document.getElementById("mumbleTip")
    mumbleTip.style.display = "block"
}