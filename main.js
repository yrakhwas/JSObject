let time=
{
    seconds:59,
    minutes:59,
    hours:23
};
function showTime(time) {
    console.log(time.hours+ ":"+time.minutes+ ":"+time.seconds);
}

function addOneSecond(time){
time.seconds+=1;
if(time.seconds>=60)
{
    time.seconds = 0;
    time.minutes +=1;
    time.hours =time.hours;
    if(time.minutes>=60)
    {
        time.minutes = 0;
        time.hours +=1;
        if(time.hours>=24)
        {
            time.hours =0;
        }
    }
}
}

function removeOneSecond(time) {
    time.seconds -= 1;
    if (time.seconds === -1) {
      time.seconds = 59;
      time.minutes -= 1;
      if (time.minutes === -1) {
        time.minutes = 59;
        time.hours -= 1;
        if (time.hours === -1) {
          time.hours = 23;
        }
      }
    }
  }

function showCurrentTime()
{
    let date = new Date();
    let hour = date.getHours();
    if(hour >1 & hour < 10)
    {
        hour = '0' + hour;
    }
    let minutes = date.getMinutes();
    if(minutes >1 & minutes < 10)
    {
        minutes = '0' + minutes;
    }
    let seconds = date.getSeconds();
    if(seconds >1 & seconds < 10)
    {
        seconds = '0' + seconds;
    }
    document.write(hour + ":" + minutes + ":" + seconds);
}


showCurrentTime();
showTime(time);
addOneSecond(time);
showTime(time);
removeOneSecond(time);
showTime(time);