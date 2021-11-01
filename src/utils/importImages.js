const images = {};

export default function importImages() {
    importAll(require.context('../images/cards', false, /\.(png|jpe?g|svg)$/));
    return images;
}

function importAll(r) {
    r.keys().forEach((key) => (images[key] = r(key)));
}
