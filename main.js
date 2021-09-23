// Clock section start
const hourTime = document.querySelector('.time-hour');
const minTime = document.querySelector('.time-min');
const secTime = document.querySelector('.time-sec');
const aMpM = document.querySelector('#am-time');

function addZero(timeFrame) {
    return timeFrame < 10 ? '0'.concat(timeFrame) : timeFrame
}

function time() {
  //clock
  var d = new Date();
  var sec = d.getSeconds();
  var min = d.getMinutes();
  var hr = d.getHours();

  hourTime.innerHTML =    `${addZero((hr % 12) || 12)}`
  minTime.innerHTML  =    `${addZero(min)}`
  secTime.innerHTML  =    `${addZero(sec)}`
  aMpM.innerHTML     =    `${hr >= 12 ? 'PM' : 'AM'}`

}
setInterval(time, 1000);
// clock section end






const mssgUpdate = document.querySelector('#mssg');
const themeIMG = document.querySelector('.box-2-image');
const wishHeading = document.querySelector('.wish');


//img change according to time
var d = new Date();
var hr = d.getHours();


function realTimeFun(){



if(hr>=5 && hr<12){  

      mssgUpdate.innerText ="Wake UP!";
      wishHeading.innerText ="Good Morning!!";
      themeIMG.style.backgroundImage = "url('./Sunny day-bro.svg')";

  }else if(hr>=12 && hr<18){
  
      mssgUpdate.innerText ="Have Some Food!!";
      wishHeading.innerText ="Good Afternoon!!";
      themeIMG.style.backgroundImage = "url('./Pizza sharing-cuate.svg')";

  }else if(hr>=18 && hr<24){
  
        mssgUpdate.innerText ="Take A Nap or just sleep bhai!!";
        wishHeading.innerText ="Good Night!!";
        themeIMG.style.backgroundImage = "url('./Sleep analysis-cuate.svg')";
   
  }else{
    
      mssgUpdate.innerText ="JO KArna HAi KAr bsdk";
      wishHeading.innerText ="Chill Karo";
      themeIMG.style.backgroundImage = "url('./chill.svg')";

  }
};
realTimeFun();
//party btn

const partyBtn = document.querySelector('.wish-button');


partyBtn.addEventListener("click", ()=>{
      partyBtn.innerHTML ="End Pawwry";
      mssgUpdate.innerText ="Hamari Pawwry Hori Hai!!";
      wishHeading.innerText ="let's Party";
      themeIMG.style.backgroundImage = "url('./party2.svg')";
});


  partyBtn.addEventListener("dblclick", ()=>{
    partyBtn.innerHTML ="Let's Pawwry";
    realTimeFun();
    
  });










