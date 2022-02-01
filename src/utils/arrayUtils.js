function getRandomArrayElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

export function getRandomArrayElements([...array], amount) {
    const randomElements = [];

    for (let i = 0; i < amount; i++) {
        let randomElement = getRandomArrayElement(array);
        array = array.filter((element) => element !== randomElement);
        randomElements.push(randomElement);
    }

    return randomElements;
}

export function getShuffledArray(array) {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));

        // swap elements shuffledArray[i] and shuffledArray[randomIndex]
        [shuffledArray[i], shuffledArray[randomIndex]] = [
            shuffledArray[randomIndex],
            shuffledArray[i],
        ];
    }

    return shuffledArray;
}
