// 563492ad6f91700001000001c5e6480855e74c238b20eac4d3d528f9
// https://api.pexels.com/v1/search?query=nature&per_page=1 - 사진검색
// https://api.pexels.com/v1/photos/2014422 - 아이디로 한장의 사진을 가져오기
// https://api.pexels.com/v1/curated?page=2&per_page=40 - 엄선된 사진을 가져오기

let index = 1;

function paintPhoto(photos) {
  console.log(photos);
}

async function getImg() {
  const url = `https://api.pexels.com/v1/curated?page=${index}&per_page=12`;
  const res = await fetch(url);
  const date = await res.json();
  paintPhoto(date.photos);
}

function init() {
  getImg();
}

init();
