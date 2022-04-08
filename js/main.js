const card = document.querySelectorAll('.card-item');
const list = document.querySelector('.card-list');
const Xbutton = document.querySelectorAll('.bx-x');
const box = document.querySelector('.box');





// card.forEach(item =>{
//   item.addEventListener('mouseenter',()=>{
//     item.style.backgroundColor = '#404656';
//     item.innerHTML = ` <i class='bx show-x bx-x'></i>`;
//   })
  
//   item.addEventListener('mouseleave', ()=>{
  
//     item.style.backgroundColor = '#78bdc4';
//     let bx = item.querySelector('.bx-x');
//     bx.remove();
//   })

// })




let count = 0;
card.forEach(item =>{
  item.addEventListener('click', (e)=>{
    item.style.backgroundColor = '#dd6759';
    item.innerHTML = `<i class='bx show-x bx-x'></i>`;
    count++;
    
    if (count % 2 == 0){
      item.innerHTML = ` <i class='bx show-zero bx-circle'></i>`;
      item.style.backgroundColor = '#eeaf48';
    }
  })

})

