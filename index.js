let toggle = document.getElementById('toggle');
let body = document.querySelector('body');
toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon-fill');
    if(this.classList.toggle('bi-brightness-high')){
        body.style.background = "#080808";
         body.style.transition = "1s";     
        document.getElementById('user-detail-name').style.color = "orangered";
        document.getElementById('user-detail-name').style.transition = "1s";
        document.querySelector('#one>.text-1').style.color = "white";
        document.querySelector('#one>.text-1').style.transition = "1s";  
        document.querySelector('#one>.text-3>span').style.color = "white";
        document.querySelector('#one>.text-3>span').style.transition = "1s"; 
        document.querySelector('#resume-link-2').style.color = "white";
        document.querySelector('#resume-button-2').style.transition = "1s";
        document.querySelector('#resume-button-2').style.border = "1px solid orangered";
        document.querySelector('#about>h1').style.color = "white";
        document.querySelector('#one>.text-3>span').style.transition = "1s";
        document.querySelector('#user-detail-intro').style.color = "white";
        document.querySelector('#user-detail-intro').style.transition = "1s";
        document.querySelector('#skills>h1').style.color = "white";
         document.querySelector('#skills>h1').style.transition = "1s";
        document.querySelector('#projects>h1').style.color = "white";
        document.querySelector('#projects>h1').style.transition = "1s";
        document.querySelector('.github-activity-calendar h1').style.color = "white";
        document.querySelector('.github-activity-calendar h1').style.transition = "1s";
       
    }else{
        body.style.background = "white";
         body.style.transition = "1s";
        document.getElementById('user-detail-name').style.color = "RGB(35, 40, 62)";
        document.getElementById('user-detail-name').style.transition = "1s";
        document.querySelector('#one>.text-1').style.color = "#5566a1";
        document.querySelector('#one>.text-1').style.transition = "1s";
        document.querySelector('#one>.text-3>span').style.color = "#5566a1";
        document.querySelector('#one>.text-3>span').style.transition = "1s";
        document.querySelector('#resume-button-2>a').style.color = "RGB(35, 40, 62)";
        document.querySelector('#resume-button-2').style.transition = "1s";
        document.querySelector('#resume-button-2').style.border = "1px solid RGB(35, 40, 62)";
        document.querySelector('#about>h1').style.color = "RGB(35, 40, 62)";
        document.querySelector('#about>h1').style.transition = "1s";
        document.querySelector('#user-detail-intro').style.color = "#5566a1";
        document.querySelector('#user-detail-intro').style.transition = "1s";
        document.querySelector('#skills>h1').style.color = "RGB(35, 40, 62)";
         document.querySelector('#skills>h1').style.transition = "1s";
        document.querySelector('#projects>h1').style.color = "RGB(35, 40, 62)";
        document.querySelector('#projects>h1').style.transition = "1s";
        document.querySelector('.github-activity-calendar>h1').style.color = "RGB(35, 40, 62)";
        document.querySelector('.github-activity-calendar>h1').style.transition = "1s";
       
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
    strings: ["A Full Stack Developer",  "A JAVA Backend Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
})


document.querySelector('#resume-link-1').addEventListener("click", () => {
    // console.log("OPENinig.....")
    // window.location.assign("https://drive.google.com/file/d/1cHRUp1zZ59hIw7UuIul2T14R8IdjhDXv/view?usp=sharing", "_blank");
    window.open('https://drive.google.com/file/d/1cHRUp1zZ59hIw7UuIul2T14R8IdjhDXv/view?usp=sharing',"_blank");
})

document.querySelector('#resume-link-2').addEventListener("click", () => {
    // console.log("OPENinig.....")
   // window.location.assign("https://drive.google.com/file/d/1cHRUp1zZ59hIw7UuIul2T14R8IdjhDXv/view?usp=sharing", "_blank");
    window.open('https://drive.google.com/file/d/1cHRUp1zZ59hIw7UuIul2T14R8IdjhDXv/view?usp=sharingom',"_blank");
})




const sr = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 300,
    reset: true
})

sr.reveal('#about h1', { delay: 100})
sr.reveal('.home-img', { delay: 200 })
sr.reveal('#user-detail-intro', { delay: 300 })
sr.reveal('.skill', { delay: 100 })

sr.reveal('.project', {})
sr.reveal('.project-card img', { delay: 100 })
sr.reveal('.project-title', { delay: 100 })
sr.reveal('.project-description', { delay: 150 })
sr.reveal('.project-tech-stack', { delay: 150 })
sr.reveal('.repo-links', { delay: 150 })

sr.reveal('#github-streak-stats', { delay: 100 })
sr.reveal('#github-top-langs', { delay: 100 })
sr.reveal('#github-stats-card', { delay: 100 })

 sr.reveal('.calendar', { delay: 100 })


