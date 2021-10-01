fetch('https://www.boredapi.com/api/activity')
.then(data=>data.json())
.then(boredData=>{
    const activityText = boredData.activity;
    const activityElement = document.getElementById("activityElement");
    activityElement.innerHTML=activityText;
})