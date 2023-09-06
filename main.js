let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsLists = document.getElementById("kitchen-items-list");
let kitchenInputData;
let kitchenInputArray = [];

function setElement(){
    localStorage.setItem("kitchenInput",JSON.stringify(kitchenInputArray));
}

function getElement(){
    if (localStorage.getItem("kitchenInput")){
    kitchenInputData  = JSON.parse(localStorage.getItem("kitchenInput"));
    buildUi();
    }
}
function buildUi(){
    kitchenItemsLists.textContent = "";
    kitchenInputArray.forEach((item)=>{
        let li = document.createElement("li");
        let spanEle = document.createElement("span");
        spanEle.innerText = item;
        li.appendChild(spanEle);
        kitchenItemsLists.appendChild(li);
        kitchenInput.value = "";
        kitchenInput.focus();
        li.style.cssText = "animation-name: slideIn";
        let trashBtm = document.createElement("i");
        trashBtm.classList.add("fas","fa-trash");
        li.appendChild(trashBtm);
        let editBtn = document.createElement("i");
        editBtn.classList.add("fas","fa-edit");
        li.appendChild(editBtn);
    })

   }

   function addKitchenItems(){
    kitchenInputData = kitchenInput.value;
    kitchenInputArray.push(kitchenInputData);
    setElement();
    getElement();
   }
function removeItems(event){
  if (event.target.classList[1] === "fa-trash")
  {
    let item = event.target.parentElement;
    item.classList.add("slideOut");
    item.addEventListener("transitionend",function(){
        console.log("finsid");
        item.remove();
    });
    item.remove();
  }
}
function removeItems(event){
    if (event.target.classList[1] === "fa-trash")
    {
      let item = event.target.parentElement;
      item.classList.add("slideOut");
      item.addEventListener("transitionend",function(){
          console.log("finsid");
          item.remove();
      });
      item.remove();
    }
  }

  function editItem(event){
    if (event.target.classList[1] === "fa-edit")
    {
      let item = event.target.parentElement;
      let value = prompt("enter the item");
      let spanEle = item.querySelector("span");
      spanEle.innerText = value;
    }
  } 

addBtn.addEventListener("click", addKitchenItems);
kitchenItemsLists.addEventListener("click",removeItems);
kitchenItemsLists.addEventListener("click",editItem);
getElement();




