const title = document.querySelector("#add");
const addBtn = document.querySelector("#btn");
const span = document.getElementsByClassName("spn");
const list = document.querySelector(".list");
const removeAll = document.querySelector("#btn2");
const form = document.querySelector("#form");
const ul = document.querySelector("#ul");
const main = document.querySelector("#main");


const ulChange = form.addEventListener ("submit" , (e) => {
    e.preventDefault();
    const newTask = title.value;
    const newLi = document.createElement("li");
    const newX = document.createElement("span");
    newLi.setAttribute("class" , "list");
    newX.setAttribute("class" , "spn");
    newLi.innerText = newTask;
    newX.innerText = "x";
    newLi.append(newX);
    ul.append(newLi);
    title.value = "";
})
ul.addEventListener("click" , (e) => {
    if(e.target.nodeName==="SPAN"){
        e.target.parentNode.remove();
    }
    if(e.target.nodeName==="LI"){
        e.target.style.backgroundColor = "green";
        e.target.style.textDecoration = "line-through";
        e.target.firstElementChild.style.visibility = "hidden";
    }
    
})
ul.addEventListener("dblclick" , (e) => {
    if(e.target.nodeName==="SPAN"){
        e.target.parentNode.remove();
    }
    if(e.target.nodeName==="LI"){
        e.target.style.backgroundColor = "white";
        e.target.style.textDecoration = "none";
        e.target.firstElementChild.style.visibility = "visible";
    }
    
})
removeAll.addEventListener("click", (e) => {
    ul.innerHTML = "";
})




