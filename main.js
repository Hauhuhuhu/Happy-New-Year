const btn = document.querySelector('h1');
const btnWrap = document.querySelector('.btn__wrap')
const mainBody = document.querySelector('.wrap')
const audio = document.querySelector('audio')

// gift
const btnOpenGift = document.querySelector('.gift')
const giftContent = document.querySelector('.gift__content')
const giftClose = document.querySelector('.close')
const giftQr = document.querySelector('.img__qr')
const giftDownQr= document.querySelector('.down__img')
btn.addEventListener('click', () => {
    btnWrap.style.display = 'none';
    mainBody.style.display = 'block';
    audio.play();
});

btnOpenGift.addEventListener('click', () => {
    giftContent.style.display = 'flex';
});

giftClose.addEventListener('click', () => {
    giftContent.style.display = 'none';
});

giftDownQr.addEventListener('click', function () {
    const imageURL = giftQr.src;
  
    // Tạo một thẻ <a> tạm thời
    const link = document.createElement("a");
    link.href = imageURL;
  
    // Đặt tên file muốn tải xuống
    link.download = "downloaded-LIXI-OF-NCH.jpg";
  
    // Thêm thẻ <a> vào DOM, kích hoạt sự kiện click và xóa thẻ
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});