export const sumExistingCategories = function (courses) {
    return  courses.map(course => course.category).reduce((accumulator, current) => {
        const length = accumulator.length;
        if (length === 0 || accumulator[length - 1] !== current) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);
}