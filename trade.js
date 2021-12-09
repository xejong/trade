const cashLabel = document.querySelector('label.cashLabel'),
    myCoinLabel = document.querySelector('label.myCoinLabel'),
    noticeLabel = document.querySelector('label.noticeLabel'),
    cashInput = document.querySelector('input.cashInput'),
    coinInput = document.querySelector('input.coinInput'),
    buyBtn = document.querySelector('button.buyBtn'),
    sellBtn = document.querySelector('button.sellBtn');

const buy100Btn = document.querySelector('button.buy100Btn'),
    buy1000Btn = document.querySelector('button.buy1000Btn'),
    buy10000Btn = document.querySelector('button.buy10000Btn'),
    buyAllBtn = document.querySelector('button.buyAllBtn'),
    buyCleanBtn = document.querySelector('button.buyCleanBtn'),
    sell10Btn = document.querySelector('button.sell10Btn'),
    sell50Btn = document.querySelector('button.sell50Btn'),
    sell100Btn = document.querySelector('button.sell100Btn'),
    sellAllBtn = document.querySelector('button.sellAllBtn'),
    sellCleanBtn = document.querySelector('button.sellCleanBtn');

let cash = 10000;
let myCoin = 0;

function watchCash() {
    cashLabel.innerText = `소지금액 ${cash.toFixed(1)}$`;
}
function watchMyCoins() {
    myCoinLabel.innerText = `코인 ${myCoin.toFixed(3)}개`;
}

function buyCoins() {
    if (cash >= cashInput.value) {
        cash = cash - cashInput.value;
        myCoin += cashInput.value / coin;
        noticeLabel.innerHTML+=`${Number(cashInput.value).toFixed(1)}$로 ${myCoin.toFixed(3)}개의 코인을 매수 완료하였습니다.<br>`
        cashInput.value = "";
        watchCash();
        watchMyCoins();
    } else {
        noticeLabel.innerHTML+="소지금액 부족으로 매수가 불가능합니다.<br>"
    }
}

function sellCoins() {
    if (myCoin >= coinInput.value) {
        myCoin = myCoin - coinInput.value;
        cash += coinInput.value * coin;
        noticeLabel.innerHTML+=`코인 ${Number(coinInput.value).toFixed(3)}개 ${cash.toFixed(1)}$에 매도 완료하였습니다.<br>`
        coinInput.value = "";
        watchCash();
        watchMyCoins();
    } else {
        noticeLabel.innerHTML+="소지한 코인 개수 부족으로 매도가 불가능합니다.<br>"
    }
}

function buy100() {
    cashInput.value = Number(cashInput.value) + 100;
}
function buy1000() {
    cashInput.value = Number(cashInput.value) + 1000;
}
function buy10000() {
    cashInput.value = Number(cashInput.value) + 10000;
}
function buyAll() {
    cashInput.value = cash;
}
function buyClean() {
    cashInput.value = "";
}

function sell10() {
    coinInput.value = Number(coinInput.value) + 10;
}
function sell50() {
    coinInput.value = Number(coinInput.value) + 50;
}
function sell100() {
    coinInput.value = Number(coinInput.value) + 10;
}
function sellAll() {
    coinInput.value = myCoin;
}
function sellClean() {
    coinInput.value = "";
}

buyBtn.addEventListener('click', buyCoins);
sellBtn.addEventListener('click', sellCoins);

buy100Btn.addEventListener('click', buy100);
buy1000Btn.addEventListener('click', buy1000);
buy10000Btn.addEventListener('click', buy10000);
buyAllBtn.addEventListener('click', buyAll);
buyCleanBtn.addEventListener('click', buyClean);

sell10Btn.addEventListener('click', sell10);
sell50Btn.addEventListener('click', sell50);
sell100Btn.addEventListener('click', sell100);
sellAllBtn.addEventListener('click', sellAll);
sellCleanBtn.addEventListener('click', sellClean);

watchCash();
watchMyCoins();