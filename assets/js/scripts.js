// Use this file to add JavaScript to your project

//LIGHT/DARK THEME
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

const currentTheme = localStorage.getItem("theme");

if(currentTheme){
    document.documentElement.setAttribute("data-theme", currentTheme);

    if(currentTheme ==="dark"){
        toggleSwitch.checked = true;
    }
}

function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    }else{
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light"); 
    }
}

toggleSwitch.addEventListener("change", switchTheme, false);

/* Scroll Up */
if (document.querySelector('.scroll-to-target')){
    let toTop = document.querySelector('.scroll-to-target');
    toTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
    window.onscroll = () => window.scrollY > 500 ? topBtn.style.opacity = 1 : topBtn.style.opacity = 0
}