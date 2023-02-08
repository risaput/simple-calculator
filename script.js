(function() {

  const firstInput = document.querySelector('#first');
  const secondInput = document.querySelector('#second');
  const buttons = document.querySelectorAll('.button');
  
  let isCalculate = false;

  buttons.forEach(button => button.addEventListener('click', handleClick))
    
  function calculate(value) {
    return secondInput.value = new Function(`return ${value}`)() || '';
  }

  function handleClick() {
    const hasDataSet = this.dataset.value;
    const hasOperator = this.getAttribute('class').includes('ops')
    
    if (hasDataSet) {
      firstInput.value += hasDataSet;
      if (hasOperator) {
        isCalculate = true;
      }
      if (isCalculate) {
        calculate(firstInput.value);
      }
    }
  }

  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', function() {
    firstInput.value = '';
    secondInput.value = '';
  })

  
  const delBtn = document.querySelector('#del-btn');
  delBtn.addEventListener('click', function() {
    firstInput.value = firstInput.value.slice(0, -1);
    const id = firstInput.value.length;
    
    if (firstInput.value.charAt(id -1) === '+') {
      calculate(firstInput.value.slice(0, -1))
    } else {
      calculate(firstInput.value)
    }

  })
  
  const equalBtn = document.querySelector('#equal-btn');
  equalBtn.addEventListener('click', function() {
    alert('click')
    isCalculate = false;
  })

}())




// (function() {
//
//   const calcu = document.querySelector('#calc');
//   const result = document.querySelector('#result');
//   
//   const buttons = document.querySelectorAll('.button');
//   buttons.forEach(button => button.addEventListener('click', handleClick));
//   
//   function handleClick() {
//     if (this.dataset.value) {
//       calculation.value += this.dataset.value;
//       const foo = new Function(`return ${calculation.value}`)();
//       console.log(foo)
//       if (calculation.value.length > 2) {
//         result.value = eval(calculation.value);
//       }
//     }
//   }
//   
//   const clearBtn = document.querySelector('#clear-btn');
//   clearBtn.addEventListener('click', function() {
//     calculation.value = '';
//     result.value = '';
//   })
//
//   const delBtn = document.querySelector('#del-btn');
//   delBtn.addEventListener('click', function() {
//     calculation.value = calculation.value.slice(0, -1);
//     /* result.value = eval(calculation.value); */
//   })
//   
//   const equalBtn = document.querySelector('#equal-btn');
//   equalBtn.addEventListener('click', function() {
//     alert('click')
//   })
//
// }())
