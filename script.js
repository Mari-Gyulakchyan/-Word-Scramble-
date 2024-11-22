let root = document.querySelector("#root");
let starGames = document.querySelector("#startGames");
let fruitName = [

    {
        id: 1,
        label: "Orange",
        hint: "A round citrus fruit with a sweet, tangy flavor"
    },
    {
        id: 2,
        label: "Banana",
        hint: "A long, yellow fruit that's soft and sweet inside"
    },
    {
        id: 3,
        label: "Mango",
        hint: "A tropical stone fruit with juicy, sweet orange flesh"
    },
    {
        id: 4,
        label: "Kiwi",
        hint: "A small, brown fruit with green flesh and tiny black seeds"
    },
    {
        id: 5,
        label: "Apple",
        hint: "A crunchy fruit that comes in red, green, and yellow varieties"
    },
    {
        id: 6,
        label: "Pineapple",
        hint: "A tropical fruit with spiky skin and sweet, yellow flesh"
    },
    {
        id: 7,
        label: "Grapes",
        hint: "Small, round fruits often eaten fresh or used to make wine"
    },
    {
        id: 8,
        label: "Strawberry",
        hint: "A small red fruit with tiny seeds on the outside"
    },
    {
        id: 9,
        label: "Watermelon",
        hint: "A large fruit with green rind and juicy red flesh"
    },
    {
        id: 10,
        label: "Papaya",
        hint: "An orange-fleshed tropical fruit with black seeds inside"
    },
    {
        id: 11,
        label: "Peach",
        hint: "A soft, fuzzy fruit with a sweet and juicy yellow or white flesh"
    },
    {
        id: 12,
        label: "Plum",
        hint: "A small, round stone fruit that can be red, purple, or yellow"
    },
    {
        id: 13,
        label: "Lemon",
        hint: "A sour, yellow citrus fruit often used for its juice"
    },
    {
        id: 14,
        label: "Lime",
        hint: "A small, green citrus fruit with a tangy flavor"
    },
    {
        id: 15,
        label: "Cherry",
        hint: "A small, round fruit that can be sweet or sour"
    },
    {
        id: 16,
        label: "Blueberry",
        hint: "A small, blue fruit often used in desserts"
    },
    {
        id: 17,
        label: "Blackberry",
        hint: "A small, dark purple fruit with a sweet-tart flavor"
    },
    {
        id: 18, label:
            "Raspberry", hint:
            "A small, red or black berry with a delicate, sweet flavor"
    },
    {
        id: 19,
        label: "Cantaloupe",
        hint: "A type of melon with orange flesh and a sweet taste"
    },
    {
        id: 20,
        label: "Pomegranate",
        hint: "A fruit with a tough outer rind and juicy red seeds inside"
    },
    {
        id: 21,
        label: "Grapefruit",
        hint: "A large citrus fruit with a tangy, sometimes bitter taste"
    },
    {
        id: 22,
        label: "Avocado",
        hint: "A creamy green fruit often used in salads and guacamole"
    },
    {
        id: 23,
        label: "Fig",
        hint: "A small, soft fruit with sweet pink or purple flesh"
    },
    {
        id: 24,
        label: "Coconut",
        hint: "A large, hard-shelled fruit with white flesh and a mild flavor"
    },
    {
        id: 25,
        label: "Dragonfruit",
        hint: "A tropical fruit with bright pink skin and white or red speckled flesh"
    },
    {
        id: 26,
        label: "Passionfruit",
        hint: "A small, round fruit with a tough rind and tart, juicy pulp"
    },
    {
        id: 27,
        label: "Nectarine",
        hint: "A smooth-skinned variety of peach with a sweet flavor"
    },
    {
        id: 28,
        label: "Apricot",
        hint: "A small, orange fruit with a sweet and tangy taste"
    },
    {
        id: 29,
        label: "Pear",
        hint: "A green or yellow fruit with a soft, juicy texture"
    },
    {
        id: 30,
        label: "Lychee",
        hint: "A small, round fruit with a rough red shell and juicy white flesh"
    }
]


function randomArray(value, way = 'array') {
    if (way === 'string') {
        let orgName = value.join('').toLowerCase()
        let newName = value.sort(() => Math.random() - 0.5).join('').toLowerCase();
        if (orgName === newName) {
            return randomArray(value, 'string')
        }
        return newName
    }
    return value.sort(() => Math.random() - 0.5);
}

fruitName = randomArray(fruitName);

starGames.onclick = newGame

function newGame() {
    let interval
    fruitName = randomArray(fruitName);
    const fixTime=10;
    let currentTime=fixTime
    let i = 0
    let score = {
        success: 0,
        wrong: 0,
        refresh: 0,
    }

    starGames.remove()
    let gamesTable = document.createElement('div');
    gamesTable.setAttribute('class', 'gamesTable');
    root.appendChild(gamesTable);

    let myCard = document.createElement('div');
    myCard.setAttribute('class', 'card bg-light text-dark text-center');
    myCard.innerHTML = `<h4 class="card-title">Word Scramble</h4>`
    let new_scrambled_letters = document.createElement('div');
    new_scrambled_letters.setAttribute('class', "scrambled-letters")
    new_scrambled_letters.innerHTML = randomArray(fruitName[i].label.split(""), 'string')
    myCard.appendChild(new_scrambled_letters);
    let newTimeElements=document.createElement('div');
    newTimeElements.setAttribute('class', 'time');
    newTimeElements.innerHTML =`0`
    myCard.appendChild(newTimeElements);
    
    let new_hint = document.createElement('div');
    new_hint.innerHTML = fruitName[i].hint
    new_hint.classList.add('hint')
    myCard.appendChild(new_hint);
    
    
    let new_form_group_dv = document.createElement('div');
    new_form_group_dv.setAttribute('class', 'form-group');
    new_form_group_dv.innerHTML = `<div class="alert alert-danger d-none errorMsg" role="alert">Please fill in the field!</div>`
    let newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('placeholder', 'Enter a valid word');
    newInput.setAttribute('class', 'form-control');
    new_form_group_dv.appendChild(newInput);
    myCard.appendChild(new_form_group_dv);

    let new_btn_group_dv = document.createElement('div');
    new_btn_group_dv.setAttribute('class', 'd-flex justify-content-between');

    let new_refresh_btn = document.createElement('div');
    new_refresh_btn.setAttribute('class', 'btn btn-secondary btn-custom');
    new_refresh_btn.innerHTML = `Refresh Word`
    new_btn_group_dv.appendChild(new_refresh_btn);

    let new_check_btn = document.createElement('div');
    new_check_btn.setAttribute('class', 'btn btn-primary btn-custom');
    new_check_btn.innerHTML = `Check Word`
    new_btn_group_dv.appendChild(new_check_btn);

    myCard.appendChild(new_btn_group_dv);
    gamesTable.appendChild(myCard);


    // timer function
    function TimerFunction(){

        interval=setInterval(()=>{
            newTimeElements.innerHTML=currentTime
            currentTime--
            if(currentTime===-1){
                clearInterval(interval)
                currentTime=fixTime
                score.wrong++
                newInput.value = ''
                i++
                if (i === 5) {
                    console.log("Game Over");
                    GameOver(score)
                    return
                }
             newWord()
                TimerFunction()
            }
        },1000)
    }
    TimerFunction()
    new_refresh_btn.onclick = function () {
        let errorMsg = document.querySelector('.errorMsg');
        errorMsg.classList.add('d-none')
        fruitName = randomArray(fruitName);
        newWord()
        score.refresh++
    }

    new_check_btn.onclick = function () {

        let errorMsg = document.querySelector('.errorMsg');
        //
        let value = newInput.value.trim()
        // if(value.length===fruitName[i].label.length){
        if (!value.length ) {
            errorMsg.classList.add('d-none')
        } else if (value.length === 0) {
            errorMsg.classList.remove('d-none')
            errorMsg.innerHTML = "Enter text here..."
            return;
        } else if (value.length > fruitName[i].label.length) {
            errorMsg.classList.remove('d-none')
            errorMsg.innerHTML = `The text you provided is ${value.length} letter long, while our text contains  ${fruitName[i].label.length} letters.`

            return;
        } else if (value.length < fruitName[i].label.length) {
            errorMsg.classList.remove('d-none')

            errorMsg.innerHTML = `Your text is  ${value.length} letter; ours is ${fruitName[i].label.length}.`
            return;
        }
        clearInterval(interval)
        currentTime=fixTime

        if (fruitName[i].label.toLowerCase() === newInput.value.toLowerCase()) {
            score.success++
        } else {
            score.wrong++
        }
        newInput.value = ''
        i++
        if (i === 5) {
            console.log("Game Over");
            GameOver(score)
            return
        }
        newWord()
        TimerFunction()

    }

    function newWord() {
        new_scrambled_letters.innerHTML = randomArray(fruitName[i].label.split(""), 'string')
        new_hint.innerHTML = fruitName[i].hint
    }
}

function GameOver(score) {

    let gamesTable = document.querySelector('.gamesTable');
    gamesTable.innerHTML = ''
    let dv = document.createElement('div')
    dv.setAttribute('class', 'card bg-light text-dark text-center');
    dv.innerHTML = `
        <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
        Succses
        <span class="badge badge-primary badge-pill">${score.success}</span>

        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
        wrong
                <span class="badge badge-primary badge-pill">${score.wrong}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
        Refresh
                <span class="badge badge-primary badge-pill">${score.refresh}</span>
        </li>
</ul>
        `
    let newStart = document.createElement('button')
    newStart.setAttribute('class','btn btn-primary')
    newStart.innerHTML = `Start Game`
    dv.appendChild(newStart);
    gamesTable.appendChild(dv)
    newStart.onclick = function () {
        gamesTable.remove()
        newGame()
    }

}




