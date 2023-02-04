(function() {

  const calculation = document.querySelector('#calc');
  const result = document.querySelector('#result');
  const buttons = document.querySelectorAll('.button');
  
  buttons.
    forEach(button => button.addEventListener('click', calculate));
  
  let num = '';
  
  function calculate() {
    if (this.dataset.value) {
      num += this.dataset.value;
      calculation.value = num;
    }
    console.log(num)
   }
  
  // function clear() {
  //   calculation.value = 0;
  //   result.value = 0;
  //   num = ''
  // }
  //
  // function del() {
  //   num = num > 0 ? num.slice(0, -1) : 0;
  //   calculation.value = num;
  // }
  //
  // buttons[2].addEventListener('click', del);
  //
  // buttons[0].addEventListener('click', clear);
  //
  // buttons[19].addEventListener('click', () => {
  //   result.value = eval(num);
  //   num = '';
  // })

}())
