const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach(tab => {
    tab.addEventListener("click", event => {
        tabContents.forEach(tabContent => {
            tabContent.style.display = "none";
        });
        const tabId = event.target.getAttribute("data-tab");
        document.getElementById(tabId).style.display = "block";
    });
});
window.onload = function () {
            window.scrollTo(0,0);
        };
