var form_connect_open = document.querySelector(".open-btn");
var connection_modal = document.querySelector(".connection");
var close = connection_modal.querySelector(".close");

var connect_form = connection_modal.querySelector("form");
var u_name = connection_modal.querySelector("[name=u-name]");
var y_mail = connection_modal.querySelector("[name=y-mail]");
var comment = connection_modal.querySelector("[name=comment]");

var storage_name = localStorage.getItem("u-name");
var storage_mail = localStorage.getItem("y-mail");

var body = document.body;

var storage_name; 
var storage_mail; 

try { 
storageName = localStorage.getItem("u-name"); 
storageEmail = localStorage.getItem("y-mail"); 
} catch (e) { 
console.log(e.message, e.name); 
}
  
  if (body.classList.contains("no-js")) {
	body.classList.remove("no-js")
}
  
  form_connect_open.addEventListener("click", function (evt) {
    evt.preventDefault();
    connection_modal.classList.add("show-modal");
	
	if (storage_name) {
	u_name.value = storage_name;
	y_mail.focus();
} else {
	u_name.focus();
	}
  });
  
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    connection_modal.classList.remove("show-modal");
  });
  
  connect_form.addEventListener("submit", function (evt) {
	if (!u_name.value || !y_mail.value || !comment.value) {
	evt.preventDefault();	
	console.log("Не все поля заполнены");
} else {
	localStorage.setItem("u_name", u_name.value);
	localStorage.setItem("y_mail", y_mail.value);
}
  });
  
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (connection_modal.classList.contains("show-modal")) {
        connection_modal.classList.remove("show-modal");
      }
    }
  });  