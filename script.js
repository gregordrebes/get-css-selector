// https://stackoverflow.com/questions/4588119/get-elements-css-selector-when-it-doesnt-have-an-id
function getCssSelector(event) {
    let element = event.target;
    let elements_names = [];
    while (element.parentNode) {
        if (element.id) {
            elements_names.unshift('#' + element.id);
            break;
        } else {
            // IF ELEMENT HAS A PREVIOUS SIBLING (!= null)
            if (element.previousElementSibling){
                let child_number = 1;
                for (let aux_element = element; aux_element.previousElementSibling; aux_element = aux_element.previousElementSibling){
                    child_number++;
                }
                elements_names.unshift(element.tagName.toLowerCase() + ":nth-child(" + child_number + ")");
            } else {
                elements_names.unshift(element.tagName.toLowerCase());
            }

            element = element.parentNode;
        }
    }
    alert(elements_names.join(" > "));
}

document.addEventListener('click', getCssSelector);