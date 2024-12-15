import { stands } from "./stands.js";
import { handleGroupId } from "./handleGroupId.js";
import { dropdownYourGroup } from "./dropdown.js";

const path = location.pathname;
console.log(path);

function setRoute(path){
    switch(path){

        case '/hjaem.html':
            dropdownYourGroup();
            break;

        case '/login.html':
            handleGroupId();
            break;
    }
}

setRoute(path);