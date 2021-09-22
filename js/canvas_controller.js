let stepCount = 8

function render_grid() {
    let canvas = document.getElementById("target_canvas")
    if (canvas.getContext) {
        let ctx = document.getElementById("target_canvas").getContext('2d')
        let width = canvas.width
        let height = canvas.height
        let stepX = width / stepCount
        let stepY = height / stepCount
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.stroke();
        ctx.beginPath()
        ctx.moveTo(width / 2, 0)
        ctx.lineTo(width / 2, height)
        ctx.stroke()
        let mark_size = (width + height) / (2 * 50)
        ctx.font = "10px Arial"
        ctx.beginPath()
        for (let i = stepX; i < width; i += stepX) {
            ctx.moveTo(i, height / 2 + mark_size)
            let digit = -stepCount / 2 + i / stepX
            digit = digit === 0 ? "" : digit
            ctx.fillText(digit, i - 3, height / 2 + mark_size + mark_size)
            ctx.lineTo(i, height / 2 - mark_size)
        }
        ctx.stroke()
        ctx.beginPath()
        for (let i = stepY; i < height; i += stepY) {
            ctx.moveTo(width / 2 + mark_size, i)
            let digit = stepCount / 2 - i / stepY
            digit = digit === 0 ? "" : digit
            ctx.fillText(digit, width / 2 + mark_size + mark_size / 2, i + 3)
            ctx.lineTo(width / 2 - mark_size, i)
        }
        ctx.stroke()

    }
}

function render_target(r) {
    let canvas = document.getElementById("target_canvas")
    if (canvas.getContext) {
        let ctx = document.getElementById("target_canvas").getContext('2d')
        let width = canvas.width
        let height = canvas.height
        let stepX = width / stepCount
        let stepY = height / stepCount
        ctx.fillStyle = "blue"
        ctx.globalAlpha = 0.5
        ctx.fillRect(width / 2 - stepX * (r), height / 2 - stepY * r / 2, stepX * r, stepY * r / 2)
        ctx.beginPath()
        //ctx.arc(width/2,height/2,r * stepX, Math.PI/2, Math.PI, false)
        ctx.arc(width / 2, height / 2, r * stepX, Math.PI / 2, Math.PI, false)
        ctx.lineTo(width / 2, height / 2)
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(width / 2, height / 2)
        ctx.lineTo(width / 2 + r * stepX, height / 2)
        ctx.lineTo(width / 2, height / 2 + r / 2 * stepY)
        ctx.fill()
        ctx.globalAlpha = 1.0
        ctx.fillStyle = "black"

    }
}

function render_canvas(r, load_table = false) {
    let canvas = document.getElementById("target_canvas")
    if (canvas.getContext) {
        let ctx = document.getElementById("target_canvas").getContext('2d')
        let width = canvas.width
        let height = canvas.height
        ctx.clearRect(0, 0, width, height)
    }
    render_grid()
    render_target(r)
    if (load_table === false) {
        render_hits(r, false).then()
    } else {
        render_hits(r, load_table).then()

    }
}

async function render_hits(r, load_table) {
    let canvas = document.getElementById("target_canvas")
    let table
    if (load_table === false) {

        table = await get_table().then(table_ => table_["hits"])
    } else {
        table = load_table["hits"]
    }
    if (canvas.getContext) {

        let ctx = document.getElementById("target_canvas").getContext('2d')
        let width = canvas.width
        let height = canvas.height
        let stepX = width / stepCount
        let stepY = height / stepCount
        console.log(table)
        table.forEach(hit => {

            let x = hit[0] * stepX + width / 2
            let y = -hit[1] * stepY + height / 2
            let r_ = hit[2]
            let isHit = hit[3]
            if (Math.abs(r_ - r) < 0.0001) {
                console.log(x, y)
                ctx.beginPath()
                if (isHit) ctx.fillStyle = "green"
                else ctx.fillStyle = "red"
                ctx.globalAlpha = 0.7
                ctx.ellipse(x, y, stepX / 10, stepY / 10, 0, 0, Math.PI * 2, true)
                ctx.fill()
            }

            ctx.fillStyle = "black"
            ctx.globalAlpha = 1
        })

    }

}

function shoot_by_canvas(canvas, event) {
    let rect = canvas.getBoundingClientRect()
    let width = canvas.width
    let height = canvas.height
    let stepX = width / stepCount
    let stepY = height / stepCount
    let x =  -(canvas.width/2 - (event.clientX - rect.left)) / stepX
    let y = (canvas.height/2 - (event.clientY - rect.top)) / stepY
    let r = get_r()
    if (r > 0) shoot_request(x, y, r)

}

function canvas_init() {
    render_canvas(0)
    let canvas = document.getElementById("target_canvas")
    canvas.addEventListener('mousedown', event => shoot_by_canvas(canvas, event))

}