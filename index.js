window.addEventListener('scroll', function() {
    var nav = document.getElementById('navigation');
    
    if (window.scrollY > 50) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
});

//send email when clicked on email icon

let emailBtn = document.getElementById('email-to')
function sendEmail() 
{
    window.location = "mailto:halasalhab0@gmail.com";
}

emailBtn.addEventListener('click', sendEmail)
