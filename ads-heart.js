// ads-heart.js - Maya Final v3
const HEART_KEY = 'maya_hearts';
const PAID_KEY = 'maya_paid_user';
const MAX_HEARTS = 20;
const REWARD_HEARTS = 5;
const MODE = window.MAYA_MODE || 'practice';

(function(){
    const style = document.createElement('style');
    style.innerHTML = `
        #heart-box { position: fixed; top: 10px; right: 10px; z-index: 9999;
            font-size: 18px; background: #fff; padding: 6px 12px;
            border-radius: 20px; box-shadow: 0 2px 8px #0003; font-weight: 600; }
        #banner-ad { position: fixed; bottom: 0; left: 0; width: 100%; z-index: 999;
            text-align: center; display: none; background: #fff; }
        #recharge-popup { position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
            background: #0008; z-index: 10000; display: none; align-items: center; justify-content: center; }
        #recharge-box { background: #fff; padding: 25px; border-radius: 15px; text-align: center; max-width: 300px; }
        #recharge-box button { background: #ff9800; color: #fff; border: none; padding: 12px 20px; 
            border-radius: 10px; font-size: 16px; margin-top: 15px; cursor: pointer; }
    `;
    document.head.appendChild(style);
    
    // Popup ka HTML body me daal de
    document.body.insertAdjacentHTML('beforeend', `
        <div id="recharge-popup">
            <div id="recharge-box">
                <h3>❤️ Khatam!</h3>
                <p>Unlimited Khelne ke liye Pro le lo</p>
                <h2>₹99 / Month</h2>
                <button onclick="mayaBuyPro()">Recharge Now ₹99</button>
                <p style="font-size:12px; margin-top:10px; cursor:pointer;" onclick="closeRecharge()">Ya Ad Dekho +5 Heart</p>
            </div>
        </div>
    `);
})();

function initHearts() {
    if (localStorage.getItem(PAID_KEY) === 'true') return;
    if (!localStorage.getItem(HEART_KEY)) {
        localStorage.setItem(HEART_KEY, MODE === 'maya' ? 10 : MAX_HEARTS);
    }
}

function getHearts() {
    if (localStorage.getItem(PAID_KEY) === 'true') return MAX_HEARTS;
    return parseInt(localStorage.getItem(HEART_KEY)) || 0;
}

function updateHeartUI() {
    const box = document.getElementById('heart-box');
    if (!box) return;
    const hearts = getHearts();
    
    if (localStorage.getItem(PAID_KEY) === 'true') {
        box.innerHTML = '👑 Pro';
        document.getElementById('banner-ad').style.display = 'none';
        return;
    }
    
    box.innerHTML = `❤️ ${hearts}`;
    document.getElementById('banner-ad').style.display = MODE === 'practice' ? 'block' : 'none';
}

// PRACTICE: 1 Galat = 1 Heart + Banner
function mayaLoseHeartPractice() {
    if (MODE !== 'practice' || localStorage.getItem(PAID_KEY) === 'true') return;
    let hearts = getHearts();
    if (hearts > 0) {
        hearts--;
        localStorage.setItem(HEART_KEY, hearts);
        updateHeartUI();
        document.getElementById('banner-ad').style.display = 'block';
        if (hearts === 0) alert('❤️ Khatam! Kal aana.');
    }
}

// MAYA: 1 Send = 1 Heart. Heart 0 = Full Ad + Popup
function mayaSendMessage() {
    if (MODE !== 'maya' || localStorage.getItem(PAID_KEY) === 'true') return;
    let hearts = getHearts();
    if (hearts > 0) {
        hearts--;
        localStorage.setItem(HEART_KEY, hearts);
        updateHeartUI();
        
        if (hearts === 0) {
            mayaShowFullAd(); // Full Page Ad chalao
            document.getElementById('recharge-popup').style.display = 'flex'; // Popup dikhao
        }
    } else {
        alert('❤️ Khatam! Pehle Ad dekho.');
    }
}

// REWARD: 1 Ad = 5 Heart, 2 Ad = 10 Heart
let rewardWatchCount = 0;
function mayaWatchRewardAd() {
    closeRecharge();
    rewardWatchCount++;
    
    // Yaha AdSense Reward Ad chalega: googletag.display('reward-ad-unit');
    alert(`Reward Ad ${rewardWatchCount}/2 Complete!`);
    
    let hearts = getHearts() + REWARD_HEARTS;
    if (hearts > MAX_HEARTS) hearts = MAX_HEARTS;
    localStorage.setItem(HEART_KEY, hearts);
    updateHeartUI();
    
    if (rewardWatchCount >= 2) {
        alert('🎉 10 Heart mil gaye!');
        rewardWatchCount = 0;
    } else {
        alert('🎉 5 Heart mil gaye! 1 aur Ad dekho to 10 ho jayenge.');
    }
}

function mayaShowFullAd() { 
    // AdSense Full Page Ad Code yaha
    alert('Full Page Ad Chal Raha Hai'); // Testing
}

function mayaBuyPro() {
    // Yaha Razorpay/PhonePe payment link kholo
    alert('₹99 Payment Page pe le jao');
    // Payment success pe ye chalana: mayaActivatePaid();
}

function closeRecharge() {
    document.getElementById('recharge-popup').style.display = 'none';
    if (getHearts() === 0) {
        mayaWatchRewardAd(); // Popup se "Ad Dekho" click kiya
    }
}

function mayaActivatePaid() {
    localStorage.setItem(PAID_KEY, 'true');
    localStorage.removeItem(HEART_KEY);
    closeRecharge();
    updateHeartUI();
    alert('👑 Pro Activated! Unlimited Heart + No Ad.');
}

// Start
initHearts();
updateHeartUI();
