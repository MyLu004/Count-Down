//Toggle element
const Img = document.getElementById('myImg');
const colorMode = document.querySelector('.changecolor');
const mycountDown = document.querySelector('.countdown');
const myIcon = document.querySelector('.icon_tw1');
const myIcon_alt = document.querySelector('.icon_tw2');
const myheading = document.querySelector('h1');
const myName = document.querySelector('.user_name');
const myAudio = document.getElementById('myAudio');
const AudioSource = document.getElementById('AudioSource');
//countdown Element
const days  = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 1 ${currentYear+1} 00:00:00`);
const checking_countdownTime = 6000; //6 seconds

//Update CountDownTime
function updateCountdowntime(){
    const currentTime = new Date();
    
    const newYearTimeNewYork = new Date(`January 1 ${currentYear + 1} 00:00:00 GMT-0500`);
    //const diff = newYearTime - currentTime;

    const diff = newYearTimeNewYork - currentTime;


    //second / minute(60 seconds)/ hours(60 minutes) / days (24 hours)
    const d = Math.floor(diff/ 1000 / 60 / 60 / 24);

    //hours
    const h = Math.floor(diff/ 1000 / 60 / 60 ) %24;
    
    //minutes
    const m = Math.floor(diff/ 1000  / 60 ) %60;

    //seconds
    const s = Math.floor(diff/ 1000 ) %60;
    

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h ;
    minutes.innerHTML = m < 10 ? '0' + m : m ;
    seconds.innerHTML = s < 10 ? '0' + s : s ;

    if(d === 0 && h === 0 && m === 0 && s === 0){
        toggleElement();
    }

}

// setTimeout(() =>{
//     toggleElement();
// },6000);

function toggleElement(){
    colorMode.classList.toggle('active');
    Img.classList.toggle('active');
    mycountDown.classList.toggle('active');
    myIcon.classList.toggle('active');
    myIcon_alt.classList.toggle('active');
    myheading.classList.toggle('active');
    myName.classList.toggle('active');
    

    if (Img.classList.contains('active') && (myIcon.classList.contains('active'))){
        Img.src = "beardance.gif";
        myIcon.src = "firework_pixel.gif";
        myIcon_alt.src = "firework_pixel.gif";
        myheading.innerHTML = "HAPPY NEW YEAR";
        myName.innerHTML = "Your Name";

        //change the audio source
        AudioSource.src = "frad_first_date_lofi.mp3";

        //Load and Play the update audio
        myAudio.load();
        myAudio.onplay();

    }
}

setInterval(updateCountdowntime, 1000);
