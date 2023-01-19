const track = document.getElementById("image-track")
let speed = 0;
let run = false;
let options = {
    threshold: 1.0
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("invisible");
        } else {
            entry.target.classList.add("visible");
        }
    });
}, options);

const hiddenElements = document.querySelectorAll(".invisible");
hiddenElements.forEach((el) => observer.observe(el));

function mouseParallax(e) {
    e.preventDefault()
    speed = track.dataset.prevPercentage;

    if (speed <= -95) {
        setTimeout(() => {
            track.dataset.prevPercentage = speed;
            window.removeEventListener("wheel", mouseParallax);
            return;
        }, 500)
    }

    if (e.deltaY > 0) {
        speed -= Math.min((e.deltaY) / 95, 1.5);
    } else {
        speed += Math.max((e.deltaY) / 95, 1.5);
    }

    track.dataset.prevPercentage = speed;
    track.animate({
        transform: `translate(${Math.min(Math.max(speed, -100), 0)}%, -40%)`, // add min and max
    }, { duration: 1300, fill: "forwards", timing: "ease-in" });

    for (const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${Math.min(Math.max((100 + speed), 0), 100)}% center`
        }, { duration: 1300, fill: "forwards", timing: "ease-in" });
        // image.style.objectPosition = `${nextPercentage + 100}% 50%`;
    }
}

window.addEventListener("wheel", mouseParallax, { passive: false });

window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}


window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2 + 500;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextUPercentage = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextUPercentage, 0), -100); //adjust the max (last value) so that it ends up where you want it

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -40%)`,
    }, { duration: 1300, fill: "forwards", timing: "ease-in" });

    for (const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${Math.min((100 + nextPercentage), 100)}% center`
        }, { duration: 1300, fill: "forwards", timing: "ease-in" });
        // image.style.objectPosition = `${nextPercentage + 100}% 50%`;
    }

    setTimeout(() => {
        dragging = false;
    }, 200);
}

