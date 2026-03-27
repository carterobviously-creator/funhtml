controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < randint(0, randint(0, 10)); index++) {
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 3 . . . . 3 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 3 . . . . 3 . . . . . . . . 
            . . 3 . . . . 3 . . . . . . . . 
            . . 3 . . . . 3 . . . . . . . . 
            . . 3 . . . . 3 . . . . . . . . 
            . . 3 3 3 3 3 3 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        info.startCountdown(5)
    }
})
function more_things () {
    mySprite3 = sprites.create(img`
        3 . . . . . . . . . . . . . . 3 
        . 3 . . . . . . . . . . . . 3 . 
        . . 3 . . . . . . . . . . 3 . . 
        . . . 3 . . . . . . . . 3 . . . 
        . . . . 3 . . . . . . 3 . . . . 
        . . . . . 3 . . . . 3 . . . . . 
        . . . . . . 3 . . 3 . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . 3 . . 3 . . . . . . 
        . . . . . 3 . . . . 3 . . . . . 
        . . . . 3 . . . . . . 3 . . . . 
        . . . 3 . . . . . . . . 3 . . . 
        . . 3 . . . . . . . . . . 3 . . 
        . 3 . . . . . . . . . . . . 3 . 
        3 . . . . . . . . . . . . . . 3 
        `, SpriteKind.Player)
    music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.UntilDone)
    console.log("put more things")
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < randint(0, randint(0, 10)); index++) {
        music.play(music.stringPlayable("C C D C - C D C ", 120), music.PlaybackMode.UntilDone)
    }
})
function place_things () {
    mySprite2 = sprites.create(img`
        . . . . . . . 2 2 2 . . . . . . 
        2 . . . . . 2 . . . 2 . . 2 2 . 
        . . 2 . 2 2 . . . . . 2 . . . . 
        . 2 . 2 . 2 . . 2 2 2 . 2 . 2 . 
        2 . 2 . 2 2 2 2 2 2 2 2 2 . . . 
        . 2 . 2 2 . 2 2 2 2 2 2 2 . . . 
        2 . 2 . 2 . 2 2 . 2 2 2 2 2 2 . 
        . 2 . 2 2 . 2 2 . . 2 2 2 . 2 2 
        2 . 2 2 2 . 2 2 . . 2 2 . . 2 . 
        . . 2 2 2 . 2 2 2 2 2 . . 2 . . 
        . 2 . 2 . 2 2 2 2 2 2 2 2 2 . . 
        . . . . 2 2 2 2 2 2 . . . . . 2 
        . . . . . . . 2 . . . . . 2 . . 
        . . . . 2 2 . . . . . . 2 2 . . 
        . . . . . . . 2 2 2 2 2 . 2 2 . 
        . . . . . . . . . . . . 2 2 . . 
        `, SpriteKind.Player)
    more_things()
    console.log("things")
}
info.onCountdownEnd(function () {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 3 . . 3 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 3 3 3 3 . 
        . . . . . . . . . . . 3 . . 3 . 
        . . . . . . . . . . . 3 . . 3 . 
        . . . . . . . . . . . 3 . . 3 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    place_things()
})
let mySprite2: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
let myDart = darts.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 2 2 2 . . . . . . 
    . . 2 . . . . . . 2 . . . . . . 
    . 2 . . . . . . . 2 . . . . . . 
    2 2 2 2 2 2 2 2 2 2 . . . . . . 
    . 8 8 . . . . 8 8 . . . . . . . 
    8 . . 8 . . 8 . . 8 . . . . . . 
    . 8 8 . . . . 8 8 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
forever(function () {
    myDart.x += controller.dx()
    myDart.y += controller.dy()
})
