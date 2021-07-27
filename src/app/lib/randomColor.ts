const randomColor = () => {
    let round = Math.round,
        random = Math.random,
        strength = 255;
    let r: number = round(random() * strength);
    let g: number = round(random() * strength);
    let b: number = round(random() * strength);

    return [`rgba(${r},${g},${b},0.88)`, `rgba(${r},${g},${b},0.48)`];
};

export { randomColor };
