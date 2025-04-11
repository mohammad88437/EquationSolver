document.addEventListener("DOMContentLoaded", function () {

    const solveBtn = document.getElementById("solve-btn");
    const learnBtn = document.getElementById("learn-btn");
    const practiceBtn = document.getElementById("practice-btn");
    const aboutBtn = document.getElementById("about-btn");
    const contactBtn = document.getElementById("contact-btn");
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");

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

    if (menuButton && menu) {
        menuButton.addEventListener("click", function (event) {
            event.stopPropagation(); 
            menu.classList.toggle("open");
        });

        document.addEventListener("click", function (event) {
            if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
                menu.classList.remove("open");
            }
        });

        document.querySelectorAll(".menu a").forEach(item => {
            item.addEventListener("click", function () {
                menu.classList.remove("open");
            });
        });
    }
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
        event.target.style.display = "none";
    }
});
