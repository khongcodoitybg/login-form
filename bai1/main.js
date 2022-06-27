var signinBtn = document.querySelector('.js-signin')
var modalSignIn = document.querySelector('.modal')
var modalBodys = document.querySelectorAll('.modal__body-js')
var modalBody1 = document.querySelector('.modal__body-js')
var accountElement = document.querySelector('input[name="account"]')
var passElement = document.querySelector('input[name="pass"]')
var check = document.querySelector('.notify')
var login = document.querySelector('.js-log')
var forgot = document.querySelector('.forgot__pass')
var stopFogot = document.querySelectorAll('.forgot-form')
var formForgot = document.querySelector('.forgot-form')
var backButton = document.querySelector('.js-back')
// var oldPassInput = document.querySelector('input[name="oldPass"]')
// var newPassInput = document.querySelector('input[name="newPass"]')
var oldPassBlock = document.querySelector('.old-pass-block')
var newPassBlock = document.querySelector('.new-pass-block')
var successChange = document.querySelector('.display-block')
var accountAdmin = 'admin'
var passAdmin = 'admin'

function start() {
    
    
    for(modalBody of modalBodys) {
        modalBody.addEventListener('click', stop)
    }

    
    for(stopFogot1 of stopFogot) {
        stopFogot1.addEventListener('click', stop)
    }
    
}

start()

function showSignin() {
    modalSignIn.classList.add('open')
    modalBody1.classList.add('open')
}

function hidenSignin() {
    formForgot.classList.remove('open')
    modalBody1.classList.remove('open')
    modalSignIn.classList.remove('open')
}

function stop(event) {
    event.stopPropagation()
}

function hidenCheck() {
    check.classList.remove('open')   
}


function checkAccount () {
    var account =  accountElement.value
    var pass = passElement.value
    if ((account === accountAdmin) && (pass === passAdmin)) {
        check.classList.remove('open')
        accountElement.value = ''
        passElement.value = ''
        document.querySelector('.js-signin').innerHTML = 'Đăng nhập thành công'
        hidenSignin()
    }
    else {
        accountElement.value = ''
        passElement.value = ''
        check.classList.add('open')
    }   
}

function ShowForgot() {
    modalBody1.classList.remove('open')
    formForgot.classList.add('open')
}



function checkChangePass() {
             
    var oldPassword = document.querySelector('input[name="oldPass"]').value
    var newPassword = document.querySelector('input[name="newPass"]').value
    if(oldPassword === '') {
        oldPassBlock.innerHTML = '<input type="text" name="oldPass" class="auth-form__input forgot-form__input js-account" placeholder="OldPassWord"><span class="err err-account">Bắt buộc nhập</span>'
        
        document.querySelector('input[name="oldPass"]').value = ''
        document.querySelector('input[name="newPass"]').value = ''
    }
    else if(newPassword === '') {
        newPassBlock.innerHTML = '<input type="text" name="newPass" class="auth-form__input forgot-form__input js-pass" placeholder="NewPassword"><span class="err err-account">Bắt buộc nhập</span>'
        oldPassBlock.innerHTML = '<input type="text" name="oldPass" class="auth-form__input forgot-form__input js-account" placeholder="OldPassWord">'
        
        document.querySelector('input[name="oldPass"]').value = ''
        document.querySelector('input[name="newPass"]').value = ''
    }
    else if(oldPassword != passAdmin) {
        oldPassBlock.innerHTML = '<input type="text" name="oldPass" class="auth-form__input forgot-form__input js-account" placeholder="OldPassWord">'
        newPassBlock.innerHTML = '<input type="text" name="newPass" class="auth-form__input forgot-form__input js-pass" placeholder="NewPassword">'

        oldPassBlock.innerHTML = '<input type="text" name="oldPass" class="auth-form__input forgot-form__input js-account" placeholder="OldPassWord"><span class="err err-account">Sai old password</span>'
        document.querySelector('input[name="oldPass"]').value = ''
        document.querySelector('input[name="newPass"]').value = ''
    }
    else {
            passAdmin = newPassword
            oldPassBlock.innerHTML = '<input type="text" name="oldPass" class="auth-form__input forgot-form__input js-account" placeholder="OldPassWord">'
        newPassBlock.innerHTML = '<input type="text" name="newPass" class="auth-form__input forgot-form__input js-pass" placeholder="NewPassword">'
            document.querySelector('input[name="oldPass"]').value = ''
        document.querySelector('input[name="newPass"]').value = ''
            hidenSignin()
            successChange.innerHTML = '<button class="signin js-signin" onclick="showSignin()">Đăng nhập</button><span class="changed-pass">Bạn đã đổi mật khẩu thành công</span>'
    }
  
}




