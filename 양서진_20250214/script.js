document.addEventListener("DOMContentLoaded", function () {
    const moreCakes = document.getElementById("moreCakes");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    loadMoreBtn.addEventListener("click", function () {
        if (moreCakes.classList.contains("show")) {
            moreCakes.classList.remove("show");
            loadMoreBtn.textContent = "더보기";
        } else {
            moreCakes.classList.add("show");
            loadMoreBtn.textContent = "닫기";
        }
    });
});
