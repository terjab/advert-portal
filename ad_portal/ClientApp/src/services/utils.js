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

export const fileToBase64 = (img) => {
  var reader = new FileReader();
  reader.readAsDataURL(img);
  const x = URL.createObjectURL(img);
  return x;
};

let lastId = 0;

export const newId = (prefix = 'id') => {
  lastId++;
  return lastId.toString();
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