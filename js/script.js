let input=document.querySelector("input")
let submit=document.getElementById("btn")
let liste=document.querySelector("ul")
let img=document.getElementById("img")
submit.addEventListener("click",post)

function post(event){
  event.preventDefault();
  if (img.files && img.files[0]) {
  let reader = new FileReader();
  reader.onload = function (e) {
    liste.innerHTML += `<li class="item"> <button class="delete"> delete</button> <p> nom: ${input.value}  </p>  <img id="pic" src=${e.target.result} alt="${input.value}">  </li>`;
    let pic=document.getElementById("pic") 
    pic.style.width="200px"
    pic.style.height="auto"
    let item=document.querySelector(".item")
    console.log(item)
    item.style.display="flex"
    item.style.flexDirection="row"
    item.style.justifyContent="space-evenly"
    let del = document.querySelectorAll(".delete");
    for (let i = 0; i < del.length; i++) {
      del[i].addEventListener("click", deleteStudent);
    }
  }
  reader.readAsDataURL(img.files[0]);
}
}

function deleteStudent(event) {
  let parentLi = event.target.parentNode;
  parentLi.remove();
}
