const videoCard = document.querySelectorAll(".card");           //for gett all element list
// console.log(videoCard);

Array.from(videoCard).forEach((element) => {                // for each loop fpr travel from all videoCard
  element.addEventListener("click", (e) => {                //add event listner on all video cards
    Array.from(videoCard).forEach((element) => {                //travel all card and remove check class
        element.classList.remove('check')
    })
   
element.classList.toggle('check')                               //add check class on click card

 
    })
  });


