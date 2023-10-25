
let sidebarBtn = document.querySelector("nav a");
let sidebar = document.querySelector('.sidebar')

 function openSliderbar () {
    sidebar.classList.add('active')
 }

sidebarBtn.addEventListener('click', openSliderbar)

 //*cross btn start
let crossBtn = document.querySelector('.cross')
console.log('crossBtn')

 function closeSidebar (event) {
   if(
      event.target.classList.contains('sidebar') ||
      event.target.classList.contains('crossBtn')
   ) {
   sidebar.classList.remove('active')
   }

 }
crossBtn.addEventListener ('click' , closeSidebar);

sidebar.addEventListener('click' , closeSidebar);