
function r_checkbox_click(id){
    let checkboxes = document.getElementsByName('r_checkbox')
    for (let i = 0; i < checkboxes.length; i++) {

        if (checkboxes[i].id !== id) {
            checkboxes[i].checked = false
        }
        else {
            r = i
        }

    }
}
