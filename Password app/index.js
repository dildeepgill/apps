let possibleChars = ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '*', '&', '$', '#', '!', '?', '<', '>', '+']
let passwordNEW = document.getElementById("password-el")
let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
let password3 = document.getElementById("password-3")
let password4 = document.getElementById("password-4")


let passwordLength = 8
let resultstr = ''
passwordNEW.addEventListener("click", function () {

    for (let i = 0; i < passwordLength; i++) {
        let randomNum = Math.floor(Math.random() * possibleChars.length)
        resultstr += possibleChars[randomNum]

    }

})

resultstr = passwordNEW()

function firstPass() {
    password1.innerText = allPass
    password2.innerText = allPass
    password3.innerText = allPass
    password4.innerText = allPass


}


