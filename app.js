let showBtn= document.querySelector('#showBtn');
let showElements = document.querySelector('.project-hide');

showBtn.addEventListener('click',function(){
    showElements.classList.toggle("open");
    if(showBtn.innerHTML === 'Hide<i class="fas fa-chevron-up"></i>'){
        showBtn.innerHTML = 'Show all<i class="fas fa-chevron-down"></i>';
    }else {
        showBtn.innerHTML = 'Hide<i class="fas fa-chevron-up"></i>';
    }
});

    

