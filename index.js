let toggle = document.getElementById('toggle');
let body = document.querySelector('body');
toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon-fill');
    if(this.classList.toggle('bi-brightness-high')){
        body.style.background = "#080808";
        body.style.transition = "2s";     
        document.getElementById('user-detail-name').style.color = "orangered";
        document.getElementById('user-detail-name').style.transition = "2s";
        document.querySelector('#one>.text-1').style.color = "white";
        document.querySelector('#one>.text-1').style.transition = "2s";  
        document.querySelector('#one>.text-3>span').style.color = "white";
        document.querySelector('#one>.text-3>span').style.transition = "2s"; 
        document.querySelector('#resume-link-2').style.color = "white";
        document.querySelector('#resume-button-2').style.transition = "2s";
        document.querySelector('#resume-button-2').style.border = "1px solid orangered";
        document.querySelector('#about>h1').style.color = "white";
        document.querySelector('#one>.text-3>span').style.transition = "2s";
        document.querySelector('#user-detail-intro').style.color = "white";
        document.querySelector('#user-detail-intro').style.transition = "2s";
        document.querySelector('#skills>h1').style.color = "white";
        document.querySelector('#skills>h1').style.transition = "2s";
        document.querySelector('#projects>h1').style.color = "white";
        document.querySelector('#projects>h1').style.transition = "2s";
        document.querySelector('.github-activity-calendar h1').style.color = "white";
        document.querySelector('.github-activity-calendar h1').style.transition = "2s";
       
    }else{
        body.style.background = "white";
        body.style.transition = "2s";
        document.getElementById('user-detail-name').style.color = "RGB(35, 40, 62)";
        document.getElementById('user-detail-name').style.transition = "2s";
        document.querySelector('#one>.text-1').style.color = "#5566a1";
        document.querySelector('#one>.text-1').style.transition = "2s";
        document.querySelector('#one>.text-3>span').style.color = "#5566a1";
        document.querySelector('#one>.text-3>span').style.transition = "2s";
        document.querySelector('#resume-button-2>a').style.color = "RGB(35, 40, 62)";
        document.querySelector('#resume-button-2').style.transition = "2s";
        document.querySelector('#resume-button-2').style.border = "1px solid RGB(35, 40, 62)";
        document.querySelector('#about>h1').style.color = "RGB(35, 40, 62)";
        document.querySelector('#about>h1').style.transition = "2s";
        document.querySelector('#user-detail-intro').style.color = "#5566a1";
        document.querySelector('#user-detail-intro').style.transition = "2s";
        document.querySelector('#skills>h1').style.color = "RGB(35, 40, 62)";
        document.querySelector('#skills>h1').style.transition = "2s";
        document.querySelector('#projects>h1').style.color = "RGB(35, 40, 62)";
        document.querySelector('#projects>h1').style.transition = "2s";
        document.querySelector('.github-activity-calendar>h1').style.color = "RGB(35, 40, 62)";
        document.querySelector('.github-activity-calendar>h1').style.transition = "2s";
       
    }
})


let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
// typing text animation script
var typed = new Typed(".typing", {
    strings: ["A Full W Stack Developer",  "A JAVA Backend Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})


document.querySelector('#resume-link-1').addEventListener("click", () => {
    // console.log("OPENinig.....")
    window.location.assign("https://drive.google.com/file/d/1M5Z6sTSyXWco9vnwKSt5bR9ipVuK-lrU/view?usp=share_link", "_blank");
})

document.querySelector('#resume-link-2').addEventListener("click", () => {
    // console.log("OPENinig.....")
    window.location.assign("https://drive.google.com/file/d/1M5Z6sTSyXWco9vnwKSt5bR9ipVuK-lrU/view?usp=share_link", "_blank");
})




const sr = ScrollReveal({
    origin: 'left',
    distance: '120px',
    duration: 2000,
    reset: true
})

sr.reveal('#about h1', { delay: 200})
sr.reveal('.home-img', { delay: 600 })
sr.reveal('#user-detail-intro', { delay: 600 })
sr.reveal('.skill', { delay: 200 })

sr.reveal('.project', {})
sr.reveal('.project-card img', { delay: 100 })
sr.reveal('.project-title', { delay: 200 })
sr.reveal('.project-description', { delay: 200 })
sr.reveal('.project-tech-stack', { delay: 200 })
sr.reveal('.repo-links', { delay: 200 })

sr.reveal('#github-streak-stats', { delay: 200 })
sr.reveal('#github-top-langs', { delay: 400 })
sr.reveal('#github-stats-card', { delay: 600 })

// sr.reveal('.calendar', { delay: 600 })

