let turn = "X";
let gameOver = false;
const changeTurn = () => {
    return turn === "X"?"O":"X";
}

const w = window.innerWidth
if(w<=800) {
    document.getElementsByClassName
}

let checkWin = ()=> {
    let boxText = document.getElementsByClassName("boxText")
    let win = [
        [0,1,2,2,5,0],
        [3,4,5,2,15,0],
        [6,7,8,2,25,0],
        [0,3,6,-8,15,90],
        [1,4,7,2,15,90],
        [2,5,8,12,15,90],
        [0,4,8,2,15,45],
        [2,4,6,2,15,-45]
    ]
    win.forEach(e=> {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText === boxText[e[2]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector("#turn").innerText = boxText[e[0]].innerText + "  Won"
            gameOver = true
            document.querySelector(".line").style.width = "85%"
            document.querySelector(".image").getElementsByTagName("img")[0].style.width = "400px"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(Element =>{
    let boxText = Element.querySelector(".boxText");
    Element.addEventListener('click' , ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn
            turn = changeTurn()
            checkWin()
            if(!gameOver){
                document.getElementById("turn").innerText = "turn for " + turn
            }
            return
        }
    })
})

const reset = document.getElementById("reset")

reset.addEventListener('click' , ()=>{
    let boxTexts = document.querySelectorAll(".boxText");
    Array.from(boxTexts).forEach(Element => {
        Element.innerText = ""
        turn = "X"
        gameOver = false
        document.querySelector(".line").style.width = "0"
        document.querySelector(".image").getElementsByTagName("img")[0].style.width = "0"
        document.getElementById("turn").innerText = "turn for " + turn
    });
})