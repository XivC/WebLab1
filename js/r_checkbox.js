
function r_checkbox_click(id){
    let checkboxes = document.getElementsByName('r_checkbox')
    for (let i = 0; i < checkboxes.length; i++) {

        if (checkboxes[i].id !== id) {
            checkboxes[i].checked = false

        }

    }
    render_canvas(get_r())
}

function get_r(){
    let r = 0
    document.getElementsByName("r_checkbox").forEach(checkbox => {
        if (checkbox.checked) {
            r = checkbox.value
        }
})
    return r
}
