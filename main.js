


function myTime() {
    var date = new Date();
    var current_date =  date.toDateString();
    var myDate = document.getElementById("date");
    myDate.innerHTML = current_date;
   
    var current_time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    var theTime = document.getElementById("time");
    theTime.innerHTML = current_time;

}

myTime();   

setInterval(myTime, 1000);

