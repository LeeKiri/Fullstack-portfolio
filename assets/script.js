
var emailBtn = document.getElementById("emailBtn");

emailBtn.addEventListener("click", function(event){
    event.preventDefault()
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("body").value;
    location.href = "mailto:leekiritempleton@gmail.com?subject=" + subject + "&body=" + body;
})