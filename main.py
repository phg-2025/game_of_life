# Initial reset & show
# 
# reset()
def setState(arr: List[bool], x: number, y: number, value: bool):
    arr[x * 5 + y] = value
# Core function
def gameOfLife():
    global count, state
    for x3 in range(5):
        # switch (count) {
        # case 0: setState(result, x3, y3, false); break;
        # case 1: setState(result, x3, y3, false); break;
        # case 2: setState(result, x3, y3, getState(state, x3, y3)); break;
        # case 3: setState(result, x3, y3, true); break;
        # default: setState(result, x3, y3, false); break;
        # }
        for y3 in range(5):
            count = 0
            # Count the live cells in the next row
            if x3 + 1 < 5:
                if getState(state, x3 + 1, y3):
                    count += 1
                if y3 + 1 < 5 and getState(state, x3 + 1, y3 + 1):
                    count += 1
                if y3 - 1 >= 0 and getState(state, x3 + 1, y3 - 1):
                    count += 1
            # Count the live cells in the previous row
            if x3 - 1 >= 0:
                if getState(state, x3 - 1, y3):
                    count += 1
                if y3 + 1 < 5 and getState(state, x3 - 1, y3 + 1):
                    count += 1
                if y3 - 1 >= 0 and getState(state, x3 - 1, y3 - 1):
                    count += 1
            # Count the live cells in the current row exlcuding the current position.
            if y3 - 1 >= 0 and getState(state, x3, y3 - 1):
                count += 1
            if y3 + 1 < 5 and getState(state, x3, y3 + 1):
                count += 1
            oledssd1306.set_text_xy(x3, y3)
            oledssd1306.write_number(count)
            if not (getState(state, x3, y3)):
                if count == 3:
                    setState(result, x3, y3, True)
                else:
                    setState(result, x3, y3, False)
            else:
                # Auswerten
                if count == 0:
                    setState(result, x3, y3, False)
                elif count == 1:
                    setState(result, x3, y3, False)
                elif count == 2:
                    setState(result, x3, y3, True)
                elif count == 3:
                    setState(result, x3, y3, True)
                else:
                    setState(result, x3, y3, False)
    # Update the state
    state = result
    basic.pause(500)
# Verwende Knopf A für die nächste Widerholung des Spiels des Lebens

def on_button_pressed_a():
    gameOfLife()
    show2()
input.on_button_pressed(Button.A, on_button_pressed_a)

def succ(wert: number):
    return wert + 1
# get & set on any array
def getState(arr2: List[any], x2: number, y2: number):
    return arr2[x2 * 5 + y2]
# Verwende Knopf B für das Zurücksetzen auf einen zufälligen Anfangsstatus

def on_button_pressed_b():
    reset()
    show()
input.on_button_pressed(Button.B, on_button_pressed_b)

# Show the lifeChart based on the state
# lifeChart.plotImage(0);
def show():
    for x22 in range(5):
        # lifeChart.setPixel(x2, y2, getState(state, x2, y2));
        for y22 in range(5):
            oledssd1306.set_text_xy(y22, x22)
            if getState(state, x22, y22):
                oledssd1306.write_string("#")
                led.plot(x22, y22)
            else:
                oledssd1306.write_string(" ")
                led.unplot(x22, y22)
# Show the lifeChart based on the state
# lifeChart.plotImage(0);
def show2():
    for x222 in range(5):
        # lifeChart.setPixel(x2, y2, getState(state, x2, y2));
        for y222 in range(5):
            if getState(state, x222, y222):
                led.plot(x222, y222)
            else:
                led.unplot(x222, y222)
def prev(wert2: number):
    return wert2 - 1
# zufälligen Anfangsstatus generieren
def reset():
    pass
count = 0
result: List[bool] = []
state: List[bool] = []
zeilenzahl = 5
state = [False]
result = [False]
oledssd1306.init_display()
oledssd1306.clear_display()
Index = 0
while Index <= zeilenzahl * zeilenzahl:
    state.append(False)
    result.append(False)
    Index += 1
# setState(state, 2, 1, true)
# setState(state, 3, 2, true)
# setState(state, 3, 3, true)
# setState(state, 4, 1, true)
# setState(state, 4, 2, true)
setState(state, 2, 1, True)
setState(state, 2, 2, True)
setState(state, 2, 3, True)
show2()