const hamburgerButton = document.getElementById("hamburger");
const menu = document.getElementById("menu")
const background = document.getElementById("background")

hamburgerButton.addEventListener("click", ()=>{
    menu.classList.toggle("visibleMenu");
    background.className="default-background";
})

const redButton = document.getElementById("red")
redButton.addEventListener("click", ()=>{
    background.className="red-background";
    menu.classList.remove("visibleMenu");
} )

const greenButton = document.getElementById("green")
greenButton.addEventListener("click", ()=>{
    background.className="green-background";
    menu.classList.remove("visibleMenu")
} )

const blueButton = document.getElementById("blue")
blueButton.addEventListener("click", ()=>{
    background.className="blue-background";
    menu.classList.remove("visibleMenu")
} )

const magentaButton = document.getElementById("magenta")
magentaButton.addEventListener("click", ()=>{
    background.className="magenta-background";
    menu.classList.remove("visibleMenu")
} )

const yellowButton = document.getElementById("yellow")
yellowButton.addEventListener("click", ()=>{
    background.className="yellow-background";
    menu.classList.remove("visibleMenu")
} )

const cyanButton = document.getElementById("cyan")
cyanButton.addEventListener("click", ()=>{
    background.className="cyan-background";
    menu.classList.remove("visibleMenu")
} )
