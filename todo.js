let addB = document.querySelector('.add');
let task = document.querySelector('.tasks');
let inn = document.querySelector('.elist');

inn.addEventListener('keyup', () => {
  if(inn.value.trim()!=0){
    addB.classList.add('active')
  }
  else{
    addB.classList.remove('active')
  }
})

addB.addEventListener('click',function(){
  var paragraph = document.createElement('p')
  paragraph.classList.add('paragraph-styling')
  paragraph.innerText = inn.value;
  task.appendChild(paragraph);
  inn.value="";
  paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration = "line-through";
    paragraph.style.textDecorationColor="black";
    paragraph.style.textDecorationThickness="2px";
  })
  paragraph.addEventListener('dblclick',function(){
    task.removeChild(paragraph);
  })
})