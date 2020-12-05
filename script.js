function randomRange(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}
function switchUser(e){
  let currentUser = heading.innerText;
  let index = reviews.indexOf(currentUser);
  if(e.path[0].id==="next"){
    heading.innerText = reviews[index+1]; 
    console.log(index);
  }else if(e.path[0].id==="random"){
      index = randomRange(0,reviews.length);
      heading.innerText = reviews[index];
  }else{
    if(index>0){
      index--;
      heading.innerText = reviews[index];
    }else{
      return;
    }
  }templateContainer.innerHTML=`
  <div class="container" style="width: 100%;">
    <img class="card-img-top img-fluid rounded-circle mx-auto d-block m-5" src="./images/picture${index+1}.jpg" alt="Card image cap">
    <div class="card-header text-center user">${reviews[index]}</div>
  </div>
  <div class="card-body">
    <p class="card-text">${text[index]}</p>
  </div>`
};

buttons.forEach((btn)=>{
btn.addEventListener("click",switchUser)});

 
