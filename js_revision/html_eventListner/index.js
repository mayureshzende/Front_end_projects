// window.alert("js loaded");

let paras = document.getElementsByClassName("wrapper");
console.log(paras);

function modifyContent(event) {
  console.log(event);
  if (event.target.nodeName === "P") {
    event.target.textContent = "on clicked changed";
  }
}

for (let i = 0; i < paras.length; i++) {
  let para = paras[i];
  para.addEventListener("click", modifyContent);
}

let link = document.getElementById("flink");

function changelink(event) {
  console.log("clicked");
  event.target.textContent = "not taking anywhere";
  event.preventDefault();
}
link.addEventListener("click", changelink);
