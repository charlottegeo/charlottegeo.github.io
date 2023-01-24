const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach(tab => {
    tab.addEventListener("click", event => {
        tabContents.forEach(tabContent => {
            tabContent.classList.remove("active");
        });
        const tabId = event.target.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
    });
});
window.onload = function () {
            window.scrollTo(0,0);
        };
