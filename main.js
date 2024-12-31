const btn = document.querySelector('h1');
const btnWrap = document.querySelector('.btn__wrap')
const mainBody = document.querySelector('.wrap')
const audio = document.querySelector('audio')
const counts = [10, 25, 28, 15];

function returnCount() {
    return counts[Math.floor(Math.random() * counts.length)];
}

function lixiAuto() {
    for (var i = 0; i <= returnCount(); i++) {
        let leftSnow = Math.floor(Math.random() * mainBody.clientWidth);
        let topSnow = Math.floor(Math.random() * mainBody.clientHeight);
        let widthSnow = Math.floor(Math.random() * 50);
        let timeSnow = Math.floor((Math.random() * 1) + 5);
        let div = document.createElement('div');
        div.classList.add('icon_lixi');
        div.style.left = leftSnow + 'px';
        div.style.top = topSnow + 'px';
        div.style.width = widthSnow + 'px';
        div.style.height = widthSnow + 'px';
        div.style.animationDuration = timeSnow + 's';
        mainBody.appendChild(div);
    }
}



// gift
const btnOpenGift = document.querySelector('.gift')
const giftContent = document.querySelector('.gift__content')
const giftClose = document.querySelector('.close')
const giftQr = document.querySelector('.img__qr')
const giftDownQr= document.querySelector('.down__img')
const mixTet = document.querySelector('#mix_tet')
btn.addEventListener('click', () => {
    btnWrap.style.display = 'none';
    mainBody.style.display = 'block';
    audio.play();
    mixTet.play();
    mixTet.volume = 0.3;
    audio.volume = 0.2;
    lixiAuto();
    setInterval('lixiAuto()', 3000);
});

btnOpenGift.addEventListener('click', () => {
    giftContent.style.display = 'flex';
});

giftClose.addEventListener('click', () => {
    giftContent.style.display = 'none';
});

// giftDownQr.addEventListener('click', function () {
//     const imageURL = giftQr.src;
  
//     // Tạo một thẻ <a> tạm thời
//     const link = document.createElement("a");
//     link.href = imageURL;
  
//     // Đặt tên file muốn tải xuống
//     link.download = "downloaded-LIXI-OF-NCH.jpg";
  
//     // Thêm thẻ <a> vào DOM, kích hoạt sự kiện click và xóa thẻ
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// });

