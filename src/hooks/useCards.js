import { useState, useEffect, useCallback } from 'react';
import {
    getRandomArrayElements,
    getFileNameFromLocalPath,
    importImages,
    getShuffledArray,
} from '../utils';

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

    const getNewCards = useCallback(() => {
        const cardsRequired = Math.min(count, cards.length);
        const randomCards = getRandomArrayElements(cards, cardsRequired);

        setActiveCards(randomCards);
    }, [cards, count]);

    function shuffleDeck() {
        setActiveCards((prevState) => getShuffledArray(prevState));
    }

    function createPickedCard(card, isPicked) {
        return {
            ...card,
            hasBeenPicked: isPicked,
        };
    }

    function pickCard(pickedCard) {
        setActiveCards((prevState) =>
            prevState.map((card) =>
                card === pickedCard ? createPickedCard(card, true) : card
            )
        );
    }

    function unpickAllCards() {
        setActiveCards((prevState) =>
            prevState.map((card) => createPickedCard(card, false))
        );
    }

    useEffect(() => {
        const cardsImgModules = importImages();
        setCards(createCards(cardsImgModules));
    }, []);

    useEffect(getNewCards, [count, cards, getNewCards]);

    return {
        activeCards,
        getNewCards,
        shuffleDeck,
        pickCard,
        unpickAllCards,
    };
}
