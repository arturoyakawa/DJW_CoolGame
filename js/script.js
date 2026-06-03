/** @type {HTMLCanvasElement} */ //type annotation!!! Eu não gosto de programar sem intelisense.
const palco = document.getElementById("palco")
const ctx = palco.getContext("2d")

// DISCLAMER!!!!!!!
// O código está em ingles spq estou acostumado a programar assim. Nao copiei da IA!!!!!!

const insetValue = 20
let width
let height

const floorAreaFraction = .15
// 15% da area total sera reservada para o player

function resizeCanvas()
{
    width = window.innerWidth - insetValue
    const defaultHeight = window.innerHeight-insetValue
    height = defaultHeight - defaultHeight * floorAreaFraction

    palco.width = width;
    palco.height = height;
}

window.onresize = resizeCanvas

resizeCanvas()