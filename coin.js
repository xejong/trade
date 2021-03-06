const coinLabel = document.querySelector('label.coinLabel'),
    dateLabel = document.querySelector('label.dateLabel'),
    statLabel = document.querySelector('label.statLabel');

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

        if(coin==0){
            myCoin=0;
            clearInterval(upDownInterval);
            clearInterval(chartInterval);
            noticeLabel.innerHTML+=`코인이 상장폐지되었습니다. 보유중이신 코인이 전량 소멸되었습니다.<br>`;
            noticeDiv.scrollTop=noticeDiv.scrollHeight;
            watchCoins();
            clearInterval(watchCoinsInterval);
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

        myStatus();
    }

    let upDownInterval=setInterval(upDown, 30);
    let watchCoinsInterval=setInterval(watchCoins, 500);
}

function cheakDate() {
    dateLabel.innerText = `[Day ${date}] 전날 종가 ${priceLastDay}$`;
    noticeLabel.innerHTML+=`날짜가 경과되었습니다. 전날 종가 ${priceLastDay}$<br>`
    noticeDiv.scrollTop=noticeDiv.scrollHeight;
}

function myStatus(){
    statLabel.innerHTML=`평가금액 ${(myCoin*coin).toFixed(1)}$`;
}



whatsNext();
cheakDate();