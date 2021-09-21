function render_grid(){
    let canvas = document.getElementById("target_canvas")
    if (canvas.getContext) {
        let ctx = document.getElementById("target_canvas").getContext('2d')
        let width = canvas.width
        let height = canvas.height
        let stepCount = 8
        let stepX = width/stepCount
        let stepY = height/stepCount
        ctx.beginPath();
        ctx.moveTo(0, height/2);
        ctx.lineTo(width, height/2);
        ctx.stroke();
        ctx.beginPath()
        ctx.moveTo(width/2, 0)
        ctx.lineTo(width/2, height)
        ctx.stroke()
        let mark_size = (width + height)/(2 * 50)
        ctx.font = "10px Arial"
        ctx.beginPath()
        for(let i = stepX; i < width; i += stepX){
            ctx.moveTo(i, height/2 + mark_size)
            let digit = -stepCount/2 + i/stepX
            digit = digit === 0 ? "" : digit
            ctx.fillText(digit, i - 3, height/2 + mark_size + mark_size)
            ctx.lineTo(i, height/2 - mark_size)
        }
        ctx.stroke()
        ctx.beginPath()
        for(let i = stepY; i < height; i += stepY){
            ctx.moveTo(width/2 + mark_size, i)
            let digit = stepCount/2 - i/stepY
            digit = digit === 0 ? "" : digit
            ctx.fillText(digit , width/2 + mark_size + mark_size/2, i + 3 )
            ctx.lineTo(width/2 - mark_size, i)
        }
        ctx.stroke()

    }
}
function render_target(r){
    let canvas = document.getElementById("target_canvas")
    if (canvas.getContext) {
        let ctx = document.getElementById("target_canvas").getContext('2d')
        let width = canvas.width
        let height = canvas.height
        let stepCount = 8
        let stepX = width / stepCount
        let stepY = height / stepCount
        ctx.fillStyle = "blue"
        ctx.globalAlpha = 0.5
        ctx.fillRect(width/ 2 - stepX * (r), height/2 - stepY * r/2, stepX * r, stepY * r/2)
        ctx.beginPath()
        //ctx.arc(width/2,height/2,r * stepX, Math.PI/2, Math.PI, false)
        ctx.ellipse(width/2, height/2, r * stepX, r * stepY, 0, Math.PI/2, Math.PI, false)
        ctx.lineTo(width/2, height/2)
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(width/2, height/2)
        ctx.lineTo(width/2 + r*stepX, height/2)
        ctx.lineTo(width/2, height/2 + r/2 * stepY )
        ctx.fill()
        ctx.globalAlpha = 1.0
        ctx.fillStyle = "black"

    }
}
function render_canvas(r){
    let canvas = document.getElementById("target_canvas")
    if (canvas.getContext) {
        let ctx = document.getElementById("target_canvas").getContext('2d')
        let width = canvas.width
        let height = canvas.height
        ctx.clearRect(0,0,width,height)
    }
    render_grid()
    render_target(r)
}
