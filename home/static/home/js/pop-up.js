async function connectPopUp() {
    let button = document.getElementById('season-3-bot');
    button.addEventListener('click', openPopUp);

    let closePopUpElement = document.getElementById("close-pop-up");
    closePopUpElement.addEventListener("click", closePopUp);
};

function openPopUp() {
    let popupContent = document.getElementById("popupContent");
    let content = `
    <p class="warning">Warning! NSFW! 18+!</p>
    <p>Bot address - <a href="https://t.me/SggesterBot">https://t.me/SggesterBot</a></p>
    <p>Bot password - free_invite</p>
    `
    popupContent.innerHTML = content;
    document.getElementById("myModal").style.display = "block";
    setPosition('unset');
};

function closePopUp() {
    let popupContent = document.getElementById("popupContent");
    popupContent.innerHTML = '';
    document.getElementById("myModal").style.display = "none";
    setPosition('relative');
};

function setPosition(property) {
    let mainULandP = document.querySelectorAll('main ul, main p');
    mainULandP.forEach(element => {
        element.style.position = property
    });
};

connectPopUp();