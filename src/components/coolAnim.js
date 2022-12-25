const track =  document.getElementById("image-track")
console.log("Script loaded.")

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

window.onmousemove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2 + 300;

    const percentage = (mouseDelta / maxDelta) * -100,
          nextUPercentage = parseFloat(track.dataset.prevPercentage) + percentage,
          nextPercentage = Math.max(Math.min(nextUPercentage, 0), -100); //adjust the max (last value) so that it ends up where you want it

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -40%)`
    }, { duration: 1250, fill:"forwards" });

    for(const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${Math.min((100 + nextPercentage), 100)}% center`
        }, { duration: 1250, fill: "forwards"});
        // image.style.objectPosition = `${nextPercentage + 100}% 50%`;
    }
}

