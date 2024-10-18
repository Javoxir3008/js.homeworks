function changeImage(imageSrc) {
  let r = document.getElementById("r");
  r.setAttribute("src", imageSrc);
}

document.getElementById("b1").onclick = function() {
  changeImage('https://avatars.mds.yandex.net/i?id=69b60c76b4732cc324074d062b68ab3424862035-5859251-images-thumbs&n=13');
};
document.getElementById("b2").onclick = function() {
  changeImage('https://avatars.mds.yandex.net/i?id=1abf935c20f90824f6250d8630a14531a7d66682-8549619-images-thumbs&n=13');
};
document.getElementById("b3").onclick = function() {
  changeImage('https://avatars.mds.yandex.net/i?id=2fce2c7de16bd9c0e82d839f8a8a4340-5364055-images-thumbs&n=13');
};
document.getElementById("b4").onclick = function() {
  changeImage('https://avatars.mds.yandex.net/i?id=7ca65f304c33c764109ca1b1e10bae85268d3a7ab8cec8ff-12885283-images-thumbs&n=13');
};
document.getElementById("b5").onclick = function() {
  changeImage('https://avatars.mds.yandex.net/i?id=22158b93f7f4bc85968d8a7563e6acbc96678c5f-9097381-images-thumbs&n=13');
};
