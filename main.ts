radio.onReceivedString(function (receivedString) {
    let receivedstring = ""
    if (receivedstring == "spielen") {
        Spielphase = "spielen"
    } else if (receivedstring == "leicht") {
        Schwierigkeit = 1
    } else if (receivedstring == "mittel") {
        Schwierigkeit = 3
    } else if (receivedstring == "schwer") {
        Schwierigkeit = 5
    }
})
function spielen () {
    led.toggle(LED_y, LED_y)
    LED_x += pins.map(
    0,
    -1023,
    -1023,
    0,
    5
    )
    LED_y += pins.map(
    0,
    -1023,
    -1023,
    0,
    5
    )
    led.plot(LED_x, LED_y)
    basic.setLedColor(0x00ff00)
    if (LED_x < 0 || LED_x > 4 || (LED_y < 0 || LED_y > 4)) {
        basic.setLedColor(0xff0000)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.pause(3000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.setLedColor(0xff0000)
        Spielphase = "warten"
    }
}
let LED_x = 0
let LED_y = 0
let Schwierigkeit = 0
let Spielphase = ""
radio.setGroup(3)
Spielphase = "warten"
Schwierigkeit = 1
let Platzhalter = input.acceleration(Dimension.X)
basic.forever(function () {
    if (true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (Spielphase == "spielen") {
        spielen()
    }
})
