import { useState, useEffect } from 'react';
import {
    getRandomArrayElement,
    getFileNameFromLocalPath,
    importImages,
} from '../utils';

function getRandomCards(data, count) {
    const randomCards = [];

    for (let i = 0; i < Math.min(count, data.length); i++) {
        let randomCard = getRandomArrayElement(data);

        while (randomCards.includes(randomCard)) {
            randomCard = getRandomArrayElement(data);
        }

        randomCards.push(randomCard);
    }
    return randomCards;
}

function getShuffledDeck(deckToShuffle) {
    const deck = [...deckToShuffle];

    for (let i = deck.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));

        // swap elements array[i] and array[randomIndex]
        [deck[i], deck[randomIndex]] = [deck[randomIndex], deck[i]];
    }

    return deck;
}

function createCards(imageModules) {
    return Object.keys(imageModules).map((key) => {
        return {
            name: getFileNameFromLocalPath(key),
            imgSrc: imageModules[key].default,
            hasBeenPicked: false,
        };
    });
}

export default function useCards(count) {
    const [cards, setCards] = useState([]);
    const [activeCards, setActiveCards] = useState([]);

    function shuffleDeck() {
        setActiveCards((prevState) => getShuffledDeck(prevState));
    }

    function getNewCards() {
        const randomCards = getRandomCards(cards, count);
        setActiveCards(randomCards);
    }

    function pickCard(pickedCard) {
        setActiveCards((prevState) =>
            prevState.map((card) =>
                card === pickedCard
                    ? {
                          ...card,
                          hasBeenPicked: true,
                      }
                    : card
            )
        );
    }

    function unpickAllCards() {
        setActiveCards((prevState) =>
            prevState.map((card) => ({ ...card, hasBeenPicked: false }))
        );
    }

    useEffect(() => {
        const cardsImgModules = importImages();
        setCards(createCards(cardsImgModules));
    }, []);

    useEffect(() => {
        const randomCards = getRandomCards(cards, count);
        setActiveCards(randomCards);
    }, [count, cards]);

    return {
        activeCards,
        shuffleDeck,
        getNewCards,
        pickCard,
        unpickAllCards,
    };
}
