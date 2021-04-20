import { decks } from "../data/maindata.js";

let Container = document.getElementById("container");

const Decks = decks.map( mtgDecks => {
    let theDecks = decks.find( deck => {
        return deck.name === mtgDecks.name;
    });

    return {

        Name: theDecks.name,
        ID: theDecks.id,
        Imagee: theDecks.img,
        Link: theDecks.link

    }

});

Decks.forEach( mtgDecks => {

    let DivEl = document.createElement("div");

    let LinkEl = document.createElement("a");

    let NameElement = document.createElement("p");

    let ImgEl = document.createElement("img");

    NameElement.textContent = mtgDecks.Name;

    ImgEl.src = mtgDecks.Imagee;

    ImgEl.className = "img";

    LinkEl.href = mtgDecks.Link;

    LinkEl.className = "deckCard";

    NameElement.className = "deckName";

    Container.appendChild(LinkEl);
    LinkEl.appendChild(DivEl);
    DivEl.appendChild(NameElement);
    DivEl.appendChild(ImgEl);

})