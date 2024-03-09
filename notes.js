const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
console.log(battleZonesData)



canvas.width = 7450
canvas.height = 10000







const collisionsMap =[]
for (let i=0; i < collisions.length; i += 120){
    collisionsMap.push(collisions.slice(i, 120 + i))
}



function generateBattleZoneMap(data) {
    const battleZonesMap = [];
    for (let i = 0; i < data.length; i += 120) {
        battleZonesMap.push(data.slice(i, 120 + i));
    }
    return battleZonesMap;
}

const battleZonesMap = generateBattleZoneMap(battleZonesData);

const image = new Image()
image.src = './img/FinalMap.png'

const playerDownImage = new Image()
playerDownImage.src = './img/playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = './img/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = './img/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = './img/playerRight.png'

const foregroundImage = new Image()
foregroundImage.src = './img/foregroundObjects.png'



const player = new Sprite({
    position:{
        x: canvas.width / 2 - 192 / 4 / 2,
        y: canvas.height / 2 - 68 / 2
    },
    image: playerDownImage,
    frames: {
        max: 4
        
    },
    sprites: {
        up: playerUpImage,
        left: playerLeftImage,
        right: playerRightImage,
        down: playerDownImage, 
    }
})
console.log(player)
// i uncomment mamaya

const char = new Sprite({
    position:{
        x: 3340,
        y: 1360
    },
    image: charImage,
   
})






const background = new Sprite({ position: {
        x: offset.x,
        y: offset.y
    },
    image:image
})

const foreground = new Sprite({ position: {
    x: offset.x,
    y: offset.y
},
image:foregroundImage
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

const movables = [background, ...boundaries, foreground, ...battleZones, ...battleZones2, ...battleZones3, ...battleZones4, 
...battleZones5, ...battleZones6, ...battleZones7, ...battleZones8, ...battleZones9, ...battleZones10, ...battleZones11, 
...battleZones12, ...battleZones13, ...battleZones14, ...battleZones15, ...battleZones16, ...battleZones17, ...battleZones18, ...battleZones19, 
...battleZones20, ...battleZones21, ...battleZones22, ...battleZones23, ...battleZones24, ...battleZones25, ...battleZones26, 
...battleZones27, ...battleZones28, char, char2, char3, char4, char5, char6, char7, char8, char9, char10, char11, char12, 
char13, char14, char15, char16, char17, char18, char19, char20, char21, char22, char23, char24, char25, char26, char27, charg, admin,
clinic, it, basd, mech, beeg, multi, lib, gym, dormi, court, sc]

function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.position.x + player.width >= rectangle2.position.x && 
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + player.height >= rectangle2.position.y
    )
}


const battle = {
    initiated: false
}

function animate(){
    const animationId = window.requestAnimationFrame(animate)
    background.draw()
    boundaries.forEach(boundary => {
        boundary.draw()
    })

    //bz1
    battleZones.forEach(battleZone => {
        battleZone.draw()
    })
    

    player.draw()
    char.draw()
   
    //building ind
    foreground.draw()
   
   
    

    //foreground.draw()
    

    let moving = true
    player.moving = false



function handleBattles(battleZones, animateBattleFunction) {
    if (battle.initiated) return;

    if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
        for (let i = 0; i < battleZones.length; i++) {
            const battleZone = battleZones[i];
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: battleZone
            })) {
                console.log('activate battle');
                window.cancelAnimationFrame(animationId);
                battle.initiated = true;
                gsap.to('#overlappingDiv', {
                    opacity: 1,
                    yoyo: true,
                    onComplete() {
                        gsap.to('#overlappingDiv', {
                            opacity: 1,
                            onComplete() {
                                animateBattleFunction();
                                gsap.to('#overlappingDiv', {
                                    opacity: 0,
                                });
                            }
                        });
                    }
                });
                break;
            }
        }
    }
}

handleBattles(battleZones, animateBattle);


    // let.moving = true
    // player.moving = false

    if (keys.w.pressed && lastKey === 'w') {
        for (let i = 0; i < boundaries.length; i++) {
            player.moving = true
            player.image = player.sprites.up
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + 8 // Increased from 3 to 6
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
            movable.position.y += 8 // Increased from 3 to 6
        })
    }
    else if (keys.a.pressed && lastKey === 'a') { 
        for (let i = 0; i < boundaries.length; i++) {
            player.moving = true
            player.image = player.sprites.left
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x + 8, // Increased from 3 to 6
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
            movable.position.x += 8 // Increased from 3 to 6
        })
    }
    else if (keys.s.pressed && lastKey === 's') {
        for (let i = 0; i < boundaries.length; i++) {
            player.moving = true
            player.image = player.sprites.down
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - 8 // Increased from 3 to 6
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
            movable.position.y -= 8 // Increased from 3 to 6
        })
    }
    else if (keys.d.pressed && lastKey === 'd') {
        for (let i = 0; i < boundaries.length; i++) {
            player.moving = true
            player.image = player.sprites.right
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary, 
                        position: {
                            x: boundary.position.x - 8, // Increased from 3 to 6
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
            movable.position.x -= 8 // Increased from 3 to 6
        })
    }
}

animate()
const battleBackgroundImage = new Image()
battleBackgroundImage.src = './img/Buildings/EntranceHallway1.jpg'
//bz2



const battleBackground = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage
})






function animateBattle() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  

  

  let percentages = {
    earthquake: 0,
    flood: 0,
    fire: 0,
  };
  
  function updatePercentageRandomly(disaster) {
    percentages[disaster] += (Math.floor(Math.random() * 3) - 1) * 3; // Randomly increment or decrement by 0, 1, or -1
    percentages[disaster] = Math.max(0, Math.min(100, percentages[disaster])); // Ensure percentage stays between 0 and 100
    document
      .getElementById(disaster)
      .getElementsByClassName("percentage")[0].textContent =
      percentages[disaster] + "%"; // Update displayed percentage
  }
  
  function updateAllPercentagesRandomly() {
    Object.keys(percentages).forEach((disaster) => {
      updatePercentageRandomly(disaster);
    });
  }
  
  window.addEventListener("keydown", (e) => {
    // Only update percentages when a WASD key is pressed
    if (["w", "a", "s", "d"].includes(e.key)) {
      updateAllPercentagesRandomly();
    }
  });
  
  let lastKey = "";
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "w":
        keys.w.pressed = true;
        lastKey = "w";
        break;
  
      case "a":
        keys.a.pressed = true;
        lastKey = "a";
        break;
  
      case "s":
        keys.s.pressed = true;
        lastKey = "s";
        break;
  
      case "d":
        keys.d.pressed = true;
        lastKey = "d";
        break;
    }
  
    updateAllPercentagesRandomly();
  });
  
  window.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "w":
        keys.w.pressed = false;
        break;
  
      case "a":
        keys.a.pressed = false;
        break;
  
      case "s":
        keys.s.pressed = false;
        break;
  
      case "d":
        keys.d.pressed = false;
        break;
    }
  });



