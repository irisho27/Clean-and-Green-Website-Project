/*image slider*/
var slideIndex = 1;
 showSlides(slideIndex);

 
function plusSlides(n) {
    showSlides(slideIndex += n);
}
 
function currentSlide(n) {
    showSlides(slideIndex = n);
}
 
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


/*FACT GENERATOR*/

var factList = [
  "The United States constitutes 5% of the world population and contributes to 22% of the world’s carbon emission.",
  "Around 15% of the carbon released in the environment is due to deforestation and change in the use of land.",
  "The Golden Toad is the first species to go extinct due to climate change.",
  "In recent times, half of all amphibians are at risk of extinction due to climate change. Many argue that extinction is a natural phenomenon, claiming about five species per year. However, some experts suggest we’re in the midst of the sixth mass extinction caused mostly by human activity.",
  "Vehicles like cars and trucks contribute to 20% of carbon emissions in the United States.",
  "Air conditions and heating elements consume 50% of electricity in America.",
  "Hurricanes, droughts, and coral deaths are a few of the natural disasters caused due to climate change.",
  "Climate change enhances the spread of pests that causes life-threatening diseases like dengue, malaria, Lyme disease, etc.",
  "The hottest years have been experienced from 1990 till 1997. The warmest years have been since 2005.",
  "The number of climate change-related incidents has increased fourfold between 1980 and 2010.", 
  "Land-use change and deforestation contribute to 15% of carbon emission every year.",
  "The climate change scenario was much stable before the industrial revolution and had been rapidly changing since then. Today the reality is that climate change is going to get worse than yesterday.",
  "A separate budget of US$ 40 million has been allotted for climate change research since 1990.",
  "Due to the greenhouse effect, the average temperature of the earth is 15 degrees rather than -18 degrees without the greenhouse effect.",
  "Carbon dioxide constitutes only 3.6 % of total greenhouse gases, out of which 0.12% is attributed to human activities.",
  "According to the World Food Program (WPF.org), by 2015, the number of people affected by climate change disasters could reach 375 million per year.",
  "Classic examples of climate change can be seen by the damages caused due to heavy rains and disasters like Hurricane Katrina in 2005.",
  "Climate change can have serious health impacts such as heat stress, extreme cold, which can cause major deaths due to heart diseases.",
  "In 2003, around 70,000 deaths occurred in Europe alone due to diseases caused by rising temperatures.",
  "Pollen and aeroallergen’s high levels also lead to rising temperatures. This can cause asthma, which affects 300 million people worldwide.",
  "Over the next 20 years, global warming is expected to increase by 0.2 degrees per decade.",
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
 factBtn.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}



 

 
