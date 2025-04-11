document.addEventListener("DOMContentLoaded", function () {
    // انتخاب دکمه‌ها
    const solveBtn = document.getElementById("solve-btn");
    const learnBtn = document.getElementById("learn-btn");
    const practiceBtn = document.getElementById("practice-btn");
    const aboutBtn = document.getElementById("about-btn");
    const contactBtn = document.getElementById("contact-btn");
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");

    // چک کردن وجود دکمه‌ها قبل از اضافه کردن رویداد
    if (solveBtn) {
        solveBtn.addEventListener("click", function () {
            window.location.href = "solve.html"; 
        });
    }
    
    if (learnBtn) {
        learnBtn.addEventListener("click", function () {
            window.location.href = "learn.html";  
        });
    }
    
    if (practiceBtn) {
        practiceBtn.addEventListener("click", function () {
            window.location.href = "practice.html";  
        });
    }

    if (aboutBtn) {
        aboutBtn.addEventListener("click", function () {
            alert("صفحه درباره ما هنوز آماده نیست!");
        });
    }

    if (contactBtn) {
        contactBtn.addEventListener("click", function () {
            alert("صفحه ارتباط با ما هنوز آماده نیست!");
        });
    }

    // مدیریت منو
    if (menuButton && menu) {
        menuButton.addEventListener("click", function (event) {
            event.stopPropagation(); // جلوگیری از بسته شدن فوری منو
            menu.classList.toggle("open");
        });

        // بستن منو هنگام کلیک بیرون از آن
        document.addEventListener("click", function (event) {
            if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
                menu.classList.remove("open");
            }
        });

        // بستن منو هنگام کلیک روی آیتم‌های منو
        document.querySelectorAll(".menu a").forEach(item => {
            item.addEventListener("click", function () {
                menu.classList.remove("open");
            });
        });
    }
});

// نمایش مودال
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// بستن مودال
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// بستن مودال با کلیک روی فضای خارج از آن
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
});
