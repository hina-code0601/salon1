// 1. スライダー内のすべての画像を取得
const images = document.querySelectorAll('.slider img');

// 2. 今表示している画像の番号を記憶（最初は0番目＝1枚目）
let currentIndex = 0;

// 3. 最初に全て非表示にして、1枚目だけ表示
images.forEach((img, index) => {
  img.style.display = index === 0 ? 'block' : 'none';
});

// 4. 3秒ごとに画像を切り替える
setInterval(() => {
  // 今の画像を非表示
  images[currentIndex].style.display = 'none';

  // 次の画像の番号を計算（最後までいったら最初に戻る）
  currentIndex = (currentIndex + 1) % images.length;

  // 次の画像を表示
  images[currentIndex].style.display = 'block';
}, 3000); // 3000ミリ秒 = 3秒
