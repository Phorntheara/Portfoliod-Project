
const button = document.getElementById('togglemenu')
const menu = document.getElementById('menu');

const buttonbtn = document.getElementById('togglemenu')
const menubtn = document.getElementById('menu');

button.onclick = () =>{
    menu.classList.toggle('active')
    // update19-06-2025
    menu.classList.toggle('unactive');
    closebtn.classList.toggle('unactive')
}
// scroll and see baackgroung
 window.onscroll = () =>{
    // const x = wondow.scroolY;
    // console.log(Y);

    if(window.scroolY > 30){
        header.style.backgroundcolor = "white";
        header.style.boxshadow = "0 10px 10px gray"
    }else{
        header.style.backgroundcolor = "transparent";
        header.style.boxshadow = "none";


    }

 }

 const counters = document.querySelectorAll(".projectcount h1");
counters.forEach(counter => {
    const target = +counter.textContent;
    let count = 0;

    const steps = 200;
    const increment = target / steps;

    counter.textContent = "0";

    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        counter.textContent = target;
        clearInterval(interval);
      } else {
        counter.textContent = Math.floor(count);
      }
    }, 10);
  });