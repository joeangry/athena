// Borrowed from https://stackoverflow.com/a/63270816/869633

type ColorValue = number;

// Follows this https://www.w3.org/TR/AERT/#color-contrast
const getLuminanace = (values: ColorValue[]) => {
    const rgb = values.map((v: ColorValue) => {
        const val = v / 255;
        return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
    });

    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
};

const getContrastRatio = (colorA: ColorValue[], colorB: ColorValue[]) => {
    const lumA = getLuminanace(colorA);
    const lumB = getLuminanace(colorB);

    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
};

// usage:
const back_color = [255, 255, 255]; //white
const text_color = [255, 255, 0]; //yellow

getContrastRatio(back_color, text_color); // 1.0736196319018405