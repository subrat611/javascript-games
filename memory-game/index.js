document.addEventListener('DOMContentLoaded',()=>{

    // card option
    const cardArray = [
        {
            name: 'cheeseburger.png',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger.png',
            img: 'images/cheeseburger.png'
        },
        {
            name: 'fries.png',
            img: 'images/fries.png'
        },
        {
            name: 'fries.png',
            img: 'images/fries.png'
        },
        {
            name: 'hotdog.png',
            img: 'images/hotdog.png'
        },
        {
            name: 'hotdog.png',
            img: 'images/hotdog.png'
        },
        {
            name: 'ice-cream.png',
            img: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream.png',
            img: 'images/ice-cream.png'
        },
        {
            name: 'milkshake.png',
            img: 'images/milkshake.png'
        },
        {
            name: 'milkshake.png',
            img: 'images/milkshake.png'
        },
        {
            name: 'pizza.png',
            img: 'images/pizza.png'
        },
        {
            name: 'pizza.png',
            img: 'images/pizza.png'
        }
    ]



    // Reference
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')

    let cardChosed = []
    let cardChosedId = []
    let cardsWon = []
    
    
    // create game board
    function createGameBoard(){
        for(let i=0; i<cardArray.length; i++){
            const card = document.createElement('img')
            card.setAttribute('src','images/blank.png')
            card.setAttribute('data-id',i)
            
            //card clicked event
            card.addEventListener('click',flipCard)

            grid.appendChild(card)
        }
    }

    
    cardArray.sort(()=>{
        0.5 - Math.random()
    })


    // flip card
    function flipCard(){
        let cardId = this.getAttribute('data-id')
        cardChosed.push(cardArray[cardId].name)
        cardChosedId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardChosed.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }


    // check for match card
    function checkForMatch(){
        let cards = document.querySelectorAll('img')
        const optionOneId = cardChosedId[0]
        const optionTwoId = cardChosedId[1]

        if(cardChosed[0] === cardChosed[1]){
            alert('Great You find a match!!')
            cards[optionOneId].setAttribute('src','images/white.png')
            cards[optionTwoId].setAttribute('src','images/white.png')

            cardsWon.push(cardChosed)
        }else{
            cards[optionOneId].setAttribute('src','images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')

            alert('Sorry No match found')
        }

        cardChosed = []
        cardChosedId = []
        resultDisplay.textContent = cardsWon.length

        if(cardsWon.length === card.length/2){
            resultDisplay.textContent = 'Congratulation You Found All Cards'
        }
    }


    createGameBoard()

})