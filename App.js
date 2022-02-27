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
    listElement.innerText= inputComment.value + " ";
    // const hr = document.createElement("hr");
    // listElement.append(hr);
    var currDate = new Date();
    var currTime = currDate.getHours()%12 + ":" + currDate.getMinutes();
    const time = document.createElement("span");
    time.innerText= currTime;
    listElement.appendChild(time);
    
    list.appendChild(listElement);

    inputComment.value="";

    }
})