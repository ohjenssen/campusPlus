export function dropdownYourGroup() {
    const yourGroupBtn = document.getElementById('yourGroupBtn');
    const yourGroupDropdown = document.getElementById("yourGroupDropDown");

    const programBtn = document.getElementById('programBtn');
    const programDropDown = document.getElementById('programDropDown')

    yourGroupBtn.addEventListener('click', () => {
        yourGroupDropdown.classList.toggle("show");
        yourGroupBtn.classList.toggle("rotated");
    });


    programBtn.addEventListener('click', () => {
        programDropDown.classList.toggle("show");
        programBtn.classList.toggle("rotated");
    })

    const progress = document.querySelector(".progress");
    const value = Math.floor(Math.random() * 100);
    progress.style.setProperty("--progress", `${value}%`);
}

