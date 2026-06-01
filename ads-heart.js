// ads-heart.js - No Heart, Only Ads Logic
const PAID_KEY = 'maya_paid_user';
const MODE = window.MAYA_MODE || 'practice';

// Counters
let wrongCount = 0;
let messageCount = 0;

(function(){
    const style = document.createElement('style');
    style.innerHTML = `
        #banner-ad { 
            position: fixed; bottom: 0; left: 0; width: 100%; z-index: 999;
            text-align: center; background: #fff; display: none; min-height: 50px;
        }
        #full-ad-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: #000; z-index: 10001; display: none; 
            align-items: center; justify-content: center; color: #fff;
        }
        #recharge-popup { 
            position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
            background: #0008; z-index: 10000; display: none; align-items: center; justify-content: center; 
        }
        #recharge-box { 
            background: #fff; padding: 25px; border-radius: 15px; text-align: center; max-width: 320px; 
        }
        #recharge-box button { 
            background: #ff9800; color: #fff; border: none; padding: 12px 20px; 
            border-radius: 10px; font-size: 16px; margin-top: 15px; cursor: pointer; width: 100%;
        }
        .close-popup {
            position: absolute; top: 10px; right: 15px; font-size: 24px; cursor: pointer;
        }
    `;
    document.head.appendChild(style);
    
    // Full Ad + Popup ka HTML
    document.body.insertAdjacentHTML('beforeend', `
        <div id="full-ad-overlay">
            <div>
                <h2>Ad Chal Raha Hai...</h2>
                <p id="ad-timer">5</p>
            </div>
        </div>
        
        <div id="recharge-popup">
            <div id="recharge-box">
                <span class="close-popup" onclick="closeRecharge()">×</span>
                <h3>Ad Free Chahiye?</h3>
                <p>5 Message ke baad Ad aata rahega</p>
                <h2>₹99 / Month</h2>
                <p style="color: #666; font-size: 14px;">Unlimited Chat + No Ads</p>
                <button onclick="mayaBuyPro()">Upgrade to Pro ₹99</button>
                <p style="font-size:12px; margin-top:15px; cursor:pointer; color: #2196F3;" onclick="closeRecharge()">Abhi Nahi, Continue</p>
            </div>
        </div>
    `);
})();

// Page Load pe Banner Chalu
function initAds() {
    if (localStorage.getItem(PAID_KEY) === 'true') return;
    document.getElementById('banner-ad').style.display = 'block';
}

// PRACTICE: Har Galat pe Count. 5 Galat = Full Ad
function mayaLoseHeartPractice() {
    if (MODE !== 'practice' || localStorage.getItem(PAID_KEY) === 'true') return;
    
    wrongCount++;
    console.log('Galat Count:', wrongCount);
    
    if (wrongCount >= 5) {
        showFullAd(5, false); // 5 sec ad, popup nahi
        wrongCount = 0; // Reset
    }
}

// MAYA: Har Send pe Count. 5 Send = Full Ad + Popup
function mayaSendMessage() {
    if (MODE !== 'maya' || localStorage.getItem(PAID_KEY) === 'true') return;
    
    messageCount++;
    console.log('Message Count:', messageCount);
    
    if (messageCount >= 5) {
        showFullAd(5, true); // 5 sec ad + popup dikhega
        messageCount = 0; // Reset
    }
}

// 5 Sec Wala Full Ad
function showFullAd(seconds, showPopupAfter) {
    // AdSense Interstitial yaha trigger karo
    // googletag.display('interstitial');
    
    const overlay = document.getElementById('full-ad-overlay');
    const timer = document.getElementById('ad-timer');
    overlay.style.display = 'flex';
    
    let sec = seconds;
    timer.innerText = sec;
    
    const interval = setInterval(() => {
        sec--;
        timer.innerText = sec;
        if (sec <= 0) {
            clearInterval(interval);
            overlay.style.display = 'none';
            
            if (showPopupAfter) {
                document.getElementById('recharge-popup').style.display = 'flex';
            }
        }
    }, 1000);
}

function mayaBuyPro() {
    // Yaha Razorpay link
    alert('₹99 Payment Page pe le jao');
    // Success pe: mayaActivatePaid();
}

function closeRecharge() {
    document.getElementById('recharge-popup').style.display = 'none';
}

function mayaActivatePaid() {
    localStorage.setItem(PAID_KEY, 'true');
    document.getElementById('banner-ad').style.display = 'none';
    closeRecharge();
    alert('👑 Pro Activated! Ab Ad nahi aayega.');
}

// Start
initAds();
