function kazino() {

  const inputEnterRate = document.querySelector('#inputEnterRate'),
    btnEnterRate = document.querySelector('#btnEnterRate'),
    showCards = document.querySelector('#showCards'),
    gamePlayer = document.querySelector('#gamePlayer'),
    gamePC = document.querySelector('#gamePC'),
    gameResult = document.querySelector('#gameResult'),
    wrapBtn = document.querySelector('#wrapBtn'),
    btnContinue = document.querySelector('#btnContinue'),
    btnContinue2 = document.querySelector('#btnContinue2'),
    btnEndGame = document.querySelector('#btnEndGame'),
    btnEndGame2 = document.querySelector('#btnEndGame2'),
    btnMore = document.querySelector('#btnMore'),
    btnNo = document.querySelector('#btnNo'),
    infoValueBank = document.querySelector('#infoValueBank'),
    infoValuePlayer = document.querySelector('#infoValuePlayer'),
    inputHelpText = document.querySelector('#inputHelpText'),
    modal = document.querySelector('#modal');

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

  /*колода 11 карт*/
  const deckСardsBasic = [
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
    { name: 'десятка', color: 'черный', suit: 'черва', value: 10 }
  ];


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


  function updMoney(bank, player) {
    moneyBank += bank;
    moneyPlayer += player;
    //console.log('В банке: ' + moneyBank + 'долл');
    //console.log('у игрока: ' + moneyPlayer + 'долл');

    infoValueBank.innerHTML = moneyBank; // вывод значения банка на страницу
    infoValuePlayer.innerHTML = moneyPlayer; // вывод значения счета игрока на страницу
  }
  updMoney(moneyBank, moneyPlayer); // запуск функции с начальными значениями банка и счета игрока

  /*обновить колоду*/
  let deckСards;
  function newDeckCards() {
    deckСards = JSON.parse(JSON.stringify(deckСardsBasic)); // copyObj будет хранить копию mainObj
    //return deckСards;
  }
  //newDeckCards(); // ЭТО УБРАТЬ ПОСЛЕ ОТЛАДКИ
  //console.log(deckСards);
  //console.log('начальная длина массива = ' + deckСards.length); //начальный массив


  /*===================*/
  /*===принимаю ставку от игрока===*/
  inputEnterRate.addEventListener('focus', () => {
    // При получении фокуса удаляем сообщение об ошибке, т.к. пользователь хочет ввести данные заново
    inputEnterRate.value = "";
    inputHelpText.innerHTML = 'Смелее!';
    inputHelpText.classList.remove('field-text__help-text--error');
  });

  /*ИГРОК нажал "сделать ставку"*/
  btnEnterRate.addEventListener('click', () => {
    //console.log('Игрок нажал ~сделать ставку~  =================');

    newDeckCards(); // обновить колоду карт

    rate = document.querySelector('#inputEnterRate').value;

    const reg = /\D/ig; // паттер регулярного выражения; ищем не-цифры
    if (reg.test(rate)) {
      //console.log('буквы найдены, ERROR!');
      inputHelpText.innerHTML = 'Похоже, вы перебрали алкоголя... Сконцентрируйтесь  -))';
      inputHelpText.classList.add('field-text__help-text--error');
    }
    else if (rate <= 0) {
      //console.log('проверка ставки, 1-й if, input(rate) = ' + rate);
      inputHelpText.innerHTML = 'Сделайте ставку...';
      inputHelpText.classList.add('field-text__help-text--error');
    }
    else if (rate > 0 && rate < 100) {
      //console.log('проверка ставки, 2-й if, input(rate) = ' + rate);
      inputHelpText.innerHTML = 'С такой ставкой играют в подворотне, а не  нас!';
      inputHelpText.classList.add('field-text__help-text--error');
    }
    else if (rate >= 100 && rate < 1000) {
      //console.log('проверка ставки, 3-й if, input(rate) = ' + rate);
      inputHelpText.innerHTML = 'В следующий раз будьте решительнее!';
      inputHelpText.classList.remove('field-text__help-text--error');
      rate = +rate; //преобазование строки в число
      showCards.style.display = 'block'; // показать визуализацию раздачи карт
      gamePlayer.style.display = 'block'; // // показать блок игры
      wrapBtn.style.display = 'block'; // // показать блок кнопок №1

      // и сделать первую выдачу карты
      updScorePlayer();

    }
    else {
      //console.log('проверка ставки, else, input(rate) = ' + rate);
      inputHelpText.innerHTML = 'Хорошая ставка!';
      inputHelpText.classList.remove('field-text__help-text--error');
      rate = +rate; //преобазование строки в число
      showCards.style.display = 'block'; // показать визуализацию раздачи карт
      gamePlayer.style.display = 'block'; // // показать блок игры
      wrapBtn.style.display = 'block'; // // показать блок кнопок №1

      //и сделать первую выдачу карты
      updScorePlayer();
    }
  });
  /*===================*/

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
    //console.log('эта карта : ' + deckСards[rnd].name);

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

  /*функция запускает выдачу карты из колоды и считает очки ИГРОКА*/
  function updScorePlayer() {
    console.log('=== START функ updScorePlayer()===');
    //console.log('Игрок играет со ставкой rate = ' + rate);

    const newCardValue = getRandomCard('#distributionPlayer'); // в переменную записать то, что вернула функция случайной карты,
    console.log('newCardValue = ' + newCardValue);

    scorePlayer += newCardValue;
    console.log('scorePlayer = ' + scorePlayer);

    document.querySelector('#totalScorePlayer').innerHTML = `${scorePlayer}`;
    document.querySelector('#textScorePlayer').style.opacity = '1';

    arr.splice(0, 1); // когда играет игрок, удаляем запись о выпавшей карте из массива

    console.log('=== END функ updScorePlayer()===');
  }

  /*функция запускает выдачу карты из колоды и считает очки ПК*/
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

  /*функция помещает сообщение ПЕРЕБОР! на страницу*/
  function overdo(elem) {
    const excess = document.createElement('p');
    excess.classList.add('excess');
    excess.innerHTML = 'ПЕРЕБОР!';
    document.querySelector(elem).append(excess);
  }

  function overdoRemove(elem) {
    document.querySelector(elem).remove();
  }

  /*===================*/
  /*блок кнопок №1, ИГРА,  игрок нажал "ещё карту"*/
  btnMore.addEventListener('click', () => {
    console.log('Игрок нажал ~ещё карту~  =================');

    updScorePlayer();

    /*действия, если случился "перебор" у ИГРОКА*/
    if (scorePlayer >= 22) {
      console.log('ПЕРЕБОР у ИГРОКА!');
      console.log('rate = ' + rate);
      console.log('запускаю updMoney()');

      updMoney(rate, -rate); //  снять ставку со счета игрока и добавить ставку в банк

      overdo('#textScorePlayer');// добавить на страницу текст "ПЕРЕБОР!"

      /*убрать/показать кнопки*/
      btnContinue.style.display = 'inline'; //ещё карту
      btnEndGame.style.display = 'inline'; // хватит
      btnMore.style.display = 'none'; // продолжить игру
      btnNo.style.display = 'none'; // нет

      scorePlayer = 0; //обнулить очки игрока
    }
  });

  /*блок кнопок №1, ИГРА, игрок нажал "хватит", теперь играет ПК*/
  /**===OK===*/
  btnNo.addEventListener('click', () => {
    console.log('Игрок нажал ~хватит~ =============');
    console.log('теперь играет ПК =============');

    wrapBtn.style.display = 'none'; // скрыть блок кнопок №1
    gamePC.style.display = 'block'; // показать блок игры ПК

    //ПК должен выдавать себе карты, пока не остановится, или не случится "перебор!"
    while (scorePC <= 5) {
      updScorePC();
    }

    /*действия, если случился "перебор" у ПК*/
    if (scorePC >= 22) {
      console.log('ПЕРЕБОР у ПК!');
      console.log('rate = ' + rate);
      console.log('запускаю updMoney()');

      updMoney(-rate, +rate); //  снять ставку из банка и добавить ставку на счет ИГРОКА

      /* добавить на страницу текст "ПЕРЕБОР!"*/
      overdo('#textScorePC');

      scorePC = 0; //обнулить очки ПК
      btnContinue2.style.display = 'inline'; // показать кнопку блока кнопок№2
      btnEndGame2.style.display = 'inline'; // показать кнопку блока кнопок№2
    }

    /*проверяем, кто выиграл*/
    if (scorePlayer >= scorePC) {
      /*выиграл ИГРОК*/
      console.log(`Вы выиграли ${rate}`);

      const gameResultText = document.createElement('p');
      gameResultText.classList.add('game-result__content');
      gameResultText.innerHTML = `Вы выиграли ${rate}`;
      gameResult.append(gameResultText);
      updMoney(-rate, +rate);
    } else {
      /*выиграл ПК*/
      console.log(`Вы проиграли ${rate}`);

      const gameResultText = document.createElement('p');
      gameResultText.classList.add('game-result__content');
      gameResultText.innerHTML = `Вы проиграли ${rate}`;
      gameResult.append(gameResultText);
      updMoney(rate, -rate);
    }

    btnContinue2.style.display = 'inline'; //кнопка "продолжить игру"; - блок кнопок #2
    btnEndGame2.style.display = 'inline'; //кнопка '"нет", не продолжать; - блок кнопок #2

  });
  /*===================*/

  /*блок кнопок №1, ПЕРЕБОР!, нажатие на "продолжить игру?"*/
  /**===OK===*/
  btnContinue.addEventListener('click', () => {
    // console.log('продолжить игру  =================');
    //document.querySelector('.score').style.opacity = '0';

    // удалить выпавшие карты
    const distCard = document.querySelectorAll('.distribution__card');
    distCard.forEach((item) => {
      item.remove();
    });

    overdoRemove('.excess'); // удалить текст ПЕРЕБОР!

    /*убрать/показать кнопки*/
    btnContinue.style.display = 'ininel'; // ещё карту
    btnEndGame.style.display = 'inline'; // хватит
    btnMore.style.display = 'none'; // продолжить игру
    btnNo.style.display = 'none'; // нет

    showCards.style.display = 'none'; // показать блок приём ставки
    gamePlayer.style.display = 'none'; // скрыть блок игры ИГРОКА
  });

  /*блок кнопок №1, ПЕРЕБОР!, грок нажал "нет", не продолжать игру*/
  btnEndGame.addEventListener('click', () => {
    console.log('ЗАХОДИТЕ ЕЩЕ!');
    modal.style.display = 'block';
  });

  /*блок кнопок №2 игрок нажал "продолжить игру*/
  btnContinue2.addEventListener('click', () => {
    console.log('продолжить игру  =================');
    //document.querySelector('.score').style.opacity = '0';

    scorePlayer = 0; //обнулить очки игрока
    scorePC = 0; //обнулить очки ПК

    // удалить выпавшие карты
    const distCard = document.querySelectorAll('.distribution__card');
    distCard.forEach((item) => {
      item.remove();
    });

    // удалить информационное сообщение
    document.querySelector('.game-result__content').remove();


    /* удалить блоки игры ИГРОКА и ПК*/
    gamePlayer.style.display = 'none';
    gamePC.style.display = 'none';

    showCards.style.display = 'none'; // показать блок приём ставки
  });

  /*блок кнопок №2 игрок нажал "нет", не продолжать игру*/
  btnEndGame2.addEventListener('click', () => {
    console.log('ЗАХОДИТЕ ЕЩЕ!');
    modal.style.display = 'block';
  });
}

export default kazino;
