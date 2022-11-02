const send = document.getElementById("send")
const content = document.getElementById("content")
const userinput1 = document.getElementById("userinput1")
const userinput2 = document.getElementById("userinput2")
const changeColorBtn = document.getElementById("changeColorBtn")
const userinputColor = document.getElementById("userinputColor")

const changeColor = () => {
    const userColorValue = userinputColor.value;
    content.style.backgroundColor = userColorValue;
}

send.onclick = () => {
    const x = userinput1.value;
    const y = userinput2.value;
content.style.left = x + "px"
content.style.top = y + "px"
}
changeColorBtn.onclick = () => {
   changeColor();
}
content.onmouseover= () => {
    changeColor();
}
window.onload = () => {
    changeColor();
}