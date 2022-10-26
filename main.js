const markReadBtn = document.getElementById('markRead');
const profileNameBtn = document.querySelectorAll('#profileName');
const postTitleBtn = document.querySelectorAll('#postTitle');
const groupTitleBtn = document.querySelectorAll('#groupTitle');

let notificationContainers = document.getElementsByClassName('notification-container');

markReadBtn.addEventListener("click", e => {
    notificationContainers.forEach(c)
});