//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {

    for (var i = 0; i < COLORS.length; i++) {
        if (color == COLORS[i]) {
            return i
        }
    }
    throw new Error('Color not found');
};

export const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
];