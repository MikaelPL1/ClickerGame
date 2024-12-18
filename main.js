const hunaja = document.getElementById("hunajac");
const kuva1 = document.getElementById("mainkuva");
const audioPlayer = document.getElementById('audioPlayer');
const audio2 = document.getElementById("audioPlayer2");


const ekaupgrade = document.getElementById("upgrade-eka");
const ekaamount = document.getElementById("ekaamount");
const ekamaksu1 = document.getElementById("ekamaksu1");
const ekahpc = document.getElementById("ekahpc"); 

const tokaupgrade = document.getElementById("upgrade-toka");
const tokamount = document.getElementById("tokamount");
const tokamaksu1 = document.getElementById("tokamaksu");
const tokhpc = document.getElementById("tokhpc");  

const kolmasmaksu1 = document.getElementById("kolmasmaksu");
const kolmasamount = document.getElementById("kolmasamount");
const kolmasupgrade = document.getElementById("upgrade-kolmas");
const kolmashpc = document.getElementById("kolmashpc"); 

const neljassmaksu1 = document.getElementById("neljasmaksu");
const neljasamount = document.getElementById("neljasamount");
const neljasupgrade = document.getElementById("upgrade-neljas");
const neljashpc = document.getElementById("neljashpc");

const totalhps1 = document.getElementById("totalhps1");

const skin1 = document.getElementById('skin1');
const skin2 = document.getElementById('skin2');
const skin3 = document.getElementById('skin3');

const purchaseButton1 = document.getElementById('purchase1');
const purchaseButton2 = document.getElementById('purchase2');
const enableButton1 = document.getElementById('enable1');
const enableButton2 = document.getElementById('enable2');
const enableButton3 = document.getElementById('enable3');

let hunajamaara = 0;
let ek1 = 0;
let tk1 = 0;
let kolmascount = 0;
let neljascount = 0;
let honeyMultiplier = 1;

let ekamaksu = 100;
let tokamaksu = 500;
let kolmasmaksu = 1000;
let neljasmaksu = 2500;

ekaupgrade.disabled = true;
tokaupgrade.disabled = true;
kolmasupgrade.disabled = true;
neljasupgrade.disabled = true;

let totalHPC = 0;

window.onload = function(){
    totalHPC += 1;
    totalhps1.textContent = totalHPC;
}

function hunajaa() {
    setInterval(() => {
        hunajamaara += totalHPC;
        hunaja.textContent = Math.floor(hunajamaara);
    }, 1000); 
}

kuva1.onclick = function (event) {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
    hunajamaara = hunajamaara + honeyMultiplier;
    hunaja.textContent = Math.floor(hunajamaara);

    ekaupgrade.disabled = hunajamaara < ekamaksu;
    tokaupgrade.disabled = hunajamaara < tokamaksu;
    kolmasupgrade.disabled = hunajamaara < kolmasmaksu;
    neljasupgrade.disabled = hunajamaara < neljasmaksu;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const textElement = document.createElement("div");
    textElement.id = "falling-text"; 
    textElement.innerText = "+ Honey"; 

    textElement.style.left = mouseX + "px";
    textElement.style.top = mouseY + "px";

    document.body.appendChild(textElement);

    textElement.style.display = "block";

    setTimeout(function() {
        textElement.remove();
    }, 2000);
    totalhps1.textContent = totalHPC;
};


ekaupgrade.onclick = function () {
    if (hunajamaara >= ekamaksu) {
        audio2.currentTime = 0;
        audio2.playbackRate = 1.5;
        audio2.play();
        ek1 = ek1 + 1;
        hunajamaara = hunajamaara - ekamaksu;
        ekamaksu = Math.ceil(1.5 * ekamaksu / 10) * 10;

        honeyMultiplier = 1 + ek1 + 5;

        totalHPC += 1;  
        ekahpc.textContent = ek1;

        hunaja.textContent = Math.floor(hunajamaara);
        ekaamount.textContent = ek1;
        ekamaksu1.textContent = ekamaksu;
        totalhps1.textContent = totalHPC;
    }
};

tokaupgrade.onclick = function () {
    if (hunajamaara >= tokamaksu) {
        audio2.currentTime = 0;
        audio2.playbackRate = 1.5;
        audio2.play();
        tk1 = tk1 + 1;
        hunajamaara = hunajamaara - tokamaksu;
        tokamaksu = Math.ceil(1.5 * tokamaksu / 50) * 50;

        honeyMultiplier = 1 + ek1 + tk1 + 10;

        totalHPC += 3; 
        tokhpc.textContent = 3 * tk1;

        hunaja.textContent = Math.floor(hunajamaara);
        tokamount.textContent = tk1;
        tokamaksu1.textContent = tokamaksu;
        totalhps1.textContent = totalHPC;
    }
};

kolmasupgrade.onclick = function () {
    if (hunajamaara >= kolmasmaksu) {
        audio2.currentTime = 0;
        audio2.playbackRate = 1.5;
        audio2.play();
        kolmascount = kolmascount + 1;
        hunajamaara = hunajamaara - kolmasmaksu;
        kolmasmaksu = Math.ceil(1.5 * kolmasmaksu / 100) * 100;

        honeyMultiplier = 1 + ek1 + tk1 + kolmascount + 15;

        totalHPC += 5;  
        kolmashpc.textContent = 5 * kolmascount;

        hunaja.textContent = Math.floor(hunajamaara);
        kolmasamount.textContent = kolmascount;
        kolmasmaksu1.textContent = kolmasmaksu;
        totalhps1.textContent = totalHPC;
    }
};

neljasupgrade.onclick = function () {
    if (hunajamaara >= neljasmaksu) {
        audio2.currentTime = 0;
        audio2.playbackRate = 1.5;
        audio2.play();
        neljascount = neljascount + 1;
        hunajamaara = hunajamaara - neljasmaksu;
        neljasmaksu = Math.ceil(1.5 * neljasmaksu / 100) * 100;

        honeyMultiplier = 1 + ek1 + tk1 + kolmascount + neljascount + 25;

        totalHPC += 10;  
        neljashpc.textContent = 10 * neljascount;

        hunaja.textContent = Math.floor(hunajamaara);
        neljasamount.textContent = neljascount;
        neljassmaksu1.textContent = neljasmaksu;
        totalhps1.textContent = totalHPC;
    }
};

hunajaa();
const skinOptions = [skin1, skin2, skin3];
skinOptions.forEach((skin, index) => {
    const enableButton = skin.querySelector('.enable-button');
    const purchaseButton = skin.querySelector('.purchase-button');
    const costElement = skin.querySelector('.skin-cost');
    const cost = costElement ? parseInt(costElement.textContent, 10) : 0;

    if (purchaseButton) {
        purchaseButton.onclick = function() {
            if (hunajamaara >= cost) {
                audio2.currentTime = 0;
                audio2.playbackRate = 1.5;
                audio2.play();

                hunajamaara -= cost;
                hunaja.textContent = Math.floor(hunajamaara);

                purchaseButton.style.display = 'none';
                enableButton.style.display = 'inline-block';
            }
        };
    }

    enableButton.onclick = function() {
        const skinName = skin.querySelector('h3').textContent;

        if (skinName === 'Miner Bee') {
            kuva1.src = 'lataus (1).png';
        } else if (skinName === 'Queen') {
            kuva1.src = 'lataus (3).png';
        } else if (skinName === 'Regular Bee') {
            kuva1.src = 'lataus.png';
        }

        skinOptions.forEach(s => s.classList.remove('active-skin'));
        skin.classList.add('active-skin');
        enableButton.textContent = 'Enabled';
        enableButton.disabled = true;

        skinOptions.forEach(otherSkin => {
            const otherEnableButton = otherSkin.querySelector('.enable-button');
            if (otherSkin !== skin) {
                otherEnableButton.textContent = 'Enable';
                otherEnableButton.disabled = false;
            }
        });
    };

    if (!costElement) {
        enableButton.style.display = 'inline-block';
        purchaseButton.style.display = 'none';
    }
});
