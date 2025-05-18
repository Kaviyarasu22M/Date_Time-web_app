let ampmm = document.getElementById("ampm");
function dt() {
  let ihrs = document.getElementById("hrs");
  let imin = document.getElementById("min");
  let isecc = document.getElementById("sec");
  let iampm = document.getElementById("ampm");
  let dt = new Date();
  let hrss = dt.getHours();
  ihrs.innerHTML = hrss;
  let minn = zeroo(dt.getMinutes());
  imin.innerHTML = minn;
  let secc = zeroo(dt.getSeconds());
  isecc.innerHTML = secc;

  if (hrss > 12) {
    ihrs.innerHTML = hrss - 12;
    ampmm.innerHTML = "PM";
  }
}

function zeroo(n) {
  return n < 10 ? "0" + n : n;
}
setInterval(dt, 1000);

let dtt = new Date();
let m = dtt.getDay();
console.log(m);

let n = dtt.getDate();
console.log(n);

let p = dtt.getFullYear();
console.log(p);

let dd = document.getElementById("day");
dd.innerHTML = m;
let mm = document.getElementById("monthh");
mm.innerHTML = n;
let yy = document.getElementById("yearr");
yy.innerHTML = p;
