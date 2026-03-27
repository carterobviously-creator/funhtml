mySprite: Sprite = None
mySprite3: Sprite = None
mySprite2: Sprite = None

def on_b_pressed():
    global mySprite
    for index in range(randint(0, randint(0, 10))):
        mySprite = sprites.create(img("""
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
                """),
            SpriteKind.player)
        info.start_countdown(5)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def more_things():
    global mySprite3
    mySprite3 = sprites.create(img("""
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
            """),
        SpriteKind.player)
    music.play(music.create_song(assets.song("""
            mySong
            """)),
        music.PlaybackMode.UNTIL_DONE)

def on_a_pressed():
    for index2 in range(randint(0, randint(0, 10))):
        music.play(music.string_playable("C C D C - C D C ", 120),
            music.PlaybackMode.UNTIL_DONE)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def place_things():
    global mySprite2
    mySprite2 = sprites.create(img("""
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
            """),
        SpriteKind.player)
    more_things()

def on_countdown_end():
    global mySprite
    mySprite = sprites.create(img("""
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
            """),
        SpriteKind.player)
    place_things()
info.on_countdown_end(on_countdown_end)
