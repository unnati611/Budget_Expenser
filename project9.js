function budget() {
  let a = document.getElementById("amount").value;
  let b = document.getElementById("data1");
  b.innerHTML = a;
  totalamount = Number(a);
  totalbalance = totalamount;
  let c = document.getElementById("data3");
  c.innerHTML = totalbalance;
  let d = document.getElementById("data2");
  d.innerHTML = 0;
}
let index = 0;
let totalamount = 0;
let totalbalance = 0;
let expense = 0;
function amount() {
  index++;
  let a = document.getElementById("amount").value;
  let u = document.getElementById("title").value;
  let v = document.getElementById("cost").value;
  let x = document.getElementById("data2");
  let y = document.getElementById("data3");
  expense = Number(v) + expense;
  x.innerHTML = expense;

  totalbalance = totalbalance - v;
  y.innerHTML = totalbalance;

  let div = document.createElement("div");
  div.setAttribute("class", "new");
  div.id = `div-${index}`;
  let h4 = document.createElement("h4");
  h4.setAttribute("class", "grocery");
  h4.id = `h4-${index}`;
  let h3 = document.createElement("h3");
  h3.setAttribute("class", "value");
  h3.id = `h3-${index}`;
  let oImg = document.createElement("img");
  oImg.setAttribute("src", "./edit.jpeg");
  oImg.setAttribute("alt", "edit");
  oImg.setAttribute("height", "25px");
  oImg.setAttribute("width", "25px");
  oImg.setAttribute("class", "img");
  oImg.id = `oimg-${index}`;
  oImg.onclick = edit;
  let Img = document.createElement("img");
  Img.setAttribute("src", "./dlt.jpeg");
  Img.setAttribute("alt", "dlt");
  Img.setAttribute("height", "20px");
  Img.setAttribute("width", "20px");
  Img.setAttribute("class", "img");
  Img.id = `img-${index}`;
  Img.onclick = dlt;
  document.getElementById("mainlist").appendChild(div);
  div.appendChild(h4);
  div.appendChild(h3);
  div.appendChild(oImg);
  div.appendChild(Img);
  h4.innerHTML = u;
  h3.innerHTML = v;
  let p = document.getElementById("amount");
  let q = document.getElementById("title");
  let r = document.getElementById("cost");
  p.value = "";
  q.value = "";
  r.value = "";
}

function dlt(ev) {
  debugger;
  console.log(ev);
  console.log(ev.target.getAttribute("id"));
  let j = ev.target.getAttribute("id").slice(4);
  let divid = `div-${j}`;
  console.log(divid);
  //document.getElementById(divid).style.display = "none";
  let h3id = `h3-${j}`;
  let cost = parseInt(document.getElementById(h3id).innerHTML);
  console.log(expense);
  expense = expense - cost;
  let x = document.getElementById("data2");
  x.innerHTML = expense;
  totalbalance = totalbalance + cost;
  let y = document.getElementById("data3");
  y.innerHTML = totalbalance;
  document.getElementById(divid).style.display = "none";
}
function edit(ev) {
  console.log(ev.target.getAttribute("id"));
  let j = ev.target.getAttribute("id").slice(5);
  let h3id = `h3-${j}`;
  let h4id = `h4-${j}`;
  let cost = parseInt(document.getElementById(h3id).innerHTML);
  let x = document.getElementById("data2");
  expense = expense - cost;
  totalbalance = totalbalance + cost;
  let y = document.getElementById("data3");
  let a = prompt("enter new value of your expense");
  a = Number.parseInt(a);
  let b = prompt("enter the title of your expense");
  document.getElementById(h3id).innerHTML = a;
  document.getElementById(h4id).innerHTML = b;
  expense = expense + a;
  totalbalance = totalbalance - a;
  x.innerHTML = expense;
  y.innerHTML = totalbalance;
}
let i = document.getElementById("cost");
i.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    amount();
  }
});
let u = document.getElementById("amount");
u.addEventListener("keydown", function (e) {
  if (e.code === "Enter") {
    budget();
  }
});
