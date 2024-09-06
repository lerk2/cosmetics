const theme = document.querySelector('.theme')
const theme_btn = document.getElementById('theme-btn')
const nav = document.querySelectorAll('.header__link')
let theme_state = true
function slideMoon() {
    theme.classList.toggle('active')
}
function changeTheme(value) {
    console.log(value)
    if (value === true) {
        theme_btn.src='img/icons8-солнце.svg'
        document.body.style.background='black'
        theme_btn.style.filter='invert(1)'
        document.body.style.color='white'
        nav.forEach((Danya)=>{
            Danya.style.color='white'
        })
    }else{
        theme_btn.src='img/icons8-луна-96.png'
        document.body.style.background='white'
        theme_btn.style.filter='invert(0)'
        document.body.style.color='black'
        document.body.style.transition='all 1s'
        nav.forEach((Danya)=>{
            Danya.style.color='black'
        })
    }
}
function toggleTheme(){
theme_state=!theme_state
changeTheme(theme_state)
}