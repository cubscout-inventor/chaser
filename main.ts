input.onButtonPressed(Button.B, function on_button_pressed_b() {
    strip.clear()
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.show()
})
let counter = 0
let strip : neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
basic.forever(function on_forever() {
    
    strip.clear()
    for (let i = 0; i < 13; i++) {
        if ((i - counter) % 3 == 0) {
            //  true for every third LED
            strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Yellow))
        }
        
        counter += 1
        strip.show()
        basic.pause(15)
    }
})
