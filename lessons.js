const lessons = [
  { title: "Present Tense", day: 1, questions: [
    { q: "I _ to school daily.", options: ["go", "goes", "going"], answer: "go", hindi: "मैं रोज स्कूल जाता हूँ", english: "I _ to school daily." },
    { q: "She _ a book.", options: ["read", "reads", "reading"], answer: "reads", hindi: "वह एक किताब पढ़ती है", english: "She _ a book." },
    { q: "They _ football.", options: ["play", "plays", "playing"], answer: "play", hindi: "वे फुटबॉल खेलते हैं", english: "They _ football." },
    { q: "We _ water every morning.", options: ["drink", "drinks", "drinking"], answer: "drink", hindi: "हम हर सुबह पानी पीते हैं", english: "We _ water every morning." },
    { q: "He _ to the store.", options: ["go", "goes", "going"], answer: "goes", hindi: "वह दुकान पर जाता है", english: "He _ to the store." },
    { q: "The cat _ milk.", options: ["drink", "drinks", "drinking"], answer: "drinks", hindi: "बिल्ली दूध पीती है", english: "The cat _ milk." },
    { q: "I _ my homework.", options: ["do", "does", "doing"], answer: "do", hindi: "मैं अपना होमवर्क करता हूँ", english: "I _ my homework." },
    { q: "You _ very fast.", options: ["run", "runs", "running"], answer: "run", hindi: "तुम बहुत तेज दौड़ते हो", english: "You _ very fast." }
  ]},
  { title: "Past Tense", day: 2, questions: [
    { q: "I _ to school yesterday.", options: ["go", "went", "gone"], answer: "went", hindi: "मैं कल स्कूल गया था", english: "I _ to school yesterday." },
    { q: "He _ a movie last night.", options: ["watch", "watched", "watching"], answer: "watched", hindi: "उसने कल रात फिल्म देखी", english: "He _ a movie last night." },
    { q: "She _ her homework.", options: ["did", "do", "done"], answer: "did", hindi: "वहने अपना होमवर्क किया", english: "She _ her homework." },
    { q: "They _ to the park.", options: ["go", "went", "going"], answer: "went", hindi: "वे पार्क गए थे", english: "They _ to the park." },
    { q: "We _ dinner at 8 PM.", options: ["eat", "ate", "eating"], answer: "ate", hindi: "हमने रात 8 बजे खाना खाया", english: "We _ dinner at 8 PM." },
    { q: "He _ his keys.", options: ["lose", "lost", "losing"], answer: "lost", hindi: "उसने अपनी चाबियाँ खो दीं", english: "He _ his keys." },
    { q: "I _ a book yesterday.", options: ["read", "reads", "reading"], answer: "read", hindi: "मैंने कल एक किताब पढ़ी", english: "I _ a book yesterday." },
    { q: "They _ to music.", options: ["listen", "listened", "listening"], answer: "listened", hindi: "वे संगीत सुन रहे थे", english: "They _ to music." }
  ]},
  { title: "Future Tense", day: 3, questions: [
    { q: "I _ go to Delhi tomorrow.", options: ["will", "shall", "would"], answer: "will", hindi: "मैं कल दिल्ली जाऊँगा", english: "I _ go to Delhi tomorrow." },
    { q: "She _ a doctor.", options: ["is", "will be", "was"], answer: "will be", hindi: "वह एक डॉक्टर बनेगी", english: "She _ a doctor." },
    { q: "They _ to the party.", options: ["come", "will come", "came"], answer: "will come", hindi: "वे पार्टी आएंगे", english: "They _ to the party." },
    { q: "He _ his exam.", options: ["pass", "will pass", "passed"], answer: "will pass", hindi: "वह अपनी परीक्षा पास करेगा", english: "He _ his exam." },
    { q: "We _ to the beach.", options: ["go", "will go", "went"], answer: "will go", hindi: "हम समुद्र तट जाएंगे", english: "We _ to the beach." },
    { q: "I _ my homework tomorrow.", options: ["do", "will do", "did"], answer: "will do", hindi: "मैं कल अपना होमवर्क करूँगा", english: "I _ my homework tomorrow." },
    { q: "She _ a song.", options: ["sing", "will sing", "sang"], answer: "will sing", hindi: "वह एक गाना गाएगी", english: "She _ a song." },
    { q: "They _ the project.", options: ["complete", "will complete", "completed"], answer: "will complete", hindi: "वे प्रोजेक्ट पूरा करेंगे", english: "They _ the project." }
  ]},
  { title: "Nouns & Pronouns", day: 4, questions: [
    { q: "_ is my friend.", options: ["He", "Him", "His"], answer: "He", hindi: "वह मेरा मित्र है", english: "_ is my friend." },
    { q: "This is _ book.", options: ["my", "mine", "me"], answer: "my", hindi: "यह मेरी किताब है", english: "This is _ book." },
    { q: "She gave _ a gift.", options: ["I", "me", "my"], answer: "me", hindi: "उसने मुझे एक उपहार दिया", english: "She gave _ a gift." },
    { q: "_ are going to the store.", options: ["They", "Them", "Their"], answer: "They", hindi: "वे दुकान जा रहे हैं", english: "_ are going to the store." },
    { q: "The dog is _.", options: ["my", "mine", "me"], answer: "mine", hindi: "यह कुत्ता मेरा है", english: "The dog is _." },
    { q: "_ is a good teacher.", options: ["She", "Her", "Hers"], answer: "She", hindi: "वह एक अच्छी शिक्षक है", english: "_ is a good teacher." },
    { q: "I like _ shirt.", options: ["your", "you", "yours"], answer: "your", hindi: "मुझे तुम्हारी शर्ट पसंद है", english: "I like _ shirt." },
    { q: "_ are my friends.", options: ["They", "Them", "Their"], answer: "They", hindi: "वे मेरे दोस्त हैं", english: "_ are my friends." }
  ]},
  { title: "Verbs", day: 5, questions: [
    { q: "I _ eating.", options: ["am", "is", "are"], answer: "am", hindi: "मैं खा रहा हूँ", english: "I _ eating." },
    { q: "She _ a doctor.", options: ["is", "am", "are"], answer: "is", hindi: "वह एक डॉक्टर है", english: "She _ a doctor." },
    { q: "They _ playing.", options: ["is", "am", "are"], answer: "are", hindi: "वे खेल रहे हैं", english: "They _ playing." },
    { q: "He _ running.", options: ["is", "am", "are"], answer: "is", hindi: "वह दौड़ रहा है", english: "He _ running." },
    { q: "We _ going.", options: ["is", "am", "are"], answer: "are", hindi: "हम जा रहे हैं", english: "We _ going." },
    { q: "I _ happy.", options: ["is", "am", "are"], answer: "am", hindi: "मैं खुश हूँ", english: "I _ happy." },
    { q: "You _ my friend.", options: ["is", "am", "are"], answer: "are", hindi: "तुम मेरे दोस्त हो", english: "You _ my friend." },
    { q: "She _ singing.", options: ["is", "am", "are"], answer: "is", hindi: "वह गा रही है", english: "She _ singing." }
  ]},
    { title: "Adjectives", day: 6, questions: [
    { q: "She is a _ student.", options: ["good", "well", "better"], answer: "good", hindi: "वह एक अच्छी छात्रा है", english: "She is a _ student." },
    { q: "This is _ than that.", options: ["better", "best", "good"], answer: "better", hindi: "यह उससे बेहतर है", english: "This is _ than that." },
    { q: "He is the _ boy in class.", options: ["tall", "taller", "tallest"], answer: "tallest", hindi: "वह कक्षा का सबसे लंबा लड़का है", english: "He is the _ boy in class." },
    { q: "The cake is _.", options: ["delicious", "deliciously", "delight"], answer: "delicious", hindi: "केक स्वादिष्ट है", english: "The cake is _." },
    { q: "She sings _.", options: ["beautiful", "beautifully", "beauty"], answer: "beautifully", hindi: "वह सुंदर गाती है", english: "She sings _." },
    { q: "This book is _ than that one.", options: ["interesting", "more interesting", "most interesting"], answer: "more interesting", hindi: "यह किताब उससे ज्यादा रोचक है", english: "This book is _ than that one." },
    { q: "The weather is _ today.", options: ["cold", "colder", "coldest"], answer: "cold", hindi: "आज मौसम ठंडा है", english: "The weather is _ today." },
    { q: "He is a _ driver.", options: ["careful", "carefully", "care"], answer: "careful", hindi: "वह एक सावधान ड्राइवर है", english: "He is a _ driver." }
  ]},
  { title: "Prepositions", day: 7, questions: [
    { q: "The book is _ the table.", options: ["on", "in", "at"], answer: "on", hindi: "किताब टेबल पर है", english: "The book is _ the table." },
    { q: "She arrived _ 5 PM.", options: ["at", "in", "on"], answer: "at", hindi: "वह 5 बजे पहुंची", english: "She arrived _ 5 PM." },
    { q: "He is good _ maths.", options: ["at", "in", "on"], answer: "at", hindi: "वह गणित में अच्छा है", english: "He is good _ maths." },
    { q: "We went _ car.", options: ["by", "in", "on"], answer: "by", hindi: "हम कार से गए", english: "We went _ car." },
    { q: "The cat is _ the chair.", options: ["under", "on", "in"], answer: "under", hindi: "बिल्ली कुर्सी के नीचे है", english: "The cat is _ the chair." },
    { q: "She is interested _ music.", options: ["in", "at", "on"], answer: "in", hindi: "वह संगीत में रुचि रखती है", english: "She is interested _ music." },
    { q: "The train is _ the station.", options: ["at", "in", "on"], answer: "at", hindi: "ट्रेन स्टेशन पर है", english: "The train is _ the station." },
    { q: "He lives _ Delhi.", options: ["in", "at", "on"], answer: "in", hindi: "वह दिल्ली में रहता है", english: "He lives _ Delhi." }
  ]},
  { title: "Conjunctions", day: 8, questions: [
    { q: "I went to bed early _ I was tired.", options: ["because", "but", "and"], answer: "because", hindi: "मैं जल्दी सो गया क्योंकि मैं थका हुआ था", english: "I went to bed early _ I was tired." },
    { q: "She is smart _ beautiful.", options: ["and", "but", "or"], answer: "and", hindi: "वह स्मार्ट है और सुंदर है", english: "She is smart _ beautiful." },
    { q: "I wanted to go, _ I was sick.", options: ["but", "and", "or"], answer: "but", hindi: "मैं जाना चाहता था, लेकिन मैं बीमार था", english: "I wanted to go, _ I was sick." },
    { q: "Do you want tea _ coffee?", options: ["or", "and", "but"], answer: "or", hindi: "क्या तुम चाय या कॉफी चाहते हो?", english: "Do you want tea _ coffee?" },
    { q: "He is poor _ honest.", options: ["but", "and", "or"], answer: "but", hindi: "वह गरीब है लेकिन ईमानदार है", english: "He is poor _ honest." },
    { q: "I like reading _ watching movies.", options: ["and", "but", "or"], answer: "and", hindi: "मुझे पढ़ना और फिल्में देखना पसंद है", english: "I like reading _ watching movies." },
    { q: "She will come _ she calls.", options: ["if", "but", "and"], answer: "if", hindi: "वह आएगी अगर वह बुलाएगी", english: "She will come _ she calls." },
    { q: "He is lazy, _ he is happy.", options: ["but", "and", "or"], answer: "but", hindi: "वह आलसी है, लेकिन खुश है", english: "He is lazy, _ he is happy." }
  ]},
  { title: "Articles", day: 9, questions: [
    { q: "_ sun rises in the east.", options: ["The", "A", "An"], answer: "The", hindi: "सूरज पूर्व में उगता है", english: "_ sun rises in the east." },
    { q: "She is _ European.", options: ["a", "an", "the"], answer: "a", hindi: "वह एक यूरोपियन है", english: "She is _ European." },
    { q: "I read _ book.", options: ["a", "an", "the"], answer: "a", hindi: "मैं एक किताब पढ़ता हूँ", english: "I read _ book." },
    { q: "_ apple a day keeps doctor away.", options: ["A", "An", "The"], answer: "An", hindi: "एक सेब रोजाना डॉक्टर को दूर रखता है", english: "_ apple a day keeps doctor away." },
    { q: "He is _ best student.", options: ["a", "an", "the"], answer: "the", hindi: "वह सबसे अच्छा छात्र है", english: "He is _ best student." },
    { q: "I like _ blue shirt.", options: ["a", "the", "no article"], answer: "the", hindi: "मुझे नीली शर्ट पसंद है", english: "I like _ blue shirt." },
    { q: "_ Himalayas are in the north.", options: ["The", "A", "An"], answer: "The", hindi: "हिमालय उत्तर में हैं", english: "_ Himalayas are in the north." },
    { q: "She has _ umbrella.", options: ["a", "an", "the"], answer: "an", hindi: "उसके पास एक छाता है", english: "She has _ umbrella." }
  ]},
  { title: "Tenses Revision", day: 10, questions: [
    { q: "I _ here since 2010.", options: ["work", "have worked", "worked"], answer: "have worked", hindi: "मैं 2010 से यहाँ काम कर रहा हूँ", english: "I _ here since 2010." },
    { q: "She _ to school every day.", options: ["goes", "go", "went"], answer: "goes", hindi: "वह हर दिन स्कूल जाती है", english: "She _ to school every day." },
    { q: "They _ dinner when I arrived.", options: ["ate", "were eating", "eat"], answer: "were eating", hindi: "जब मैं पहुंचा, वे खाना खा रहे थे", english: "They _ dinner when I arrived." },
    { q: "He _ tomorrow.", options: ["comes", "will come", "is coming"], answer: "will come", hindi: "वह कल आएगा", english: "He _ tomorrow." },
    { q: "I _ my homework.", options: ["finish", "finished", "have finished"], answer: "have finished", hindi: "मैंने अपना होमवर्क पूरा कर लिया है", english: "I _ my homework." },
    { q: "We _ to the park yesterday.", options: ["go", "went", "gone"], answer: "went", hindi: "हम कल पार्क गए थे", english: "We _ to the park yesterday." },
    { q: "She _ the book now.", options: ["reads", "is reading", "read"], answer: "is reading", hindi: "वह अभी किताब पढ़ रही है", english: "She _ the book now." },
    { q: "They _ football tomorrow.", options: ["play", "will play", "played"], answer: "will play", hindi: "वे कल फुटबॉल खेलेंगे", english: "They _ football tomorrow." }
  ]},
    { title: "Present Continuous Tense", day: 11, questions: [
    { q: "I _ now.", options: ["am writing", "write", "wrote"], answer: "am writing", hindi: "मैं अभी लिख रहा हूँ", english: "I _ now." },
    { q: "She _ a song.", options: ["is singing", "sings", "sang"], answer: "is singing", hindi: "वह गाना गा रही है", english: "She _ a song." },
    { q: "They _ cricket.", options: ["are playing", "play", "played"], answer: "are playing", hindi: "वे क्रिकेट खेल रहे हैं", english: "They _ cricket." },
    { q: "He _ TV.", options: ["is watching", "watches", "watched"], answer: "is watching", hindi: "वह टीवी देख रहा है", english: "He _ TV." },
    { q: "We _ to school.", options: ["are going", "go", "went"], answer: "are going", hindi: "हम स्कूल जा रहे हैं", english: "We _ to school." },
    { q: "The baby _.", options: ["is sleeping", "sleeps", "slept"], answer: "is sleeping", hindi: "बच्चा सो रहा है", english: "The baby _." },
    { q: "You _ loudly.", options: ["are talking", "talk", "talked"], answer: "are talking", hindi: "तुम जोर से बात कर रहे हो", english: "You _ loudly." },
    { q: "I _ my homework.", options: ["am doing", "do", "did"], answer: "am doing", hindi: "मैं अपना होमवर्क कर रहा हूँ", english: "I _ my homework." }
  ]},
  { title: "Past Continuous Tense", day: 12, questions: [
    { q: "I _ when you called.", options: ["was sleeping", "slept", "sleep"], answer: "was sleeping", hindi: "जब तुमने बुलाया मैं सो रहा था", english: "I _ when you called." },
    { q: "She _ a book yesterday.", options: ["was reading", "read", "reads"], answer: "was reading", hindi: "वह कल किताब पढ़ रही थी", english: "She _ a book yesterday." },
    { q: "They _ football at 4 PM.", options: ["were playing", "played", "play"], answer: "were playing", hindi: "वे 4 बजे फुटबॉल खेल रहे थे", english: "They _ football at 4 PM." },
    { q: "He _ when it rained.", options: ["was running", "ran", "runs"], answer: "was running", hindi: "जब बारिश हुई वह दौड़ रहा था", english: "He _ when it rained." },
    { q: "We _ dinner at 8 PM.", options: ["were eating", "ate", "eat"], answer: "were eating", hindi: "हम 8 बजे खाना खा रहे थे", english: "We _ dinner at 8 PM." },
    { q: "The children _ in the park.", options: ["were playing", "played", "play"], answer: "were playing", hindi: "बच्चे पार्क में खेल रहे थे", english: "The children _ in the park." },
    { q: "I _ TV when you came.", options: ["was watching", "watched", "watch"], answer: "was watching", hindi: "जब तुम आए मैं टीवी देख रहा था", english: "I _ TV when you came." },
    { q: "She _ when I saw her.", options: ["was dancing", "danced", "dances"], answer: "was dancing", hindi: "जब मैंने उसे देखा वह नाच रही थी", english: "She _ when I saw her." }
  ]},
  { title: "Future Continuous Tense", day: 13, questions: [
    { q: "I _ tomorrow at 5 PM.", options: ["will be playing", "play", "played"], answer: "will be playing", hindi: "मैं कल 5 बजे खेल रहा होऊँगा", english: "I _ tomorrow at 5 PM." },
    { q: "She _ at this time tomorrow.", options: ["will be sleeping", "sleeps", "slept"], answer: "will be sleeping", hindi: "वह कल इस समय सो रही होगी", english: "She _ at this time tomorrow." },
    { q: "They _ to Delhi next week.", options: ["will be going", "go", "went"], answer: "will be going", hindi: "वे अगले हफ्ते दिल्ली जा रहे होंगे", english: "They _ to Delhi next week." },
    { q: "He _ the match.", options: ["will be watching", "watches", "watched"], answer: "will be watching", hindi: "वह मैच देख रहा होगा", english: "He _ the match." },
    { q: "We _ at 10 PM.", options: ["will be studying", "study", "studied"], answer: "will be studying", hindi: "हम 10 बजे पढ़ रहे होंगे", english: "We _ at 10 PM." },
    { q: "You _ when I arrive.", options: ["will be cooking", "cook", "cooked"], answer: "will be cooking", hindi: "जब मैं आऊँगा तुम खाना बना रहे होगे", english: "You _ when I arrive." },
    { q: "I _ for my exam.", options: ["will be preparing", "prepare", "prepared"], answer: "will be preparing", hindi: "मैं अपनी परीक्षा की तैयारी कर रहा होऊँगा", english: "I _ for my exam." },
    { q: "She _ a letter.", options: ["will be writing", "writes", "wrote"], answer: "will be writing", hindi: "वह एक पत्र लिख रही होगी", english: "She _ a letter." }
  ]},
  { title: "Present Perfect Tense", day: 14, questions: [
    { q: "I _ my work.", options: ["have finished", "finished", "finish"], answer: "have finished", hindi: "मैंने अपना काम पूरा कर लिया है", english: "I _ my work." },
    { q: "She _ just arrived.", options: ["has", "have", "had"], answer: "has", hindi: "वह अभी-अभी आई है", english: "She _ just arrived." },
    { q: "They _ to Delhi.", options: ["have gone", "went", "go"], answer: "have gone", hindi: "वे दिल्ली जा चुके हैं", english: "They _ to Delhi." },
    { q: "He _ his keys.", options: ["has lost", "lost", "loses"], answer: "has lost", hindi: "उसने अपनी चाबियाँ खो दी हैं", english: "He _ his keys." },
    { q: "We _ the movie.", options: ["have seen", "saw", "see"], answer: "have seen", hindi: "हमने फिल्म देख ली है", english: "We _ the movie." },
    { q: "I _ here for 5 years.", options: ["have lived", "lived", "live"], answer: "have lived", hindi: "मैं यहाँ 5 साल से रह रहा हूँ", english: "I _ here for 5 years." },
    { q: "She _ her homework.", options: ["has completed", "completed", "completes"], answer: "has completed", hindi: "उसने अपना होमवर्क पूरा कर लिया है", english: "She _ her homework." },
    { q: "You _ a great job.", options: ["have done", "did", "do"], answer: "have done", hindi: "तुमने बहुत अच्छा काम किया है", english: "You _ a great job." }
  ]},
  { title: "Past Perfect Tense", day: 15, questions: [
    { q: "I _ before he came.", options: ["had eaten", "ate", "eat"], answer: "had eaten", hindi: "उसके आने से पहले मैंने खा लिया था", english: "I _ before he came." },
    { q: "She _ when I reached.", options: ["had left", "left", "leaves"], answer: "had left", hindi: "जब मैं पहुंचा वह जा चुकी थी", english: "She _ when I reached." },
    { q: "They _ the work before 5 PM.", options: ["had finished", "finished", "finish"], answer: "had finished", hindi: "उन्होंने 5 बजे से पहले काम पूरा कर लिया था", english: "They _ the work before 5 PM." },
    { q: "He _ his homework before playing.", options: ["had done", "did", "does"], answer: "had done", hindi: "खेलने से पहले उसने होमवर्क कर लिया था", english: "He _ his homework before playing." },
    { q: "We _ the movie before it started raining.", options: ["had seen", "saw", "see"], answer: "had seen", hindi: "बारिश शुरू होने से पहले हमने फिल्म देख ली थी", english: "We _ the movie before it started raining." },
    { q: "I _ him before.", options: ["had met", "met", "meet"], answer: "had met", hindi: "मैं उससे पहले मिल चुका था", english: "I _ him before." },
    { q: "She _ the letter before I asked.", options: ["had written", "wrote", "writes"], answer: "had written", hindi: "मेरे पूछने से पहले वह पत्र लिख चुकी थी", english: "She _ the letter before I asked." },
    { q: "They _ when we arrived.", options: ["had gone", "went", "go"], answer: "had gone", hindi: "जब हम पहुंचे वे जा चुके थे", english: "They _ when we arrived." }
  ]},
    { title: "Future Perfect Tense", day: 16, questions: [
    { q: "I _ my work by 5 PM.", options: ["will have finished", "finished", "finish"], answer: "will have finished", hindi: "मैं 5 बजे तक अपना काम पूरा कर लूँगा", english: "I _ my work by 5 PM." },
    { q: "She _ by tomorrow.", options: ["will have arrived", "arrived", "arrives"], answer: "will have arrived", hindi: "वह कल तक पहुंच चुकी होगी", english: "She _ by tomorrow." },
    { q: "They _ the project by next week.", options: ["will have completed", "completed", "complete"], answer: "will have completed", hindi: "वे अगले हफ्ते तक प्रोजेक्ट पूरा कर लेंगे", english: "They _ the project by next week." },
    { q: "He _ his exam by June.", options: ["will have passed", "passed", "passes"], answer: "will have passed", hindi: "वह जून तक अपनी परीक्षा पास कर चुका होगा", english: "He _ his exam by June." },
    { q: "We _ before the guests arrive.", options: ["will have eaten", "ate", "eat"], answer: "will have eaten", hindi: "मेहमानों के आने से पहले हम खा चुके होंगे", english: "We _ before the guests arrive." },
    { q: "You _ the book by evening.", options: ["will have read", "read", "reads"], answer: "will have read", hindi: "तुम शाम तक किताब पढ़ चुके होगे", english: "You _ the book by evening." },
    { q: "I _ to Delhi by 8 PM.", options: ["will have gone", "went", "go"], answer: "will have gone", hindi: "मैं 8 बजे तक दिल्ली जा चुका होऊँगा", english: "I _ to Delhi by 8 PM." },
    { q: "She _ her homework by 7 PM.", options: ["will have done", "did", "does"], answer: "will have done", hindi: "वह 7 बजे तक अपना होमवर्क कर चुकी होगी", english: "She _ her homework by 7 PM." }
  ]},
  { title: "Modal Verbs", day: 17, questions: [
    { q: "You _ respect elders.", options: ["must", "can", "may"], answer: "must", hindi: "तुम्हें बड़ों का आदर करना चाहिए", english: "You _ respect elders." },
    { q: "_ I come in?", options: ["May", "Can", "Must"], answer: "May", hindi: "क्या मैं अंदर आ सकता हूँ?", english: "_ I come in?" },
    { q: "She _ speak English.", options: ["can", "must", "may"], answer: "can", hindi: "वह अंग्रेजी बोल सकती है", english: "She _ speak English." },
    { q: "We _ help the poor.", options: ["should", "can", "may"], answer: "should", hindi: "हमें गरीबों की मदद करनी चाहिए", english: "We _ help the poor." },
    { q: "He _ be at home now.", options: ["must", "can", "may"], answer: "must", hindi: "वह अब घर पर होगा", english: "He _ be at home now." },
    { q: "You _ not smoke here.", options: ["must", "can", "may"], answer: "must", hindi: "तुम यहाँ धूम्रपान नहीं कर सकते", english: "You _ not smoke here." },
    { q: "_ you please help me?", options: ["Could", "Must", "May"], answer: "Could", hindi: "क्या आप मेरी मदद कर सकते हैं?", english: "_ you please help me?" },
    { q: "I _ swim when I was 5.", options: ["could", "can", "may"], answer: "could", hindi: "जब मैं 5 साल का था तब मैं तैर सकता था", english: "I _ swim when I was 5." }
  ]},
  { title: "Active & Passive Voice", day: 18, questions: [
    { q: "Ram plays cricket. (Passive)", options: ["Cricket is played by Ram", "Cricket was played by Ram", "Cricket played by Ram"], answer: "Cricket is played by Ram", hindi: "राम क्रिकेट खेलता है", english: "Ram plays cricket." },
    { q: "She wrote a letter. (Passive)", options: ["A letter was written by her", "A letter is written by her", "A letter written by her"], answer: "A letter was written by her", hindi: "उसने एक पत्र लिखा", english: "She wrote a letter." },
    { q: "They will help me. (Passive)", options: ["I will be helped by them", "I am helped by them", "I was helped by them"], answer: "I will be helped by them", hindi: "वे मेरी मदद करेंगे", english: "They will help me." },
    { q: "He is reading a book. (Passive)", options: ["A book is being read by him", "A book was read by him", "A book read by him"], answer: "A book is being read by him", hindi: "वह एक किताब पढ़ रहा है", english: "He is reading a book." },
    { q: "The teacher teaches us. (Passive)", options: ["We are taught by the teacher", "We were taught by the teacher", "We taught by the teacher"], answer: "We are taught by the teacher", hindi: "शिक्षक हमें पढ़ाता है", english: "The teacher teaches us." },
    { q: "We have finished the work. (Passive)", options: ["The work has been finished by us", "The work was finished by us", "The work is finished by us"], answer: "The work has been finished by us", hindi: "हमने काम पूरा कर लिया है", english: "We have finished the work." },
    { q: "She was cooking food. (Passive)", options: ["Food was being cooked by her", "Food is cooked by her", "Food cooked by her"], answer: "Food was being cooked by her", hindi: "वह खाना बना रही थी", english: "She was cooking food." },
    { q: "They had completed the task. (Passive)", options: ["The task had been completed by them", "The task was completed by them", "The task is completed by them"], answer: "The task had been completed by them", hindi: "उन्होंने कार्य पूरा कर लिया था", english: "They had completed the task." }
  ]},
  { title: "Direct & Indirect Speech", day: 19, questions: [
    { q: "He said, 'I am happy.' (Indirect)", options: ["He said that he was happy", "He said that I am happy", "He said he is happy"], answer: "He said that he was happy", hindi: "उसने कहा, 'मैं खुश हूँ'", english: "He said, 'I am happy.'" },
    { q: "She said, 'I will go.' (Indirect)", options: ["She said that she would go", "She said that I will go", "She said she will go"], answer: "She said that she would go", hindi: "उसने कहा, 'मैं जाऊँगी'", english: "She said, 'I will go.'" },
    { q: "They said, 'We are playing.' (Indirect)", options: ["They said that they were playing", "They said that we are playing", "They said they are playing"], answer: "They said that they were playing", hindi: "उन्होंने कहा, 'हम खेल रहे हैं'", english: "They said, 'We are playing.'" },
    { q: "He said to me, 'You are late.' (Indirect)", options: ["He told me that I was late", "He said to me that you are late", "He told me you are late"], answer: "He told me that I was late", hindi: "उसने मुझसे कहा, 'तुम लेट हो'", english: "He said to me, 'You are late.'" },
    { q: "She said, 'I can swim.' (Indirect)", options: ["She said that she could swim", "She said that I can swim", "She said she can swim"], answer: "She said that she could swim", hindi: "उसने कहा, 'मैं तैर सकती हूँ'", english: "She said, 'I can swim.'" },
    { q: "He said, 'I have finished.' (Indirect)", options: ["He said that he had finished", "He said that I have finished", "He said he has finished"], answer: "He said that he had finished", hindi: "उसने कहा, 'मैंने पूरा कर लिया है'", english: "He said, 'I have finished.'" },
    { q: "Teacher said, 'Work hard.' (Indirect)", options: ["Teacher advised to work hard", "Teacher said work hard", "Teacher said to work hard"], answer: "Teacher advised to work hard", hindi: "शिक्षक ने कहा, 'मेहनत करो'", english: "Teacher said, 'Work hard.'" },
    { q: "He said, 'Where are you going?' (Indirect)", options: ["He asked where I was going", "He said where are you going", "He asked where you are going"], answer: "He asked where I was going", hindi: "उसने कहा, 'तुम कहाँ जा रहे हो?'", english: "He said, 'Where are you going?'" }
  ]},
  { title: "Grammar Revision", day: 20, questions: [
    { q: "This is _ apple.", options: ["an", "a", "the"], answer: "an", hindi: "यह एक सेब है", english: "This is _ apple." },
    { q: "He _ to school yesterday.", options: ["went", "go", "goes"], answer: "went", hindi: "वह कल स्कूल गया था", english: "He _ to school yesterday." },
    { q: "She _ singing now.", options: ["is", "was", "are"], answer: "is", hindi: "वह अभी गा रही है", english: "She _ singing now." },
    { q: "They _ play cricket tomorrow.", options: ["will", "shall", "would"], answer: "will", hindi: "वे कल क्रिकेट खेलेंगे", english: "They _ play cricket tomorrow." },
    { q: "_ is my pen.", options: ["This", "These", "Those"], answer: "This", hindi: "यह मेरा पेन है", english: "_ is my pen." },
    { q: "The book is _ the table.", options: ["on", "in", "at"], answer: "on", hindi: "किताब टेबल पर है", english: "The book is _ the table." },
    { q: "I _ my homework already.", options: ["have done", "did", "do"], answer: "have done", hindi: "मैं पहले ही अपना होमवर्क कर चुका हूँ", english: "I _ my homework already." },
    { q: "You _ not go there.", options: ["should", "can", "may"], answer: "should", hindi: "तुम्हें वहाँ नहीं जाना चाहिए", english: "You _ not go there." }
  ]}
];

// ===== Quiz Logic =====
let currentDay = 0;
let currentQuestion = 0;
let selectedWords = [];
let currentQ = null;
let gameData = lessons;

// ===== DAY SYSTEM: 30 KA BATCH - FINAL FIX =====
let daysPerUnit = 30;

// localStorage se data nikalo + purana data fix karo
let savedCompleted = localStorage.getItem('completedDays');
let completedDaysArray = [];

// Agar purana number hai to array bana do
if(savedCompleted) {
  try {
    let parsed = JSON.parse(savedCompleted);
    // Agar array hai to use karo, warna number se array banao
    if(Array.isArray(parsed)) {
      completedDaysArray = parsed;
    } else {
      // Purana: 5 tha → Naya: [1,2,3,4,5]
      for(let i = 1; i <= parsed; i++) {
        completedDaysArray.push(i);
      }
    }
  } catch(e) {
    completedDaysArray = [];
  }
}

let userProgress = {
  completedDays: completedDaysArray,
  currentDay: parseInt(localStorage.getItem('currentDay')) || 1
};

function getCurrentUnit() {
  return Math.ceil(userProgress.currentDay / daysPerUnit);
}

function getDayRange(unit) {
  const start = (unit - 1) * daysPerUnit + 1;
  const end = unit * daysPerUnit;
  return { start, end };
}

function renderDayBatch() {
  const dayGrid = document.querySelector('.day-grid');
  const unitTitle = document.querySelector('.day-section h3');

  if(!dayGrid) {
    console.log('Guru, day-grid div nahi mila HTML me');
    return;
  }

  const unit = getCurrentUnit();
  const { start, end } = getDayRange(unit);

  if(unitTitle) {
    unitTitle.textContent = `UNIT ${unit}: BASICS - ${start}-${end} DAYS`;
  }

  dayGrid.innerHTML = '';

  for(let day = start; day <= end; day++) {
    const circle = document.createElement('div');
    circle.className = 'day-circle';
    circle.dataset.day = day;

    if(userProgress.completedDays.includes(day)) {
      circle.classList.add('completed');
      circle.innerHTML = `${day}<span class="tick-icon">✓</span>`;
    }
    else if(day === userProgress.currentDay) {
      circle.classList.add('current');
      circle.innerHTML = `${day}<span class="start-text">Start</span>`;
    }
    else if(day > userProgress.currentDay) {
      circle.classList.add('locked');
      circle.innerHTML = `${day}<span class="lock-icon">🔒</span>`;
    }
    else {
      circle.innerHTML = `${day}`;
    }

    circle.onclick = () => selectDay(day - 1);
    dayGrid.appendChild(circle);
  }

  // Current day load karo
  let actualDayIndex = userProgress.currentDay - 1;
  if(actualDayIndex >= gameData.length) actualDayIndex = gameData.length - 1;
  currentDay = actualDayIndex;
  currentQuestion = 0;
  if(gameData[currentDay] && gameData[currentDay].questions) {
    loadQuestion(gameData[currentDay].questions[0]);
  }
}

// DOM ready hone ke baad chalao
document.addEventListener('DOMContentLoaded', renderDayBatch);

// startQuizList ko hata de - ab renderDayBatch use hoga
window.startQuizList = renderDayBatch; // Backup: agar kahin call ho raha ho
function selectDay(dayIndex) {
  // === Ye 3 line add kar - Maya section kholega ===
  const mayaSection = document.getElementById('maya-section');
  if (mayaSection) {
    mayaSection.style.cssText = 'display:block!important';
    mayaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  // === Yaha tak add kar ===
  
  let completedDays = parseInt(localStorage.getItem('completedDays')) || 0;
  if(dayIndex + 1 > completedDays + 1) return;
  if(dayIndex >= gameData.length) {
    alert('Ye day abhi available nahi hai!');
    return;
  }
  currentDay = dayIndex;
  currentQuestion = 0;
  loadQuestion(gameData[currentDay].questions[currentQuestion]);
}

function loadQuestion(qData) {
  if (!qData) return;
  currentQ = qData;

  // Progress line update - current day ke questions ka %
  const totalQ = gameData[currentDay].questions.length;
  const progress = ((currentQuestion) / totalQ) * 100;
  document.getElementById('progressFillMain').style.width = progress + '%';

  document.getElementById('progress-text').innerText = `Q ${currentQuestion + 1}/${totalQ}`;
  document.getElementById('hindi-text').innerText = qData.hindi || "";
  document.getElementById('english-ref').innerText = qData.english || qData.q || "";

  let words = qData.options || [];
  words = [...new Set(words)].sort(() => Math.random() - 0.5);

  document.getElementById('word-bank').innerHTML = words.map(w =>
    `<button class="word-btn" onclick="addWord('${w}', this)">${w}</button>`
  ).join('');

  document.getElementById('answer-box').innerHTML = '';
  selectedWords = [];
  document.getElementById('feedback').style.display = 'none';
  document.getElementById('check-btn').style.display = 'block';
  document.getElementById('next-btn').style.display = 'none';
}

function addWord(word, btn) {
  selectedWords = [word]; // Sirf 1 word select hoga
  updateAnswerBox();
  // Sab button hide karke sirf selected dikhana
  document.querySelectorAll('.word-btn').forEach(b => {
    if(b.innerText === word) b.style.display = 'none';
    else b.style.display = 'inline-block';
  });
}

function removeWord(word, index) {
  selectedWords = [];
  updateAnswerBox();
  document.querySelectorAll('.word-btn').forEach(b => {
    b.style.display = 'inline-block';
  });
}

function updateAnswerBox() {
  const answerBox = document.getElementById('answer-box');
  answerBox.innerHTML = selectedWords.map((w, i) =>
    `<span class="selected-word" onclick="removeWord('${w}', ${i})">${w}</span>`
  ).join(' ');
}

function checkAnswer() {
  if (!currentQ) return;
  const correctAnswer = currentQ.answer.trim().toLowerCase();
  const userAnswer = selectedWords.join(' ').trim().toLowerCase();
  const feedback = document.getElementById('feedback');

  if (userAnswer === correctAnswer) {
    feedback.innerText = "Sahi jawab! 🎉";
    feedback.className = "feedback";
    feedback.style.display = 'block';
    document.getElementById('check-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'block';

    // XP badhao
    let xp = document.getElementById('xp');
    xp.innerText = parseInt(xp.innerText) + 10;
    localStorage.setItem('xp', xp.innerText);
  } else {
    feedback.innerText = "Galat hai, dobara try karo";
    feedback.className = "feedback wrong";
    feedback.style.display = 'block';
  }
}

function nextQuestion() {
  currentQuestion++;

  // Progress line update
  const totalQ = gameData[currentDay].questions.length;
  const progress = ((currentQuestion) / totalQ) * 100;
  document.getElementById('progressFillMain').style.width = progress + '%';

  if (currentQuestion >= gameData[currentDay].questions.length) {
    // Day complete
    let completedDays = parseInt(localStorage.getItem('completedDays')) || 0;
    completedDays = Math.max(completedDays, currentDay + 1);
    localStorage.setItem('completedDays', completedDays);

    // Next day pe jao ya grid refresh karo
    startQuizList();
    return;
  }

  loadQuestion(gameData[currentDay].questions[currentQuestion]);
}

function playAudio() {
  const text = document.getElementById('hindi-text').innerText;
  if (!text) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'hi-IN';
  speechSynthesis.speak(utterance);
}

function toggleTheme() {
  document.body.classList.toggle('light-mode');
}
function addHeart() {
  let hearts = document.getElementById('hearts');
  hearts.innerText = parseInt(hearts.innerText) + 1;
}
function openChat() { alert('Chat feature coming soon'); }
function startPracticeMode() { alert('Practice mode coming soon'); }

// Start karo
window.onload = function() {
  document.getElementById('xp').innerText = localStorage.getItem('xp') || '260';
  document.getElementById('streak').innerText = localStorage.getItem('streak') || '11';
  document.getElementById('hearts').innerText = localStorage.getItem('hearts') || '1';
  startQuizList();
}
// Day button click - Sirf Maya Quiz kholega, checkAnswer ko haath nahi lagayega
document.addEventListener('DOMContentLoaded', function() {
  const dayButtons = document.querySelectorAll('.day-grid button');
  
  dayButtons.forEach((btn, index) => {
    btn.addEventListener('click', function() {
      const dayNumber = index + 1;
      
      // Maya Quiz section dhundho
      const mayaSection = document.querySelector('.quiz-card');
      
      if (mayaSection) {
        // Sirf show karo, content mat badlo
        mayaSection.style.display = 'block';
        mayaSection.scrollIntoView({ behavior: 'smooth' });
        
        // Agar tera function hai to Day load kar
        if (typeof loadLesson === 'function') {
          loadLesson(dayNumber);
        }
        if (typeof startDay === 'function') {
          startDay(dayNumber);
        }
        
        console.log('Day', dayNumber, 'khul gaya');
      } else {
        alert('Maya Quiz section nahi mila! class="quiz-card" check karo');
      }
    });
  });
});
