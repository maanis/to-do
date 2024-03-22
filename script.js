
const add = document.querySelector(".btn")
var scr = document.getElementById("scr")
let container = document.getElementById("list-container")

add.addEventListener("click", () => {
    if (scr.value === "") {
        alert("Add your task first")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = scr.value
        container.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "&#x274C"
        li.append(span)
        clear.style.display = "flex"
        saveData()
    }
    scr.value = ""
    saveData()
})
scr.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        if (scr.value === "") {
            alert("Add your task first")
        }
        else {
            let li = document.createElement("li")
            li.innerHTML = scr.value
            container.appendChild(li)

            let span = document.createElement("span")
            span.innerHTML = "&#x274C"
            li.append(span)
            clear.style.display = "flex"
            saveData()
        }
        scr.value = ""
        saveData()
    }
})

container.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check")
        saveData()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
})


let clear = document.getElementById("btn")
let lis = document.querySelectorAll("li")

clear.addEventListener("click", ()=>{
    container.innerHTML = ""
    clear.style.display = "none"
    saveData().remove()
})
function saveData() {
    localStorage.setItem("data", container.innerHTML)
}

function showList() {
    container.innerHTML = localStorage.getItem("data")
}


showList()