export const toCapitalize = str => {
    const firstLetter = str.charAt(0).toUpperCase();
    const remainingLetters = str.slice(1);
    const capitalized = firstLetter + remainingLetters;
    return capitalized;
};
