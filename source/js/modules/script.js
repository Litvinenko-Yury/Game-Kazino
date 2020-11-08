function kazino() {
  // for (var i = 0; i < 4; i++) {
  //   setTimeout(() => { console.log(i); }, i);
  // }

  // setTimeout(()=> { console.log('1'); }, 1000);
  // setTimeout(()=> { console.log('1'); }, 2000);
  // setTimeout(()=> { console.log('1'); }, 3000);


  const inputEnterRate = document.querySelector('#inputEnterRate'),
    btnEnterRate = document.querySelector('#btnEnterRate'),
    showCards = document.querySelector('#showCards'),
    gamePlayer = document.querySelector('#gamePlayer'),
    gamePC = document.querySelector('#gamePC'),
    btnContinue = document.querySelector('#btnContinue'),
    btnEndGame = document.querySelector('#btnEndGame'),
    btnMore = document.querySelector('#btnMore'),
    btnNo = document.querySelector('#btnNo'),
    infoValueBank = document.querySelector('#infoValueBank'),
    infoValuePlayer = document.querySelector('#infoValuePlayer'),
    inputHelpText = document.querySelector('#inputHelpText');

  let rate,
    scorePlayer,
    scorePC,
    moneyBank,
    moneyPlayer;


  /*задаём начальные значениия счетчиков*/
  function initialValues(a, b, c, d, e) {
    rate = a,
      scorePlayer = b,
      scorePC = c,
      moneyBank = d / 2,
      moneyPlayer = e / 2;
  }
  initialValues(0, 0, 0, 28500, 25000);


  //обновить банк и счет игрока
  function updMoney(bank, player) {
    moneyBank += bank;
    moneyPlayer += player;
    console.log('в банке: ' + moneyBank + 'долл');
    console.log('у игрока: ' + moneyPlayer + 'долл');

    infoValueBank.innerHTML = moneyBank; // вывод значения банка на страницу
    infoValuePlayer.innerHTML = moneyPlayer; // вывод значения счета игрока на страницу
  }
  updMoney(moneyBank, moneyPlayer); // запуск функции с начальными значениями банка и счета игрока


  /*===================*/
  /*===принимаю ставку от игрока===*/
  inputEnterRate.addEventListener('focus', () => {
    // При получении фокуса удаляем сообщение об ошибке, т.к. пользователь хочет ввести данные заново
    inputEnterRate.value = "";
    inputHelpText.innerHTML = 'Смелее!';
    inputHelpText.classList.remove('field-text__help-text--error');
  });


  btnEnterRate.addEventListener('click', () => {
    console.log('Игрок нажал ~сделать ставку~  =================');

    rate = document.querySelector('#inputEnterRate').value;

    const reg = /\D/ig; // паттер регулярного выражения; ищем не-цифры
    if (reg.test(rate)) {
      console.log('буквы найдены, ERROR!');
      inputHelpText.innerHTML = 'Похоже, вы перебрали алкоголя... Сконцентрируйтесь  -))';
      inputHelpText.classList.add('field-text__help-text--error');
    }
    else if (rate <= 0) {
      console.log('проверка ставки, 1-й if, input(rate) = ' + rate);
      inputHelpText.innerHTML = 'Сделайте ставку...';
      inputHelpText.classList.add('field-text__help-text--error');
    }
    else if (rate > 0 && rate < 100) {
      console.log('проверка ставки, 2-й if, input(rate) = ' + rate);
      inputHelpText.innerHTML = 'С такой ставкой играют в подворотне, а не  нас!';
      inputHelpText.classList.add('field-text__help-text--error');
    }
    else if (rate >= 100 && rate < 1000) {
      console.log('проверка ставки, 3-й if, input(rate) = ' + rate);
      inputHelpText.innerHTML = 'В следующий раз будьте решительнее!';
      inputHelpText.classList.remove('field-text__help-text--error');
      rate = +rate; //преобазование строки в число
      showCards.style.display = 'block'; // показать визуализацию раздачи карт
      gamePlayer.style.display = 'block'; // // показать блок игры

      // и сделать первую выдачу карты
      updScorePlayer();

    }
    else {
      console.log('проверка ставки, else, input(rate) = ' + rate);
      inputHelpText.innerHTML = 'Хорошая ставка!';
      inputHelpText.classList.remove('field-text__help-text--error');
      rate = +rate; //преобазование строки в число
      showCards.style.display = 'block'; // показать визуализацию раздачи карт
      gamePlayer.style.display = 'block'; // // показать блок игры

      //и сделать первую выдачу карты
      updScorePlayer();
    }
  });
  /*===================*/

  /*============Игра==============*/
  /*колода 36 карт*/
  /* const deckСards = [
    { name: 'туз', color: 'черный', suit: 'черва', value: 11 },
    { name: 'туз', color: 'красный', suit: 'бубна', value: 11 },
    { name: 'туз', color: 'черный', suit: 'пика', value: 11 },
    { name: 'туз', color: 'красный', suit: 'треф', value: 11 },

    { name: 'король', color: 'черный', suit: 'черва', value: 4 },
    { name: 'король', color: 'красный', suit: 'бубна', value: 4 },
    { name: 'король', color: 'черный', suit: 'пика', value: 4 },
    { name: 'король', color: 'красный', suit: 'треф', value: 4 },

    { name: 'дамa', color: 'черный', suit: 'черва', value: 3 },
    { name: 'дамa', color: 'красный', suit: 'бубна', value: 3 },
    { name: 'дамa', color: 'черный', suit: 'пика', value: 3 },
    { name: 'дамa', color: 'красный', suit: 'треф', value: 3 },

    { name: 'валет', color: 'черный', suit: 'черва', value: 2 },
    { name: 'валет', color: 'красный', suit: 'бубна', value: 2 },
    { name: 'валет', color: 'черный', suit: 'пика', value: 2 },
    { name: 'валет', color: 'красный', suit: 'треф', value: 2 },

    { name: 'шестерка', color: 'черный', suit: 'черва', value: 6 },
    { name: 'шестерка', color: 'красный', suit: 'бубна', value: 6 },
    { name: 'шестерка', color: 'черный', suit: 'пика', value: 6 },
    { name: 'шестерка', color: 'красный', suit: 'треф', value: 6 },

    { name: 'семерка', color: 'черный', suit: 'черва', value: 7 },
    { name: 'семерка', color: 'красный', suit: 'бубна', value: 7 },
    { name: 'семерка', color: 'черный', suit: 'пика', value: 7 },
    { name: 'семерка', color: 'красный', suit: 'треф', value: 7 },

    { name: 'восьмерка', color: 'черный', suit: 'черва', value: 8 },
    { name: 'восьмерка', color: 'красный', suit: 'бубна', value: 8 },
    { name: 'восьмерка', color: 'черный', suit: 'пика', value: 8 },
    { name: 'восьмерка', color: 'красный', suit: 'треф', value: 8 },

    { name: 'девятка', color: 'черный', suit: 'черва', value: 9 },
    { name: 'девятка', color: 'красный', suit: 'бубна', value: 9 },
    { name: 'девятка', color: 'черный', suit: 'пика', value: 9 },
    { name: 'девятка', color: 'красный', suit: 'треф', value: 9 },

    { name: 'десятка', color: 'черный', suit: 'черва', value: 10 },
    { name: 'десятка', color: 'красный', suit: 'бубна', value: 10 },
    { name: 'десятка', color: 'черный', suit: 'пика', value: 10 },
    { name: 'десятка', color: 'красный', suit: 'треф', value: 10 },
  ]; */
  const deckСards = [
    { name: 'нулевка', color: 'черный', suit: 'черва', value: 0 },
    { name: 'единица', color: 'черный', suit: 'черва', value: 1 },
    { name: 'двойка', color: 'черный', suit: 'черва', value: 2 },
    { name: 'тройка', color: 'черный', suit: 'черва', value: 3 },
    { name: 'четверка', color: 'черный', suit: 'черва', value: 4 },
    { name: 'пятерка', color: 'черный', suit: 'черва', value: 5 },
    { name: 'шестерка', color: 'черный', suit: 'черва', value: 6 },
    { name: 'семерка', color: 'черный', suit: 'черва', value: 7 },
    { name: 'восьмерка', color: 'черный', suit: 'черва', value: 8 },
    { name: 'девятка', color: 'черный', suit: 'черва', value: 9 },
    { name: 'десятка', color: 'черный', suit: 'черва', value: 10 },

  ];

  console.log(deckСards);

  /*начальный массив*/
  console.log('начальная длина массива = ' + deckСards.length);



  /*функция выдает случайную карту из колоды, и уменьшает кол-во карт в колоде*/
  let arr = [];
  function getRandomCard(selector) {
    console.log('=== START функ getRandomCard()===');

    /*функция случайного числа*/
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    console.log('длина массива = ' + deckСards.length);
    const rnd = getRandomInt(deckСards.length); // записть индекс случайной карты
    const rndCardValue = deckСards[rnd].value; // записать  значение случайной карты
    console.log('случайная карта № ' + rnd);
    console.log('эта карта : ' + deckСards[rnd].name);

    const newCard = document.createElement('p');
    newCard.classList.add('distribution__card');
    newCard.innerHTML = `${deckСards[rnd].name} = ${deckСards[rnd].value} очков`;
    document.querySelector(selector).append(newCard);  // добавление на страницу инфо о выпавшей карте

    /*записываю карту в массив*/
    //масив выпавшх картив нужен для того, что-бы получить при игре ПК плавный вывод карт на страницу
    let obj = {};
    obj.name = deckСards[rnd].name;
    obj.value = deckСards[rnd].value;
    console.log(obj);
    arr.push(obj);
    console.log(arr);

    deckСards.splice(rnd, 1); // // начиная с позиции rnd, удалить 1 элемент
    console.log('теперь длина массива = ' + deckСards.length);


    console.log('=== END функ getRandomCard()===');

    return rndCardValue;
  }

  /*функция запускает выдачу карты из колоды и считает очки игрока*/
  function updScorePlayer() {
    console.log('=== START функ updScorePlayer()===');
    console.log('Игрок играет со ставкой rate = ' + rate);

    const newCardValue = getRandomCard('#distributionPlayer'); // в переменную записать то, что вернула функция случайной карты,
    //arr.splice(0, 1); // удалить запись о карте из массива
    console.log('newCardValue = ' + newCardValue);

    scorePlayer += newCardValue;
    console.log('scorePlayer = ' + scorePlayer);

    document.querySelector('#totalScorePlayer').innerHTML = `${scorePlayer}`;
    document.querySelector('#textScorePlayer').style.opacity = '1';

    arr.splice(0, 1); // когда играет игрок, удаляем запись о выпавшей карте из массива
    /*удаляем содержмое массива выпавших карт, т.к. для игрока это не нужно*/
    // for (let i = 0; i <= arr.length; i++) {
    //   arr.splice(0, 1);
    // }

    console.log('=== END функ updScorePlayer()===');
  }

  /*функция запускает выдачу карты из колоды и считает очки игрока*/
  function updScorePC() {
    console.log('=== START функ updScorePC()===');

    console.log('ПК играет со ставкой rate = ' + rate);

    const newCardValue = getRandomCard('#distributionPC'); // в переменную записать то, что вернула функция случайной карты,
    console.log('newCardValue = ' + newCardValue);

    scorePC += newCardValue;
    console.log('scorePC = ' + scorePC);

    document.querySelector('#totalScorePC').innerHTML = `${scorePC}`;
    document.querySelector('#textScorePC').style.opacity = '1';

    console.log(arr);
    console.log('=== END функ updScorePC()===');
  }

  /*===================*/
  /*игрок нажал "ещё карту?"*/
  btnMore.addEventListener('click', () => {
    console.log('Игрок нажал ~ещё карту~  =================');

    updScorePlayer();

    /*действия, если случился "перебор"*/
    if (scorePlayer >= 22) {
      console.log('ПЕРЕБОР!');
      console.log('rate = ' + rate);
      console.log('запускаю updMoney()');

      updMoney(rate, -rate); //  снять ставку со счета игрока и  добавить ставку в банк

      /* добавить на страницу текст "ПЕРЕБОР!"*/
      const excess = document.createElement('p');
      excess.classList.add('excess');
      excess.innerHTML = 'ПЕРЕБОР!';
      document.querySelector('#textScorePlayer').append(excess);

      /*убрать кнопку "еще карту"+"хватит", и добавить книпку "продолжить игру"+''нет"*/
      btnContinue.style.display = 'inline';
      btnEndGame.style.display = 'inline';
      btnMore.style.display = 'none';
      btnNo.style.display = 'none';

      scorePlayer = 0; //обнулить очки игрока
    }
  });

  /*игрок нажал "хватит"*/
  btnNo.addEventListener('click', () => {
    console.log('Игрок нажал ~хватит~ =============');
    console.log('теперь играет ПК =============');

    gamePC.style.display = 'block';
    //PC должен выдаать себе карты, пока не остановится, или не случится "перебор!"

    while (scorePC <= 17) {
      updScorePC();
    }





    // let n = 0;
    // console.log('принимаю в цикл scorePC = ' + scorePC);
    // while (scorePC <= 17) {
    //   console.log('===зашел в цикл,  scorePC = ' + scorePC);
    //   let timerId = setTimeout(updScorePC, n);
    //   n += 1000;
    //   console.log('вызвал в цикле updScorePC(),  scorePC = ' + scorePC);
    //   console.log('n = ' + n);


    //   if (n > 5000) { break };
    // }

    // function sayHello() {
    //   console.log('Hello');
    // }

    // let n = 1000;
    // for (let i = 0; i < 5; i++) {
    //   setTimeout(sayHello, n);
    //   n+=1000;
    // }




    if (scorePlayer >= scorePC) {
      console.log('выиграл игрок');
    } else {
      console.log('выиграл ПК');
    }
  });


  /*игрок нажал "продолжить игру"*/
  btnContinue.addEventListener('click', () => {
    console.log('продолжить игру?  =================');
    document.querySelector('.excess').remove();
    document.querySelector('.score').style.opacity = '0';

    // удалить выпавшие карты
    const distCard = document.querySelectorAll('.distribution__card');
    distCard.forEach((item) => {
      item.remove();
    });

    // убрать кнопку "продолжить игру"+''нет", и добавить книпку еще карту"+"хватит"
    btnContinue.style.display = 'none';
    btnEndGame.style.display = 'none';
    btnMore.style.display = 'inline';
    btnNo.style.display = 'inline';

    // удалить визуализацию раздачи карт
    showCards.style.display = 'none';
    gamePlayer.style.display = 'none';
  });

}

export default kazino;
