const track = document.getElementById("image-track")
let speed = 0;
console.log("Script loaded.")

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onwheel = (e) => {
    if (e.deltaY > 0){
        speed -= Math.min((e.deltaY)/95, 1.2); //check values
    }else{
        speed += Math.max((e.deltaY)/95, 1.2); //check min / max
    }

    speed = (Math.min(Math.max(speed, -100), 0));

    track.animate({
        transform: `translate(${Math.min(Math.max(speed, -100), 0)}%, -40%)`, // add min and max
    }, { duration: 1300, fill:"forwards", timing:"ease-in" });

    for(const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${Math.min((100 + speed), 100)}% center`
        }, { duration: 1250, fill: "forwards", timing:"ease-in"});
        // image.style.objectPosition = `${nextPercentage + 100}% 50%`;
    }
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2 + 500;

    const percentage = (mouseDelta / maxDelta) * -100,
          nextUPercentage = parseFloat(track.dataset.prevPercentage) + percentage,
          nextPercentage = Math.max(Math.min(nextUPercentage, 0), -100); //adjust the max (last value) so that it ends up where you want it

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -40%)`,
    }, { duration: 1300, fill:"forwards", timing:"ease-in"});

    for(const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${Math.min((100 + nextPercentage), 100)}% center`
        }, { duration: 1250, fill: "forwards", timing:"ease-in"});
        // image.style.objectPosition = `${nextPercentage + 100}% 50%`;
    }
    
    setTimeout(() => {
        dragging = false;
    }, 200);
}

