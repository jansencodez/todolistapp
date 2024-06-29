const input = document.querySelector(".task-input")
const holder =document.querySelector(".holder");

click();
listContainer();

function click(){
  document.querySelector(".add-task-button").addEventListener("click", ()=>{
    if (input.value==="") {
      let error = document.querySelector(".error");
      error.innerHTML="Please enter a valid input";
      setTimeout(()=>{
        error.innerHTML=""
      }, 900)
    } else {
      let li = document.createElement("li");
      li.innerHTML=input.value;
      holder.appendChild(li);
      const span=document.createElement("span");
      span.innerText="\u00d7";
      li.appendChild(span);
      saveToStorage();
    }
  input.value ="";
  });
}

function listContainer(){
  holder.addEventListener("click", (e)=>{
    if (e.target.tagName==="LI"){
      e.target.classList.toggle("checked")
    } else if( e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
    }
    saveToStorage();
  })
}

function saveToStorage(){
  localStorage.setItem("data", holder.innerHTML)
}

function showData(){
  holder.innerHTML=localStorage.getItem("data")
}

showData();

