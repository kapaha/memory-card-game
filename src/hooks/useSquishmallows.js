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

export default function useSquishmallows(count) {
    const [activeSquishmallows, setPickedSquish] = useState([]);

    useEffect(() => {
        const randomSquishmallows = getRandomSquishmallows(
            squishmallowPngs,
            count
        );
        setPickedSquish(randomSquishmallows);
    }, [count]);

    return activeSquishmallows;
}
