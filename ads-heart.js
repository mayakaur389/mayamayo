// =========================================
// MAYA ADS + HEART SYSTEM v1.0
// Free = Banner + Full Page Ad after 5min
// Paid = No Ad, No Heart Loss
// =========================================

// 1. SETTING - Yaha apna AdSense ID daal de
const ADSENSE_CLIENT_ID = "ca-pub-XXXXXXXXXXXXXXXX"; // Tera AdSense ID
const BANNER_AD_SLOT = "1234567890"; // Banner ka Slot ID
const INTERSTITIAL_AD_SLOT = "0987654321"; // Full Page ka Slot ID

const MAX_HEARTS = 20;
const AD_COOLDOWN = 5 * 60 * 1000; // 5 Minute ka gap

// Paid check - Vercel ENV ya localStorage se
const isPaid = localStorage.getItem('maya_isPaid') === 'true'; 

// 2. ADSENSE LOAD KARO
function loadAdSense() {
  if (isPaid || document.getElementById('adsbygoogle-script')) return;
  
  const script = document.createElement('script');
  script.id = 'adsbygoogle-script';
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
}

// 3. HEART SYSTEM
function getHearts() { 
  return parseInt(localStorage.getItem('maya_hearts') || MAX_HEARTS); 
}

function setHearts(n) { 
  localStorage.setItem('maya_hearts', n); 
  updateHeartUI(n);
}

function updateHeartUI(n) {
  const heartBox = document.getElementById('heart-box');
  if (heartBox) {
    heartBox.innerText = '❤️'.repeat(n) + '🖤'.repeat(MAX_HEARTS - n);
  }
}

function loseHeart() {
  if (isPaid) return; // Paid ka Heart nahi katega
  let hearts = getHearts() - 1;
  if (hearts < 0) hearts = 0;
  setHearts(hearts);
  
  if (hearts <= 0) {
    showInterstitialAd(); // Heart khatam = Full Page Ad
    showGameOver(); // Game Over screen dikha
  }
}

function refillHearts() {
  setHearts(MAX_HEARTS);
}

// 4. AD SYSTEM
function showBannerAd() {
  if (isPaid) {
    document.getElementById('banner-ad').style.display = 'none';
    return;
  }
  
  const bannerDiv = document.getElementById('banner-ad');
  if (!bannerDiv) return;
  
  bannerDiv.innerHTML = `
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="${ADSENSE_CLIENT_ID}"
         data-ad-slot="${BANNER_AD_SLOT}"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  `;
  bannerDiv.style.display = 'block';
  
  try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch(e) {}
}

function showInterstitialAd() {
  if (isPaid) return; // Paid ko bilkul mat dikha
  
  const lastAdTime = parseInt(localStorage.getItem('maya_lastAdTime') || 0);
  const now = Date.now();
  
  if (now - lastAdTime < AD_COOLDOWN) {
    console.log("Maya: Ad skip - 5 min nahi hue");
    return; // 5 min nahi hue, Ad skip
  }
  
  // AdSense Interstitial - Full Page
  const adDiv = document.createElement('div');
  adDiv.id = 'interstitial-ad';
  adDiv.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:#000a;z-index:9999;display:flex;align-items:center;justify-content:center;';
  adDiv.innerHTML = `
    <div style="background:#fff;padding:20px;border-radius:10px;text-align:center;max-width:90%;">
      <ins class="adsbygoogle"
           style="display:inline-block;width:320px;height:480px"
           data-ad-client="${ADSENSE_CLIENT_ID}"
           data-ad-slot="${INTERSTITIAL_AD_SLOT}"></ins>
      <br><br>
      <button id="closeAdBtn" disabled>Band Karein (5s)</button>
    </div>
  `;
  document.body.appendChild(adDiv);
  
  try { (adsbygoogle = window.adsbygoogle || []).push({}); } catch(e) {}
  
  // 5 sec baad close button on
  let count = 5;
  const btn = document.getElementById('closeAdBtn');
  const timer = setInterval(() => {
    count--;
    btn.innerText = `Band Karein (${count}s)`;
    if (count <= 0) {
      clearInterval(timer);
      btn.disabled = false;
      btn.innerText = "X Band Karein";
      btn.onclick = () => {
        document.body.removeChild(adDiv);
        refillHearts(); // Heart wapas 20 kar de
      };
    }
  }, 1000);
  
  localStorage.setItem('maya_lastAdTime', now);
}

function showGameOver() {
  alert("Tumhare 20 Heart khatam! Ad dekh ke naye Heart lo ❤️");
}

// 5. MAYA KE LIYE HELPER FUNCTION
// 5-7 Sawal baad call karna
function afterQuestions(n) {
  if (n % 6 === 0) { // 6, 12, 18... pe Ad
    showInterstitialAd();
  }
}

// 6. INIT - Page Load pe ye chale
document.addEventListener('DOMContentLoaded', () => {
  loadAdSense();
  
  if (!isPaid) {
    showBannerAd(); // Free wale ko Banner dikha
    if (!localStorage.getItem('maya_hearts')) {
      setHearts(MAX_HEARTS); // Pehli baar 20 Heart set kar de
    } else {
      updateHeartUI(getHearts());
    }
  } else {
    // Paid hai to sab hide + Infinite Heart
    document.getElementById('banner-ad')?.style.setProperty('display', 'none');
    updateHeartUI('∞'); // Infinite dikha de
  }
});

// Expose functions globally so your HTML can call them
window.mayaLoseHeart = loseHeart;
window.mayaAfterQuestions = afterQuestions;
window.mayaShowAd = showInterstitialAd;
