burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click' , ()=>{
    rightNav.classList.toggle('v');
    navlist.classList.toggle('v');
    navbar.classList.toggle('h-nav');
})