const questions = [
    {
        question: "ما هو أحد أهم مصادر الدخل القومي في مصر؟",
        choices: ["الصناعة", "السياحة", "الزراعة", "التجارة"],
        correct: 1
    },
    {
        question: "ما هي إحدى المشاكل التي يواجهها السائحون في مصر؟",
        choices: ["اختلاف اللغة", "الطقس", "المواصلات", "الطعام"],
        correct: 0
    },
    {
        question: "ما هي أهم صفات العاملين في مجال السياحة؟",
        choices: ["إتقان اللغات الأجنبية", "القوة البدنية", "السرعة", "المهارات الرياضية"],
        correct: 0
    },
    {
        question: "ما هو دور المرشد السياحي؟",
        choices: ["بيع التذاكر", "شرح الآثار", "قيادة الحافلات", "إعداد الطعام"],
        correct: 1
    },
    {
        question: "من صفات الشعب المصري:",
        choices: ["الانطوائية", "الكرم", "البخل", "العدوانية"],
        correct: 1
    },
    {
        question: "من العاملين في مجال السياحة:",
        choices: ["المزارع", "النجار", "النادل", "الحداد"],
        correct: 2
    },
    {
        question: "ما هي مدة دراسة الطب؟",
        choices: ["3 سنوات", "4 سنوات", "5 سنوات", "7 سنوات"],
        correct: 2
    },
    {
        question: "ما هي مهمة أمناء المكتبة؟",
        choices: ["بيع الكتب", "تنظيم الكتب", "طباعة الكتب", "كتابة القصص"],
        correct: 1
    },
    {
        question: "في أي عام ولد المهندس هاني عازر؟",
        choices: ["1945", "1946", "1947", "1948"],
        correct: 3
    },
    {
        question: "ما هو تخصص المهندس هاني عازر؟",
        choices: ["الهندسة المعمارية", "الهندسة المدنية", "الهندسة الكهربائية", "الهندسة الميكانيكية"],
        correct: 1
    },
    {
        question: "ما هي الموارد المادية؟",
        choices: ["المهارات", "القدرات", "الأموال والعقارات", "الخبرات"],
        correct: 2
    },
    {
        question: "كيف نعتني بكوكب الأرض؟",
        choices: ["زيادة الاستهلاك", "الحد من الاستخدام", "حرق النفايات", "رمي المخلفات"],
        correct: 1
    },
    {
        question: "ما هو مفهوم إعادة التدوير؟",
        choices: ["رمي النفايات", "حرق المخلفات", "إعادة تصنيع الأشياء", "تخزين الأشياء"],
        correct: 2
    },
    {
        question: "ما هي مدة التدريب الإضافي للأطباء بعد التخرج؟",
        choices: ["سنة", "سنتان", "ثلاث سنوات", "أربع سنوات"],
        correct: 1
    },
    {
        question: "ما هي أهم صفات الفنانين؟",
        choices: ["القوة البدنية", "الموهبة", "السرعة", "المهارات الرياضية"],
        correct: 1
    },
    {
        question: "في أي مدينة ولد المهندس هاني عازر؟",
        choices: ["القاهرة", "الإسكندرية", "طنطا", "المنصورة"],
        correct: 2
    },
    {
        question: "كم استغرق إنشاء محطة قطارات برلين المركزية؟",
        choices: ["5 سنوات", "7 سنوات", "8 سنوات", "10 سنوات"],
        correct: 3
    },
    {
        question: "ما هي أهم فوائد السياحة للاقتصاد؟",
        choices: ["توفير العملة الصعبة", "تلوث البيئة", "استهلاك الموارد", "زيادة الازدحام"],
        correct: 0
    },
    {
        question: "ما هي مهمة مدير الفندق؟",
        choices: ["تنظيف الغرف", "إعداد الطعام", "تقديم أفضل الخيارات للسائحين", "قيادة الحافلات"],
        correct: 2
    },
    {
        question: "من صفات العاملين في السياحة القدرة على:",
        choices: ["النوم", "حل المشكلات", "الجري", "القفز"],
        correct: 1
    },
    {
        question: "كيف يتعلم المزارعون مهنتهم؟",
        choices: ["من الكتب", "من الخبرة", "من التلفاز", "من الإنترنت"],
        correct: 1
    },
    {
        question: "ما هي أهم صفات الطبيب؟",
        choices: ["القوة البدنية", "تحمل الضغط", "السرعة", "المهارات الرياضية"],
        correct: 1
    },
    {
        question: "ما هو هدف الفن؟",
        choices: ["الربح المادي", "التعبير عن المشاعر", "الشهرة", "المنافسة"],
        correct: 1
    },
    {
        question: "ماذا قال هاني عازر عند حصوله على وسام الشرف الألماني؟",
        choices: ["هذه جائزتي", "هذه الجائزة تكريم لبلدي", "هذه الجائزة لي", "هذه الجائزة لعائلتي"],
        correct: 1
    },
    {
        question: "ما هي الموارد البشرية؟",
        choices: ["الأموال", "العقارات", "القدرات والمهارات", "السيارات"],
        correct: 2
    },
    {
        question: "كيف يمكن إعادة استخدام الأشياء؟",
        choices: ["رميها", "حرقها", "إعطاؤها للآخرين", "تخزينها"],
        correct: 2
    },
    {
        question: "ما هي مهمة النادل؟",
        choices: ["قيادة السيارات", "تلبية طلبات السائحين", "تنظيف الغرف", "حراسة الفندق"],
        correct: 1
    },
    {
        question: "ما هي أهم صفات أمين المكتبة؟",
        choices: ["القوة البدنية", "السرعة", "التنظيم الجيد", "المهارات الرياضية"],
        correct: 2
    },
    {
        question: "ما هو المورد المهم الذي لا يمكن تعويضه؟",
        choices: ["المال", "الوقت", "الطعام", "الملابس"],
        correct: 1
    },
    {
        question: "ما هي أفضل طريقة للحفاظ على البيئة؟",
        choices: ["زيادة الاستهلاك", "الشراء المستمر", "إعادة التدوير", "رمي النفايات"],
        correct: 2
    }
];

const correctMessages = [
    "🎉 يا بطل! إجابة صحيحة!",
    "🌟 رائع جداً! أنت عبقري!",
    "💪 قوة! استمر هكذا!",
    "🎯 ولا أروع! أصبت الهدف!",
    "🏆 أنت نجم المسابقة!",
    "✨ واو! إجابة مثالية!",
    "🎨 فنان في الإجابات!",
    "🚀 تحلق عالياً! أحسنت!",
    "🌈 رائع! تتألق كالنجوم!",
    "🎭 مسرحية جميلة! إجابة صحيحة!"
];

const wrongMessages = [
    "😅 لا بأس! المحاولة القادمة أفضل!",
    "🌱 كل خطأ يعلمنا شيئاً جديداً!",
    "🎮 مثل ألعاب الفيديو، نتعلم من أخطائنا!",
    "🎪 حاول مرة أخرى، البهلوان يسقط ويقف!",
    "🎭 الممثل ينسى دوره أحياناً!",
    "🎨 حتى بيكاسو كان يخطئ!",
    "🌈 بعد المطر تأتي قوس قزح!",
    "🎪 السيرك مليء بالمحاولات!",
    "🎯 المرة القادمة ستصيب الهدف!",
    "🎪 لا تحزن! الكل يتعلم!"
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function shuffleQuestion(question) {
    // Create an array of choice objects with their original indices
    const choicesWithIndices = question.choices.map((choice, index) => ({
        text: choice,
        isCorrect: index === question.correct
    }));
    
    // Shuffle the choices
    shuffleArray(choicesWithIndices);
    
    // Update the question object with shuffled choices
    const newQuestion = {
        question: question.question,
        choices: choicesWithIndices.map(choice => choice.text),
        correct: choicesWithIndices.findIndex(choice => choice.isCorrect)
    };
    
    return newQuestion;
}

let currentQuestion = 0;
let score = 0;
let playerName = "";
let shuffledQuestions = [];

function startQuiz() {
    playerName = document.getElementById("player-name").value.trim();
    if (!playerName) {
        alert("من فضلك أدخل اسمك");
        return;
    }
    
    // Shuffle all questions
    shuffledQuestions = questions.map(q => ({ ...q })); // Create a deep copy
    shuffleArray(shuffledQuestions);
    
    // Shuffle choices for each question
    shuffledQuestions = shuffledQuestions.map(q => shuffleQuestion(q));
    
    currentQuestion = 0;
    score = 0;
    
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const question = shuffledQuestions[currentQuestion];
    document.getElementById("question").textContent = question.question;
    document.getElementById("current-question").textContent = currentQuestion + 1;
    
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    
    question.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.className = "choice-btn";
        button.textContent = choice;
        button.onclick = () => selectAnswer(index);
        choicesContainer.appendChild(button);
    });
}

function showFeedbackMessage(correct) {
    const messages = correct ? correctMessages : wrongMessages;
    const message = messages[Math.floor(Math.random() * messages.length)];
    
    const feedbackElement = document.getElementById("feedback-message");
    feedbackElement.textContent = message;
    feedbackElement.style.display = "block";
    
    setTimeout(() => {
        feedbackElement.style.display = "none";
    }, 1500);
}

function playSound(isCorrect) {
    try {
        const soundId = isCorrect ? 'correct-sound' : 'wrong-sound';
        const sound = document.getElementById(soundId);
        if (sound) {
            sound.currentTime = 0;
            const playPromise = sound.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    console.log(isCorrect ? "تم تشغيل صوت الإجابة الصحيحة" : "تم تشغيل صوت الإجابة الخاطئة");
                })
                .catch(error => {
                    console.error("خطأ في تشغيل الصوت:", error);
                });
            }
        } else {
            console.error(`لم يتم العثور على عنصر الصوت: ${soundId}`);
        }
    } catch (error) {
        console.error("حدث خطأ:", error);
    }
}

function selectAnswer(choiceIndex) {
    const correct = shuffledQuestions[currentQuestion].correct === choiceIndex;
    if (correct) {
        score++;
    }
    
    // تشغيل الصوت المناسب حسب الإجابة
    playSound(correct);
    
    showFeedbackMessage(correct);
    
    const buttons = document.querySelectorAll(".choice-btn");
    buttons.forEach((button, index) => {
        button.disabled = true;
        if (index === shuffledQuestions[currentQuestion].correct) {
            button.classList.add("correct");
        } else if (index === choiceIndex && !correct) {
            button.classList.add("wrong");
        }
    });
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < shuffledQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 2000);
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
    
    const percentage = (score / shuffledQuestions.length) * 100;
    document.getElementById("final-score").textContent = 
        `${playerName}، لقد حصلت على ${score} من ${shuffledQuestions.length} (${percentage.toFixed(1)}%)`;
    
    let message = "";
    if (percentage >= 90) {
        message = "ممتاز! أداء رائع جداً!";
    } else if (percentage >= 70) {
        message = "جيد جداً! أحسنت!";
    } else if (percentage >= 50) {
        message = "جيد! واصل المحاولة للتحسين!";
    } else {
        message = "لا بأس، حاول مرة أخرى للتحسين!";
    }
    
    document.getElementById("encouragement-message").textContent = message;
}
