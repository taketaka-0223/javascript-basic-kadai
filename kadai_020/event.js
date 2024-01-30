const changeBtn = document.getElementById('btn');

changeBtn.addEventListener('click', ()=> {
  const text = document.getElementById('text');
  text.textContent = 'ボタンをクリックしました';
})