let sideToggle = document.querySelector(".sidebar-toggle");
let sideBar = document.querySelector(".sidebar");
let close = document.querySelector(".close-btn");
console.log(sideToggle);
console.log(sideBar);
console.log(close);

sideToggle.addEventListener("click", function () {
    sideBar.classList.add("show-sidebar")
})

// sideToggle.onclick = function(){
//     sideBar.classList.add("show-sidebar");
// };

close.addEventListener("click", function () {
    sideBar.classList.remove("show-sidebar")
})













// Another Solution

// let open = document.getElementsByClassName("sidebar-toggle");
// let sidebar = document.getElementsByClassName("sidebar");
// let close = document.getElementsByClassName("close-btn");

// console.log(open[0].outerHTML);
// console.log(sidebar);
// console.log(close);

// // open[0].onclick = function(){
// //     sidebar[0].classList.add("show-sidebar");
// //     console.log("HELLO");
// // };

// open[0].addEventListener ("click",function(){
//     sidebar[0].classList.add("show-sidebar");
// })

// close[0].addEventListener ("click",function(){
//     sidebar[0].classList.remove("show-sidebar")
// })


