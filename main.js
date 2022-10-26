const markReadBtn = document.getElementById('markRead');
const notificationContainers = document.querySelectorAll('.notification-container')
const notiNumber = document.getElementById('notiNumber')
const notifiDots = document.querySelectorAll('.dot');


notificationContainers.forEach((btn) => {
    markReadBtn.addEventListener("click", (e) => {
        notificationContainers.forEach(f => f.classList.remove('active'));
        notiNumber.innerText = '0'
        notifiDots.forEach(dot => dot.classList.remove('active'));
    });
  });