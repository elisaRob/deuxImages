const bouton1=document.querySelector(".button1");
const bouton2=document.querySelector(".button2");
const premiereDiv=document.querySelector(".premiereDiv");
const deuxiemeDiv=document.querySelector(".deuxiemeDiv");
const container=document.querySelector(".container");
const paragraphe1=document.querySelector(".paragrapheClassHidden1");
const paragraphe2=document.querySelector(".paragrapheClassHidden2")
const h2=document.querySelector(".premiereClassHiden");
const h22=document.querySelector(".deuxiemeClassHiden");
const bouton1Revenir=document.querySelector(".bouton1Revenir");
const bouton2Revenir=document.querySelector(".bouton2Revenir")

bouton1.addEventListener("click",()=>{
    premiereDiv.classList.add("activePremiereDiv")
    bouton1.classList.add("activePremierBouton")
    container.classList.add("activeContainer1")
    paragraphe1.classList.add("paragrapheClassHiddenActive1")
    h2.classList.add("premiereClassHidenActive")
    bouton1Revenir.classList.add("bouton1RevenirActive")
}) 

bouton2.addEventListener("click",()=>{
    deuxiemeDiv.classList.add("activeDeuxiemeDiv");
    bouton2.classList.add("activeDeuxiemeBouton");
    container.classList.add("activeContainer1")
    paragraphe2.classList.add("paragrapheClassHiddenActive2");
    h22.classList.add("deuxiemeClassHidenActive")
    bouton2Revenir.classList.add("bouton2RevenirActive")
})

bouton1Revenir.addEventListener("click",()=>{
    premiereDiv.classList.remove("activePremiereDiv")
    bouton1.classList.remove("activePremierBouton")
    container.classList.remove("activeContainer1")
    paragraphe1.classList.remove("paragrapheClassHiddenActive1")
    h2.classList.remove("premiereClassHidenActive")
    bouton1Revenir.classList.remove("bouton1RevenirActive")
})

bouton2Revenir.addEventListener("click",()=>{
    deuxiemeDiv.classList.remove("activeDeuxiemeDiv");
    bouton2.classList.remove("activeDeuxiemeBouton");
    container.classList.remove("activeContainer1")
    paragraphe2.classList.remove("paragrapheClassHiddenActive2");
    h22.classList.remove("deuxiemeClassHidenActive")
    bouton2Revenir.classList.remove("bouton2RevenirActive")
})
