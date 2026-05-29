const createNotes = document.getElementById("create-btn");
const notesContainer = document.querySelector(".notes-container");
createNotes.addEventListener("click", ()=>{
    let p = document.createElement("p");
    p.setAttribute("contenteditable", "true");
    p.className = "input-box";
    let img = document.createElement("img");
    img.src = "images/delete.png";
    notesContainer.appendChild(p).appendChild(img);
    saveNotes();
})
notesContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        saveNotes();
    }
})
notesContainer.addEventListener("keyup", saveNotes);
function saveNotes(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();
notesContainer.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})