; (function(window) {

    //Game
    var Game = function(elem, options) {
        this.elem = document.getElementById(elem);
        this.options = options;

        this.info_div = document.createElement('div');
        this.info_div.id = 'info_div';

        this.deck_div = document.createElement('div');
        this.deck_div.id = 'deck_div';
        this.gameDeck = new Deck(this.deck_div, options);
        this.gameDeck.buildDeck();

        this.elem.appendChild(this.info_div);
        this.elem.appendChild(this.deck_div);

    }

     //Deck
     var Deck = function(deck_div, options) {
        this.deckData = options.data;
        this.buildDeck = function() {
            var parentFrag = document.createDocumentFragment();
            deck_div.innerHtml = '';
            for(var i=this.deckData.length - 1; i>=0; i--) {
                var card = new Card();
                card.id = "card-" + i;
                card.data = this.deckData[i];
                card.buildCard(parentFrag);
            } 
            deck_div.appendChild(parentFrag);
        }  
    }

    //Card, () => shuffle & stack
    var Card = function(parentFrag) {
        this.id = '';
        this.data = '';
        this.cardContainer = document.createElement('div');
        this.cardContainer.className = 'card-container';
        this.cardFront = document.createElement('div');
        this.cardFront.className = 'card-front';
        this.cardBack = document.createElement('div');
        this.cardBack.className = 'card-back';

        this.buildCard = function(parentFrag) {
            var flipDiv = document.createElement('div'),
            frontValDiv = document.createElement('div'),
            backValDiv = document.createElement('div'),
            catDiv = document.createElement('div');

            flipDiv.className = 'flip';
            frontValDiv.className = 'front-val';
            backValDiv.className = 'back-val';
            catDiv.className = 'cat';

            frontValDiv.innerHTML = this.data.q;
            backValDiv.innerHTML = this.data.a;
            catDiv.innerHTML = this.data.category;

            this.cardFront.appendChild(frontValDiv);
            this.cardFront.appendChild(catDiv);
            this.cardBack.appendChild(backValDiv);

            flipDiv.appendChild(this.cardFront);
            flipDiv.appendChild(this.cardBack);

            this.cardContainer.id = this.id;
            this.cardContainer.appendChild(flipDiv);

            parentFrag.appendChild(this.cardContainer);
        }
    }

    window.Game = Game;


}(window));