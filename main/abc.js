let bar = document.querySelector('.bar')
let menubar2 = document.querySelector(".menu-bar2")
let btndwn = document.getElementById("btn")


bar.addEventListener('click', () => {
   menubar2.classList.toggle('active');
   btndwn.style.margin = "0px"



})

let head = document.querySelector('#top-head')
window.addEventListener('scroll', () => {
   if (window.scrollY >= 90) {
      head.style.position = "fixed"
      head.style.background = "#4c63f5"
      head.style.top = "0px"
   }
   if (window.scrollY <= 100)
      head.style.background = "transparent"

})


// API
let apidata = fetch("https://reqres.in/api/users")
   .then((res) => res.json())
   .then((data) =>{
const html = data.data.map((item) => {
   return (
      `  <div class="div6">
         <div class="div6-pic">
            <img src=${item.avatar} alt="" class="img6">
         </div>
         <div class="div6-text">
            <h2>${item.first_name} ${item.last_name}</h2>
            <h5>Lead Designer</h5><br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquam quaerat
                  umquam dolores inventore sunt ut, </p><br>
        
         </div>
      </div>`
      )})

   .join("");
console.log(html);
document
   .querySelector(".div6-a")
   .insertAdjacentHTML("afterbegin", html);


   })

