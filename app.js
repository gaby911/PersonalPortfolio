let showBtn= document.querySelector('#showBtn');
let showElements = document.querySelectorAll('.project-hide');

showBtn.addEventListener('click',function(){
    for(let i = 0; i < showElements.length; i += 1) {
        showElements.item(i).classList.toggle("open");
    }
    if(showBtn.innerHTML === 'Hide<i class="fas fa-chevron-up"></i>'){
        showBtn.innerHTML = 'Show all<i class="fas fa-chevron-down"></i>';
    }else {
        showBtn.innerHTML = 'Hide<i class="fas fa-chevron-up"></i>';
    }
});
