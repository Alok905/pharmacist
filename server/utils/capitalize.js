export default function (str) {
    const firstLetter = str[0].toUpperCase()
    const remainingLetters = str.slice(1).toLowerCase()

    return firstLetter + remainingLetters
}