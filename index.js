window.addEventListener('scroll', function() {
    var nav = document.getElementById('navigation');
    
    if (window.scrollY > 50) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
});
