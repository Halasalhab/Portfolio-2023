//send email when clicked on email icon

let emailBtn = document.getElementById('email-to')
function sendEmail() {
    window.location = "mailto:halasalhab0@gmail.com";
}

emailBtn.addEventListener('click', sendEmail)
