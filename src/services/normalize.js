export const normalizeValues = ({ name, surname, number, email, img }) => {
    const res = JSON.stringify({ name, surname, email, img });
    return { name: res, number };
};

export const normalizePayload = data => {
    let arr = [];
    data.map(el => {
        const res = JSON.parse(el.name);
        const number = el.number;
        const id = el.id;
        const newEl = { ...res, number, id };
        return arr.push(newEl);
    });
    return arr;
};

export const normalizeContact = data => {
    const res = data.map(el => {
        const res = JSON.parse(el.name);
        const number = el.number;
        const id = el.id;
        const newEl = { ...res, number, id };
        return newEl;
    });
    console.log(res[0]);
    return res[0];
};
