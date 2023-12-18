const MOVE_RATIO = 0.2;
const SCALE = 1.3;
const BRIGHTNESS = 1;
const CONTRAST = 1;

const card = document.querySelector('.card');

let isMouseDown = false;

card.addEventListener('mousedown', (e) => {
  isMouseDown = true;
});

// カードの外でもリッスンできるようにdocumentに追加
document.addEventListener('mouseup', (e) => {
  isMouseDown = false;
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.filter = "brightness(1) contrast(1)";
});

card.addEventListener('mousemove', (e) => {
  if(!isMouseDown) {
    return;
  }

  // カードの位置とサイズを取得
  const rect = card.getBoundingClientRect();
  const cardCenterX = rect.left + rect.width / 2;
  const cardCenterY = rect.top + rect.height / 2;

  // カードの中心からのマウスの相対位置を計算
  const xAxis = (cardCenterX - e.pageX) * MOVE_RATIO;
  const yAxis = (e.pageY - cardCenterY) * MOVE_RATIO;

  // カードを傾ける
  card.style.transform = `scale(${SCALE}) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  card.style.filter = `brightness(${BRIGHTNESS}) contrast(${CONTRAST})`;
});
