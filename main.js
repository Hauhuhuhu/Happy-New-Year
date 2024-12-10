const btn = document.querySelector('h1');
const btnWrap = document.querySelector('.btn__wrap')
const mainBody = document.querySelector('.wrap')
const audio = document.querySelector('audio')
btn.addEventListener('click', () => {
    btnWrap.style.display = 'none';
    mainBody.style.display = 'block';
    audio.play();
});