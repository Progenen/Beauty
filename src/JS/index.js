function validInput (input, res, selector) {
    input.addEventListener("input", () => {
        if (input.value === res) {
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");
            return false;
        } else {
            input.parentElement.classList.remove("form__input-invalid");
            return true;
        }
    })
}

function validEmail(input, selector) {
    input.addEventListener("input", () => {
        if (input.value.indexOf("@") === -1) {
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");
            return false;
        } else {
            input.parentElement.classList.remove("form__input-invalid");
            return true;
        }
    })
}

function validCheckbox(input, res, selector) {
    input.addEventListener("input", () => {
        if (input.checked === res) {
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");
            return false;
        } else {
            input.parentElement.classList.remove("form__input-invalid");
            return true;
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {

    const burger = document.querySelector(".header__burger");
    const menuItem = document.querySelectorAll(".header__menu-item");
    const menu = document.querySelector(".header__menu");
    const cookiesAlert = document.querySelector(".cookies-alert");
    const cookiesAlertClose = document.querySelector(".cookies-alert__btn");

    if (document.querySelector(".access__form")) {
        const accesForm = document.querySelector(".access__form");
        const inputAll = accesForm.querySelectorAll("input")
        const inputName = accesForm.querySelector("[name='companyName']");
        const inputIin = accesForm.querySelector("[name='iin']");
        const inputEmali = accesForm.querySelector("[name='email']");
        const inputPhone = accesForm.querySelector("[name='phone']");
        const inputPass = accesForm.querySelector("[name='password']");
        const inputConfirmPass = accesForm.querySelector("[name='confirmPassword']");
        const inputOfert = accesForm.querySelector("[name='agreeOfert']");
        const inputPersonal = accesForm.querySelector('[name="agreePersonal"]');
        const btn = accesForm.querySelector("[type='submit']");

        btn.classList.add("disabled");

        validInput(inputName, '', btn);
        validInput(inputIin, '', btn);
        validEmail(inputEmali, btn);
        validInput(inputPhone, '', btn);
        validInput(inputPass, '', btn);
        validInput(inputConfirmPass, '', btn);
        validCheckbox(inputOfert, false, btn);
        validCheckbox(inputPersonal, false, btn);

        inputAll.forEach(el => {
                el.addEventListener("input", () => {
                    if (inputName.value === '') {
                        inputName.parentElement.classList.remove("form__input-invalid");
                        btn.classList.add("disabled");
                    } else if (inputIin.value === '') {
                        btn.classList.add("disabled");
                    } else  if (inputEmali.value.indexOf("@") === -1) {
                        btn.classList.add("disabled");
                    } else if (inputPhone.value === '') {
                        btn.classList.add("disabled");
                    } else if (inputPass.value === '') {
                        btn.classList.add("disabled");
                    } else  if (inputConfirmPass.value === '') {
                        btn.classList.add("disabled");
                    } else  if (inputOfert.checked === false) {
                        btn.classList.add("disabled");
                    } else if (inputPersonal.checked === false) {
                        btn.classList.add("disabled");
                    } else {
                        console.log("succes");
                        btn.classList.remove("disabled");
                    }
             })
        });

        btn.addEventListener("click", () => {
            if (inputName.value === '') {
                inputName.parentElement.classList.add("form__input-invalid");
            }
            if (inputIin.value === '') {
                inputIin.parentElement.classList.add("form__input-invalid");
            }
            if (inputEmali.value.indexOf("@") === -1) {
                inputEmali.parentElement.classList.add("form__input-invalid");
            }
            if (inputPhone.value === '') {
                inputPhone.parentElement.classList.add("form__input-invalid");
            }
            if (inputPass.value === '') {
                inputPass.parentElement.classList.add("form__input-invalid");
            } 
            if (inputConfirmPass.value === '') {
                inputConfirmPass.parentElement.classList.add("form__input-invalid");
            } 
            if (inputOfert.checked === false) {
                inputOfert.parentElement.classList.add("form__input-invalid");
            }
            if (inputPersonal.checked === false) {
                inputPersonal.parentElement.classList.add("form__input-invalid");
            }
        })
    }

    if (document.querySelector(".questions__form")) {
        const qForm = document.querySelector(".questions__form");
        const inputsAll = qForm.querySelectorAll("input");
        const inputName = qForm.querySelector("[name='companyName']");
        const inputEmali = qForm.querySelector("[name='email']");
        const inputPersonal = qForm.querySelector('[name="agreePersonal"]');
        const inputMessage = qForm.querySelector('[name="message"]');
        const btn = qForm.querySelector("[type='submit']");

        validInput(inputName, '', btn);
        validEmail(inputEmali, btn);
        validInput(inputMessage, '', btn);
        validCheckbox(inputPersonal, false, btn);

        inputsAll.forEach(el => {
            el.addEventListener("input", () => {
                if (inputName.value === '') {
                    btn.classList.add("disabled");
                } else if (inputEmali.value.indexOf("@") === -1) {
                    btn.classList.add("disabled");
                } else if (inputPersonal.checked === false) {
                    btn.classList.add("disabled");
                } else if (inputMessage.value === '') {
                    btn.classList.add("disabled");
    
                } else {
                    btn.classList.remove("disabled");
                }
            })
        });

        btn.classList.add("disabled");

        btn.addEventListener("click", () => {
            if (inputName.value === '') {
                inputName.parentElement.classList.add("form__input-invalid");
            }
            if (inputEmali.value.indexOf("@") === -1) {
                inputEmali.parentElement.classList.add("form__input-invalid");
            }
            if (inputPersonal.checked === false) {
                inputPersonal.classList.add("form__input-invalid");
            }
            if (inputMessage.value === '') {
                inputMessage.parentElement.classList.add("form__input-invalid");
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