/*===== SHOW MENU =====*/

const showMenu = (toggledId, navId) =>{
    const toggle = document.getElementById(toggledId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>
        {
            nav.classList.toggle('show-menu')

        })

    }
}

showMenu('nav-toggle','nav-menu')


/*===== REMOVE MENU MOBILE =====*/

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu =  document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


/*===== SCROLL SECTIONS ACTIVE LINK =====*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('Id')

        if(scrollY > sectionTop &&  ScrollY > sectionTop+sectionHeight){

            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
   
        }
    })
}

window.addEventListener('scroll', scrollActive)


/*===== CHANGE BACKGROUND HEADER =====*/ 

function scrollHeader(){
    const header  = document.getElementById('header')
    if(this.scrollY >=200) header.classList.add('scroll-header');
    else
    header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)


/*===== SHOW SCROLL TOP =====*/ 

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >=560) scrollTop.classList.add('show-scroll');
    else
    scrollTop.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollTop)



/*===== SKILLS =====*/ 

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skill__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i< skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})



/*===== SHOW SCROLL TOP =====*/ 


/*===== MIXITUP FILTER PORTFOLIO =====*/ 

const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__content'
    },
    animation: {
        duration: 400
    }
});

/* Link active portfolio */ 

const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))


/*===== SWIPER CAROUSEL =====*/ 


/*===== GSAP ANIMATION =====*/ 

