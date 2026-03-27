let mySprite: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
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
