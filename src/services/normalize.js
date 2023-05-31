export const normalizeContact = data => {
    const res = data.map(el => {
        const name = el.name;
        const number = el.number;
        const id = el.id;
        const newEl = { name, number, id };
        return newEl;
    });
    return res[0];
};
