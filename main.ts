// Conwayx "Game of Life" (Spiel des Lebens)
// 
// Einzelheiten bei Wikipedia oder
// 
// https://www.prof-horst-guenther.de/calliope
function setState (zl1: number, sp1: number, value: boolean) {
    Gitter1[zl1 * spaltenzahl + sp1] = value
}
// Core function
function gameOfLife () {
    for (let zl4 = 0; zl4 <= prev(zeilenzahl); zl4++) {
        zl3 = zl4 + 1
        for (let sp4 = 0; sp4 <= prev(spaltenzahl); sp4++) {
            sp3 = sp4 + 1
            links = (sp3 - 1) % spaltenzahl
            rechts = (sp3 + 1) % spaltenzahl
            oben = (zl3 - 1) % zeilenzahl
            unten = (zl3 + 1) % zeilenzahl
            Nachbarn = 0
            zähle(oben, links)
            zähle(oben, sp3)
            zähle(oben, rechts)
            zähle(zl3, links)
            zähle(zl3, rechts)
            zähle(unten, links)
            zähle(unten, sp3)
            zähle(unten, rechts)
            ind = zl3 * spaltenzahl + sp3
            if (!(getState(zl3, sp3))) {
                if (Nachbarn == 3) {
                    Gitter2[ind] = true
                } else {
                    Gitter2[ind] = false
                }
            } else {
                if (Nachbarn == 2 || Nachbarn == 3) {
                    Gitter2[ind] = true
                } else {
                    Gitter2[ind] = false
                }
            }
        }
    }
    for (let Index = 0; Index <= zeilenzahl * spaltenzahl; Index++) {
        Gitter1[Index] = Gitter2[Index]
    }
}
// Verwende Knopf A für die nächste Wiederholung des Spiels des Lebens
input.onButtonPressed(Button.A, function () {
    for (let Index2 = 0; Index2 <= zeilenzahl * spaltenzahl; Index2++) {
        Gitter1[Index2] = false
    }
    job += 1
    if (job == 12) {
        job = 1
    }
    Anzeige()
    show()
})
function succ (wert: number) {
    return wert + 1
}
// get & set on any array
function getState (zl2: number, sp2: number) {
    ind = zl2 * spaltenzahl + sp2
    return Gitter1[zl2 * spaltenzahl + sp2]
}
function zähle (zl0: number, sp0: number) {
    if (getState(zl0, sp0)) {
        Nachbarn += 1
    }
}
function Begrüssung () {
    WriteAt(0, 0, "Game of Life")
    WriteAt(3, 0, "A:   wählen")
    WriteAt(4, 0, "B:   starten")
    WriteAt(5, 0, "A+B: Automatik")
}
// Automatik
input.onButtonPressed(Button.AB, function () {
    auto = true
})
// Anzeige nächste Generation
input.onButtonPressed(Button.B, function () {
    show()
    gameOfLife()
})
function setResult (zl: number, sp: number, value: boolean) {
    Gitter2[zl * spaltenzahl + sp] = value
}
function show () {
    for (let sp1 = 0; sp1 <= prev(spaltenzahl); sp1++) {
        for (let zl1 = 0; zl1 <= prev(zeilenzahl); zl1++) {
            oledssd1306.setTextXY(succ(zl1), sp1)
            if (getState(zl1, sp1)) {
                oledssd1306.writeString("#")
            } else {
                oledssd1306.writeString(" ")
            }
        }
    }
}
function zeige_Titel (Text: string) {
    oledssd1306.clearDisplay()
    oledssd1306.setTextXY(0, 1)
    oledssd1306.writeNumber(job)
    oledssd1306.setTextXY(0, 4)
    oledssd1306.writeString(Text)
}
function prev (wert: number) {
    return wert - 1
}
function WriteAt (zeile: number, spalte: number, Text: string) {
    oledssd1306.setTextXY(zeile, spalte)
    oledssd1306.writeString(Text)
}
function Anzeige () {
    if (job == 1) {
        zeige_Titel("Blinker")
        setState(4, 6, true)
        setState(4, 7, true)
        setState(4, 8, true)
    }
    if (job == 2) {
        zeige_Titel("Blinker")
        setState(3, 7, true)
        setState(4, 6, true)
        setState(4, 7, true)
        setState(4, 8, true)
    }
    if (job == 3) {
        zeige_Titel("Kröte")
        setState(3, 8, true)
        setState(4, 8, true)
        setState(4, 9, true)
        setState(5, 8, true)
        setState(5, 9, true)
        setState(6, 9, true)
    }
    if (job == 4) {
        zeige_Titel("Gleiter 1")
        setState(1, 3, true)
        setState(2, 4, true)
        setState(3, 2, true)
        setState(3, 3, true)
        setState(3, 4, true)
    }
    if (job == 5) {
        zeige_Titel("Segler 1")
        setState(2, 3, true)
        setState(2, 4, true)
        setState(2, 5, true)
        setState(2, 6, true)
        setState(3, 2, true)
        setState(3, 6, true)
        setState(4, 6, true)
        setState(5, 2, true)
        setState(5, 5, true)
    }
    if (job == 6) {
        zeige_Titel("Bananaspark")
        setState(2, 4, true)
        setState(3, 2, true)
        setState(3, 4, true)
        setState(4, 3, true)
        setState(4, 4, true)
        setState(5, 6, true)
        setState(5, 7, true)
        setState(6, 8, true)
    }
    if (job == 7) {
        zeige_Titel("Blinker 2")
        setState(2, 5, true)
        setState(2, 6, true)
        setState(2, 7, true)
        setState(3, 4, true)
        setState(3, 8, true)
        setState(4, 4, true)
        setState(4, 8, true)
        setState(5, 5, true)
        setState(5, 6, true)
        setState(5, 7, true)
    }
    if (job == 8) {
        zeige_Titel("Blinker3")
        setState(2, 2, true)
        setState(2, 3, true)
        setState(2, 4, true)
        setState(2, 10, true)
        setState(2, 11, true)
        setState(2, 12, true)
        setState(4, 7, true)
        setState(5, 6, true)
        setState(5, 8, true)
        setState(6, 6, true)
        setState(6, 8, true)
        setState(7, 7, true)
    }
    if (job == 9) {
        zeige_Titel("biclock")
        setState(1, 6, true)
        setState(2, 4, true)
        setState(2, 5, true)
        setState(3, 6, true)
        setState(3, 7, true)
        setState(4, 5, true)
        setState(4, 9, true)
        setState(5, 7, true)
        setState(5, 8, true)
        setState(6, 9, true)
        setState(6, 10, true)
        setState(7, 8, true)
    }
    if (job == 10) {
        zeige_Titel("Generator")
        setState(4, 5, true)
        setState(5, 5, true)
        setState(5, 6, true)
        setState(6, 6, true)
        setState(6, 7, true)
        setState(6, 8, true)
    }
    if (job == 11) {
        zeige_Titel("F-Pentomino")
        setState(4, 8, true)
        setState(4, 9, true)
        setState(5, 7, true)
        setState(5, 8, true)
        setState(6, 8, true)
    }
}
let ind = 0
let Nachbarn = 0
let unten = 0
let oben = 0
let rechts = 0
let links = 0
let sp3 = 0
let zl3 = 0
let auto = false
let job = 0
let Gitter2: boolean[] = []
let Gitter1: boolean[] = []
let spaltenzahl = 0
let zeilenzahl = 0
zeilenzahl = 8
spaltenzahl = 16
Gitter1 = [false]
Gitter2 = [false]
oledssd1306.initDisplay()
oledssd1306.setTextXY(0, 0)
oledssd1306.clearDisplay()
for (let Index22 = 0; Index22 <= zeilenzahl * spaltenzahl; Index22++) {
    Gitter1.push(false)
    Gitter2.push(false)
}
job = 0
auto = false
Begrüssung()
basic.forever(function () {
    if (auto) {
        gameOfLife()
        show()
    }
})
