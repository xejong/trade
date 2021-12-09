const coinLabel = document.querySelector('label.coinLabel');
const dateLabel = document.querySelector('label.dateLabel');

let coin = 100;
let date = 1;
let priceLastDay = 100;
let changeRate = 0;
let changeUpDown;
let whatsTheColor = '#FF165D';
function whatsNext() {

    let random;
    coinLabel.innerText = coin;
    function upDown() {
        random = Math.ceil(Math.random() * 8);
        if (random < 4) {
            coin++;
        } else if (random > 5) {
            coin--;
        }
    }
    function watchCoins() {
        if (coin > priceLastDay) {
            whatsTheColor = '#FF165D';
            coinLabel.style.color = whatsTheColor;
            changeRate = Math.ceil(((coin / priceLastDay) * 100) - 100);
            changeUpDown = '▲';
        } else {
            whatsTheColor = '#3EC1D3';
            coinLabel.style.color = whatsTheColor;
            changeRate = Math.ceil((((coin / priceLastDay) * 100) - 100) * -1);
            changeUpDown = '▼';
        }
        coinLabel.innerText = `Price: ${coin}$ ${changeUpDown}${changeRate}%`;
    }

    setInterval(upDown, 30);
    setInterval(watchCoins, 500);
}

function cheakDate() {
    dateLabel.innerText = `[Day ${date}] 전날 최고종가 ${priceLastDay}$`;
}

whatsNext();
cheakDate();