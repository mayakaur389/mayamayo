// ads-heart.js - Fixed Upar + Reward Ad + ₹99 Plan
const HEART_KEY = 'maya_hearts';
const PAID_KEY = 'maya_paid_user';
const MAX_HEARTS = 20;
const REWARD_HEARTS = 5;

// Page load hote hi upar chipka de - CSS ek baar me
(function(){
    const style = document.createElement('style');
    style.innerHTML = `
        #heart-box {
            position: fixed; top: 10px; right: 10px; z-index: 9999;
            font-size: 20px; background: #fff; padding: 5px 12px;
            border-radius: 15px; box-shadow: 0 2px 8px #0003;
        }
        #banner-ad {
            position: fixed; bottom: 0; left: 0; width: 100%; z-index: 999;
            text-align: center; display: none; background: #fff;
        }
    `;
    document.head.appendChild(style);
})();

function getHearts() {
    if (localStorage.getItem(PAID_KEY) === 'true') return MAX_HEARTS;
    return parseInt(localStorage.getItem(HEART_KEY)) || MAX_HEARTS;
}

function updateHeartUI() {
    const box = document.getElementById('heart-box');
    if (!box) return;
    const hearts = getHearts();
    
    if (localStorage.getItem(PAID_KEY) === 'true') {
        box.innerHTML = '👑 Pro'; // ₹99 wala dikhega
        document.getElementById('banner-ad').style.display = 'none'; // Ad band
        return;
    }
    
    let html = '❤️'.repeat(hearts);
    if (hearts === 0) {
        html += `<br><button onclick="mayaWatchRewardAd()" style="font-size:12px; background:#ff9800; color:#fff; border:none; padding:5px 10px; border-radius:8px; margin-top:5px;">Ad Dekho +5 ❤️</button>`;
    }
    box.innerHTML = html;
    document.getElementById('banner-ad').style.display = 'block'; // Free user ko Ad chalu
}

function mayaLoseHeart() {
    if (localStorage.getItem(PAID_KEY) === 'true') return;
    let hearts = getHearts();
    if (hearts > 0) {
        hearts--;
        localStorage.setItem(HEART_KEY, hearts);
        updateHeartUI();
        if (hearts === 0) alert('❤️ Khatam! Ad dekho ya kal aana.');
    }
}

function mayaWatchRewardAd() {
    if (getHearts() > 0) return;
    alert('Reward Ad Dekhne ke liye Ready! Approval ke baad asli Ad chalega.');
    localStorage.setItem(HEART_KEY, REWARD_HEARTS);
    updateHeartUI();
    alert('🎉 5 Heart mil gaye! Wapas Khelo.');
}

function mayaResetHearts() {
    if (localStorage.getItem(PAID_KEY) === 'true') return;
    localStorage.setItem(HEART_KEY, MAX_HEARTS);
    updateHeartUI();
}

// ₹99 PLAN KE LIYE YE FUNCTION CHALA DENA
function mayaActivatePaid() {
    localStorage.setItem(PAID_KEY, 'true');
    localStorage.removeItem(HEART_KEY);
    updateHeartUI();
    alert('👑 Pro Activated! Ab Unlimited Heart + No Ad + No Banner.');
}

updateHeartUI();
