// ===== MAYA DIDI LESSON + 30 DAY CHALLENGE SYSTEM =====
(function() {

    // ============ MAYA DIDI LESSONS DATA ============
    const MAYA_LESSONS = {
        lesson1: {
            id: 1,
            title: "Present Tense - Roz ke Kaam",
            intro: "Namaste beta 🙏 Aaj hum sikhenge Present Tense. Ye tab use hota hai jab koi kaam roz hota hai.",
            examples: [
                { en: "I go to school", hi: "Main school jaata hun", explain: "I ke saath 'go' aata hai" },
                { en: "She eats food", hi: "Woh khana khati hai", explain: "She/He ke saath 'eats' - s lagta hai" },
                { en: "They play cricket", hi: "Ve cricket khelte hain", explain: "They/We ke saath 'play' - s nahi lagta" },
                { en: "The sun rises in east", hi: "Suraj purv me nikalta hai", explain: "Sach baat ke liye bhi Present Tense" }
            ],
            quiz: [
                { q: "I ___ to market daily", options: ["go", "goes", "went"], ans: "go", hint: "I ke saath s nahi lagta" },
                { q: "She ___ tea every morning", options: ["drink", "drinks", "drank"], ans: "drinks", hint: "She ke saath s lagao" },
                { q: "They ___ football", options: ["play", "plays", "played"], ans: "play", hint: "They ke saath s nahi lagta" }
            ],
            outro: "Shabaash beta! Present Tense samajh aa gaya. Kal Lesson 2 karenge - Past Tense ⭐"
        },
        lesson2: {
            id: 2,
            title: "Past Tense - Kal Ki Baat",
            intro: "Namaste beta 🙏 Aaj hum sikhenge Past Tense. Ye tab use hota hai jab kaam pehle ho chuka hai.",
            examples: [
                { en: "I went to school yesterday", hi: "Main kal school gaya tha", explain: "Yesterday = past, 'go' ka past 'went' hota hai" },
                { en: "She ate an apple", hi: "Usne ek seb khaya", explain: "Eat ka past 'ate' hota hai" },
                { en: "They played cricket", hi: "Unhone cricket khela", explain: "Regular verb me 'ed' lagta hai: play → played" },
                { en: "We watched a movie last night", hi: "Humne kal raat movie dekhi", explain: "Last night = past, watch → watched" }
            ],
            quiz: [
                { q: "I ___ to market yesterday", options: ["go", "goes", "went"], ans: "went", hint: "Yesterday matlab past tense" },
                { q: "She ___ a song last night", options: ["sing", "sang", "sings"], ans: "sang", hint: "Sing ka past 'sang' hota hai" },
                { q: "They ___ football in the evening", options: ["play", "played", "plays"], ans: "played", hint: "Regular verb + ed" },
                { q: "He ___ his homework", options: ["do", "did", "does"], ans: "did", hint: "Do ka past 'did' hota hai" }
            ],
            outro: "Shabaash beta! Past Tense samajh aa gaya ⭐ Kal Lesson 3 me Future Tense seekhenge."
        }
    };

    // ============ 30 DAY QUIZ DATA ============
    const DAILY_QUIZ = {
        day1: [
            { q: "I ___ a student", options: ["am", "is", "are"], ans: "am" },
            { q: "She ___ my sister", options: ["am", "is", "are"], ans: "is" },
            { q: "They ___ happy", options: ["am", "is", "are"], ans: "are" },
            { q: "He ___ to school", options: ["go", "goes", "going"], ans: "goes" },
            { q: "We ___ football", options: ["play", "plays", "playing"], ans: "play" }
        ],
        day2: [
            { q: "They ___ football", options: ["play", "plays", "playing"], ans: "play" },
            { q: "We ___ tea", options: ["drink", "drinks", "drinking"], ans: "drink" },
            { q: "She ___ book", options: ["read", "reads", "reading"], ans: "reads" }
        ],
        day3: [
            { q: "I ___ yesterday", options: ["go", "went", "goes"], ans: "went" },
            { q: "She ___ a movie", options: ["watch", "watched", "watches"], ans: "watched" },
            { q: "They ___ cricket", options: ["play", "played", "plays"], ans: "played" }
        ]
        // day4 se day30 tak tu add kar de
    };

    // ============ VARIABLES ============
    let currentLesson = null;
    let currentQuizIndex = 0;
    let userScore = 0;
    let userHearts = 3;
    let unlockedDay = parseInt(localStorage.getItem('maya_unlocked_day') || 1);
    let currentDayQuiz = null, currentDayIndex = 0, dayScore = 0, currentPlayingDay = 0;

    // ============ BOX 1: PURPLE BUTTON - CHAT POPUP ============
    window.openChatPopup = function() {
        alert("💬 Maya Didi Chat Popup khulega yahan. API baad me add karenge.");
        // API ka code tu yahan daal dena baad me
    }

    // ============ BOX 2: MAYA LESSON FUNCTIONS ============
    window.startLesson = function(lessonNum) {
        startMayaLesson(lessonNum);
    }

    function startMayaLesson(lessonNum) {
        const chatBox = document.getElementById('chat-messages');
        if (chatBox) chatBox.innerHTML = '';

        currentLesson = MAYA_LESSONS['lesson' + lessonNum];
        if (!currentLesson) return alert("Lesson nahi mila!");

        currentQuizIndex = 0;
        userScore = 0;
        mayaSpeak(currentLesson.intro);
        setTimeout(() => teachExamples(0), 2000);
    }

    function teachExamples(index) {
        if (index >= currentLesson.examples.length) {
            setTimeout(() => {
                mayaSpeak("Ab chhota sa test lete hai beta. Ready?");
                setTimeout(() => askQuizQuestion(), 2000);
            }, 1500);
            return;
        }
        let ex = currentLesson.examples[index];
        mayaSpeak(`${ex.en} = ${ex.hi}. ${ex.explain}`);
        setTimeout(() => teachExamples(index + 1), 3500);
    }

    function askQuizQuestion() {
        if (currentQuizIndex >= currentLesson.quiz.length) {
            endLesson();
            return;
        }
        let q = currentLesson.quiz[currentQuizIndex];
        let optionsText = q.options.map((opt, i) => `${i + 1}. ${opt}`).join(" | ");
        mayaSpeak(`Sawaal ${currentQuizIndex + 1}: ${q.q}. Options: ${optionsText}`);
    }

    window.submitAnswer = function() {
        let input = document.getElementById('userInput');
        if (input.value.trim()!== '') {
            checkMayaAnswer(input.value);
            input.value = '';
        }
    }

    function checkMayaAnswer(userAnswer) {
        let q = currentLesson.quiz[currentQuizIndex];
        let correctAns = q.ans.toLowerCase();
        if (userAnswer.toLowerCase().includes(correctAns)) {
            userScore++;
            mayaSpeak(`Shabaash! Bilkul sahi ✅ ${q.hint}`);
        } else {
            mayaSpeak(`Arre galat ho gaya beta 😅 Sahi answer: ${q.ans}. ${q.hint}`);
        }
        currentQuizIndex++;
        setTimeout(() => askQuizQuestion(), 2500);
    }

    function endLesson() {
        let total = currentLesson.quiz.length;
        mayaSpeak(`${currentLesson.outro} Tumhara score: ${userScore}/${total} ⭐`);
        localStorage.setItem('maya_lesson' + currentLesson.id + '_done', userScore);
    }

    function mayaSpeak(text) {
        console.log("Maya Didi:", text);
        displayMayaMessage(text);
    }

    function displayMayaMessage(text) {
        let chatBox = document.getElementById('chat-messages');
        if (chatBox) {
            chatBox.innerHTML += `<div style="background:#1976d2;color:#fff;padding:12px;border-radius:10px;margin:8px 0;font-size:15px;"><b>Maya Didi:</b> ${text}</div>`;
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }

    // ============ BOX 3: 30 DAY CHALLENGE ============
    window.scrollToChallenge = function() {
        document.getElementById('challenge-section').scrollIntoView({ behavior: 'smooth' });
    }

    function createDayButtons() {
        let container = document.getElementById('day-buttons');
        let heartsSpan = document.getElementById('user-hearts');
        let streakSpan = document.getElementById('user-streak');

        if (!container) return;
        container.innerHTML = '';
        if (heartsSpan) heartsSpan.innerText = userHearts;

        for (let i = 1; i <= 30; i++) {
            let btn = document.createElement('button');
            let isLocked = i > unlockedDay;
            let isCompleted = localStorage.getItem('day' + i + '_done');
            let isCurrent = i === unlockedDay &&!isCompleted;

            btn.className = 'day-btn ' + (isLocked? 'day-locked' : isCompleted? 'day-unlocked' : isCurrent? 'day-current' : 'day-unlocked');
            btn.innerHTML = isLocked? '🔒' : i;

            if (!isLocked) {
                btn.onclick = () => openDayModal(i);
            } else {
                btn.onclick = () => alert(`Day ${i} lock hai 🔐 Pehle Day ${unlockedDay} complete karo`);
            }
            container.appendChild(btn);
        }
    }

    function openDayModal(dayNum) {
        let modal = document.getElementById('modal');
        let modalTitle = document.getElementById('modal-title');
        modalTitle.innerText = `Day ${dayNum}`;
        modal.style.display = 'block';
        modal.classList.remove('hidden');

        document.querySelector('.modal-practice').onclick = () => {
            modal.style.display = 'none';
            startDayQuiz(dayNum);
        };
        document.querySelector('.modal-ads').onclick = () => {
            userHearts = 3;
            document.getElementById('user-hearts').innerText = userHearts;
            alert("Ads dekh ke ❤️ Hearts full ho gaye!");
            modal.style.display = 'none';
        };
    }

    document.getElementById('modal-close').onclick = function() {
        document.getElementById('modal').style.display = 'none';
    }

    function startDayQuiz(dayNum) {
        if (userHearts <= 0) {
            alert("❤️ Hearts khatam! Ads dekho ya kal try karo");
            return;
        }
        currentDayQuiz = DAILY_QUIZ['day' + dayNum];
        if (!currentDayQuiz) return alert("Day " + dayNum + " abhi bana nahi hai");

        currentPlayingDay = dayNum;
        currentDayIndex = 0;
        dayScore = 0;
        showDayQuestion();
    }

    function showDayQuestion() {
        if (currentDayIndex >= currentDayQuiz.length) {
            localStorage.setItem('day' + currentPlayingDay + '_done', 'true');
            if (currentPlayingDay === unlockedDay) {
                unlockedDay++;
                localStorage.setItem('maya_unlocked_day', unlockedDay);
            }
            document.getElementById('practice-questions').innerHTML = `
                <div style="color:#4CAF50;text-align:center;padding:20px;background:#2d2d2d;border-radius:10px;">
                    <h4>🎉 Day ${currentPlayingDay} Complete!</h4>
                    <p>Score: ${dayScore}/${currentDayQuiz.length} ⭐</p>
                    <p>Agla Day Unlock ho gaya 🔓</p>
                </div>`;
            createDayButtons();
            return;
        }

        let q = currentDayQuiz[currentDayIndex];
        let optionsHTML = q.options.map(opt =>
            `<button onclick="checkDayAnswer('${opt}')" style="background:#2196F3;color:white;padding:10px 15px;margin:5px;border:none;border-radius:8px;font-size:14px;cursor:pointer;width:100%;">${opt}</button>`
        ).join('');

        document.getElementById('practice-questions').innerHTML = `
            <div style="background:#2d2d2d;padding:15px;border-radius:10px;margin:10px 0;">
                <div style="color:#FFD700;margin-bottom:10px;font-weight:bold;">Day ${currentPlayingDay} - Q${currentDayIndex + 1}/${currentDayQuiz.length}</div>
                <div style="color:#fff;margin:15px 0;font-size:16px;">${q.q}</div>
                <div>${optionsHTML}</div>
                <div style="color:#ccc;margin-top:15px;font-size:12px;">❤️ ${userHearts} | Score: ${dayScore}/${currentDayQuiz.length}</div>
            </div>`;
    }

    window.checkDayAnswer = function(selected) {
        let q = currentDayQuiz[currentDayIndex];
        if (selected === q.ans) {
            dayScore++;
        } else {
            userHearts--;
            document.getElementById('user-hearts').innerText = userHearts;
        }
        if (userHearts <= 0) {
            document.getElementById('practice-questions').innerHTML = `
                <div style="color:#f44336;text-align:center;padding:20px;background:#2d2d2d;border-radius:10px;">
                    <h4>Hearts Khatam! 😢</h4>
                    <p>Ads dekho ya kal wapas aao</p>
                    <button onclick="userHearts=3;document.getElementById('user-hearts').innerText=3;createDayButtons();document.getElementById('practice-questions').innerHTML=''" style="background:#4CAF50;color:white;padding:10px 20px;border:none;border-radius:8px;margin-top:10px;">Ads Dekh Ke Hearts Lo</button>
                </div>`;
            return;
        }
        currentDayIndex++;
        showDayQuestion();
    }

    // ============ INIT ============
    document.addEventListener('DOMContentLoaded', function() {
        createDayButtons();
    });

})();
