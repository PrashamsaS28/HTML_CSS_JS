const cards=document.querySelectorAll('.card');

//Iterating over each card
cards.forEach(card =>{
    card.addEventListener('mouseover',()=>{  //adding mouseover event listener
        card.style.transform='scale(1.1)';
        card.style.transition='transform 0.3s';

    card.addEventListener('mouseleave',()=>{  //adding mouseleave event listener
        card.style.transform='scale(1)';
    })
    })
})