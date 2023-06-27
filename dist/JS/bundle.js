function validInput(e,t,a){e.addEventListener("input",()=>e.value===t?(e.parentElement.classList.add("form__input-invalid"),a.classList.add("disabled"),!1):(e.parentElement.classList.remove("form__input-invalid"),!0))}function validEmail(e,t){e.addEventListener("input",()=>-1===e.value.indexOf("@")?(e.parentElement.classList.add("form__input-invalid"),t.classList.add("disabled"),!1):(e.parentElement.classList.remove("form__input-invalid"),!0))}function validCheckbox(e,t,a){e.addEventListener("input",()=>e.checked===t?(e.parentElement.classList.add("form__input-invalid"),a.classList.add("disabled"),!1):(e.parentElement.classList.remove("form__input-invalid"),!0))}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".header__burger");var e=document.querySelectorAll(".header__menu-item");const a=document.querySelector(".header__menu"),l=document.querySelector(".cookies-alert");var n=document.querySelector(".cookies-alert__btn");if(document.querySelector(".access__form")){var i=document.querySelector(".access__form"),r=i.querySelectorAll("input");const d=i.querySelector("[name='companyName']"),s=i.querySelector("[name='iin']"),c=i.querySelector("[name='email']"),o=i.querySelector("[name='phone']"),u=i.querySelector("[name='password']"),m=i.querySelector("[name='confirmPassword']"),v=i.querySelector("[name='agreeOfert']"),p=i.querySelector('[name="agreePersonal"]'),_=i.querySelector("[type='submit']");_.classList.add("disabled"),validInput(d,"",_),validInput(s,"",_),validEmail(c,_),validInput(o,"",_),validInput(u,"",_),validInput(m,"",_),validCheckbox(v,!1,_),validCheckbox(p,!1,_),r.forEach(e=>{e.addEventListener("input",()=>{""===d.value?(d.parentElement.classList.remove("form__input-invalid"),_.classList.add("disabled")):""===s.value||-1===c.value.indexOf("@")||""===o.value||""===u.value||""===m.value||!1===v.checked||!1===p.checked?_.classList.add("disabled"):(console.log("succes"),_.classList.remove("disabled"))})}),_.addEventListener("click",()=>{""===d.value&&d.parentElement.classList.add("form__input-invalid"),""===s.value&&s.parentElement.classList.add("form__input-invalid"),-1===c.value.indexOf("@")&&c.parentElement.classList.add("form__input-invalid"),""===o.value&&o.parentElement.classList.add("form__input-invalid"),""===u.value&&u.parentElement.classList.add("form__input-invalid"),""===m.value&&m.parentElement.classList.add("form__input-invalid"),!1===v.checked&&v.parentElement.classList.add("form__input-invalid"),!1===p.checked&&p.parentElement.classList.add("form__input-invalid")})}if(document.querySelector(".questions__form")){i=document.querySelector(".questions__form"),r=i.querySelectorAll("input");const y=i.querySelector("[name='companyName']"),f=i.querySelector("[name='email']"),L=i.querySelector('[name="agreePersonal"]'),q=i.querySelector('[name="message"]'),E=i.querySelector("[type='submit']");validInput(y,"",E),validEmail(f,E),validInput(q,"",E),validCheckbox(L,!1,E),r.forEach(e=>{e.addEventListener("input",()=>{""===y.value||-1===f.value.indexOf("@")||!1===L.checked||""===q.value?E.classList.add("disabled"):E.classList.remove("disabled")})}),E.classList.add("disabled"),E.addEventListener("click",()=>{""===y.value&&y.parentElement.classList.add("form__input-invalid"),-1===f.value.indexOf("@")&&f.parentElement.classList.add("form__input-invalid"),!1===L.checked&&L.classList.add("form__input-invalid"),""===q.value&&q.parentElement.classList.add("form__input-invalid")})}if(t.addEventListener("click",()=>{t.classList.toggle("active"),a.classList.toggle("active")}),e.forEach(e=>{e.addEventListener("click",()=>{t.classList.toggle("active"),a.classList.toggle("active")})}),document.cookie.indexOf("cookieOn")<0&&l.classList.add("active"),n.addEventListener("click",()=>{l.classList.remove("active"),document.cookie="cookieOn=true"}),document.querySelector(".recovery")){i=document.querySelector(".recovery");const S=i.querySelector("[type='email']"),k=i.querySelector("[name='agreePersonal']"),b=i.querySelector("[type='submit'");b.disabled=!0,i.querySelectorAll("input").forEach(e=>{e.addEventListener("change",()=>{-1!=S.value.indexOf("@")&&0!=k.checked?b.disabled=!1:b.disabled=!0})}),i.addEventListener("submit",e=>{document.querySelector("#formRecoveryNotAgree").style.display="none",document.querySelector("#formRecoveryEmailWrong").style.display="none",e.preventDefault(),S.value.indexOf("@")<=0&&(document.querySelector("#formRecoveryEmailWrong").style.display="block"),!1===k.checked&&(document.querySelector("#formRecoveryNotAgree").style.display="block")})}document.querySelector(".questions__form")&&document.querySelector(".questions__form-clear").addEventListener("click",()=>{document.querySelector(".questions__form").reset()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInZhbGlkSW5wdXQiLCJpbnB1dCIsInJlcyIsInNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbHVlIiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInZhbGlkRW1haWwiLCJpbmRleE9mIiwidmFsaWRDaGVja2JveCIsImNoZWNrZWQiLCJkb2N1bWVudCIsImJ1cmdlciIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51SXRlbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZW51IiwiY29va2llc0FsZXJ0IiwiY29va2llc0FsZXJ0Q2xvc2UiLCJhY2Nlc0Zvcm0iLCJpbnB1dEFsbCIsImlucHV0TmFtZSIsImlucHV0SWluIiwiaW5wdXRFbWFsaSIsImlucHV0UGhvbmUiLCJpbnB1dFBhc3MiLCJpbnB1dENvbmZpcm1QYXNzIiwiaW5wdXRPZmVydCIsImlucHV0UGVyc29uYWwiLCJidG4iLCJmb3JFYWNoIiwiZWwiLCJjb25zb2xlIiwibG9nIiwicUZvcm0iLCJpbnB1dHNBbGwiLCJpbnB1dE1lc3NhZ2UiLCJ0b2dnbGUiLCJjb29raWUiLCJmb3JtUmVjb3ZlcnkiLCJmb3JtUmVjb3ZlcnlFbWFpbCIsImZvcm1SZWNvdmVyeUFncmVlIiwiZm9ybVJlY292ZXJ5QnRuIiwiZGlzYWJsZWQiLCJzdHlsZSIsImRpc3BsYXkiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNldCJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBQUEsV0FBQUMsRUFBQUMsRUFBQUMsR0FDQUYsRUFBQUcsaUJBQUEsUUFBQSxJQUNBSCxFQUFBSSxRQUFBSCxHQUNBRCxFQUFBSyxjQUFBQyxVQUFBQyxJQUFBLHFCQUFBLEVBQ0FMLEVBQUFJLFVBQUFDLElBQUEsVUFBQSxFQUNBLENBQUEsSUFFQVAsRUFBQUssY0FBQUMsVUFBQUUsT0FBQSxxQkFBQSxFQUNBLENBQUEsRUFFQSxDQUNBLENBRUEsU0FBQUMsV0FBQVQsRUFBQUUsR0FD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QUFlLFFBQUFDLElBQ0FBLEVBQUE5QixpQkFBQSxTQUFBLEtBQ0EsQ0FBQSxHQUFBdUMsRUFBQXRDLE1BQUFNLFFBQUEsR0FBQSxHQUFBLEdBQUFpQyxFQUFBL0IsUUFDQWdDLEVBQUFDLFNBQUEsQ0FBQSxFQUVBRCxFQUFBQyxTQUFBLENBQUEsQ0FFQSxDQUFBLENBQ0EsQ0FBQSxFQUNBSixFQUFBdEMsaUJBQUEsU0FBQSxJQUNBVSxTQUFBRSxjQUFBLHVCQUFBLEVBQUErQixNQUFBQyxRQUFBLE9BQ0FsQyxTQUFBRSxjQUFBLHlCQUFBLEVBQUErQixNQUFBQyxRQUFBLE9BQ0FDLEVBQUFDLGVBQUEsRUFDQVAsRUFBQXRDLE1BQUFNLFFBQUEsR0FBQSxHQUFBLElBQ0FHLFNBQUFFLGNBQUEseUJBQUEsRUFBQStCLE1BQUFDLFFBQUEsU0FFQSxDQUFBLElBQUFKLEVBQUEvQixVQUNBQyxTQUFBRSxjQUFBLHVCQUFBLEVBQUErQixNQUFBQyxRQUFBLFFBRUEsQ0FBQSxDQUNBLENBRUFsQyxTQUFBRSxjQUFBLGtCQUFBLEdBQ0FGLFNBQUFFLGNBQUEsd0JBQUEsRUFBQVosaUJBQUEsUUFBQSxLQUNBVSxTQUFBRSxjQUFBLGtCQUFBLEVBQUFtQyxNQUFBLENBQ0EsQ0FBQSxDQUtBLENBQUEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gdmFsaWRJbnB1dCAoaW5wdXQsIHJlcywgc2VsZWN0b3IpIHtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlID09PSByZXMpIHtcclxuICAgICAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXQtaW52YWxpZFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybV9faW5wdXQtaW52YWxpZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRFbWFpbChpbnB1dCwgc2VsZWN0b3IpIHtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlucHV0LnZhbHVlLmluZGV4T2YoXCJAXCIpID09PSAtMSkge1xyXG4gICAgICAgICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtX19pbnB1dC1pbnZhbGlkXCIpO1xyXG4gICAgICAgICAgICBzZWxlY3Rvci5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnB1dC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JtX19pbnB1dC1pbnZhbGlkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZENoZWNrYm94KGlucHV0LCByZXMsIHNlbGVjdG9yKSB7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChpbnB1dC5jaGVja2VkID09PSByZXMpIHtcclxuICAgICAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXQtaW52YWxpZFwiKTtcclxuICAgICAgICAgICAgc2VsZWN0b3IuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZm9ybV9faW5wdXQtaW52YWxpZFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnVyZ2VyXCIpO1xyXG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlcl9fbWVudS1pdGVtXCIpO1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51XCIpO1xyXG4gICAgY29uc3QgY29va2llc0FsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb29raWVzLWFsZXJ0XCIpO1xyXG4gICAgY29uc3QgY29va2llc0FsZXJ0Q2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvb2tpZXMtYWxlcnRfX2J0blwiKTtcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2Nlc3NfX2Zvcm1cIikpIHtcclxuICAgICAgICBjb25zdCBhY2Nlc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY2Vzc19fZm9ybVwiKTtcclxuICAgICAgICBjb25zdCBpbnB1dEFsbCA9IGFjY2VzRm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIilcclxuICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSBhY2Nlc0Zvcm0ucXVlcnlTZWxlY3RvcihcIltuYW1lPSdjb21wYW55TmFtZSddXCIpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0SWluID0gYWNjZXNGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJbbmFtZT0naWluJ11cIik7XHJcbiAgICAgICAgY29uc3QgaW5wdXRFbWFsaSA9IGFjY2VzRm9ybS5xdWVyeVNlbGVjdG9yKFwiW25hbWU9J2VtYWlsJ11cIik7XHJcbiAgICAgICAgY29uc3QgaW5wdXRQaG9uZSA9IGFjY2VzRm9ybS5xdWVyeVNlbGVjdG9yKFwiW25hbWU9J3Bob25lJ11cIik7XHJcbiAgICAgICAgY29uc3QgaW5wdXRQYXNzID0gYWNjZXNGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJbbmFtZT0ncGFzc3dvcmQnXVwiKTtcclxuICAgICAgICBjb25zdCBpbnB1dENvbmZpcm1QYXNzID0gYWNjZXNGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJbbmFtZT0nY29uZmlybVBhc3N3b3JkJ11cIik7XHJcbiAgICAgICAgY29uc3QgaW5wdXRPZmVydCA9IGFjY2VzRm9ybS5xdWVyeVNlbGVjdG9yKFwiW25hbWU9J2FncmVlT2ZlcnQnXVwiKTtcclxuICAgICAgICBjb25zdCBpbnB1dFBlcnNvbmFsID0gYWNjZXNGb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiYWdyZWVQZXJzb25hbFwiXScpO1xyXG4gICAgICAgIGNvbnN0IGJ0biA9IGFjY2VzRm9ybS5xdWVyeVNlbGVjdG9yKFwiW3R5cGU9J3N1Ym1pdCddXCIpO1xyXG5cclxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG5cclxuICAgICAgICB2YWxpZElucHV0KGlucHV0TmFtZSwgJycsIGJ0bik7XHJcbiAgICAgICAgdmFsaWRJbnB1dChpbnB1dElpbiwgJycsIGJ0bik7XHJcbiAgICAgICAgdmFsaWRFbWFpbChpbnB1dEVtYWxpLCBidG4pO1xyXG4gICAgICAgIHZhbGlkSW5wdXQoaW5wdXRQaG9uZSwgJycsIGJ0bik7XHJcbiAgICAgICAgdmFsaWRJbnB1dChpbnB1dFBhc3MsICcnLCBidG4pO1xyXG4gICAgICAgIHZhbGlkSW5wdXQoaW5wdXRDb25maXJtUGFzcywgJycsIGJ0bik7XHJcbiAgICAgICAgdmFsaWRDaGVja2JveChpbnB1dE9mZXJ0LCBmYWxzZSwgYnRuKTtcclxuICAgICAgICB2YWxpZENoZWNrYm94KGlucHV0UGVyc29uYWwsIGZhbHNlLCBidG4pO1xyXG5cclxuICAgICAgICBpbnB1dEFsbC5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0TmFtZS52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXROYW1lLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImZvcm1fX2lucHV0LWludmFsaWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dElpbi52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgIGlmIChpbnB1dEVtYWxpLnZhbHVlLmluZGV4T2YoXCJAXCIpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXRQaG9uZS52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0UGFzcy52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgIGlmIChpbnB1dENvbmZpcm1QYXNzLnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSAgaWYgKGlucHV0T2ZlcnQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0UGVyc29uYWwuY2hlY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlucHV0TmFtZS52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0TmFtZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtX19pbnB1dC1pbnZhbGlkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dElpbi52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0SWluLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvcm1fX2lucHV0LWludmFsaWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlucHV0RW1hbGkudmFsdWUuaW5kZXhPZihcIkBcIikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dEVtYWxpLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvcm1fX2lucHV0LWludmFsaWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlucHV0UGhvbmUudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFBob25lLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImZvcm1fX2lucHV0LWludmFsaWRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlucHV0UGFzcy52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0UGFzcy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtX19pbnB1dC1pbnZhbGlkXCIpO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBpZiAoaW5wdXRDb25maXJtUGFzcy52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0Q29uZmlybVBhc3MucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXQtaW52YWxpZFwiKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgaWYgKGlucHV0T2ZlcnQuY2hlY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0T2ZlcnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXQtaW52YWxpZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaW5wdXRQZXJzb25hbC5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRQZXJzb25hbC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtX19pbnB1dC1pbnZhbGlkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdGlvbnNfX2Zvcm1cIikpIHtcclxuICAgICAgICBjb25zdCBxRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3Rpb25zX19mb3JtXCIpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0c0FsbCA9IHFGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcclxuICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSBxRm9ybS5xdWVyeVNlbGVjdG9yKFwiW25hbWU9J2NvbXBhbnlOYW1lJ11cIik7XHJcbiAgICAgICAgY29uc3QgaW5wdXRFbWFsaSA9IHFGb3JtLnF1ZXJ5U2VsZWN0b3IoXCJbbmFtZT0nZW1haWwnXVwiKTtcclxuICAgICAgICBjb25zdCBpbnB1dFBlcnNvbmFsID0gcUZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJhZ3JlZVBlcnNvbmFsXCJdJyk7XHJcbiAgICAgICAgY29uc3QgaW5wdXRNZXNzYWdlID0gcUZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJtZXNzYWdlXCJdJyk7XHJcbiAgICAgICAgY29uc3QgYnRuID0gcUZvcm0ucXVlcnlTZWxlY3RvcihcIlt0eXBlPSdzdWJtaXQnXVwiKTtcclxuXHJcbiAgICAgICAgdmFsaWRJbnB1dChpbnB1dE5hbWUsICcnLCBidG4pO1xyXG4gICAgICAgIHZhbGlkRW1haWwoaW5wdXRFbWFsaSwgYnRuKTtcclxuICAgICAgICB2YWxpZElucHV0KGlucHV0TWVzc2FnZSwgJycsIGJ0bik7XHJcbiAgICAgICAgdmFsaWRDaGVja2JveChpbnB1dFBlcnNvbmFsLCBmYWxzZSwgYnRuKTtcclxuXHJcbiAgICAgICAgaW5wdXRzQWxsLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0TmFtZS52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dEVtYWxpLnZhbHVlLmluZGV4T2YoXCJAXCIpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0UGVyc29uYWwuY2hlY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dE1lc3NhZ2UudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG5cclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGlucHV0TmFtZS52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0TmFtZS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtX19pbnB1dC1pbnZhbGlkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dEVtYWxpLnZhbHVlLmluZGV4T2YoXCJAXCIpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXRFbWFsaS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmb3JtX19pbnB1dC1pbnZhbGlkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dFBlcnNvbmFsLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFBlcnNvbmFsLmNsYXNzTGlzdC5hZGQoXCJmb3JtX19pbnB1dC1pbnZhbGlkXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbnB1dE1lc3NhZ2UudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dE1lc3NhZ2UucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZm9ybV9faW5wdXQtaW52YWxpZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1lbnVJdGVtLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKFwiY29va2llT25cIikgPCAwKSB7XHJcbiAgICAgICAgY29va2llc0FsZXJ0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29va2llc0FsZXJ0Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjb29raWVzQWxlcnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBcImNvb2tpZU9uPXRydWVcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlY292ZXJ5XCIpKSB7XHJcbiAgICAgICAgY29uc3QgZm9ybVJlY292ZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWNvdmVyeVwiKTtcclxuICAgICAgICBjb25zdCBmb3JtUmVjb3ZlcnlFbWFpbCA9IGZvcm1SZWNvdmVyeS5xdWVyeVNlbGVjdG9yKFwiW3R5cGU9J2VtYWlsJ11cIik7XHJcbiAgICAgICAgY29uc3QgZm9ybVJlY292ZXJ5QWdyZWUgPSBmb3JtUmVjb3ZlcnkucXVlcnlTZWxlY3RvcihcIltuYW1lPSdhZ3JlZVBlcnNvbmFsJ11cIik7XHJcbiAgICAgICAgY29uc3QgZm9ybVJlY292ZXJ5QnRuID0gZm9ybVJlY292ZXJ5LnF1ZXJ5U2VsZWN0b3IoXCJbdHlwZT0nc3VibWl0J1wiKTtcclxuXHJcbiAgICAgICAgZm9ybVJlY292ZXJ5QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9ybVJlY292ZXJ5LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZm9ybVJlY292ZXJ5RW1haWwudmFsdWUuaW5kZXhPZihcIkBcIikgIT0gLTEgJiYgZm9ybVJlY292ZXJ5QWdyZWUuY2hlY2tlZCAhPSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1SZWNvdmVyeUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtUmVjb3ZlcnlCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZm9ybVJlY292ZXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtUmVjb3ZlcnlOb3RBZ3JlZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVJlY292ZXJ5RW1haWxXcm9uZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGZvcm1SZWNvdmVyeUVtYWlsLnZhbHVlLmluZGV4T2YoXCJAXCIpIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVJlY292ZXJ5RW1haWxXcm9uZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmb3JtUmVjb3ZlcnlBZ3JlZS5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtUmVjb3ZlcnlOb3RBZ3JlZVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3Rpb25zX19mb3JtXCIpKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdGlvbnNfX2Zvcm0tY2xlYXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdGlvbnNfX2Zvcm1cIikucmVzZXQoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59KTsiXX0=
