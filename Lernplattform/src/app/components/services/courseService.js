export const sumExistingCategories = function (courses) {
  return courses
    .map((course) => course.category)
    .reduce((result, current) => {
      const existing = result.find((result) => result === current);
      if (!existing) {
        result.push(current);
      }
      return result;
    }, []);
};
