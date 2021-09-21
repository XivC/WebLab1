function render_table(json) {

    console.log(json)
    let table_body = document.getElementById("hits_table_body")
    let hits_table = json["hits"].reverse()
    table_body.innerHTML = ""
    hits_table.forEach(hit => {
            let tr = document.createElement("tr")
            tr.setAttribute("class", "content")
            hit.forEach(cell => {
                let td = document.createElement("td")

                if (cell === true) {
                    td.appendChild(document.createTextNode("hit"))
                    td.setAttribute("class", "hit")
                } else if (cell === false) {
                    td.appendChild(document.createTextNode("miss"))
                    td.setAttribute("class", "miss")
                } else {
                    td.appendChild(document.createTextNode(cell.toString()))
                }
                tr.appendChild(td)
            })
            table_body.appendChild(tr)
        }
    )

}

async function get_table() {
    let url = "get_table.php"
    let request = new XMLHttpRequest()
    request.open('post', url, true)
    request.overrideMimeType("application/json")
    request.send()
    let response = await fetch(url);
    if (response.status === 200) {
        return response.json()
    }
}

function show_last_hit_results(json){
    let last_hit_result = document.getElementById("last_hit_result")
    let isHit = json["last_hit"]["isHit"]
    if(isHit) {last_hit_result.setAttribute("class", "hit"); last_hit_result.textContent = "Hit!"}
    else {last_hit_result.setAttribute("class", "miss"); last_hit_result.textContent = "Miss"}
    document.getElementById("script_time_start").innerText = "Request time: " + json["time_start"]
    document.getElementById("script_time").innerText = "Script execution time: " + json["script_time"] + " s."

}

