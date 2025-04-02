let tg = window.Telegram.WebApp;

document.addEventListener('DOMContentLoaded', function() {
    // Telegram Web App ishga tushganda
    tg.expand();
    
    // 3 sekunddan keyin loader-ni yashirish va kontentni ko'rsatish
    setTimeout(function() {
        document.querySelector('.loader-container').style.display = 'none';
        document.querySelector('.content').style.display = 'block';
    }, 3000);
}); 