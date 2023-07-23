/**
 * 시간이 지나면서 emitPhotoData를 사용하던 곳에서 각각 location을 출력하는 방식이 달라짐
 * -> 이 경우 과감하게 emitPhotoData의 location 관련된 코드를 함수를 호출하는 곳으로 옮기도록 하자
 * 아니면, 데코레이터 패턴이나 콜백함수로 받아서 실행해도 O
 */

function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
  outStream.write(`<p>location: ${photo.location}</p>\n`);
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write('<div>\n');
      emitPhotoData(outStream, p);
      outStream.write(`<p>위치: ${photo.location}</p>\n`);
      outStream.write('</div>\n');
    });
}

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>title: ${photo.title}</p>\n`);
  outStream.write(`<p>date: ${photo.date.toDateString()}</p>\n`);
}

function renderPhoto(outStream, aPhoto) {
  outStream.write('');
}

function recentDateCutoff() {
  //7 days ago.
  return new Date().setDate(new Date().getDate() - 7);
}
