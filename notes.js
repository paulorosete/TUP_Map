const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')


canvas.width = 2000
canvas.height = 850

// c.fillStyle = 'white'
// c.fillRect(0,0, canvas.width, canvas.height)

const collisionsMap =[]
for (let i=0; i < collisions.length; i += 120){
    collisionsMap.push(collisions.slice(i, 120 + i))
}


const boundaries = []
const offset = {
    x: 0,
    y: -1000
}

collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j)=> {
        if (symbol === 20904)
        boundaries.push(
            new Boundary({
                position:{
                    x:j * Boundary.width + offset.x,
                    y:i * Boundary.height + offset.y
            
        }}))
    })
})




const image = new Image()
image.src = './img/FinalMap.png'


const playerImage = new Image()
playerImage.src = './img/playerDown.png'



const player = new Sprite({
    position:{
        x: canvas.width / 7 - 192 / 2 / 2,
        y: canvas.height / 2 - 68 / 1
    },
    image: playerImage,
    frames: {
        max: 4
    }
})

const background = new Sprite({ position: {
        x: offset.x,
        y: offset.y
    },
    image:image
})



const keys = {
    w: {
        pressed:false
    },

    a: {
        pressed:false
    },

    s: {
        pressed:false
    },

    d: {
        pressed:false
    }

}

const movables = [background, ...boundaries]

function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.position.x + player.width >= rectangle2.position.x && 
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + player.height >= rectangle2.position.y
    )
}

function animate(){
    window.requestAnimationFrame(animate)
    background.draw()
    boundaries.forEach(boundary => {
        boundary.draw()
    })
    player.draw()
    
    
    let moving = true
    if (keys.w.pressed && lastKey === 'w') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 3
                        }
                    }
                })
            ) {
                console.log('colliding')
                moving = false
                break
            }
        }

        if (moving)
        movables.forEach(movable => {
            movable.position.y += 3
        })
    }
    else if (keys.a.pressed && lastKey === 'a') { 
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x + 3,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                console.log('colliding')
                moving = false
                break
            }
        }

        if (moving)
        movables.forEach(movable => {
            movable.position.x += 3
        })
    }
    else if (keys.s.pressed && lastKey === 's') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 3
                        }
                    }
                })
            ) {
                console.log('colliding')
                moving = false
                break
            }
        }
        if (moving)
        movables.forEach(movable => {
            movable.position.y -= 3
        })
    }
    else if (keys.d.pressed && lastKey === 'd') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x - 3,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                console.log('colliding')
                moving = false
                break
            }
        }
        if (moving)
        movables.forEach(movable => {
            movable.position.x -= 3
        })
    }
}
animate()

let lastKey = ''
window.addEventListener('keydown', (e) => { 
    switch (e.key) {
      case'w':
        keys.w.pressed = true
        lastKey = 'w'
        break

        case'a':
        keys.a.pressed = true
        lastKey = 'a'
        break

        case's':
        keys.s.pressed = true
        lastKey = 's'
        break

        case'd':
        keys.d.pressed = true
        lastKey = 'd'
        break
    }
})

window.addEventListener('keyup', (e) => { 
    switch (e.key) {
      case'w':
        keys.w.pressed = false
        break

        case'a':
        keys.a.pressed = false
        break

        case's':
        keys.s.pressed = false
        break

        case'd':
        keys.d.pressed = false
        break
    }
})



