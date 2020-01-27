let position = document.getElementsByTagName("body")[0];
let now = new Date().getTime();
let endDate = new Date(2020, 1, 0, 0, 0, 0, 0).getTime();
let bannerTimer =
{
    id:"bannerTimer",
    minutes: 0,
    hours: 0,
    seconds: 0,
    days: 0,
    timeMax: 1000,
    text:"Time Remaining ",
    element:"",
    node:"",
    dateEnd: ''
};

bannerTimer.element = document.createElement("div");
bannerTimer.node = document.createTextNode(bannerTimer.text)
bannerTimer.element.appendChild(bannerTimer.node);

position.insertBefore(bannerTimer.element, position.childNodes[0]);
bannerTimer.element.setAttribute("id", bannerTimer.id) 

function rephresh(){
    updateTime();
    updateBanner();
}

function updateBanner(){
    bannerTimer.text = "Time Remaining: " + bannerTimer.days + " Days: " + bannerTimer.hours + " Hours: " + bannerTimer.minutes + " Minutes: " + bannerTimer.seconds + " Seconds "
    document.getElementById("bannerTimer").innerHTML = bannerTimer.text;
}


function updateTime(){
now = new Date().getTime();
bannerTimer.dateEnd = endDate - now;
bannerTimer.days = Math.floor(bannerTimer.dateEnd / (1000 * 60 * 60 * 24));
bannerTimer.hours = Math.floor((bannerTimer.dateEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
bannerTimer.minutes = Math.floor((bannerTimer.dateEnd % (1000 * 60 * 60)) / (1000 * 60));
bannerTimer.seconds = Math.floor((bannerTimer.dateEnd % (1000 * 60)) / 1000);
}





// function updateTime(time){
//     bannerTimer.minutes = time.getMinutes();
//     bannerTimer.hours = time.getHours();
// }



setInterval(function(){
    rephresh();
}, 1000)
