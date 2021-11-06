function $(query) { return document.querySelector(query) }
function $all(query) { return document.querySelectorAll(query) }

// Global-ish variables
let currentLevel = "room1"
let talkableSpriteCount = 0
let spriteImagesTalkedTo = []
let textbox = $("#dialogbox")
const defaultDelay = 30
const fadeIn = 200
let babble
let CD = { /* currentDialog */
    character: "",
    script: [""],
    currentLine: 0,
    currentChar: 0,
    typewriter: 0,
    delay: defaultDelay,
    writing: false,
    pitch: 1,
    speed: 1,
    shorten: true
}

function load() {
    console.log("hii")
    $("#loading").classList.add("loaded")
    
    $("audio#menutheme").play()
    $("#door").volume = 0.2
    babble = new Animalese("animalese/animalese.wav", () => {})

    rooms.forEach(room => {
        let roomElement = document.createElement("div")
        roomElement.setAttribute("id", room.id)
        roomElement.setAttribute("data-color", room.color)

        room.sprites && room.sprites.forEach(sprite => {
            let spriteElement = document.createElement("img")
            spriteElement.src = `img/${sprite.image}.webp`
            spriteElement.classList.add("sprite", sprite.type)
            spriteElement.style.left = `${Math.round(sprite.center[0] / 13.66)}vw`
            spriteElement.style.top = `${Math.round(sprite.center[1] / 7.68)}vh`
            
            if (sprite.scale) switch (typeof sprite.scale) {
                case "number":
                    spriteElement.style.width = `calc(${Math.round(300 * sprite.scale / 7.68)}vmin`
                    spriteElement.style.height = "auto"
                    break
                case "object":
                    spriteElement.style.width = `calc(${Math.round(300 * sprite.scale[0]  / 7.68)}vmin`
                    spriteElement.style.height = `calc(${Math.round(300 * sprite.scale[1]  / 7.68)}vmin`
                    break
            }

            if (sprite.type == "ri") talkableSpriteCount++

            spriteElement.onclick = () => {
                switch (sprite.type) {
                    case "bouncin":
                        party(true)
                    case "ri":
                        dialog(sprite.image, sprite.dialog, sprite.pitch, sprite.speed, sprite.shorten)
                        if (!spriteImagesTalkedTo.includes(sprite.image))
                            spriteImagesTalkedTo.push(sprite.image)
                        break
                    case "door":
                        if (sprite.locked && spriteImagesTalkedTo.length < talkableSpriteCount) {
                            dialog("none", [["Hey you can't come in here yet, you haven't said hi to all the Ris yet!", ""], ["Shoo, shoo!", ""]])
                        } else {
                            let audio = $("audio#door")
                            audio.pause()
                            audio.currentTime = 0
                            audio.play()
                            currentLevel = sprite.destination
                            move()
                        }
                        break
                    case "exit":
                        open(location, "_self").close()
                        break
                }
            }
            roomElement.appendChild(spriteElement)
        })
        $("#rooms").appendChild(roomElement)
    })
}

function party() {
    let woo = new Audio("sound/party.ogg")
    woo.currentTime = 0.15
    woo.play()
    return "🎉"
}

function move(roomID) {
    $all("#rooms > *").forEach(room => room.style.display = "none")
    let roomElement = document.getElementById(roomID || currentLevel)
    roomElement.style.display = "block"
    document.documentElement.style.setProperty('--bgcolor', roomElement.dataset.color)
    currentLevel = roomID
}

function play() {
    $("audio#menutheme").pause()
    $("audio#maintheme").play()
    $("#titlescreen").hidden = true
    $("#ingame").hidden = false
    move()
}

function replay(audio) {
    audio.currentTime = 0
    audio.play()
}

function dialog(image, text, pitch, speed, shorten) {
    let backdrop = $("#portrait")
    let portrait = $("#portrait img")
    portrait.src = `img/${image}.webp`
    backdrop.classList.toggle("active")
    portrait.classList.toggle("active")
    if (image == "bdayboy") {
        $("img[src='img/bdayboy.webp'].active").onclick = party // <3
    }
    textbox.innerHTML = "&zwnj;"
    CD = {
        character: image,
        script: text,
        currentLine: 0,
        currentChar: 0,
        delay: defaultDelay,
        writing: true,
        pitch: pitch,
        speed: speed,
        shorten: shorten
    }
    setTimeout(() => CD.typewriter = write(), fadeIn)
}

function write() {
    CD.writing = true

    const hasTranscription = typeof CD.script[CD.currentLine] == "string"
    let text = hasTranscription
        ? CD.script[CD.currentLine]
        : CD.script[CD.currentLine][0]

    if (CD.delay > 1) {
        if (CD.currentChar == 0) {
            hasTranscription
            ? talk(text, false, CD.pitch, 1, CD.shorten)
            : talk(CD.script[CD.currentLine][1], true, 1, CD.speed)
        }
        textbox.innerHTML += text[CD.currentChar]
        CD.currentChar++
    } else {
        textbox.innerHTML += text.slice(CD.currentChar)
        CD.currentChar = text.length
    }

    if (CD.currentChar >= text.length) {
        CD.currentLine++
        CD.writing = false
        CD.currentChar = 0
    } else {
        CD.typewriter = setTimeout(write, CD.delay);
    }
}

function dialogClick() {
    if (CD.writing) {
        CD.delay = 0
    } else {
        if (CD.currentLine < CD.script.length) {
            textbox.innerHTML = "&zwnj;"
            CD.delay = defaultDelay
            CD.typewriter = setTimeout(write, CD.delay)
        } else {
            $("#babble").pause()
            $("#portrait").classList.toggle("active")
            $("#portrait img").classList.toggle("active")
        }
    }
}

$("#portrait").addEventListener("mousedown", dialogClick)

function talk(input, isTranscription, pitch, speed, shorten) {
    // console.log(input, isTranscription, pitch, shorten)
    let audio = $("audio#babble")
    if (isTranscription) {
        let i = 0
        const syllables = input.split(" ")
        function next() {
            if (i < syllables.length) {
                audio.src = `sound/ac2/${syllables[i] || "dummy"}.wav`
                audio.playbackRate = speed || 1
                audio.volume = 0.7
                audio.play()
                i++
            }
        }
        audio.onended = next
        next()
    } else {
        audio.pause()
        audio.currentTime = 0
        audio.src = babble.Animalese(input, shorten || true, pitch || 1).dataURI
        audio.play()
    }
}