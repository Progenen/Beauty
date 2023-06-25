document.addEventListener('DOMContentLoaded', function () {

    const burger = document.querySelector(".header__burger");
    const menu = document.querySelector(".header__menu");
    const cookiesAlert =  document.querySelector(".cookies-alert");
    const cookiesAlertClose = document.querySelector(".cookies-alert__btn");

    if (document.querySelector(".form-validate")) {
        document.querySelectorAll(".form-validate").forEach(el => {
            const inputs =  el.querySelectorAll("[required]");
            const inputsText = el.querySelectorAll("input[type='text'][required]");
            const formEmail = el.querySelector("[type='email']");
            const checkboxes = el.querySelectorAll("[type='checkbox'");
            const formBtn = el.querySelector("[type='submit']");
            let checkboxState = false;
            let emailState = false;
            let textState = false;
    
            formBtn.disabled = true;
    
    
            el.addEventListener("change", () => {
            })
            
            inputs.forEach(input => {
                input.addEventListener("change", () => {
                    // console.log(textState);
                    console.log(checkboxState);
                    // console.log(emailState);
                    checkboxes.forEach(checkbox => {
                        if (checkbox.checked != false) {
                            checkboxState = true;
                        } else {
                            checkboxState = false;
                        }
                    });
                    inputsText.forEach(el => {
                        if (el.value != '') {
                            textState = true;
                        } else {
                            textState = false;
                        }
                    });
                    if (formEmail.value.indexOf("@") != -1) {
                        emailState = true;
                    } else {
                        emailState = false;
                    }
                    if (textState && checkboxState && emailState) {
                        formBtn.disabled = false;
                    } else {
                        formBtn.disabled = true;
                    }
                })
            })
    
        })
    }

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
    });

    if (document.cookie.indexOf("cookieOn") < 0) {
        cookiesAlert.classList.add("active");
    }

    cookiesAlertClose.addEventListener("click", () => {
        cookiesAlert.classList.remove("active");
        document.cookie = "cookieOn=true";
    });

    if (document.querySelector(".recovery")) {
        const formRecovery = document.querySelector(".recovery");
        const formRecoveryEmail = formRecovery.querySelector("[type='email']");
        const formRecoveryAgree = formRecovery.querySelector("[name='agreePersonal']");
        const formRecoveryBtn = formRecovery.querySelector("[type='submit'");

        formRecoveryBtn.disabled = true;

        formRecovery.querySelectorAll("input").forEach(el => {
            el.addEventListener("change", () => {
                if (formRecoveryEmail.value.indexOf("@") != -1 && formRecoveryAgree.checked != false) {
                    formRecoveryBtn.disabled = false;
                } else {
                    formRecoveryBtn.disabled = true;
                }
            })
        })
        formRecovery.addEventListener("submit", (e) => {
            document.querySelector("#formRecoveryNotAgree").style.display = "none";
            document.querySelector("#formRecoveryEmailWrong").style.display = "none";
            e.preventDefault();
            if (formRecoveryEmail.value.indexOf("@") <= 0) {
                console.log("ok");
                document.querySelector("#formRecoveryEmailWrong").style.display = "block";
            } 
            if (formRecoveryAgree.checked === false) {
                document.querySelector("#formRecoveryNotAgree").style.display = "block";
            }
        });
    }

    if(document.querySelector(".questions__form")) {
        document.querySelector(".questions__form-clear").addEventListener("click", () => {
            document.querySelector(".questions__form").reset();
        })
    }
 
      

});