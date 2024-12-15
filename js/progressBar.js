export function setProgress(){
    const progress = document.querySelector(".progress");
    const value = Math.floor(Math.random() * 100);
    progress.style.setProperty("--progress", `${value}%`);
}