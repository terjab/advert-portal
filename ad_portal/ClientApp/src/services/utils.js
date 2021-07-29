export const classes = (classString, classes) => {
  const classesList = [];
  for (const classKey in classes) {
    if (classes.hasOwnProperty(classKey)) {
      const condition = classes[classKey];
      if (condition) {
        classesList.push(classKey);
      }
    }
  }
  return `${typeof classString === 'string' ? classString : classString.filter((classItem) => !!classItem).join(' ')}${classesList.length && classString ? ' ' : ''
    }${classesList.join(' ')}`;
};

export const createQuery = (q) => {
  let query;

  if (q) {
    let splitted = q.split(' ');
    splitted = splitted.join('+');
    query = splitted.toLowerCase();
  }

  return query;
}