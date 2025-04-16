document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".scientist-profile");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let currentIndex = 0;

    // Function to update the active profile
    function updateActiveProfile(index) {
        profiles.forEach((profile, i) => {
            if (i === index) {
                profile.classList.add("active");
            } else {
                profile.classList.remove("active");
            }
        });
    }

    // Event listener for the previous button
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + profiles.length) % profiles.length;
        updateActiveProfile(currentIndex);
    });

    // Event listener for the next button
    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % profiles.length;
        updateActiveProfile(currentIndex);
    });

    // Initialize the first profile as active
    updateActiveProfile(currentIndex);
});