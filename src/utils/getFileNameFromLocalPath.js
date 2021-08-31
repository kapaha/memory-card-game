export default function getFileNameFromLocalPath(path) {
    return path.replace(/\.[^/.]+$/, '').slice(2);
}
