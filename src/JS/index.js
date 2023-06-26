function validateInput(input) {
    input.addEventListener("input", () => {
        if (input === '') {
            return false;
        } else {
            return true;
        }
    })
}

function validateEmail(input) {
    input.addEventListener("input", () => {
        if (input.indexOf("@") === -1) {
            return false;
        } else {
            return true;
        }
    })
}

function validateCheckbox(input) {
    if (input.checked === false) {
        return false;
    } else {
        return true;
    }
}

document.addEventListener('DOMContentLoaded', function () {

    const burger = document.querySelector(".header__burger");
    const menuItem = document.querySelectorAll(".header__menu-item");
    const menu = document.querySelector(".header__menu");
    const cookiesAlert = document.querySelector(".cookies-alert");
    const cookiesAlertClose = document.querySelector(".cookies-alert__btn");

    if (document.querySelector(".access__form")) {
        const accesForm = document.querySelector(".access__form");
        const formInputs = accesForm.querySelectorAll(".input-value");
        const accessEmail = accesForm.querySelector("[type='email']");
        const accessCheckbox = accesForm.querySelectorAll("[type='checkbox']");
        const accessSubmit = accesForm.querySelector("[type='submit']");
        accessSubmit.classList.add("disabled");

        accesForm.addEventListener("change", () => {
            console.log(validateCheckbox(accessCheckbox[0]));
            if (validateInput(formInputs[0]) && validateInput(formInputs[1]) && validateInput(formInputs[2]) && validateInput(formInputs[3]) && validateInput(formInputs[4])
            && validateEmail(accessEmail) && validateCheckbox(accessCheckbox[0]) && validateCheckbox(accessCheckbox[1]) 
            ) {
                accessSubmit.classList.remove("disabled");
            } else {
                accessSubmit.classList.add("disabled");

            }
        })

        
    }

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
    });

    menuItem.forEach(el => {
        el.addEventListener("click", () => {
            burger.classList.toggle("active");
            menu.classList.toggle("active");
        })
    })

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

    if (document.querySelector(".questions__form")) {
        document.querySelector(".questions__form-clear").addEventListener("click", () => {
            document.querySelector(".questions__form").reset();
        })
    }



});