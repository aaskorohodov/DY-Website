const bannerText = 'Building great content, hold tight......... Almost there.........Done!'
const bannerImgEl = document.getElementById('banner-img');
const bannerTextEl = document.getElementById('banner-text');
const mainContentEl = document.getElementById('main-content');

async function bannerTextCreator() {
    let currentText = '';

    for (let i = 0; i < bannerText.length; i++) {
        let symbol = bannerText[i];
        currentText += symbol;

        if (symbol == '.') {
            await sleep(150);
        }
        else {
            await sleep(50);
        };
        bannerTextEl.textContent = currentText;
    };

    await sleep(1000);
    bannerImgEl.style.opacity = 1;
    bannerTextEl.style.opacity = 0;
    await sleep(1000);
    mainContentEl.style.opacity = 1;
};

bannerTextCreator();