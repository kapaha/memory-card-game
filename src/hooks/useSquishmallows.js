import { useState, useEffect } from 'react';
import { getRandomArrayElement, getFileNameFromLocalPath } from '../utils';

const squishmallowPngs = getPngs();

function getPngs() {
    const reqPngs = require.context('../images', true, /\.png$/);

    return reqPngs.keys().map((path) => ({
        path,
        file: reqPngs(path),
        name: getFileNameFromLocalPath(path),
    }));
}

function getRandomSquishmallows(data, count) {
    const randomSquishmallows = [];

    for (let i = 0; i < Math.min(count, data.length); i++) {
        let randomSquishmallow = getRandomArrayElement(data);

        while (randomSquishmallows.includes(randomSquishmallow)) {
            randomSquishmallow = getRandomArrayElement(data);
        }

        randomSquishmallows.push(randomSquishmallow);
    }
    return randomSquishmallows;
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

export default function useSquishmallows(count) {
    const [activeSquishmallows, setActiveSquishmallows] = useState([]);

    function shuffleDeck() {
        const shuffledDeck = getShuffledDeck(activeSquishmallows);
        setActiveSquishmallows(shuffledDeck);
    }

    useEffect(() => {
        const randomSquishmallows = getRandomSquishmallows(
            squishmallowPngs,
            count
        );
        setActiveSquishmallows(randomSquishmallows);
    }, [count]);

    return { activeSquishmallows, shuffleDeck };
}
