let elForm = document.querySelector(".login-form")
let elBtn = document.querySelector(".login-btn")

elForm.addEventListener("submit", function(e){
    e.preventDefault()
    const data = {
        username:e.target.username.value, 
        password:e.target.password.value
    }
    elBtn.innerHTML = `<img class="scale-[1.5] mx-auto" src="./images/loading-img.png" alt="Loading..." width="38" height="37">`

    if(data.username = "Nurmuhammad" && data.password == "0422"){
        setTimeout(() =>{
            elBtn.innerHTML = `Войти`
            localStorage.setItem("user", JSON.stringify(data))
            location.pathname = "products.html"
        },1000)
    }
    else{
        setTimeout(() => {
            elBtn.innerHTML = `Ошибка пароля`
        },1000)
        setTimeout(() => {
            elBtn.innerHTML = `Войти`
        },2500)
    }
})
