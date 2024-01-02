let bill = document.getElementById("bill");
let tip = document.getElementById("tip")

let butt = document.querySelector('button')
let ptotal = document.querySelector('.total')

function count() {
   let billValue = (bill.value);
   let tipValue = (tip.value);
   let perTomoney = (tipValue*billValue)/100;
   let total = billValue + perTomoney;
   let span = document.createElement('span')
   span.textContent=`${total}`
   ptotal.appendChild(span)
   span.style.fontWeight = 'bold'
}
butt.addEventListener('click',count)
