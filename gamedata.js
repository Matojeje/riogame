const rooms = [
    {
        id: "room1",
        color: "#89dce5",
        sprites: [
            {   type: "ri",
                image: "topple",
                center: [360, 200],
                scale: [0.8, 1],
                dialog: [
                    "Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii!",
                    "Oh my goodness it's been so long since I've last seen you whoa whoa whoa!!!",
                    "It's been since, like, high school........."
                ]
            },
            {  
                type: "ri",
                image: "lay",
                center: [320, 650],
                scale: 1,
                speed: 1,
                dialog: [
                    ["whoa.", "wa"],
                    ["oops.", "u ks"],
                    ["yes.", "_s"],
                    ["uh.", "a"],
                    ["horrendous.", "ho re n _s"],
                    ["I have.", "_i he"],
                    ["excuse?", "_x kyu"],
                    ["sleep.", "ks ri"],
                    ["shit.", "shi ch"],
                    ["go.", "_o"],
                    ["ha.", "ha"],
                    ["mhm.", "n"],
                    ["ya.", "ya"]
                ]
            },
            {  
                type: "ri",
                image: "blep",
                center: [835, 370],
                scale: [0.9, 1],
                pitch: 1.6,
                dialog: [
                    "BLEP BLEP BLEP",
                    "BLEP BLEP BLEP BLEP BLEP BLEP BLEP BLEP BLEP",
                    "BLEP? BLEP BLEP BLEP! BLEP!!!",
                    "BLEPPPPPP!!!!!!!!",
                    ["[he licks your face]", ""],
                    ["[that means he really likes you!]", ""]
                ]
            },
            { type: "door", image: "door", center: [1250, 400], scale: 0.5, destination: "room2" }
        ]
    },
    {
        id: "room2",
        color: "#84c4ce",
        sprites: [
            { type: "door", image: "door", center: [120, 470], scale: 0.5, destination: "room1" },
            { type: "door", image: "door", center: [1210, 460], scale: 0.5, destination: "room3" },
            { 
                type: "ri",
                image: "atebee",
                center: [448, 240],
                pitch: 1.3,
                scale: 0.7,
                dialog: [
                    "Ay it's me, Bobblehead Ri!",
                    "I'm like a regular Ri except, like, a marketable Funko Pop version!",
                    "I just ate a lot of bees one day and I mean a LOT of bees",
                    "I thought the swelling would go down but it never did! Hahaha",
                    "Gosh high school was the best, I have so many good memories from this school",
                    "Like sneaking into the beekeeper area",
                    "And being bullied for my big head",
                    "Like, DAILY bullying",
                    "Haha",
                    ":("
                ]
            },
            { 
                type: "ri",
                image: "uke",
                scale: 0.8,
                center: [800, 600],
                pitch: 0.9,
                dialog: [
                    "LAAAAADYYY",
                    "RUNNIN DOWN TO THE RIPTIIIDE",
                    "TAKEN AWAY TO THE DARK SIIIDE",
                    "I WANNA BE YOUR", "LEFT", "HAND", "MAN",
                    "IIII LOOOOOVVVVEEE YOOOUU",
                    "WHEN YOU'RE SINGING THAT SONNNNG AND",
                    "I GOT A LUMP IN MY THROAT CUUUUZ",
                    "YOU'RE GONNA SING THE WOOOOORRRDSSS WROOOOONNNG!"
                ]
            },
        ]
    },
    {
        id: "room3",
        color: "#8AB4CC",
        sprites: [
            { type: "door", image: "door", center: [120, 470], scale: 0.5, destination: "room2" },
            { type: "door", image: "door", center: [1210, 460], scale: 0.5, destination: "room4" },
            { type: "door", image: "partydoor", center: [700, 235], scale: 0.65, destination: "partyroom", locked: true },
            { type: "ri", image: "die", scale: 0.9, center: [900, 670], dialog: [" ", ["#things-ri-died-to", ""]] }
        ]   
    },
    {
        id: "room4",
        color: "#88CCC8",
        sprites: [
            { type: "door", image: "door", center: [120, 470], scale: 0.5, destination: "room3" },
            { type: "door", image: "door", center: [1210, 460], scale: 0.5, destination: "room5" },
            { 
                type: "ri",
                image: "haha",
                center: [870, 265],
                scale: 0.8,
                pitch: 1.2,
                speed: 1.5,
                shorten: false,
                dialog: [
                    "GO SHORTY", "ITS YA BIRTHDAY",
                    "WE GON' PARTY", "LIKE ITS YA BIRTHDAY",
                    "WE GON SIP BACARDI", "LIKE ITS YA BIRTHDAY",
                    "[JK YOURE ONLY 20 SO DONT SIP BACARDI PLZ]",
                    ["STARTS BEATBOXING", "_& pu ks ch ks pu pu ch ks pu _x pu pu ch ks ch ch shi"]
                    //"STARTS BEATBOXING"
                ]
            },
            { 
                type: "ri",
                image: "teal",
                center: [460, 610],
                scale: 0.8,
                pitch: 2,
                dialog: [
                    ["[hacker voice] im in", "_i _m _e"]
                ]
            },
        ]
    },
    {
        id: "room5",
        color: "#88CCC8",
        sprites: [
            { type: "door", image: "door", center: [120, 470], scale: 0.5, destination: "room4" },
            { 
                type: "ri",
                image: "gamer",
                center: [1024, 234],
                speed: 2,
                scale: [0.8, 0.9],
                shorten: false,
                dialog: [
                    ["smash?", "su ma shi"], ["mario kart?", "ma ri o ka"], ["smash?", "su ma shi"]
                ]
            },
            { 
                type: "ri",
                image: "sad",
                center: [1135, 655],
                scale: 0.8,
                pitch: 1.2,
                speed: 0.7,
                dialog: [
                    // ["UUUWWWWWAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHH", "u wa a a a a"],
                    "UUUWWWWWAAAAAAAAAHHHHHHHHHHHHHHHHHHHHHHHH",
                    "The one Ri over there keeps making yo mama jokes and calling my shoes raggedy!!!!",
                    "and it HURTS MY FEELINGS!!!!!!!! :'("
                ]
            },
            { 
                type: "ri",
                image: "bestie",
                center: [590, 425],
                scale: 0.8,
                speed: 0.9,
                pitch: 1.5,
                shorten: false,
                dialog: [
                    "hooommaaawgaaawd! Now that she's GONE!!!! LET'S TALK SHIT!!!!!!!!",
                    "Sister I've been waiting for an opportunity to spill some tea sksk and that moment is RIGHT NOW babuh!",
                    "So, like, I am at a high school reunion and like whatever you know?",
                    "And apparently it's someone's birthday????",
                    "Their name is Rio and like --",
                    "I KNOWWWWWW LIKE OHMYGAWSH WHAT A WEIRD NAME RIGHT????????",
                    "But yeah....... anyways I've been doing high school reunion things, or, like, whatever, just minding my own business",
                    "but then, like, there was a dead body in the hallway????",
                    "and so I was like",
                    ["oh", "_o"],
                    ["my", "_i"],
                    ["GOD", "ga"],
                    "cuz obvi what an amazing selfie opportunity!!!!!",
                    "Perfect photopportunity sister!!! Z-snap and whatever!",
                    "Ugh yeah of course I posted to Insta who do you think I am??????",
                    "oh yea I also think that body's been here since my senior prank",
                    "so, like, since graduation???? ohmygawd like what has the janitor been doing all this time?!?! ugh so not fetch",
                    "Oh shoot I gotta go sis, I made someone cry in the corner and I think they're stopping and that's just, like, not okay???",
                    "Seeya queen!! Yaaaaaaaaaaaas many kissies mwah mwah mwahhhhh xoxoxoxoxo"
                ]
            },
        ]
    },
    {
        id: "partyroom",
        color: "#CCB38E",
        sprites: [
            { type: "exit", image: "exit", center: [1215, 600], scale: 0.5 },
            { type: "balloon", image: "boon", scale: 0.3, center: [110, 220] },
            { type: "balloon", image: "boon", scale: 0.3, center: [270, 610] },
            { type: "balloon", image: "boon", scale: 0.3, center: [1030, 260] },
            { type: "confetti", image: "confetti", scale: 1.2, center: [350, 10] },
            { type: "confetti", image: "confetti", scale: 1.2, center: [250, 270] },
            { type: "confetti", image: "confetti", scale: 1.2, center: [670, 250] },
            { type: "confetti", image: "confetti", scale: 1.2, center: [1170, 300] },
            { type: "confetti", image: "confetti", scale: 1.2, center: [630, 560] },
            { type: "confetti", image: "confetti", scale: 1.2, center: [55, 750] },
            { type: "confetti", image: "confetti", scale: 1.2, center: [550, 790] },
            { type: "confetti", image: "confetti", scale: 1.2, center: [930, 820] },
            { type: "confetti", image: "confetti", scale: 1.2, center: [1030, 620] },
            {
                type: "bouncin",
                image: "bdayboy",
                center: [640, 390],
                scale: 1.1,
                dialog: [
                    ["HAPPY BIRTHDAY RIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO", " "],
                    ["Hi it's me Raydowi from twitter dot com, I'm posessin the spirit of this poor vulnearble Ri through the power of GAME DESIGN(TM)!!!!!!", " "],
                    ["My whole goal was to make some silly references and hopefully it made you laugh at least a bit", " "],
                    ["Also I made this all in one night! It is 8am now! I am VERY tired haha but if I don't do things in one sitting then I NEVER FINISH", " "],
                    ["Anyways!!!! Rio you're such an incredible friend, I love your energy all the time and you're such an artistic inspiration!", " "],
                    ["I love your ambition to bits and pieces, it inspires me to keep pushing and chasing after creative projects too! <3 <3", " "],
                    ["You always light up a voice call and I'm just so grateful to know you, you've been nothing but amazing dude", " "],
                    ["(p.s. pro gamer tip: if you spam-click the birthday ri, it'll play the party horn noise a ton!!! WOOOO)", " "],
                ]
            }
        ]
    }
]