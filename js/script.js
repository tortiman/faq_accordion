document.addEventListener('DOMContentLoaded', ()=>{

    const icons=document.querySelectorAll('.icon');
    const answers=document.querySelectorAll('.answer');

    icons.forEach((icon,index) =>{
        icon.addEventListener('click',function(){
            answers.forEach(answer => answer.textContent='');
            answers.forEach(answer => answer.style.paddingTop=0);
            icons.forEach(icon => icon.style.content="url('../assets/images/icon-plus.svg")
            icons[index].style.content="url('../assets/images/icon-minus.svg')";
            answers[index].style.paddingTop='1.50em';
            answers[index].textContent=text(index);    
            
        });
        
            
        });
    
    
    function text(id) {
        returnText='';
        if (id === 0) {
            returnText= "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";
        }else if(id === 1) {
            returnText="Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.";
        }else if(id === 2){
            returnText="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!";
        }else {
            returnText="The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.";
        }
        
        return returnText;
    }
});