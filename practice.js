function generateLinearEquationQuestion() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 20) - 10;
    let c = Math.floor(Math.random() * 10) + 1;
    let d = Math.floor(Math.random() * 20) - 10;
    let m = Math.floor(Math.random() * 10) + 1;
    let n = Math.floor(Math.random() * 10) + 1;

    let question;
    let answer;
    let options = [];
    let type = Math.random() > 0.5 ? "test" : "descriptive";
    
    // انتخاب نوع سوال (شیب، عرض از مبدأ یا معادله خطی)
    let questionType = Math.floor(Math.random() * 3);  // فقط سه گزینه داریم

    switch (questionType) {
        case 0:
            // سوال شیب خط
            question = `شیب خطی که از دو نقطه (${a}, ${b}) و (${c}, ${d}) می‌گذرد، چقدر است؟`;
            answer = (d - b) / (c - a);  // جواب به صورت عددی و بدون اعشار اضافی
            break;
        case 1:
            // سوال عرض از مبدأ
            question =` چیست؟ y = ${m}x + ${b} عرض از مبدا خط `;
            answer = b;  // جواب به صورت عددی
            break;
        case 2:
            // سوال معادله خطی از دو نقطه
            question = `معادله خطی که از نقطه (${a}, ${b}) و (${c}, ${d}) می‌گذرد، چیست؟`;
            let slope = (d - b) / (c - a);  // شیب
            let yIntercept = b - slope * a;  // عرض از مبدأ
            answer = `y = ${slope}x + ${yIntercept}`;  // معادله خطی
            break;
    }

    if (type === "test") {
        options = [
            answer,
            answer + Math.floor(Math.random() * 5) + 1,
            answer - Math.floor(Math.random() * 5) - 1,
            answer + Math.floor(Math.random() * 3) - 1
        ];
        options = options.sort(() => Math.random() - 0.5);
    }

    return { question, options, answer, type };
}

// تولید سوال جدید
function generateQuestion() {
    const { question, options, answer, type } = generateLinearEquationQuestion();
    const lang = localStorage.getItem("lang") || "fa";

    document.getElementById("question-text").innerText = question;
    document.getElementById("question-container").style.display = "block";
    sessionStorage.setItem("correctAnswer", answer);

    let guidanceMessage = "پاسخ خود را به صورت عددی یا معادله وارد کنید.";
    if (question.includes("شیب")) {
        guidanceMessage = "پاسخ را به صورت عددی و بدون اعشار وارد کنید.";
    } else if (question.includes("عرض از مبدأ")) {
        guidanceMessage = "پاسخ را به صورت عددی وارد کنید.";
    } else if (question.includes("معادله خطی")) {
        guidanceMessage = "پاسخ را به صورت معادله خطی (مثلاً y = mx + -b) وارد کنید.";
    }

    // راهنمایی به کاربر
    document.getElementById("guidance-message").innerText = guidanceMessage;

    if (type === "test") {
        let optionsHtml = "";
        options.forEach((opt, index) => {
            optionsHtml += `<button onclick="checkTestAnswer('${opt}')">${index + 1}) ${opt}</button><br>`;
        });
        document.getElementById("options-container").innerHTML = optionsHtml;
    } else {
        document.getElementById("options-container").innerHTML = 
            `<input type='text' id='answer-input' placeholder='پاسخ خود را وارد کنید'>
            <button onclick='checkAnswer()'>بررسی پاسخ</button>`;
    }

    // پاک کردن پیام قبلی
    document.getElementById("result-message").innerText = "";
    document.getElementById("result-message").className = "";
}

// بررسی پاسخ تستی
function checkTestAnswer(selectedOption) {
    const correctAnswer = sessionStorage.getItem("correctAnswer");
    const lang = localStorage.getItem("lang") || "fa";
    const resultEl = document.getElementById("result-message");

    // مقایسه جواب به صورت عددی و بدون اعشار اضافی
    if (parseFloat(selectedOption) === parseFloat(correctAnswer)) {
        resultEl.innerText = "پاسخ درست است!";
        resultEl.className = "correct";
    } else {
        resultEl.innerText = `پاسخ نادرست است. پاسخ درست: ${correctAnswer}`;
        resultEl.className = "incorrect";
    }

    setTimeout(() => generateQuestion(), 2000);
}

// بررسی پاسخ تشریحی
function checkAnswer() {
    const userAnswer = document.getElementById("answer-input").value.trim();
    const correctAnswer = sessionStorage.getItem("correctAnswer");
    const lang = localStorage.getItem("lang") || "fa";
    const resultEl = document.getElementById("result-message");

    // مقایسه جواب به صورت عددی و بدون اعشار اضافی
    if (parseFloat(userAnswer) === parseFloat(correctAnswer)) {
        resultEl.innerText = "پاسخ درست است!";
        resultEl.className = "correct";
    } else {
        resultEl.innerText = `پاسخ نادرست است. پاسخ درست: ${correctAnswer}`;
        resultEl.className = "incorrect";
    }

    setTimeout(() => generateQuestion(), 2000);
}

// هنگام بارگذاری صفحه، سوال اولیه نمایش داده می‌شود
window.onload = function () {
    const savedLang = localStorage.getItem("lang") || "fa";
    setLanguage(savedLang);
    generateQuestion();
};


