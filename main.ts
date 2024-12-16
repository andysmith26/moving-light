let strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
let dot = 0
basic.forever(function () {
    strip.clear()
    strip.setPixelColor(dot, neopixel.colors(NeoPixelColors.Orange))
    strip.show()
    basic.pause(100)
    dot += 1
    if (dot > 9) {
        dot = 0
    }
})
