const  user=document.querySelectorAll(".user");
const computer=document.querySelectorAll(".computer");
const randomnum=Math.floor(Math.random()*3);
const userpic=document.querySelector('.userpic');
const machinepic=document.querySelector('.machinepic');
const winner_status=document.querySelector('.winner_status');
const winlo=document.querySelector('.winlo');
const play_again=document.querySelector('.play_again');
const triangle=document.querySelector('.triangle')
const rulebutton=document.querySelector('.rulebutton');
const rulesbox=document.querySelector('.rulesbox');
const topcontainer=document.querySelector('.topcontainer')
const bottomcontainer=document.querySelector('.bottomcontainer');
const victorycontainer=document.querySelector('.victorycontainer');
const picked=document.querySelector('.picked');
let score=JSON.parse(localStorage.getItem('score'));
let scoreElem=document.getElementById('your_score');
if(score){
    scoreElem.innerText=score;

}
let count=0;
let compscore=JSON.parse(localStorage.getItem('compscore'));
let compElem=document.getElementById('comp_score');
if(compscore){
    compElem.innerText=compscore;
}
let compcount=0;


user.forEach((element,index)=>{
    element.addEventListener('click',()=>{
        userpic.style.opacity="1";
        triangle.style.display="none";
        user.forEach(item=>{
            item.style.display="none";
        })
        element.style.display="block";
        console.log(index)
        element.classList.add('show');
        setTimeout(() => {
            machinepic.style.opacity="1";
            setTimeout(() => {
            computer[randomnum].style.display="block";
            console.log(randomnum);
            computer[randomnum].classList.add('right');
                
            }, 1000);
            setTimeout(() => {
                if(index===randomnum){
                   winner_status.style.display="block";
                   winlo.innerText="TIE UP";

                   
                }
                 else if((index==0 && randomnum==1)||(index==1 && randomnum==2)||(index==2 && randomnum==0)){
                    winner_status.style.display="block";
                     winlo.innerText="YOU WIN";
                     count=score;
                     count++;
                     scoreElem.innerText=count;
                     localStorage.setItem("score",JSON.stringify(count));
                    nextbutton.style.display="block";   
                 }
            
                else{
                    winner_status.style.display="block";
                    winlo.innerText="YOU LOST";
                    compcount=compscore;
                    compcount++;
                    
                    compElem.innerText=compcount;
                    localStorage.setItem("compscore",JSON.stringify(compcount));
                }


                
            }, 1500);
            
        },500);
     
        
    
    })
})
play_again.addEventListener('click',()=>{
    window.location.reload();
});
rulebutton.addEventListener('click',()=>{
    setTimeout(() => {
        rulesbox.style.display="block";
        
    },100);
})
const close=document.querySelector('.close');
close.addEventListener("click",()=>{
    rulesbox.style.display="none";
})
const nextbutton=document.querySelector('.nextbutton');
nextbutton.addEventListener('click',()=>{
    topcontainer.style.display="none";
    bottomcontainer.style.display="none";
    userpic.style.opacity="0";
    machinepic.style.opacity="0";
    winner_status.style.display="none";
    victorycontainer.style.display="block";
    
    
});