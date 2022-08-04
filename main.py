def on_button_pressed_b():
    strip.clear()
    strip.show_color(neopixel.colors(NeoPixelColors.BLUE))
    strip.show()
input.on_button_pressed(Button.B, on_button_pressed_b)

counter = 0
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)

def on_forever():
    global counter
    strip.clear()
    for i in range(13):
        if (i - counter) % 3 == 0:
            # true for every third LED
            strip.set_pixel_color(i, neopixel.colors(NeoPixelColors.YELLOW))
        counter += 1
        strip.show()
        basic.pause(15)
basic.forever(on_forever)
