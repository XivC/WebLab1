function check_input_numeric(string) {
    if (string.length > 5) return false
    return !isNaN(parseFloat(string));

}

function check_x(x) {
    return -2 <= x && 2 >= x;
}

function check_y(y) {
    return -5 <= y && 3 >= y;
}

function check_r() {
    let checkboxes = document.getElementsByName("r_checkbox")
    let isChecked = false
    checkboxes.forEach(checkbox => {
        if (checkbox.checked === true) {
            isChecked = true
        }
    })
    return isChecked
}


function shoot() {

    let x = document.getElementById("x_selection").value
    let y = document.getElementById("y_input").value
    let r = get_r()
    if (!check_input_numeric(x) || !check_input_numeric(y)) {
        alert("Недопустимые данные в форме");
        return
    }
    if (!check_x(x) || !check_y(y) || !check_r()) {
        alert("Введённые данные выходят за допустимые пределы");
        return
    }
    let request = new XMLHttpRequest();
    let formData = new FormData()
    formData.append("x", x);
    formData.append("y", y);
    formData.append("r", r);
    request.open('post', "shoot.php", true)
    request.overrideMimeType("application/json");
    request.onload = function () {
        console.log(request.responseText)
        let json = JSON.parse(request.responseText)
        render_table(json)
        show_last_hit_results(json)
        console.log(json);

    }
    request.send(formData)

}
