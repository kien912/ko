// Tạo một phần tử audio
const audio = new Audio('ngu.mp3');

// Tự động phát nhạc khi trang được tải
window.addEventListener('load', () => {
  audio.play().catch(error => {
    console.log('Auto play bị chặn bởi trình duyệt:', error);
  });
});