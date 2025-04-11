document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("solve-equations").addEventListener("click", function () {

        let a1 = parseFloat(document.getElementById("a1").value);
        let b1 = parseFloat(document.getElementById("b1").value);
        let c1 = parseFloat(document.getElementById("c1").value);

        let a2 = parseFloat(document.getElementById("a2").value);
        let b2 = parseFloat(document.getElementById("b2").value);
        let c2 = parseFloat(document.getElementById("c2").value);

        let D = (a1 * b2) - (a2 * b1);
        let Dx = (c1 * b2) - (c2 * b1);
        let Dy = (a1 * c2) - (a2 * c1);

        let resultText = "";

        if (D === 0) {
            if (Dx === 0 && Dy === 0) {
                resultText = "بینهایت جواب دارد!";
            } else {
                resultText = "دستگاه معادلات ناسازگار است (جوابی ندارد).";
            }
        } else {
            let x = Dx / D;
            let y = Dy / D;
            resultText = `جواب دستگاه معادلات: x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`;
        }

        document.getElementById("result").textContent = resultText;
    });
});


