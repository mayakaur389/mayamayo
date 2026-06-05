// ads-heart.js - Full Control Version | Per Page Logic
const PAID_KEY = 'maya_paid_user';
const MODE = window.MAYA_MODE || 'home'; // home, maya, wrong, game, bol, lesson

// Counters
let messageCount = 0;
let wrongCount = 0;

(function(){
    const style = document.createElement('style');
    style.innerHTML = `
        #banner-ad {
            position: fixed; bottom: 0; left: 0; width: 100%; z-index: 999;
            text-align: center; background: #0d1117; display: none;
            min-height: 0px; border-top: none;
        }
        #banner-ad.ads-loaded {
            min-height: 50px;
            border-top: 1px solid #21262d;
        }
        body.ads-active {
            padding-bottom: 50px!important;
        }
        #full-ad-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: #000; z-index: 10001; display: none;
            align-items: center; justify-content: center; color: #fff; text-align: center;
        }
        #ad-timer { font-size: 48px; font-weight: bold; margin-top: 10px; }
        #recharge-popup {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: #0008; z-index: 10000; display: none; align-items: center; justify-content: center;
        }
        #recharge-box {
            background: #fff; padding: 25px; border-radius: 15px; text-align: center; max-width: 320px; position: relative;
        }
        #recharge-box button {
            background: #ff9800; color: #fff; border: none; padding: 12px 20px;
            border-radius: 10px; font-size: 16px; margin-top: 15px; cursor: pointer; width: 100%;
        }
        .close-popup {
            position: absolute; top: 10px; right: 15px; font-size: 24px; cursor: pointer; line-height: 1;
        }
    `;
    document.head.appendChild(style);

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
                <p>Bar bar Ad dekhna padega</p>
                <h2>₹99 / Month</h2>
                <p style="color: #666; font-size: 14px;">Unlimited + No Ads</p>
                <button onclick="mayaBuyPro()">Upgrade to Pro ₹99</button>
                <p style="font-size:12px; margin-top:15px; cursor:pointer; color: #2196F3;" onclick="closeRecharge()">Abhi Nahi</p>
            </div>
        </div>
    `);
})();

// Banner Ad - Sirf ad aane pe space lega
function initBanner() {
    if (localStorage.getItem(PAID_KEY) === 'true') return;
    const banner = document.getElementById('banner-ad');
    banner.style.display = 'block';
    (adsbygoogle = window.adsbygoogle || []).push({});
    setTimeout(() => {
        if (banner.querySelector('iframe')) {
            banner.classList.add('ads-loaded');
            document.body.classList.add('ads-active');
        } else {
            banner.style.display = 'none';
        }
    }, 2000);
}

// 5 Sec Full Ad
// 5 Sec Full Ad - Fixed Version
function showFullAd(callback) {
  if (localStorage.getItem(PAID_KEY) === 'true') {
    if (callback) callback();
    return;
  }

  let count = 5;
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);z-index:99999;color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column;font-size:24px;font-family:sans-serif';
  overlay.innerHTML = `<div>Ad Chal Raha Hai...</div><div id="ad-timer" style="font-size:48px;margin-top:20px;font-weight:bold">5</div>`;
  document.body.appendChild(overlay);
  
  const timer = setInterval(() => {
    count--;
    document.getElementById('ad-timer').innerText = count;
    if (count <= 0) {
      clearInterval(timer);
      overlay.remove();
      if (callback) callback();
    }
  }, 1000);
  
  // AdSense Interstitial yaha lagana approval ke baad
  // googletag.display('interstitial');
}
// 1. MAYA SE GUPSHUP - 5-8 msg ke baad ad
function mayaSendMessage() {
    if (MODE !== 'maya' || localStorage.getItem(PAID_KEY) === 'true') return;
    messageCount++;
    if (messageCount >= 5 && messageCount <= 8) { // 5 se 8 ke beech random
        showFullAd(5, true);
        messageCount = 0;
    }
}

// 2. WRONG QUESTIONS - Page khulte hi ad
function mayaWrongPageLoad() {
    if (MODE !== 'wrong' || localStorage.getItem(PAID_KEY) === 'true') return;
    showFullAd(5, false); // Page load pe 1 baar
}

// 3. SUN KE JODO GAME - 5-7 galat pe ad
function mayaGameWrong() {
    if (MODE !== 'game' || localStorage.getItem(PAID_KEY) === 'true') return;
    wrongCount++;
    if (wrongCount >= 5 && wrongCount <= 7) {
        showFullAd(5, false);
        wrongCount = 0;
    }
}

// 4. BOL KE PRACTICE - 5-7 galat pe ad
function mayaBolWrong() {
    if (MODE !== 'bol' || localStorage.getItem(PAID_KEY) === 'true') return;
    wrongCount++;
    if (wrongCount >= 5 && wrongCount <= 7) {
        showFullAd(5, false);
        wrongCount = 0;
    }
}

// 5. DAY WISE LESSON - Lesson complete pe ad, fir agla open
function mayaLessonComplete(nextLessonFunction) {
    if (MODE !== 'lesson' || localStorage.getItem(PAID_KEY) === 'true') {
        if (nextLessonFunction) nextLessonFunction();
        return;
    }
    showFullAd(5, false, nextLessonFunction); // Ad ke baad agla lesson
}

function mayaBuyPro() {
    alert('₹99 Payment Page pe le jao');
    // mayaActivatePaid();
}

function closeRecharge() {
    document.getElementById('recharge-popup').style.display = 'none';
}

function mayaActivatePaid() {
    localStorage.setItem(PAID_KEY, 'true');
    document.getElementById('banner-ad').style.display = 'none';
    document.body.classList.remove('ads-active');
    closeRecharge();
    alert('👑 Pro Activated!');
}

// Start
initBanner();
if (MODE === 'wrong') mayaWrongPageLoad(); // Wrong page pe auto ad
