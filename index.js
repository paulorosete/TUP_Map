const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
console.log(bzData)



canvas.width = 7450
canvas.height = 10000







const collisionsMap =[]
for (let i=0; i < collisions.length; i += 120){
    collisionsMap.push(collisions.slice(i, 120 + i))
}

const bzMap =[]
for (let i=0; i < bzData.length; i += 120){
    bzMap.push(bzData.slice(i, 120 + i))
}




function generateBattleZoneMap(data) {
    const battleZonesMap = [];
    for (let i = 0; i < data.length; i += 120) {
        battleZonesMap.push(data.slice(i, 120 + i));
    }
    return battleZonesMap;
}



const battleZonesMap = generateBattleZoneMap(battleZonesData);
const battleZonesMap2 = generateBattleZoneMap(battleZonesData2);
const battleZonesMap3 = generateBattleZoneMap(battleZonesData3);
const battleZonesMap4 = generateBattleZoneMap(battleZonesData4);
const battleZonesMap5 = generateBattleZoneMap(battleZonesData5);
const battleZonesMap6 = generateBattleZoneMap(battleZonesData6);
const battleZonesMap7 = generateBattleZoneMap(battleZonesData7);
const battleZonesMap8 = generateBattleZoneMap(battleZonesData8);
const battleZonesMap9 = generateBattleZoneMap(battleZonesData9);
const battleZonesMap10 = generateBattleZoneMap(battleZonesData10);
const battleZonesMap11 = generateBattleZoneMap(battleZonesData11);
const battleZonesMap12 = generateBattleZoneMap(battleZonesData12);
const battleZonesMap13 = generateBattleZoneMap(battleZonesData13);
const battleZonesMap14 = generateBattleZoneMap(battleZonesData14);
const battleZonesMap15 = generateBattleZoneMap(battleZonesData15);
const battleZonesMap16 = generateBattleZoneMap(battleZonesData16);
const battleZonesMap17 = generateBattleZoneMap(battleZonesData17);
const battleZonesMap18 = generateBattleZoneMap(battleZonesData18);
const battleZonesMap19 = generateBattleZoneMap(battleZonesData19);
const battleZonesMap20 = generateBattleZoneMap(battleZonesData20);
const battleZonesMap21 = generateBattleZoneMap(battleZonesData21);
const battleZonesMap22 = generateBattleZoneMap(battleZonesData22);
const battleZonesMap23 = generateBattleZoneMap(battleZonesData23);
const battleZonesMap24 = generateBattleZoneMap(battleZonesData24);
const battleZonesMap25 = generateBattleZoneMap(battleZonesData25);
const battleZonesMap26 = generateBattleZoneMap(battleZonesData26);
const battleZonesMap27 = generateBattleZoneMap(battleZonesData27);
const battleZonesMap28 = generateBattleZoneMap(battleZonesData28);
const battleZonesMap29 = generateBattleZoneMap(battleZonesData29);
console.log(battleZonesMap);



const boundaries = []
const offset = {
    x: -270,
    y: -100
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

const bzs = []

bzMap.forEach((row, i) => {
    row.forEach((symbol, j)=> {
        if (symbol === 20904)
        bzs.push(
            new Boundary({
                position:{
                    x:j * Boundary.width + offset.x,
                    y:i * Boundary.height + offset.y
            
        }}))
    })
})

console.log(bzs)



function generateBattleZones(battleZonesMap) {
    const battleZones = [];
    battleZonesMap.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 20904) {
                battleZones.push(
                    new Boundary({
                        position: {
                            x: j * Boundary.width + offset.x,
                            y: i * Boundary.height + offset.y
                        }
                    })
                );
            }
        });
    });
    return battleZones;
}

const battleZones = generateBattleZones(battleZonesMap);
const battleZones2 = generateBattleZones(battleZonesMap2);
const battleZones3 = generateBattleZones(battleZonesMap3);
const battleZones4 = generateBattleZones(battleZonesMap4);
const battleZones5 = generateBattleZones(battleZonesMap5);
const battleZones6 = generateBattleZones(battleZonesMap6);
const battleZones7 = generateBattleZones(battleZonesMap7);
const battleZones8 = generateBattleZones(battleZonesMap8);
const battleZones9 = generateBattleZones(battleZonesMap9);
const battleZones10 = generateBattleZones(battleZonesMap10);
const battleZones11 = generateBattleZones(battleZonesMap11);
const battleZones12 = generateBattleZones(battleZonesMap12);
const battleZones13 = generateBattleZones(battleZonesMap13);
const battleZones14 = generateBattleZones(battleZonesMap14);
const battleZones15 = generateBattleZones(battleZonesMap15);
const battleZones16 = generateBattleZones(battleZonesMap16);
const battleZones17 = generateBattleZones(battleZonesMap17);
const battleZones18 = generateBattleZones(battleZonesMap18);
const battleZones19 = generateBattleZones(battleZonesMap19);
const battleZones20 = generateBattleZones(battleZonesMap20);
const battleZones21 = generateBattleZones(battleZonesMap21);
const battleZones22 = generateBattleZones(battleZonesMap22);
const battleZones23 = generateBattleZones(battleZonesMap23);
const battleZones24 = generateBattleZones(battleZonesMap24);
const battleZones25 = generateBattleZones(battleZonesMap25);
const battleZones26 = generateBattleZones(battleZonesMap26);
const battleZones27 = generateBattleZones(battleZonesMap27);
const battleZones28 = generateBattleZones(battleZonesMap28);
const battleZones29 = generateBattleZones(battleZonesMap29);
console.log(battleZones);

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
foregroundImage.src = './img/foregroundObjects2.png'

const charImage = new Image()
charImage.src = './img/char1.png'

const char2Image = new Image()
char2Image.src = './img/char2.png'

const char3Image = new Image()
char3Image.src = './img/char3.png'

const char4Image = new Image()
char4Image.src = './img/char4.png'

const char5Image = new Image()
char5Image.src = './img/char5.png'

const char6Image = new Image()
char6Image.src = './img/char6.png'

const char7Image = new Image()
char7Image.src = './img/char7.png'

const char8Image = new Image()
char8Image.src = './img/char8.png'

const char9Image = new Image()
char9Image.src = './img/char9.png'

const char10Image = new Image()
char10Image.src = './img/char10.png'

const char11Image = new Image()
char11Image.src = './img/char11.png'

const char12Image = new Image()
char12Image.src = './img/char12.png'

const char13Image = new Image()
char13Image.src = './img/char13.png'

const char14Image = new Image()
char14Image.src = './img/char14.png'

const char15Image = new Image()
char15Image.src = './img/char15.png'

const char16Image = new Image()
char16Image.src = './img/char16.png'

const char17Image = new Image()
char17Image.src = './img/char17.png'

const char18Image = new Image()
char18Image.src = './img/char18.png'

const char19Image = new Image()
char19Image.src = './img/char19.png'

const char20Image = new Image()
char20Image.src = './img/char20.png'

const char21Image = new Image()
char21Image.src = './img/char21.png'

const char22Image = new Image()
char22Image.src = './img/char22.png'

const char23Image = new Image()
char23Image.src = './img/char23.png'

const char24Image = new Image()
char24Image.src = './img/char24.png'

const char25Image = new Image()
char25Image.src = './img/char25.png'

const char26Image = new Image()
char26Image.src = './img/char26.png'

const char27Image = new Image()
char27Image.src = './img/char27.png'

const chargImage = new Image()
chargImage.src = './img/charg.png'

//building indications
const adminImage = new Image()
adminImage.src = './img/admin.png'

const clinicImage = new Image()
clinicImage.src = './img/clinic.png'

const itImage = new Image()
itImage.src = './img/it.png'

const basdImage = new Image()
basdImage.src = './img/BASD.png'

const mechImage = new Image()
mechImage.src = './img/mech.png'

const beegImage = new Image()
beegImage.src = './img/beeg.png'

const multiImage = new Image()
multiImage.src = './img/multi.png'

const libImage = new Image()
libImage.src = './img/lib.png'

const gymImage = new Image()
gymImage.src = './img/gym.png'

const dormiImage = new Image()
dormiImage.src = './img/dormi.png'

const courtImage = new Image()
courtImage.src = './img/court.png'

const scImage = new Image()
scImage.src = './img/sc.png'

const signImage = new Image()
signImage.src = './img/sign.png'

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

const char2 = new Sprite({
    position:{
        x: 3140,
        y: 1950
    },
    image: char2Image,
    
})

const char3 = new Sprite({
    position:{
        x: 3909,
        y: 1950
    },
    image: char3Image,
    
})

const char4 = new Sprite({
    position:{
        x: 3570,
        y: 2280
    },
    image: char4Image,
    
})

const char5 = new Sprite({
    position:{
        x: 3765,
        y: 2665
    },
    image: char5Image,
    
})

const char6 = new Sprite({
    position:{
        x: 3810,
        y: 3340
    },
    image: char6Image,
    
})

const char7 = new Sprite({
    position:{
        x: 4145,
        y: 3960
    },
    image: char7Image,
    
})

const charg = new Sprite({
    position:{
        x: 3810,
        y: 5017
    },
    image: chargImage,
    
})

const char8 = new Sprite({
    position:{
        x: 2850,
        y: 5017
    },
    image: char8Image,
    
})

const char9 = new Sprite({
    position:{
        x: 1025,
        y: 4875
    },
    image: char9Image,
    
})

const char10 = new Sprite({
    position:{
        x: 1362,
        y: 4440
    },
    image: char10Image,
    
})

const char11 = new Sprite({
    position:{
        x: 1843,
        y: 4300
    },
    image: char11Image,
    
})

const char12 = new Sprite({
    position:{
        x: 1028,
        y: 4205
    },
    image: char12Image,
    
})

const char13 = new Sprite({
    position:{
        x: 1170,
        y: 3770
    },
    image: char13Image,
    
})

const char14 = new Sprite({
    position:{
        x: 1602,
        y: 3100
    },
    image: char14Image,
    
})

const char15 = new Sprite({
    position:{
        x: 1505,
        y: 2425
    },
    image: char15Image,
    
})

const char16 = new Sprite({
    position:{
        x: 1267,
        y: 1950
    },
    image: char16Image,
    
})

const char17 = new Sprite({
    position:{
        x: 2130,
        y: 2620
    },
    image: char17Image,
    
})

const char18 = new Sprite({
    position:{
        x: 2760,
        y: 3000
    },
    image: char18Image,
    
})

const char19 = new Sprite({
    position:{
        x: 2562,
        y: 3580
    },
    image: char19Image,
    
})

const char20 = new Sprite({
    position:{
        x: 2130,
        y: 4155
    },
    image: char20Image,
    
})

const char21 = new Sprite({
    position:{
        x: 2658,
        y: 4395
    },
    image: char21Image,
    
})

const char22 = new Sprite({
    position:{
        x: 2947,
        y: 4395
    },
    image: char22Image,
    
})

const char23 = new Sprite({
    position:{
        x: 3185,
        y: 4395
    },
    image: char23Image,
    
})

const char24 = new Sprite({
    position:{
        x: 3185,
        y: 4685
    },
    image: char24Image,
    
})

const char25 = new Sprite({
    position:{
        x: 2995,
        y: 4205
    },
    image: char25Image,
    
})

const char26 = new Sprite({
    position:{
        x: 3135,
        y: 3870
    },
    image: char26Image,
    
})

const char27 = new Sprite({
    position:{
        x: 3090,
        y: 3005
    },
    image: char27Image,
    
})

//building ind
const admin = new Sprite({
    position:{
        x: 2435,
        y: 4375
    },
    image: adminImage,
    
})

const clinic = new Sprite({
    position:{
        x: 3093,
        y: 4675
    },
    image: clinicImage,
    
})

const it = new Sprite({
    position:{
        x: 1245,
        y: 4350
    },
    image: itImage,
    
})

const basd = new Sprite({
    position:{
        x: 3325,
        y: 4150
    },
    image: basdImage,
    
})

const mech = new Sprite({
    position:{
        x: 1421,
        y: 3990 
    },
    image: mechImage,
    
})

const beeg = new Sprite({
    position:{
        x: 880,
        y: 3000 
    },
    image: beegImage,
    
})

const multi = new Sprite({
    position:{
        x: 2165,
        y: 2578 
    },
    image: multiImage,
    
})

const lib = new Sprite({
    position:{
        x: 2010,
        y: 1750 
    },
    image: libImage,
    
})

const gym = new Sprite({
    position:{
        x: 3730,
        y: 1570 
    },
    image: gymImage,
    
})

const dormi = new Sprite({
    position:{
        x: 2535,
        y: 930 
    },
    image: dormiImage,
    
})

const court = new Sprite({
    position:{
        x: 2700,
        y: 4080 
    },
    image: courtImage,
    
})

const sc = new Sprite({
    position:{
        x: 3662,
        y: 3000 
    },
    image: scImage,
    
})

const sign = new Sprite({
    position:{
        x: 3719,
        y: 4650 
    },
    image: signImage,
    
})






const background = new Sprite({ position: {
        x: offset.x,
        y: offset.y
    },
    image:image
})

const foreground = new Sprite({ position: {
    x: offset.x,
    y: offset.y = -120

   
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
...battleZones27, ...battleZones28, ...battleZones29, char, char2, char3, char4, char5, char6, char7, char8, char9, char10, char11, char12, 
char13, char14, char15, char16, char17, char18, char19, char20, char21, char22, char23, char24, char25, char26, char27, charg, admin,
clinic, it, basd, mech, beeg, multi, lib, gym, dormi, court, sc, ...bzs, sign]

function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.position.x + player.width >= rectangle2.position.x && 
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + player.height >= rectangle2.position.y
    )
}

const battlePokemon = {
    initiated: false
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

    bzs.forEach(bzs => {
        bzs.draw()
    })

    //bz1
    battleZones.forEach(battleZone => {
        battleZone.draw()
    })
    //bz2
    battleZones2.forEach(battleZone2 => {
        battleZone2.draw()
    })
    //bz3
    battleZones3.forEach(battleZone3 => {
        battleZone3.draw()
    })
    //bz4
    battleZones4.forEach(battleZone4 => {
        battleZone4.draw()
    })
    //bz5
    battleZones5.forEach(battleZone5 => {
        battleZone5.draw()
    })
    //bz6
    battleZones6.forEach(battleZone6 => {
        battleZone6.draw()
    })
    //bz7
    battleZones7.forEach(battleZone7 => {
        battleZone7.draw()
    })
    //bz8
    battleZones8.forEach(battleZone8 => {
        battleZone8.draw()
    })
    //bz9
    battleZones9.forEach(battleZone9 => {
        battleZone9.draw()
    })
    battleZones10.forEach(battleZone10 => {
        battleZone10.draw()
    })
    battleZones11.forEach(battleZone11 => {
        battleZone11.draw()
    })
    battleZones12.forEach(battleZone12 => {
        battleZone12.draw()
    })
    battleZones13.forEach(battleZone13 => {
        battleZone13.draw()
    })
    battleZones14.forEach(battleZone14 => {
        battleZone14.draw()
    })
    battleZones15.forEach(battleZone15 => {
        battleZone15.draw()
    })
    battleZones16.forEach(battleZone16 => {
        battleZone16.draw()
    })
    battleZones17.forEach(battleZone17 => {
        battleZone17.draw()
    })
    battleZones18.forEach(battleZone18 => {
        battleZone18.draw()
    })
    battleZones19.forEach(battleZone19 => {
        battleZone19.draw()
    })
    battleZones20.forEach(battleZone20 => {
        battleZone20.draw()
    })
    battleZones21.forEach(battleZone21 => {
        battleZone21.draw()
    })
    battleZones22.forEach(battleZone22 => {
        battleZone22.draw()
    })
    battleZones23.forEach(battleZone23 => {
        battleZone23.draw()
    })
    battleZones24.forEach(battleZone24 => {
        battleZone24.draw()
    })
    battleZones25.forEach(battleZone25 => {
        battleZone25.draw()
    })
    battleZones26.forEach(battleZone26 => {
        battleZone26.draw()
    })
    battleZones27.forEach(battleZone27 => {
        battleZone27.draw()
    })
    battleZones28.forEach(battleZone28 => {
        battleZone28.draw()
    })
    
    battleZones29.forEach(battleZone29 => {
        battleZone29.draw()
    })

    basd.draw()
    lib.draw()
    beeg.draw()
    gym.draw()
    dormi.draw()
    court.draw()
    sc.draw()
    sign.draw()

    player.draw()
    char.draw()
    char2.draw()
    char3.draw()
    char4.draw()
    char5.draw()
    char6.draw()
    char7.draw()
    char8.draw()
    char9.draw()
    char10.draw()
    char11.draw()
    char12.draw()
    char13.draw()
    char14.draw()
    char15.draw()
    char16.draw()
    char17.draw()
    char18.draw()
    char19.draw()
    char20.draw()
    char21.draw()
    char22.draw()
    char23.draw()
    char24.draw()
    char25.draw()
    char26.draw()
    char27.draw()
    charg.draw()
    //building ind
    foreground.draw()
    admin.draw()
    clinic.draw()
    it.draw()
    mech.draw()
    
    multi.draw()
   
    let moving = true
    player.moving = false



    // if (battlePokemon.initiated) return;
    // //activate battle
    // if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
    //     for(let i = 0; i < bzs.length; i++){
    //         const bz=bzs[i]
    //         const overlappingArea=
    //         (Math.min(
    //             player.position.x + player.width,
    //             bz.position.x + bz.width
    //         )-
    //             Math.max(player.position.x, bz.position.x))*
    //         (Math.min(
    //             player.position.y + player.height,
    //             bz.position.y + bz.height
    //         )-
    //             Math.max(player.position.y, bz.position.y))
    //         if (
    //             rectangularCollision({
    //                 rectangle1: player,
    //                 rectangle2: bz
    //             }) && 
    //             overlappingArea > (player.width * player.height)/2
    //             && Math.random() < 0.01
    //         ) {
    //             console.log('activate battle')
    //             window.cancelAnimationFrame(animationId);
    //             battlePokemon.initiated = true
    //             gsap.to('#overlappingDiv', {
    //                 opacity: 1,
    //                 repeat:3,
    //                 yoyo: true,
    //                 duration: 0.4,
    //                 onComplete() {
    //                     gsap.to('#overlappingDiv', {
    //                         opacity: 1,
    //                         duration: 0.4,
    //                         onComplete() {
    //                             animateBattlePokemon()
    //                             gsap.to('#overlappingDiv', {
    //                                 opacity: 1,
    //                                 duration: 0.4,
                                    
    //                             })
    //                         }
                            
    //                     })
    //                     //animateBattlePokemon()
    //                 }
    //             });
    //             break;
    //         }
    //     }
    // }


    



    let triggeredAnimations = {};

    function handleBattles(battleZones, animateBattleFunction) {
        // Check if the animation has already been triggered
        if (triggeredAnimations[animateBattleFunction]) return;
        
        if (battle.initiated) return;
    
        if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
            for (let i = 0; i < battleZones.length; i++) {
                const battleZone = battleZones[i];
                if (rectangularCollision({
                    rectangle1: player,
                    rectangle2: battleZone
                })) {
                    console.log('activate battle');
    
                    // Set the animateBattleFunction as triggered
                    triggeredAnimations[animateBattleFunction] = true;
    
                    // This is the animation to trigger the battle
                    gsap.to('#overlappingDiv', {
                        opacity: 1,
                        duration: 0.4,
                        yoyo: true,
                        onComplete: () => {
                            gsap.to('#overlappingDiv', {
                                opacity: 1,
                                onComplete: () => {
                                    // Ensure the battle function is called
                                    animateBattleFunction();
    
                                    // Ensure the overlappingDiv is hidden
                                    gsap.to('#overlappingDiv', {
                                        opacity: 0,
                                        onComplete: () => {
                                            // Reset battle initiated flag
                                            battle.initiated = false;
                                        }
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
handleBattles(battleZones2, animateBattle2);
handleBattles(battleZones3, animateBattle3);
handleBattles(battleZones4, animateBattle4);
handleBattles(battleZones5, animateBattle5);
handleBattles(battleZones6, animateBattle6);
handleBattles(battleZones7, animateBattle7);
handleBattles(battleZones8, animateBattle8);
handleBattles(battleZones9, animateBattle9);
handleBattles(battleZones10, animateBattle10);
handleBattles(battleZones11, animateBattle11);
handleBattles(battleZones12, animateBattle12);
handleBattles(battleZones13, animateBattle13);
handleBattles(battleZones14, animateBattle14);
handleBattles(battleZones15, animateBattle15);
handleBattles(battleZones16, animateBattle16);
handleBattles(battleZones17, animateBattle17);
handleBattles(battleZones18, animateBattle18);
handleBattles(battleZones19, animateBattle19);
handleBattles(battleZones20, animateBattle20);
handleBattles(battleZones21, animateBattle21);
handleBattles(battleZones22, animateBattle22);
handleBattles(battleZones23, animateBattle23);
handleBattles(battleZones24, animateBattle24);
handleBattles(battleZones25, animateBattle25);
handleBattles(battleZones26, animateBattle26);
handleBattles(battleZones27, animateBattle27);
handleBattles(battleZones28, animateBattle28);
handleBattles(battleZones29, animateBattle29);

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
const battleBackgroundImage2 = new Image()
battleBackgroundImage2.src = './img/Buildings/Clinic.jpg'

//bz3
const battleBackgroundImage3 = new Image()
battleBackgroundImage3.src = './img/Buildings/OSABuilding.jpg'

const battleBackgroundImage4 = new Image()
battleBackgroundImage4.src = './img/Buildings/groundHallway2.jpg'

const battleBackgroundImage5 = new Image()
battleBackgroundImage5.src = './img/Buildings/AdminBuilding.jpg'

const battleBackgroundImage6 = new Image()
battleBackgroundImage6.src = './img/Buildings/OpenCourt.jpg'

const battleBackgroundImage7 = new Image()
battleBackgroundImage7.src = './img/Buildings/groundHallway.jpg'

const battleBackgroundImage8 = new Image()
battleBackgroundImage8.src = './img/Buildings/Ground1.jpg'

const battleBackgroundImage9 = new Image()
battleBackgroundImage9.src = './img/Buildings/MultiPurposeHall.jpg'

const battleBackgroundImage10 = new Image()
battleBackgroundImage10.src = './img/Buildings/Chapel.jpg'

const battleBackgroundImage11 = new Image()
battleBackgroundImage11.src = './img/Buildings/PSI.jpg'

const battleBackgroundImage12 = new Image()
battleBackgroundImage12.src = './img/Buildings/StudentsCenter.jpg'

const battleBackgroundImage13 = new Image()
battleBackgroundImage13.src = './img/Buildings/EntranceHallway2.jpg'

const battleBackgroundImage14 = new Image()
battleBackgroundImage14.src = './img/Buildings/BackHallway1.jpg'

const battleBackgroundImage15 = new Image()
battleBackgroundImage15.src = './img/Buildings/Gym.jpg'

const battleBackgroundImage16 = new Image()
battleBackgroundImage16.src = './img/Buildings/Library.jpg'

const battleBackgroundImage17 = new Image()
battleBackgroundImage17.src = './img/Buildings/Dormitory.jpg'

const battleBackgroundImage18 = new Image()
battleBackgroundImage18.src = './img/Buildings/Canteen.jpg'

const battleBackgroundImage19 = new Image()
battleBackgroundImage19.src = './img/Buildings/MECBuilding2.jpg'

const battleBackgroundImage20 = new Image()
battleBackgroundImage20.src = './img/Buildings/MECBuilding1.jpg'

const battleBackgroundImage21 = new Image()
battleBackgroundImage21.src = './img/Buildings/ITbuilding.jpg'

const battleBackgroundImage22 = new Image()
battleBackgroundImage22.src = './img/Buildings/BackEntranceHallway.jpg'

const battleBackgroundImage23 = new Image()
battleBackgroundImage23.src = './img/Buildings/BackHallway3.jpg'

const battleBackgroundImage24 = new Image()
battleBackgroundImage24.src = './img/Buildings/ItalianBuilding.jpg'

const battleBackgroundImage25 = new Image()
battleBackgroundImage25.src = './img/Buildings/Gubat.jpg'

const battleBackgroundImage26 = new Image()
battleBackgroundImage26.src = './img/Buildings/BackHallway2.jpg'

const battleBackgroundImage27 = new Image()
battleBackgroundImage27.src = './img/Buildings/OldHospital.jpg'

const battleBackgroundImage28 = new Image()
battleBackgroundImage28.src = './img/Buildings/Parking.jpg'

const battleBackgroundImage29 = new Image()
battleBackgroundImage29.src = './img/direction.png'


const battleBackground = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage
})



//bz2
const battleBackground2 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage2
})
//bz3
const battleBackground3 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage3
})

const battleBackground4 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage4

})

const battleBackground5 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage5
})

const battleBackground6 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage6
})

const battleBackground7 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage7
})

const battleBackground8 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage8
})

const battleBackground9 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage9
})

const battleBackground10 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage10
})

const battleBackground11 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage11
})

const battleBackground12 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage12
})

const battleBackground13 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage13
})

const battleBackground14 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage14
})

const battleBackground15 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage15
})

const battleBackground16 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage16
})

const battleBackground17 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage17
})

const battleBackground18 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage18
})

const battleBackground19 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage19
})

const battleBackground20 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage20
})

const battleBackground21 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage21
})

const battleBackground22 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage22
})

const battleBackground23 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage23
})

const battleBackground24 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage24
})

const battleBackground25 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage25
})

const battleBackground26 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage26
})

const battleBackground27 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage27
})

const battleBackground28 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage28
})

const battleBackground29 = new Sprite({ 
    position:{
        x: 1800,
        y: 3500
    },
    image: battleBackgroundImage29
})

// function animateBattle(){
//     window.requestAnimationFrame(animateBattle)
//     battleBackground.draw()
// }

function animateBattle() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }
//b2
function animateBattle2() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground2.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

//b3
function animateBattle3() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground3.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle4() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground4.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle5() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground5.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle6() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground6.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle7() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground7.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle8() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground8.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle9() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground9.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle10() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground10.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle11() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground11.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle12() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground12.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle13() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground13.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle14() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground14.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle15() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground15.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle16() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground16.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle17() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground17.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle18() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground18.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle19() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground19.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle20() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground20.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle21() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground21.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle22() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground22.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle23() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground23.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }
  function animateBattle24() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground24.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle25() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground25.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle26() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground26.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle27() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground27.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle28() {
    var newWindow = window.open("", "_blank");
    var img = newWindow.document.createElement("img");
    img.src = battleBackground28.image.src;
  
    img.style.width = "100%";
    img.style.height = "100%";
  
    newWindow.document.body.appendChild(img);
  }

  function animateBattle29() {
    var newWindow = window.open("", "_blank");
    var container = newWindow.document.createElement("div"); // Create a container div
    container.style.display = "flex"; // Use flexbox
    container.style.justifyContent = "center"; // Center content horizontally
    container.style.alignItems = "center"; // Center content vertically
    container.style.width = "100%"; // Set container width to 100%

    var img = newWindow.document.createElement("img");
    img.src = battleBackground29.image.src;
    img.style.width = "45%";
    img.style.height = "100%";

    container.appendChild(img); // Append image to container
    newWindow.document.body.appendChild(container); // Append container to body
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
  
  animate()

  const pokemonBackgroundImage = new Image()
  pokemonBackgroundImage.src = './img/bg.png'
  const pokemonBackground = new Sprite({
    position: {
    x: 1000,
    y: 1000
  }, image: pokemonBackgroundImage})
  function animateBattlePokemon(){
    window.requestAnimationFrame(animateBattlePokemon)
    pokemonBackground.draw()
    console.log('animating battle')
  }

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



