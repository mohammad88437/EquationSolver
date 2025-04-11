const translations = {
    fa: {
      // صفحه اول
      title: 'دستگاه معادلات',
      about: 'درباره',
      contact: 'ارتباط با ما',
      share: 'اشتراک گذاری',
      language: 'English',
      learn: 'آموزش',
      practice: 'حل تمرین',
      solve: 'حل دستگاه معادلات',
      aboutTitle: 'درباره ما',
      aboutText: 'این برنامه توسط محمد یعقوبی، دانش‌آموز پایه نهم مدرسه شهید بهشتی، طراحی و توسعه داده شده است. این پروژه در راستای شرکت در جشنواره نوجوان خوارزمی آماده شده و با راهنمایی‌های ارزشمند جناب آقای مستقیمی، استاد راهنما، به مرحله اجرا رسیده است.هدف از این برنامه آموزش و یادگیری بهتر فصل ۶ کتاب نهم (دستگاه معادلات خطی) بوده و تلاش شده تا نیازهای کاربران به بهترین شکل برآورده شود.امیدوارم این برنامه براتون مفید باشه و از کار باهاش لذت ببرید!'

      contactTitle: 'ارتباط با ما',

      // صفحه حل معادله
      solvePageTitle: 'حل دستگاه معادلات',
      instruction: 'لطفاً ضرایب معادلات را وارد کنید:',
      placeholder_a1: 'ضریب x1',
      placeholder_b1: 'ضریب y1',
      placeholder_c1: 'عدد سمت راست معادله 1',
      placeholder_a2: 'ضریب x2',
      placeholder_b2: 'ضریب y2',
      placeholder_c2: 'عدد سمت راست معادله 2',
      calculate: 'محاسبه',
      result: 'نتیجه:',

      // به داخل translations["fa"] اضافه کن:
      practiceTitle: 'تمرین دستگاه معادلات',
      showQuestion: 'نمایش سؤال',
      placeholder_answer: 'جواب خود را وارد کنید',
      checkAnswer: 'بررسی جواب',
      correct: 'درست جواب دادی! آفرین!',
      incorrect: 'جوابت اشتباهه. دوباره تلاش کن.',
    },
    en: {
      // صفحه اول
      title: 'Equation Solver',
      about: 'About',
      contact: 'Contact Us',
      share: 'Share',
      language: 'فارسی',
      learn: 'Learn',
      practice: 'Practice',
      solve: 'Solve System',
      aboutTitle: 'About Us',
      aboutText: 'Here you can place information about your website...',
      contactTitle: 'Contact Us',
  
      // صفحه حل معادله
      solvePageTitle: 'System of Equations Solver',
      instruction: 'Please enter the coefficients:',
      placeholder_a1: 'Coefficient of x1',
      placeholder_b1: 'Coefficient of y1',
      placeholder_c1: 'Right side of equation 1',
      placeholder_a2: 'Coefficient of x2',
      placeholder_b2: 'Coefficient of y2',
      placeholder_c2: 'Right side of equation 2',
      calculate: 'Calculate',
      result: 'Result:',

      // به داخل translations["en"] اضافه کن:
      practiceTitle: 'System of Equations Practice',
      showQuestion: 'Show Question',
      placeholder_answer: 'Enter your answer',
      checkAnswer: 'Check Answer',
      correct: 'Correct! Well done!',
      incorrect: 'Incorrect answer. Try again.',
    }
  };
  
  function setLanguage(lang) {
    localStorage.setItem('lang', lang);
  
    // مشترک بین صفحات
    if (document.querySelector('h1')) {
      const page = window.location.pathname.includes('solve') ? 'solvePageTitle' : 'title';
      document.querySelector('h1').innerText = translations[lang][page];
    }
  
    // صفحه اول
    if (document.querySelector('#menu')) {
      document.querySelector('#menu li:nth-child(1) a').innerText = translations[lang].language;
      document.querySelector('#menu li:nth-child(2) a').innerText = translations[lang].about;
      document.querySelector('#menu li:nth-child(3) a').innerText = translations[lang].contact;
      document.querySelector('#menu li:nth-child(4) a').innerText = translations[lang].share;
  
      document.getElementById('learn-btn').innerText = translations[lang].learn;
      document.getElementById('practice-btn').innerText = translations[lang].practice;
      document.getElementById('solve-btn').innerText = translations[lang].solve;
  
      document.querySelector('#aboutModal h2').innerText = translations[lang].aboutTitle;
      document.querySelector('#aboutModal p').innerText = translations[lang].aboutText;
      document.querySelector('#contactModal h2').innerText = translations[lang].contactTitle;
      document.querySelector('#contactModal p').innerText = translations[lang].contactText;
    }
  
    // صفحه حل معادله
    if (document.getElementById('a1')) {
      document.querySelector('p').innerText = translations[lang].instruction;
  
      document.getElementById('a1').placeholder = translations[lang].placeholder_a1;
      document.getElementById('b1').placeholder = translations[lang].placeholder_b1;
      document.getElementById('c1').placeholder = translations[lang].placeholder_c1;
      document.getElementById('a2').placeholder = translations[lang].placeholder_a2;
      document.getElementById('b2').placeholder = translations[lang].placeholder_b2;
      document.getElementById('c2').placeholder = translations[lang].placeholder_c2;
  
      document.getElementById('solve-equations').innerText = translations[lang].calculate;
      document.querySelector('h2').innerText = translations[lang].result;
    }
  
    // اگر در صفحه تمرین هستیم
if (window.location.pathname.includes('practice')) {
    document.querySelector('h1').innerText = translations[lang].practiceTitle;
  
    const showBtn = document.querySelector('button[onclick="generateQuestion()"]');
    if (showBtn) showBtn.innerText = translations[lang].showQuestion;
  
    const checkBtn = document.querySelector('button[onclick="checkAnswer()"]');
    if (checkBtn) checkBtn.innerText = translations[lang].checkAnswer;
  
    const input = document.getElementById('answer-input');
    if (input) input.placeholder = translations[lang].placeholder_answer;
  }
  
    // دکمه تغییر زبان (در هر صفحه)
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.innerText = translations[lang].language;
  }
  
  function toggleLanguage() {
    const currentLang = localStorage.getItem('lang') || 'fa';
    const nextLang = currentLang === 'fa' ? 'en' : 'fa';
    setLanguage(nextLang);
  }
  
  window.onload = () => {
    const savedLang = localStorage.getItem('lang') || 'fa';
    setLanguage(savedLang);
  };
  