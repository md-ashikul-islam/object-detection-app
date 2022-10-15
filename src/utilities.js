export const drawRect = (detections,ctx) => {
    detections.forEach(prediction=>{
        const [x,y,width,height] = prediction['bbox'];
        const className = prediction['class']

        //styling
        const color ="green";
        ctx.strokeStyle = color;
        ctx.font = '18px Arial'
        ctx.fillStyle = color;

        //drawing the bounding box and labeling it
        ctx.beginPath()
        ctx.fillText(className,x,y)
        ctx.rect(x,y,width,height)
        ctx.stroke()

    })
    
}