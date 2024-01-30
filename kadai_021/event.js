const changeBtn =document.getElementById('btn');

changeBtn.addEventListener('click', ()=> {
  const text = document.getElementById('text');
  setTimeout(()=> {
    text.textContent ='ボタンをクリックしました'
  },2000);
})