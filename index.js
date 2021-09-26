


let countDownDate = new Date("Sep 27, 2021 04:29:25").getTime();
const switch_minutes = [];
const switch_hours = [];
const switch_days = [];

function countDown() {

    var now = new Date().getTime();

    var gap = countDownDate - now;
    
    var days = Math.floor(gap / (1000 * 60 * 60 * 24)).toLocaleString(undefined,{minimumIntegerDigits: 2});
    //le reste du calcul du nbr de days (%) en nbre heure
    var hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toLocaleString(undefined,{minimumIntegerDigits: 2});
     //le reste du calcul du nbr de hours (%) en nbre minutes
    var minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString(undefined,{minimumIntegerDigits: 2});
    //le reste du calcul du nbr de minutes (%) en nbre msecondes
    var seconds = Math.floor((gap % (1000 * 60)) / 1000).toLocaleString(undefined,{minimumIntegerDigits: 2});
  



//document.getElementById('chrono').innerHTML = (days + ' ' + hours + ' ' + minutes+ ' ' + seconds );
document.getElementById('days-digit').innerHTML = (days);
document.getElementById('hours-digit').innerHTML = (hours);
document.getElementById('minutes-digit').innerHTML = (minutes);
document.getElementById('seconds-digit').innerHTML = (seconds);

//console.log(days,hours,minutes)
/** ADD ATTRIBUT DATA SECONDS */
let att = document.getElementById('seconds');
let att_next = document.getElementById('next');
att.setAttribute("data-num",seconds);
att_next.setAttribute("data-num-next",seconds);

/** ADD ATTRIBUT DATA MINUTES */

let attM = document.getElementById('minutes');
let attM_next = document.getElementById('next-minutes');

attM.setAttribute("data-num",minutes);
attM_next.setAttribute("data-num-next",minutes);

/**if change flip */
let next_minutes = document.getElementById("next-minutes")
next_minutes.style.animationName = "none";

let switch_minutes_number = Number(minutes -1);

  if(switch_minutes_number == -1){
    switch_minutes_number = 59;
  }

switch_minutes.push(switch_minutes_number);


        if(switch_minutes[0] == Number(minutes)) {
        
     
        next_minutes.style.animationName = "fliptop";
        setTimeout(function(){ switch_minutes.length = 0; next_minutes.style.animationName = "none";}, 970);
        
        }



/** ADD ATTRIBUT DATA HOURS */
let attH = document.getElementById('hours');
let attH_next = document.getElementById('next-hours');


attH.setAttribute("data-num",hours);
attH_next.setAttribute("data-num-next",hours);

/**if change flip */
let next_hours = document.getElementById("next-hours")
next_hours.style.animationName = "none";

let switch_hours_number = Number(hours -1);

  if(switch_hours_number == -1){
    switch_hours_number = 23;
  }

switch_hours.push(switch_hours_number);


        if(switch_hours[0] == Number(hours)) {
        
      
        next_hours.style.animationName = "fliptop";
        setTimeout(function(){ switch_hours.length = 0; next_hours.style.animationName = "none";}, 970);
        
        }


/** ADD ATTRIBUT DATA DAYS */
let attD = document.getElementById('days');
let attD_next = document.getElementById('next-days');

attD.setAttribute("data-num",days);
attD_next.setAttribute("data-num-next",days);


/**if change flip */
let next_days = document.getElementById("next-days")
next_days.style.animationName = "none";

let switch_days_number = Number(days -1);

  if(switch_days_number !== -1){
    switch_days.push(switch_days_number);
  }



        if(switch_days[0] == Number(days)) {
        
   
        next_days.style.animationName = "fliptop";
        setTimeout(function(){ switch_days.length = 0; next_days.style.animationName = "none";}, 970);
        
        }


      if (gap < 0) {
        clearInterval(interval);
      
      }
}


// update every second
var interval = setInterval ('countDown()', 1000);

