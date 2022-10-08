var nums = document.querySelectorAll("#keyboard>div");
var bag = document.querySelector("#input");

for(var i=0; i<nums.length; i++){
  nums[i].addEventListener("click", myFunction)
}

function myFunction(event){
    var targetNumber = event.target.innerText;
    
    switch(targetNumber){
      case "C":
        bag.innerText = "";
        break;
      case "=":
        bag.innerText = eval(bag.innerText);
        break;
      default:
        bag.innerText = bag.innerText + targetNumber;
    }
  }