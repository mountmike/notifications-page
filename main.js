const markReadBtn = document.getElementById('markRead');
const profileNameBtn = document.querySelectorAll('#profileName');
const postTitleBtn = document.querySelectorAll('#postTitle');
const groupTitleBtn = document.querySelectorAll('#groupTitle');

const notificationContainers = document.querySelectorAll('.notification-container')
const notiNumber = document.getElementById('notiNumber')


notificationContainers.forEach((btn) => {
    markReadBtn.addEventListener("click", (e) => {
        notificationContainers.forEach(f => f.classList.remove('active'));
        notiNumber.innerText = '0'
    });
  });