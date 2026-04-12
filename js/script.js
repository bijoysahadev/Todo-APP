let allPost = document.querySelector(".allPost");
let name = document.querySelector(".name")
let Caption=document.querySelector(".Caption")
let postBtn = document.querySelector(".postBtn")
let errorname =document.querySelector(".errorname")
let errorCaption =document.querySelector(".errorCaption")
let arr = [
  
 
];
postBtn.addEventListener("click",()=>{
  
 if (! name.value)
 {
  errorname.innerHTML=("Enter Your Name");
  errorname.style.display="block"
  
 }
 else if (! Caption.value)
 {
   console.log("Eneter Your Caption");
   
  
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
  console.log(name.name);
  console.log(item.caption);

  allPost.innerHTML += `<div class="card " style="width: 18rem;">
 
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.caption}</p>
    <button  class="btn btn-primary">Edit</button>
    <button  class="btn btn-danger">Delete</button>
  </div>
</div>`;
});
}

