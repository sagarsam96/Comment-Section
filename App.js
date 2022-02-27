const inputComment = document.getElementById("input_comment");
console.log(inputComment.value);
const btn = document.querySelector("#btn");
const newComment = document.createElement("span");
const commentSection = document.querySelector(".commentSection");

console.log(commentSection.style.display);
const list = document.getElementById("list");


inputComment.addEventListener("keypress", (e)=>{
    if (e.key === 'Enter'){
    // alert(inputComment.value);
    commentSection.style.display = "block";
    const listElement = document.createElement("li");
    listElement.innerText= inputComment.value;
    list.appendChild(listElement);

    inputComment.value="";

    }
})