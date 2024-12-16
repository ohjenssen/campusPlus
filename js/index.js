// import { stands } from "./stands.js";
import { handleGroupId } from "./handleGroupId.js";
import { dropdownYourGroup } from "./dropdown.js";
import { setProgress } from "./progressBar.js";
import { renderStands } from "./renderStands.js";

const path = location.pathname;

function setRoute(path){
    switch(path){

        case '/hjaem.html':
            dropdownYourGroup();
            setProgress();
            break;

        case '/login.html':
            handleGroupId();
            console.log('yes')
            break;

        case '/stands.html':
            renderStands();
    }
}

setRoute(path);