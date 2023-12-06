const endDate = "01 January 2024 12:00 AM";
document.getElementById("end-date").textContent = endDate;
const inputs = document.querySelectorAll("input");
const clock = () =>{

    const end = new Date(endDate);
    const now = new Date();
    const difference = (end - now)/1000;//converting milliseconds to seconds by dividing it to 1000
    if (difference < 0) {
        return;
    }
    inputs[0].value = Math.floor((difference / 3600 ) / 24);
    inputs[1].value = Math.floor((difference / 3600) % 24);
    inputs[2].value = Math.floor((difference/ 60) % 60);
    inputs[3].value = Math.floor(difference % 60);

}

setInterval(
    () => {
        clock();
}, 1000);

