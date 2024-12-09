document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".header");

    headers.forEach(headers => {
        headers.addEventListener("click", () => {
            const icon = headers.querySelector(".icon");
            const content = headers.nextElementSibling;

            icon.classList.toggle("open");
            content.classList.toggle("open");

            document.querySelectorAll(".content").forEach(otherContent => {
                if(otherContent != content && otherContent.classList.contains("open")) {
                    otherContent.classList.remove("open");
                    otherContent.previousSibling.querySelector(".icon").classList.remove("open");
                }
            })
        })
    })
});