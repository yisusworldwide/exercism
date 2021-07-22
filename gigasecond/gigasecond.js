//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (time) => {

    let date = time.getTime();
    const gs = Math.pow(10, 12);
    let futureTime = date + gs;

    return new Date(futureTime);
};

// let date = new Date();
// const gs = gigasecond(new Date(Date.UTC(2011, 3, 25)));
// const expectedDate = new Date(Date.parse('2043-01-01T01:46:40Z'));
// expect(gs).toEqual(expectedDate);