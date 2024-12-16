import { stands } from "./stands.js";

const zones = {
    red: [[55.456861, 12.181376], [55.456663, 12.180244]],
    blue: [[55.456855, 12.181390], [55.457407, 12.182953]],
    green: [[55.457771, 12.178861], [55.457471, 12.181061]],
    yellow: [[55.458110, 12.182266], [55.458510, 12.183617]],
    pink: [[55.458872, 12.181195], [55.457973, 12.182127]],
};

// Function to render stands based on the selected zone
export function renderStands(selectedZone = "all") {
    const container = document.getElementById("standsContainer");
    container.innerHTML = ``;

    // Filter stands by the selected zone
    const filteredStands = selectedZone === "all" 
        ? stands 
        : stands.filter(stand => stand.zone === selectedZone);

    for (let i = 0; i < filteredStands.length; i++) {
        const stand = filteredStands[i];
        const standContainer = document.createElement("div");
        standContainer.classList.add("standContainer");

        const standNameAndZoneContainer = document.createElement("div");
        standNameAndZoneContainer.classList.add("standNameAndZoneContainer");

        const starIcon = document.createElement("img");
        starIcon.src = "./images/star-fill.svg";

        const standTitle = document.createElement("h4");
        standTitle.textContent = stand.name;

        const likeBtn = document.createElement("button");
        likeBtn.classList.add("likeBtn");

        const likeIcon = document.createElement("img");
        likeIcon.src = "./images/suit-heart.svg";
        likeIcon.classList.add("filter-white");
        likeBtn.addEventListener('click', () => {
            if (!likeIcon.src.endsWith('suit-heart-fill.svg')) {
                console.log('yes');
                likeIcon.src = './images/suit-heart-fill.svg';
                likeIcon.classList.add('filter-red');
            } else {
                console.log('no');
                likeIcon.src = './images/suit-heart.svg';
                likeIcon.classList.remove('filter-red');
            }
        });

        standContainer.appendChild(standNameAndZoneContainer);
        standNameAndZoneContainer.appendChild(starIcon);
        standNameAndZoneContainer.appendChild(standTitle);
        standContainer.appendChild(likeBtn);
        likeBtn.appendChild(likeIcon);

        // Add zone-specific styles
        switch (stand.zone) {
            case "red":
                starIcon.classList.add("filter-red");
                break;
            case "blue":
                starIcon.classList.add("filter-blue");
                break;
            case "yellow":
                starIcon.classList.add("filter-yellow");
                break;
            case "green":
                starIcon.classList.add("filter-green");
                break;
            case "pink":
                starIcon.classList.add("filter-pink");
                break;
        }

        container.appendChild(standContainer);
    }
}

// Listen for zone selection changes and re-render the stands
document.querySelectorAll(".scrollMenuItemInput").forEach(input => {
    input.addEventListener("change", (event) => {
        renderStands(event.target.value);
    });
});