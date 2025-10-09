document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("#btns button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const className = button.className;

            if (className === "random") {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            } else {
                document.body.style.backgroundColor = className;
            }
        });
    });
});
