const pswdbtnel = document.getElementById("password-button");
const password = "221123";

const welcomepage = document.getElementById("welcome-page");
const passwordpage = document.getElementById("password-page");
const wlcmbutton = document.getElementById("welcome-button");
const letterpage = document.getElementById("letter-page");
const letterbutton = document.getElementById("letter-button");
const finalpage = document.getElementById("final-page");

const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.3;

let musicStarted = false;

function startMusic() {
    if (musicStarted) return;

    bgMusic.play()
        .then(() => {
            musicStarted = true;
            console.log("Music started");
        })
        .catch(err => {
            console.log("Playback failed:", err);
        });
}

document.addEventListener("touchstart", startMusic, { once: true });
document.addEventListener("click", startMusic, { once: true });


document.addEventListener("visibilitychange", () => {
    if (!musicStarted) return;

    if (document.hidden) {
        bgMusic.pause();
    } else {
        bgMusic.play().catch(err => console.log(err));
    }
});

document.addEventListener("touchstart", startMusic, { once: true });
document.addEventListener("click", startMusic, { once: true });

pswdbtnel.addEventListener("click", function () {

    let inputel = document.getElementById("password-input").value.trim();

    if (inputel === password) {

        passwordpage.style.display = "none";
        welcomepage.style.display = "flex";

    } else if (inputel === "") {

        alert("Date Enter Cheyyi");

    } else {

        alert("Ala ela Marchipothav 😥");

    }
});


wlcmbutton.addEventListener("click", function () {
    welcomepage.style.display = "none";
    letterpage.style.display = "flex";
    letterpage.style.flexDirection = "column";
});


letterbutton.addEventListener("click", function () {
    letterpage.style.display = "none";
    finalpage.style.display = "flex";
});