const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)
  
  // Validate that variables exist
  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle('show-menu')
      })
  }
}
showMenu('nav-toggle','nav-menu')
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); 
    else
     scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

    function showSidebar() {
        const scrollSide = document.getElementById('sidebar-title');

        if (this.scrollY >= 500) scrollSide.classList.add('show-sidebar');
        else
          scrollSide.classList.remove('show-sidebar')
      }
      window.addEventListener(scrollSide)



var zoomreset = function() {
    var viewport = document.querySelector("meta[name='viewport']");
    viewport.content = "width=600, maximum-scale=0.500";
    setTimeout(function() {
        viewport.content = "width=600, maximum-scale=1";
    }, 100);
}
setTimeout(zoomreset, 150);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
//         }
//     })
// }