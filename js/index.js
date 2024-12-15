import { stands } from "./stands.js";
import { handleGroupId } from "./handleGroupId.js";
import { dropdownYourGroup } from "./dropdown.js";
import { setProgress } from "./progressBar.js";

const path = location.pathname;
console.log(path);

function setRoute(path){
    switch(path){

        case '/hjaem.html':
            dropdownYourGroup();
            setProgress();
            break;

        case '/login.html':
            handleGroupId();
            break;
    }
}

setRoute(path);