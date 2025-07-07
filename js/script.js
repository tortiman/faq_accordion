document.addEventListener('DOMContentLoaded', ()=>{

    const questions=document.querySelectorAll('.question');
    const icons=document.querySelectorAll('.icon');
    const answers=document.querySelectorAll('.answer');
    let returnText=' ';
    const objTexts={
        0:"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
        1:"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
        2:"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
        3:"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
    }
    icons.forEach((icon,index) =>{
        icon.addEventListener('click',function(){
            answers.forEach(answer => answer.textContent='');
            answers.forEach(answer => answer.style.paddingTop=0);
            icons.forEach(icon => icon.style.content="url('../assets/images/icon-plus.svg");
            icons[index].style.content="url('../assets/images/icon-minus.svg')";
            answers[index].style.paddingTop='1.50em';
            answers[index].textContent=text(index);    
            
        });
        
            
        });
    questions.forEach((question) => {
        question.addEventListener('click',function(){
            const answerId=question.getAttribute('aria-controls');
            const answer=document.getElementById(answerId);
            answer.focus();
        });
    });
    
    function text(id) {
        
        if (id === 0) {
            returnText=objTexts[0];
        }else if(id === 1) {
            returnText=objTexts[1];
        }else if(id === 2){
            returnText=objTexts[2];
        }else {
            returnText=objTexts[3];
        }
        
        return returnText;
    }
});