

function check_input_numeric(string){
    if(string.length > 5) return false
    return !isNaN(parseFloat(string));

}

function check_x(x){
    return -2 <= x && 2 >= x;
}

function check_y(y){
    return -5 <= y && 3 >= y;
}
function check_r(){
    let checkboxes = document.getElementsByName("r_checkbox")
    let isChecked = false
    checkboxes.forEach(checkbox => {
        if (checkbox.checked === true){
            isChecked = true
        }
    })
    return isChecked
}



function shoot(){

    let x = document.getElementById("x_selection").value
    let y = document.getElementById("y_input").value
    if (!check_input_numeric(x) || !check_input_numeric(y)) {alert("Недопустимые данные в форме"); return false}
    if (!check_x(x) || !check_y(y) || !check_r()) {alert("Введённые данные выходят за допустимые пределы"); return false}
    return true


}