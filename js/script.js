let allPost = document.querySelector(".allPost");
let name = document.querySelector(".name")
let Caption=document.querySelector(".Caption")
let postBtn = document.querySelector(".postBtn")
let errorname =document.querySelector(".errorname")
let errorCaption =document.querySelector(".errorCaption")
let updateBtn=document.querySelector(".updateBtn")

let arr = [
  
 
];
var indexStore;
postBtn.addEventListener("click",()=>{
  
updateBtn.addEventListener("click", ()=> {
  // console.log(indexStore );
  arr[indexStore].name=name.value
  arr[indexStore].Caption=Caption.value
  // console.log(arr[indexStore].name);
  // console.log(arr[indexStore].Caption);
  allPost.innerHTML=""
  display()
  updateBtn.style.display="none"
  postBtn.style.display="block"
  name.value=""
  Caption.value=""
  
})  
 if (! name.value)
 {
  errorname.innerHTML=("Enter Your Name");
  errorname.style.display="block"
  
 }
 else if (! Caption.value)
 {
   errorCaption.innerHTML=("Eneter Your Caption");
  errorCaption.style.display="block"
 
  

   
  
 }
  else {
     arr.push({
    name:name.value,
    Caption:Caption.value
   
  })
   allPost.innerHTML=""
  display()
  name.value=""
  Caption.value=""
  }
})
function display () {
    arr.map((item) => {
  // console.log(name.name);
  // console.log(item.caption);

  allPost.innerHTML += `<div class="card " style="width: 18rem;">
 
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.Caption}</p>
    <button  class="btn btn-primary edit">Edit</button>
    <button  class="btn btn-danger delete">Delete</button>
  </div>
</div>`;
});

let deletebtn=document.querySelectorAll(".delete")
 let convertdeltebtn=Array.from(deletebtn)
 convertdeltebtn.map((item,index) => {
  item.addEventListener("click", ()=>{
     
    arr.splice(index,1)
  allPost.innerHTML=""
    display()
    
  })
  
 })

let Editbtn=document.querySelectorAll(".edit")
let convertedit=Array.from(Editbtn)
convertedit.map((item,index)=>{
  item.addEventListener("click", ()=>{
    // console.log(index);
    name.value=arr[index].name
    Caption.value=arr[index].Caption
    indexStore=index
   updateBtn.style.display="block"
   postBtn.style.display="none"
    // console.log(arr);
    // console.log(arr);
    
  })
}) 
 
 
}

