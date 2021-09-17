const wakeUpImg = document.querySelector('#wake-up');
const lunchImg = document.querySelector('#lunch');
const nightImg = document.querySelector('#night');
const imgChange = document.querySelector('.box-2-image');
const imgChange2 = document.querySelector('.wake-change');

imgChange.addEventListener('click', ()=>{
    lunchImg.style.display = `none`;
    wakeUpImg.style.display = `block`;  
});

wakeUpImg.addEventListener('click', ()=>{
imgChange2.style.display = `none`;
nightImg.style.display = `block`;
});








// Clock section start
const hourTime = document.querySelector('.time-hour');
const minTime = document.querySelector('.time-min');
const secTime = document.querySelector('.time-sec');
const aMpM = document.querySelector('#am-time');

function concatZero(timeFrame) {
    return timeFrame < 10 ? '0'.concat(timeFrame) : timeFrame
}
function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
   
     hourTime.innerHTML =    `${concatZero((h % 12) || 12)}`
     minTime.innerHTML  =    ` ${concatZero(m)}`
     secTime.innerHTML  =    `${concatZero(s)}`
     aMpM.innerHTML     =    `${h >= 12 ? 'PM' : 'AM'}`
}
setInterval(time, 1000);
// clock section end












