let view=document.getElementById("pageView");
let cost=document.getElementById("cost");
let cost2=document.getElementById("cost2");
let slider=document.getElementById("priceSlider");
let toggle=document.getElementById("billing");
let isYearly=false;

const pageViews=["10K","50K","100K","500K","1M"];
const perMounth=[8, 12, 16, 24, 36];

slider.addEventListener("input",function (){
    updateValue();
    view.innerHTML = pageViews[slider.value];
  
    let value = this.value * 25;
  
    this.style.background = `linear-gradient(to right,
              hsl(174, 77%, 80%) 0%,
              hsl(174, 77%, 80%) ${value}%,
              hsl(224, 65%, 95%) 0%,
              hsl(224, 65%, 95%) 100%)`;
});

toggle.addEventListener("change",()=>{
    if(isYearly == false){
        isYearly=true;
    }
    else{
        isYearly=false;
    }
    updateValue();
});

function updateValue(){
    if(isYearly){
        cost.innerHTML=perMounth[slider.value]*.75;
        cost2.innerHTML=perMounth[slider.value]*.75;
    }
    else{
        cost.innerHTML=perMounth[slider.value]
        cost2.innerHTML=perMounth[slider.value]
    }
}
