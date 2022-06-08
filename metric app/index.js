let firstEl = document.getElementById('first-el')
let countEl = document.getElementById('count-el')



let num2 = 3.2808425

function choose() {
    let num1 = parseInt(prompt("enter num"))
    countEl.innerHTML = num1
    firstEl.innerHTML = `${num1} meters ${num1 * num2} feet| ${num1} feet = ${num1 / num2} meters`

}












