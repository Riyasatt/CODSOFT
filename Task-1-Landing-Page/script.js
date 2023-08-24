const toggleBtn=document.querySelector(".toggle-btn")
const toggleBtnIcon=document.querySelector(".toggle-btn i")
const dropDown = document.querySelector(".toggle-btn-drop-down")

toggleBtn.onclick=function(){
    dropDown.classList.toggle("open")
    if(dropDown.classList.contains("open")==true){
        toggleBtnIcon.classList.replace("fa-bars","fa-xmark")
    }else{
        toggleBtnIcon.classList.replace("fa-xmark","fa-bars")
    }
}

