let btn = document.getElementById('btn');
let sidebar= document.getElementById('sidebar');
let searchBtn= document.getElementById('search');

btn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
})

searchBtn.addEventListener('click', function(){
    sidebar.classList.toggle('active');
})