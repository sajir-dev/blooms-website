function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
    document.getElementById("myDropdown2").classList.remove("show");
    document.getElementById("myDropdown3").classList.remove("show");
}

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
    document.getElementById("myDropdown1").classList.remove("show");
    document.getElementById("myDropdown3").classList.remove("show");
}

function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
    document.getElementById("myDropdown2").classList.remove("show");
    document.getElementById("myDropdown1").classList.remove("show");
}





// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         let dropdowns = document.getElementsByClassName("dropdown-content");
//         let i;
//         for (i = 0; i < dropdowns.length; i++) {
//             let openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }