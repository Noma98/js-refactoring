//기능을 구현하거나 수정할 때 어떤 부분에서 관련된 일들을 처리하고 있는지, 어디에 추가해야 맞는 건지를 잘 고민해봐야함
export function renderPerson(person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  // result.push(`<p>title: ${person.photo.title}</p>`); -> 중복
  result.push(emitPhotoData(person.photo));
  return result.join('\n');
}

export function photoDiv(photo) {
  return [
    '<div>',
    // `<p>title: ${photo.title}</p>`, -> 중복
    emitPhotoData(photo),
    '</div>',
  ].join('\n');
}

function emitPhotoData(aPhoto) {
  const result = [];
  result.push(`<p>title: ${person.photo.title}</p>`);
  result.push(`<p>location: ${aPhoto.location}</p>`);
  result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`);
  return result.join('\n');
}

function renderPhoto(aPhoto) {
  return '';
}
