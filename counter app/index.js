let countEl = document.getElementById("count-el")
console.log(countEl)
let saveEl = document.getElementById("save-el")
console.log(saveEl)



let count = 0
function increment() {
    count += 1
    countEl.innerHTML = count

}

function save() {
    let countstr = `${count} -`
    saveEl.innerHTML += countstr
    countEl.textContent = 0
    count = 0

}
