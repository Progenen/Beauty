function validateInput(e){e.addEventListener("input",()=>""!==e)}function validateEmail(e){e.addEventListener("input",()=>-1!==e.indexOf("@"))}function validateCheckbox(e){return!1!==e.checked}document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".header__burger");var e=document.querySelectorAll(".header__menu-item");const o=document.querySelector(".header__menu"),c=document.querySelector(".cookies-alert");var r=document.querySelector(".cookies-alert__btn");if(document.querySelector(".access__form")){var l=document.querySelector(".access__form");const a=l.querySelectorAll(".input-value"),n=l.querySelector("[type='email']"),d=l.querySelectorAll("[type='checkbox']"),i=l.querySelector("[type='submit']");i.classList.add("disabled"),l.addEventListener("change",()=>{console.log(validateCheckbox(d[0])),validateInput(a[0])&&validateInput(a[1])&&validateInput(a[2])&&validateInput(a[3])&&validateInput(a[4])&&validateEmail(n)&&validateCheckbox(d[0])&&validateCheckbox(d[1])?i.classList.remove("disabled"):i.classList.add("disabled")})}if(t.addEventListener("click",()=>{t.classList.toggle("active"),o.classList.toggle("active")}),e.forEach(e=>{e.addEventListener("click",()=>{t.classList.toggle("active"),o.classList.toggle("active")})}),document.cookie.indexOf("cookieOn")<0&&c.classList.add("active"),r.addEventListener("click",()=>{c.classList.remove("active"),document.cookie="cookieOn=true"}),document.querySelector(".recovery")){l=document.querySelector(".recovery");const s=l.querySelector("[type='email']"),u=l.querySelector("[name='agreePersonal']"),m=l.querySelector("[type='submit'");m.disabled=!0,l.querySelectorAll("input").forEach(e=>{e.addEventListener("change",()=>{-1!=s.value.indexOf("@")&&0!=u.checked?m.disabled=!1:m.disabled=!0})}),l.addEventListener("submit",e=>{document.querySelector("#formRecoveryNotAgree").style.display="none",document.querySelector("#formRecoveryEmailWrong").style.display="none",e.preventDefault(),s.value.indexOf("@")<=0&&(console.log("ok"),document.querySelector("#formRecoveryEmailWrong").style.display="block"),!1===u.checked&&(document.querySelector("#formRecoveryNotAgree").style.display="block")})}document.querySelector(".questions__form")&&document.querySelector(".questions__form-clear").addEventListener("click",()=>{document.querySelector(".questions__form").reset()})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInZhbGlkYXRlSW5wdXQiLCJpbnB1dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWxpZGF0ZUVtYWlsIiwiaW5kZXhPZiIsInZhbGlkYXRlQ2hlY2tib3giLCJjaGVja2VkIiwiZG9jdW1lbnQiLCJidXJnZXIiLCJxdWVyeVNlbGVjdG9yIiwibWVudUl0ZW0iLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVudSIsImNvb2tpZXNBbGVydCIsImNvb2tpZXNBbGVydENsb3NlIiwiYWNjZXNGb3JtIiwiZm9ybUlucHV0cyIsImFjY2Vzc0VtYWlsIiwiYWNjZXNzQ2hlY2tib3giLCJhY2Nlc3NTdWJtaXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlIiwidG9nZ2xlIiwiZm9yRWFjaCIsImVsIiwiY29va2llIiwiZm9ybVJlY292ZXJ5IiwiZm9ybVJlY292ZXJ5RW1haWwiLCJmb3JtUmVjb3ZlcnlBZ3JlZSIsImZvcm1SZWNvdmVyeUJ0biIsImRpc2FibGVkIiwidmFsdWUiLCJzdHlsZSIsImRpc3BsYXkiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNldCJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBQUEsY0FBQUMsR0FDQUEsRUFBQUMsaUJBQUEsUUFBQSxJQUNBLEtBQUFELENBS0EsQ0FDQSxDQUVBLFNBQUFFLGNBQUFGLEdBQ0FBLEVBQUFDLGlCQUFBLFFBQUEsSUFDQSxDQUFBLElBQUFELEVBQUFHLFFBQUEsR0FBQSxDQUtBLENBQ0EsQ0FFQSxTQUFBQyxpQkFBQUosR0FDQSxNQUFBLENBQUEsSUFBQUEsRUFBQUssT0FLQSxDQUVBQyxTQUFBTCxpQkFBQSxtQkFBQSxXQUVBLE1BQUFNLEVBQUFELFNBQUFFLGNBQUEsaUJBQUEsRUFDQSxJQUFBQyxFQUFBSCxTQUFBSSxpQkFBQSxvQkFBQSxFQUNBLE1BQUFDLEVBQUFMLFNBQUFFLGNBQUEsZUFBQSxFQUNBSSxFQUFBTixTQUFBRSxjQUFBLGdCQUFBLEVBQ0EsSUFBQUssRUFBQVAsU0FBQUUsY0FBQSxxQkFBQSxFQUVBLEdBQUFGLFNBQUFFLGNBQUEsZUFBQSxFQUFBLENBQ0EsSUFBQU0sRUFBQVIsU0FBQUUsY0FBQSxlQUFBLEVBQ0EsTUFBQU8sRUFBQUQsRUFBQUosaUJBQUEsY0FBQSxFQUNBTSxFQUFBRixFQUFBTixjQUFBLGdCQUFBLEVBQ0FTLEVBQUFILEVBQUFKLGlCQUFBLG1CQUFBLEVBQ0FRLEVBQUFKLEVBQUFOLGNBQUEsaUJBQUEsRUFDQVUsRUFBQUMsVUFBQUMsSUFBQSxVQUFBLEVBRUFOLEVBQUFiLGlCQUFBLFNBQUEsS0FDQW9CLFFBQUFDLElBQUFsQixpQkFBQWEsRUFBQSxFQUFBLENBQUEsRUFDQWxCLGNBQUFnQixFQUFBLEVBQUEsR0FBQWhCLGNBQUFnQixFQUFBLEVBQUEsR0FBQWhCLGNBQUFnQixFQUFBLEVBQUEsR0FBQWhCLGNBQUFnQixFQUFBLEVBQUEsR0FBQWhCLGNBQUFnQixFQUFBLEVBQUEsR0FDQWIsY0FBQWMsQ0FBQSxHQUFBWixpQkFBQWEsRUFBQSxFQUFBLEdBQUFiLGlCQUFBYSxFQUFBLEVBQUEsRUFFQUMsRUFBQUMsVUFBQUksT0FBQSxVQUFBLEVBRUFMLEVBQUFDLFVBQUFDLElBQUEsVUFBQSxDQUdBLENBQUEsQ0FHQSxDQXVCQSxHQXJCQWIsRUFBQU4saUJBQUEsUUFBQSxLQUNBTSxFQUFBWSxVQUFBSyxPQUFBLFFBQUEsRUFDQWIsRUFBQVEsVUFBQUssT0FBQSxRQUFBLENBQ0EsQ0FBQSxFQUVBZixFQUFBZ0IsUUFBQUMsSUFDQUEsRUFBQXpCLGlCQUFBLFFBQUEsS0FDQU0sRUFBQVksVUFBQUssT0FBQSxRQUFBLEVBQ0FiLEVBQUFRLFVBQUFLLE9BQUEsUUFBQSxDQUNBLENBQUEsQ0FDQSxDQUFBLEVBRUFsQixTQUFBcUIsT0FBQXhCLFFBQUEsVUFBQSxFQUFBLEdBQ0FTLEVBQUFPLFVBQUFDLElBQUEsUUFBQSxFQUdBUCxFQUFBWixpQkFBQSxRQUFBLEtBQ0FXLEVBQUFPLFVBQUFJLE9BQUEsUUFBQSxFQUNBakIsU0FBQXFCLE9BQUEsZUFDQSxDQUFBLEVBRUFyQixTQUFBRSxjQUFBLFdBQUEsRUFBQSxDQUNBb0IsRUFBQXRCLFNBQUFFLGNBQUEsV0FBQSxFQUNBLE1BQUFxQixFQUFBRCxFQUFBcEIsY0FBQSxnQkFBQSxFQUNBc0IsRUFBQUYsRUFBQXBCLGNBQUEsd0JBQUEsRUFDQXVCLEVBQUFILEVBQUFwQixjQUFBLGdCQUFBLEVBRUF1QixFQUFBQyxTQUFBLENBQUEsRUFFQUosRUFBQWxCLGlCQUFBLE9BQUEsRUFBQWUsUUFBQUMsSUFDQUEsRUFBQXpCLGlCQUFBLFNBQUEsS0FDQSxDQUFBLEdBQUE0QixFQUFBSSxNQUFBOUIsUUFBQSxHQUFBLEdBQUEsR0FBQTJCLEVBQUF6QixRQUNBMEIsRUFBQUMsU0FBQSxDQUFBLEVBRUFELEVBQUFDLFNBQUEsQ0FBQSxDQUVBLENBQUEsQ0FDQSxDQUFBLEVBQ0FKLEVBQUEzQixpQkFBQSxTQUFBLElBQ0FLLFNBQUFFLGNBQUEsdUJBQUEsRUFBQTBCLE1BQUFDLFFBQUEsT0FDQTdCLFNBQUFFLGNBQUEseUJBQUEsRUFBQTBCLE1BQUFDLFFBQUEsT0FDQUMsRUFBQUMsZUFBQSxFQUNBUixFQUFBSSxNQUFBOUIsUUFBQSxHQUFBLEdBQUEsSUFDQWtCLFFBQUFDLElBQUEsSUFBQSxFQUNBaEIsU0FBQUUsY0FBQSx5QkFBQSxFQUFBMEIsTUFBQUMsUUFBQSxTQUVBLENBQUEsSUFBQUwsRUFBQXpCLFVBQ0FDLFNBQUFFLGNBQUEsdUJBQUEsRUFBQTBCLE1BQUFDLFFBQUEsUUFFQSxDQUFBLENBQ0EsQ0FFQTdCLFNBQUFFLGNBQUEsa0JBQUEsR0FDQUYsU0FBQUUsY0FBQSx3QkFBQSxFQUFBUCxpQkFBQSxRQUFBLEtBQ0FLLFNBQUFFLGNBQUEsa0JBQUEsRUFBQThCLE1BQUEsQ0FDQSxDQUFBLENBS0EsQ0FBQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB2YWxpZGF0ZUlucHV0KGlucHV0KSB7XHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGlmIChpbnB1dCA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoaW5wdXQpIHtcclxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlucHV0LmluZGV4T2YoXCJAXCIpID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVDaGVja2JveChpbnB1dCkge1xyXG4gICAgaWYgKGlucHV0LmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fYnVyZ2VyXCIpO1xyXG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlcl9fbWVudS1pdGVtXCIpO1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tZW51XCIpO1xyXG4gICAgY29uc3QgY29va2llc0FsZXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb29raWVzLWFsZXJ0XCIpO1xyXG4gICAgY29uc3QgY29va2llc0FsZXJ0Q2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvb2tpZXMtYWxlcnRfX2J0blwiKTtcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2Nlc3NfX2Zvcm1cIikpIHtcclxuICAgICAgICBjb25zdCBhY2Nlc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY2Vzc19fZm9ybVwiKTtcclxuICAgICAgICBjb25zdCBmb3JtSW5wdXRzID0gYWNjZXNGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5wdXQtdmFsdWVcIik7XHJcbiAgICAgICAgY29uc3QgYWNjZXNzRW1haWwgPSBhY2Nlc0Zvcm0ucXVlcnlTZWxlY3RvcihcIlt0eXBlPSdlbWFpbCddXCIpO1xyXG4gICAgICAgIGNvbnN0IGFjY2Vzc0NoZWNrYm94ID0gYWNjZXNGb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbdHlwZT0nY2hlY2tib3gnXVwiKTtcclxuICAgICAgICBjb25zdCBhY2Nlc3NTdWJtaXQgPSBhY2Nlc0Zvcm0ucXVlcnlTZWxlY3RvcihcIlt0eXBlPSdzdWJtaXQnXVwiKTtcclxuICAgICAgICBhY2Nlc3NTdWJtaXQuY2xhc3NMaXN0LmFkZChcImRpc2FibGVkXCIpO1xyXG5cclxuICAgICAgICBhY2Nlc0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbGlkYXRlQ2hlY2tib3goYWNjZXNzQ2hlY2tib3hbMF0pKTtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlSW5wdXQoZm9ybUlucHV0c1swXSkgJiYgdmFsaWRhdGVJbnB1dChmb3JtSW5wdXRzWzFdKSAmJiB2YWxpZGF0ZUlucHV0KGZvcm1JbnB1dHNbMl0pICYmIHZhbGlkYXRlSW5wdXQoZm9ybUlucHV0c1szXSkgJiYgdmFsaWRhdGVJbnB1dChmb3JtSW5wdXRzWzRdKVxyXG4gICAgICAgICAgICAmJiB2YWxpZGF0ZUVtYWlsKGFjY2Vzc0VtYWlsKSAmJiB2YWxpZGF0ZUNoZWNrYm94KGFjY2Vzc0NoZWNrYm94WzBdKSAmJiB2YWxpZGF0ZUNoZWNrYm94KGFjY2Vzc0NoZWNrYm94WzFdKSBcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBhY2Nlc3NTdWJtaXQuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWNjZXNzU3VibWl0LmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtZW51SXRlbS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChkb2N1bWVudC5jb29raWUuaW5kZXhPZihcImNvb2tpZU9uXCIpIDwgMCkge1xyXG4gICAgICAgIGNvb2tpZXNBbGVydC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvb2tpZXNBbGVydENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgY29va2llc0FsZXJ0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gXCJjb29raWVPbj10cnVlXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZWNvdmVyeVwiKSkge1xyXG4gICAgICAgIGNvbnN0IGZvcm1SZWNvdmVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVjb3ZlcnlcIik7XHJcbiAgICAgICAgY29uc3QgZm9ybVJlY292ZXJ5RW1haWwgPSBmb3JtUmVjb3ZlcnkucXVlcnlTZWxlY3RvcihcIlt0eXBlPSdlbWFpbCddXCIpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1SZWNvdmVyeUFncmVlID0gZm9ybVJlY292ZXJ5LnF1ZXJ5U2VsZWN0b3IoXCJbbmFtZT0nYWdyZWVQZXJzb25hbCddXCIpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1SZWNvdmVyeUJ0biA9IGZvcm1SZWNvdmVyeS5xdWVyeVNlbGVjdG9yKFwiW3R5cGU9J3N1Ym1pdCdcIik7XHJcblxyXG4gICAgICAgIGZvcm1SZWNvdmVyeUJ0bi5kaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGZvcm1SZWNvdmVyeS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIikuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvcm1SZWNvdmVyeUVtYWlsLnZhbHVlLmluZGV4T2YoXCJAXCIpICE9IC0xICYmIGZvcm1SZWNvdmVyeUFncmVlLmNoZWNrZWQgIT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtUmVjb3ZlcnlCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybVJlY292ZXJ5QnRuLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIGZvcm1SZWNvdmVyeS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVJlY292ZXJ5Tm90QWdyZWVcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1SZWNvdmVyeUVtYWlsV3JvbmdcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChmb3JtUmVjb3ZlcnlFbWFpbC52YWx1ZS5pbmRleE9mKFwiQFwiKSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtUmVjb3ZlcnlFbWFpbFdyb25nXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGZvcm1SZWNvdmVyeUFncmVlLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1SZWNvdmVyeU5vdEFncmVlXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdGlvbnNfX2Zvcm1cIikpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0aW9uc19fZm9ybS1jbGVhclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0aW9uc19fZm9ybVwiKS5yZXNldCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0pOyJdfQ==
