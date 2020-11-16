function modal2() {
  /**================= */
  /**================= */
  /**================= */
  const modal2 = document.querySelector('#modal2'),
    modal2BtnYes1 = document.querySelector('#modal2BtnYes1'), // да, дать взятку
    modal2BtnNo1 = document.querySelector('#modal2BtnNo1'), //нет, не давать взятку
    wrapBribeYes = document.querySelector('#wrapBribeYes'), // обертка для блок взятка
    inputEnterBribe = document.querySelector('#inputEnterBribe'), // поле ввода суммы
    modal2BtnBribe = document.querySelector('#modal2BtnBribe'), // подствердить сумму
    modal2TextOk = document.querySelector('#modal2TextOk'), // доволен
    modal2TextNo = document.querySelector('#modal2TextNo'), // не доволен
    modal2BtnСontinue = document.querySelector('#modal2BtnСontinue'), // продолжить!!!!!!!!!!!!!!!!!!!!!!!
    wrapBribeNo = document.querySelector('#wrapBribeNo'),
    modal2BtnYes2 = document.querySelector('#modal2BtnYes2'), // жалоба в суд - ДА
    modal2BtnNo2 = document.querySelector('#modal2BtnNo2'), //жалоба в суд - НЕТ
    notGuilty = document.querySelector('#notGuilty'), // блок НЕ виновен
    compensation = document.querySelector('#compensation'),
    payFine = document.querySelector('#payFine'),
    courtCosts = document.querySelector('#courtCosts'),
    guilty = document.querySelector('#guilty'); // блок Виновен
  //modal2bBtnContinue2 = document.querySelector('#modal2bBtnContinue2'), // продолжить!!!!!!!!!!!!!!!!!
  //modal2bBtnContinue3 = document.querySelector('#modal2bBtnContinue3'); // продолжить!!!!!!!!!!!!!!!!!


  /**функция случайное число в диапазоне*/
  function getRandomRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

  /**функция СУД ПРИСЯЖНЫХ*/
  function juryСourt() {
    const rnd1 = getRandomRange(0, 2); // запустить генератор случ числа
    console.log(rnd1);

    if (rnd1 == 0) {
      // не виновен
      const rnd2 = getRandomRange(1000, 3000);
      console.log(rnd2);
      compensation.innerHTML = rnd2; // компенсация
      notGuilty.style.display = 'block';
    } else {
      // виновен
      const rnd3 = getRandomRange(200, 1000),
        rnd4 = getRandomRange(100, 750);
      console.log(rnd3);
      console.log(rnd4);
      payFine.innerHTML = rnd3; //штраф
      courtCosts.innerHTML = rnd4; // судебные издержки
      guilty.style.display = 'block';
    }
  }

  /**единый обработчик на элемент modal2*/
  modal2.addEventListener('click', (event) => {
    let target = event.target;
    while (target != modal2) {
      if (target.classList.contains('modal2BtnСontinue')) {
        modal2.style.display = 'none';
        break;
      } else {
        target = target.parentNode;
      }
    }
  });

  /** === БЛОК дам взятку ===*/
  modal2BtnYes1.addEventListener('click', () => {
    modal2BtnYes1.classList.add('btn--disable');
    modal2BtnNo1.style.display = 'none';
    wrapBribeYes.style.display = 'block';
  });

  inputEnterBribe.addEventListener('focus', () => {
    inputEnterBribe.value = "";
    modal2BtnBribe.style.display = 'inline-block';
  });

  modal2BtnBribe.addEventListener('click', () => {
    const bribe = inputEnterBribe.value;
    const reg = /\D/ig; // паттер регулярного выражения; ищем НЕ-цифры
    if (reg.test(bribe) || bribe < 500) {
      modal2BtnBribe.style.display = 'none';
      modal2TextNo.style.display = 'block'; //Шериф не доволен
      modal2BtnСontinue.style.display = 'block';
    } else {
      modal2BtnBribe.style.display = 'none';
      modal2TextOk.style.display = 'block'; //Шериф не доволен
      modal2BtnСontinue.style.display = 'block';
    }

    //отнять сумму взятки от денег игрока

    moneyPlayer -= bribe;
  });


  /** === БЛОК НЕ дам взятку ===*/
  modal2BtnNo1.addEventListener('click', () => {
    modal2BtnYes1.style.display = 'none';
    modal2BtnNo1.classList.add('btn--disable');
    wrapBribeNo.style.display = 'block';
  });


  /** === БЛОК подам жалобу в суд*/
  modal2BtnYes2.addEventListener('click', () => {
    modal2BtnYes2.classList.add('btn--disable');
    modal2BtnNo2.style.display = 'none';
    juryСourt();
  });

  /** === БЛОК не-подам жалобу в суд*/
  modal2BtnNo2.addEventListener('click', () => {
    modal2BtnYes2.style.display = 'none';
    modal2BtnNo2.classList.add('btn--disable');
    juryСourt();
  });
}

export default modal2;
