        const flipCardScene = document.getElementById("flipCard");
        const igCard = document.getElementById("igCard");

        function toggleFlip() {
            igCard.classList.toggle("is-flipped");
        }

        flipCardScene.addEventListener("click", toggleFlip);

        flipCardScene.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleFlip();
            }
        });