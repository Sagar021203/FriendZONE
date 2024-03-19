
var settingsmenutoggle = document.querySelector('.settings-menu');
var darkbtn = document.getElementById('dark-btn');
var likeunlike = document.querySelector('.ri-thumb-up-fill')
 
 
var likeUnlikeButtons = document.querySelectorAll('.ri-thumb-up-fill'); // Select all like buttons

likeUnlikeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        button.style.color = button.style.color === 'gray' ? '#551161' : 'gray'; // Toggle color
    });
});
 

function settingsMenuToggle() {
   settingsmenutoggle.classList.toggle('settings-menu-height')
}

darkbtn.onclick = function () {
   darkbtn.classList.toggle('dark-btn-on');
   document.body.classList.toggle('dark-theme')

   if (localStorage.getItem('theme') == 'light') {
      localStorage.setItem('theme', 'dark')
   }
   else {
      localStorage.setItem('theme', 'light')
   }

}

if (localStorage.getItem('theme') == 'light') {
   darkbtn.classList.remove('dark-btn-on');
   document.body.classList.remove('dark-theme')
}
else if (localStorage.getItem('theme') == 'dark') {
   darkbtn.classList.add('dark-btn-on')
   document.body.classList.add('dark-theme')
}
else {
   localStorage.setItem('theme', 'light')
}


 