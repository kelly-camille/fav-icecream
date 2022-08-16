window.addEventListener("load", function(event){
event.preventDefault();


const flavorArray = ["mint", "chocolate", "vanilla"];
const ul = document.createElement("ul");
flavorArray.forEach(function(flavor) {
  const li = document.createElement("li");
  li.append(flavor)
  ul.append(li);

  const bodyElement = document.querySelector("body");
  bodyElement.append(li);
  bodyElement.append(ul);
});

});