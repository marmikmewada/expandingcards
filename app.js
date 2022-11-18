"use strict";

const cards = document.querySelectorAll(".card");
const [one, two, three, four, five] = cards;


    cards.forEach((card)=>{
        card.addEventListener("click", function(){
            removeActiveClass();
            console.log(card);
            card.classList.add("active");

        })
    })

    const removeActiveClass = () => {
        cards.forEach((card)=>{
            console.log("Removing Active Class");
            card.classList.remove("active");
        })
    }













    // cards.forEach((panels)=>{
    //     panels.addEventListener("click", function(e){
    //         e.stopPropagation();
    //         removeActiveClasses();
    //         panels.classList.add("active");

    //     })
    // });

    // const removeActiveClasses = () => {
    //     cards.forEach((panel)=>{
    //         panel.classList.remove("avtive");
    //         // console.log(panel);
    //     });
    // };




































    // const addActive = (e,element) => {
    //     e.stopPropagation();

    //     element.classList.add("active");
    // }

    // const removeActive = (elements) => {

    //     elements.forEach((element)=>{
    //      element.classList.remove("active")
    // });
    // }
        
    //     one.addEventListener("click", function(e){
    //         e.stopPropagation();
    //         addActive(one);
    //         removeActive([two, three, four, five]);
    //     });

    //     two.addEventListener("click", function(){
    //         addActive(two);
    //         removeActive([one, three, four, five]);
    //     })

    //     three.addEventListener("click", function(){
    //         addActive(three);
    //         removeActive(two, one, four, five);
    //     })

    //     four.addEventListener("click", function(){
    //         addActive(four);
    //         removeActive(two, three, one, five);
    //     })

    //     five.addEventListener("click", function(){
    //         addActive(five);
    //         removeActive(two, three, four, one);
    //     })
        