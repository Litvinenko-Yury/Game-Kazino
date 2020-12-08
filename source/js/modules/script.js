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
    btnEnough = document.querySelector('#btnEnough'),
    infoValueBank = document.querySelector('#infoValueBank'),
    infoValuePlayer = document.querySelector('#infoValuePlayer'),
    inputHelpText = document.querySelector('#inputHelpText'),
    modal = document.querySelector('#modal'),
    modalContent = document.querySelector('#modalContent');


  /*колода 36 карт*/
  const deckСardsBasic = [
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
  ];

  let rate,
    scorePlayer = 0,
    scorePC = 0,
    moneyBank = 0,
    moneyPlayer = 0;

  function updMoney(bank, player) {
    moneyBank = moneyBank + bank;
    moneyPlayer = moneyPlayer + player;
    infoValueBank.innerHTML = moneyBank; // вывод значения банка на страницу
    infoValuePlayer.innerHTML = moneyPlayer; // вывод значения счета игрока на страницу
  }
  updMoney(28500, 25000); // запуск функции с начальными значениями банка и счета игрока

  /*обновить колоду*/
  let deckСards;
  function newDeckCards() {
    deckСards = JSON.parse(JSON.stringify(deckСardsBasic)); // copyObj будет хранить копию mainObj
  }

  /*===================*/
  /*===принимаю ставку от игрока===*/
  inputEnterRate.addEventListener('focus', () => {
    inputEnterRate.value = ""; // При получении фокуса удаляем сообщение об ошибке, т.к. пользователь хочет ввести данные заново
    inputHelpText.innerHTML = 'Смелее!';
    inputHelpText.classList.remove('field-text__help-text--error');
  });

  /*ИГРОК нажал "сделать ставку"*/
  btnEnterRate.addEventListener('click', () => {
    newDeckCards(); // обновить колоду карт

    rate = document.querySelector('#inputEnterRate').value;

    /*проверка корректности введенных данных ИГРОКОМ*/
    const reg = /\D/ig; // паттер регулярного выражения; ищем НЕ-цифры
    if (reg.test(rate)) {
      inputHelpText.innerHTML = 'Похоже, вы перебрали алкоголя... Сконцентрируйтесь  -))';
      inputHelpText.classList.add('field-text__help-text--error');
    }
    else if (moneyBank == 0) {
      modal.style.display = 'block';
      modalContent.style.display = 'block';
    }
    else if (rate <= 0) {
      inputHelpText.innerHTML = 'Сделайте ставку...';
      inputHelpText.classList.add('field-text__help-text--error');
    }
    else if (rate > moneyPlayer) {
      inputHelpText.innerHTML = 'У Вас нет столько денег!';
      inputHelpText.classList.add('field-text__help-text--error');
    }
    else if (rate > moneyBank) {
      inputHelpText.innerHTML = 'В БАНКЕ нет столько денег!';
      inputHelpText.classList.add('field-text__help-text--error');
    }
    else if (rate > 0 && rate < 100) {
      inputHelpText.innerHTML = 'С такой ставкой играют в подворотне, а не у нас!';
      inputHelpText.classList.add('field-text__help-text--error');
    }
    else if (rate >= 100 && rate < 1000) {
      inputHelpText.innerHTML = 'В следующий раз будьте решительнее!';
      inputHelpText.classList.remove('field-text__help-text--error');
      rate = +rate; //преобазование строки в число
      showCards.style.display = 'block'; // показать визуализацию раздачи карт
      gamePlayer.style.display = 'block'; // // показать блок игры
      wrapBtn.style.display = 'flex'; // // показать блок кнопок №1
      updScorePlayer(); // и сделать первую выдачу карты
    }
    else {
      inputHelpText.innerHTML = 'Хорошая ставка!';
      inputHelpText.classList.remove('field-text__help-text--error');
      rate = +rate; //преобазование строки в число
      showCards.style.display = 'block'; // показать визуализацию раздачи карт
      gamePlayer.style.display = 'block'; // // показать блок игры
      wrapBtn.style.display = 'flex'; // // показать блок кнопок №1
      updScorePlayer(); //и сделать первую выдачу карты
    }
  });
  /*===================*/

  /*функция случайного числа*/
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  /*функция открывает modal2 случайным образом*/
  function getRandomModal2() {
    const rndModal2 = getRandomInt(3);

    if (rndModal2 == 0) {
      modal2();
    }
  }

  /*функция выдает случайную карту из колоды, и уменьшает кол-во карт в колоде*/
  let arr = [];
  function getRandomCard(selector) {
    const rnd = getRandomInt(deckСards.length); // записть индекс случайной карты
    const rndCardValue = deckСards[rnd].value; // записать  значение случайной карты
    const newCard = document.createElement('p');
    newCard.classList.add('distribution__card');
    newCard.innerHTML = `${deckСards[rnd].name} = ${deckСards[rnd].value} очков`;
    document.querySelector(selector).append(newCard);  // добавление на страницу инфо о выпавшей карте

    /*записываю карту в массив*/
    //масив выпавшх картив нужен для того, что-бы получить при игре ПК плавный вывод карт на страницу
    let obj = {};
    obj.name = deckСards[rnd].name;
    obj.value = deckСards[rnd].value;
    arr.push(obj);
    deckСards.splice(rnd, 1); // // начиная с позиции rnd, удалить 1 элемент

    return rndCardValue;
  }

  /*функция запускает выдачу карты из колоды и считает очки ИГРОКА*/
  function updScorePlayer() {
    const newCardValue = getRandomCard('#distributionPlayer'); // в переменную записать то, что вернула функция случайной карты,
    scorePlayer += newCardValue;
    document.querySelector('#totalScorePlayer').innerHTML = `${scorePlayer}`;
    arr.splice(0, 1); // когда играет игрок, удаляем запись о выпавшей карте из массива
  }

  /*функция запускает выдачу карты из колоды и считает очки ПК*/
  function updScorePC() {
    const newCardValue = getRandomCard('#distributionPC'); // в переменную записать то, что вернула функция случайной карты,
    scorePC += newCardValue;
    document.querySelector('#totalScorePC').innerHTML = `${scorePC}`;
  }

  /*функция помещает сообщение ПЕРЕБОР! на страницу*/
  function overdo(elem) {
    const excess = document.createElement('p');
    excess.classList.add('excess');
    excess.innerHTML = 'ПЕРЕБОР!';
    document.querySelector(elem).append(excess);
  }

  /*функция удаляет сообщение ПЕРЕБОР! со страницы*/
  function overdoRemove(elem) {
    document.querySelector(elem).remove();
  }

  /*===================*/
  /*блок кнопок №1, ИГРА,  игрок нажал "ещё карту"*/
  btnMore.addEventListener('click', () => {
    updScorePlayer();

    /*действия, если случился "перебор" у ИГРОКА*/
    if (scorePlayer >= 22) {
      updMoney(rate, (-rate)); // снять ставку со счета игрока и добавить ставку в банк
      overdo('#textScorePlayer');// добавить на страницу текст "ПЕРЕБОР!"

      /*убрать/показать кнопки*/
      btnMore.style.display = 'none'; // еще карту!
      btnEnough.style.display = 'none'; // хватит...
      btnContinue.style.display = 'inline-block'; //продолжить игру-1
      btnEndGame.style.display = 'inline-block'; // нет-1

      scorePlayer = 0; //обнулить очки игрока
    }
  });

  /*блок кнопок №1, ИГРА, игрок нажал "хватит", теперь играет ПК*/
  /**===OK===*/
  btnEnough.addEventListener('click', () => {
    wrapBtn.style.display = 'none'; // скрыть блок кнопок №1
    gamePC.style.display = 'block'; // показать блок игры ПК

    /*ПК должен выдавать себе карты, пока не остановится, или не случится "перебор!"*/
    while (scorePC <= 16) {
      updScorePC();
    }

    /* ПК набрал достаточно карт, выясняем, кто выиграл*/
    if (scorePC >= 22) {
      const gameResultText = document.createElement('p');
      gameResultText.classList.add('game-result__content');
      gameResultText.innerHTML = `Вы выиграли ${rate} долларов`;
      gameResult.append(gameResultText);

      updMoney((-rate), rate); //  снять ставку из банка и добавить ставку на счет ИГРОКА
      overdo('#textScorePC');  // добавить на страницу текст "ПЕРЕБОР!"
      scorePC = 0; //обнулить очки ПК
    }
    else if (scorePlayer >= scorePC) {
      /*выиграл ИГРОК*/
      const gameResultText = document.createElement('p');
      gameResultText.classList.add('game-result__content');
      gameResultText.innerHTML = `Вы выиграли ${rate}`;
      gameResult.append(gameResultText);
      updMoney((-rate), rate);
    } else {
      /*выиграл ПК*/
      const gameResultText = document.createElement('p');
      gameResultText.classList.add('game-result__content');
      gameResultText.innerHTML = `Вы проиграли ${rate}`;
      gameResult.append(gameResultText);
      updMoney(rate, (-rate));
    }

    btnContinue2.style.display = 'inline-block'; //кнопка "продолжить игру-2"; - блок кнопок #2
    btnEndGame2.style.display = 'inline-block'; //кнопка '"нет-2", не продолжать; - блок кнопок #2

  });
  /*===================*/

  /*блок кнопок №1, ПЕРЕБОР!, нажатие на "продолжить игру-1"*/
  /**===OK===*/
  btnContinue.addEventListener('click', () => {
    /* удалить выпавшие карты*/
    const distCard = document.querySelectorAll('.distribution__card');
    distCard.forEach((item) => {
      item.remove();
    });

    gamePlayer.querySelector('.excess').remove(); // удалить элемент с текстом ПЕРЕБОР

    /*убрать/показать кнопки*/
    btnMore.style.display = 'inline-block'; // еще карту!
    btnEnough.style.display = 'inline-block'; // хватит...
    btnContinue.style.display = 'none'; // продолжить игру-1
    btnEndGame.style.display = 'none'; // нет-1

    showCards.style.display = 'none'; // показать блок приём ставки
    gamePlayer.style.display = 'none'; // скрыть блок игры ИГРОКА
    getRandomModal2(); // и запустить генератор для modal2
  });

  /*блок кнопок №1, ПЕРЕБОР!, грок нажал "нет", не продолжать игру*/
  btnEndGame.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.style.display = 'block';
  });

  /*блок кнопок №2 игрок нажал "продолжить игру-2*/
  btnContinue2.addEventListener('click', () => {
    scorePlayer = 0; //обнулить очки игрока
    scorePC = 0; //обнулить очки ПК

    /*удалить выпавшие карты*/
    const distCard = document.querySelectorAll('.distribution__card');
    distCard.forEach((item) => {
      item.remove();
    });

    /* если есть сообщение ПЕРЕБОР, удалить его */
    if (gamePC.querySelector('.excess')) {
      gamePC.querySelector('.excess').remove();
    }

    /* если есть сообщение ВЫ ПРОИГРАЛИ/ВЫИГРАЛИ удалить его */
    if (gamePC.querySelector('.game-result__content')) {
      gamePC.querySelector('.game-result__content').remove();
    }

    gamePlayer.style.display = 'none'; /* удалить блок игры ИГРОКА*/
    gamePC.style.display = 'none'; /* удалить блоки игры ПК*/
    showCards.style.display = 'none';// показать блок приём ставки
    getRandomModal2();// и запустить генератор для modal2
  });

  /*блок кнопок №2 игрок нажал "нет", не продолжать игру-2*/
  btnEndGame2.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.style.display = 'block';
  });


  /**=======================*/
  /**===modal2==============*/
  function modal2() {
    const modal2 = document.querySelector('#modal2'),
      modal2BtnYes1 = document.querySelector('#modal2BtnYes1'), // да, дать взятку
      modal2BtnNo1 = document.querySelector('#modal2BtnNo1'), //нет, не давать взятку
      wrapBribeYes = document.querySelector('#wrapBribeYes'), // обертка для блок взятка
      inputEnterBribe = document.querySelector('#inputEnterBribe'), // поле ввода суммы
      modal2BtnBribe = document.querySelector('#modal2BtnBribe'), // подствердить сумму
      modal2BtnСontinue = document.querySelectorAll('.btn--continue-modal2'), //коллекция кнопок
      modal2TextOk = document.querySelector('#modal2TextOk'), // доволен
      modal2TextNo = document.querySelector('#modal2TextNo'), // не доволен
      wrapBribeNo = document.querySelector('#wrapBribeNo'),
      modal2BtnYes2 = document.querySelector('#modal2BtnYes2'), // жалоба в суд - ДА
      modal2BtnNo2 = document.querySelector('#modal2BtnNo2'), //жалоба в суд - НЕТ
      notGuilty = document.querySelector('#notGuilty'), // блок НЕ виновен
      compensation = document.querySelector('#compensation'),
      payFine = document.querySelector('#payFine'),
      courtCosts = document.querySelector('#courtCosts'),
      guilty = document.querySelector('#guilty'); // блок Виновен

    console.log(modal2BtnСontinue);


    /**функция приводит modal2 в первоначальное состояние*/
    function makeModalStartState() {
      modal2.classList.add('modal2--show'),
        wrapBribeYes.style.display = 'none',
        modal2TextOk.style.display = 'none',
        modal2TextNo.style.display = 'none',
        modal2BtnYes1.style.display = 'inline-block',
        modal2BtnYes1.classList.remove('btn--disabled'),
        modal2BtnNo1.style.display = 'inline-block',
        modal2BtnNo1.classList.remove('btn--disabled'),
        inputEnterBribe.value = "",
        modal2BtnBribe.style.display = 'none',
        wrapBribeNo.style.display = 'none',
        modal2BtnYes2.style.display = 'inline-block',
        modal2BtnYes2.classList.remove('btn--disabled'),
        modal2BtnNo2.style.display = 'inline-block',
        modal2BtnNo2.classList.remove('btn--disabled'),
        notGuilty.style.display = 'none',
        compensation.innerHTML = "",
        guilty.style.display = 'none',
        payFine.innerHTML = "",
        courtCosts.innerHTML = "",

        modal2BtnСontinue.forEach(item => {
          item.style.display = 'none';
        });
    }
    makeModalStartState();

    /**функция случайное число в диапазоне*/
    function getRandomRange(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }

    /**функция СУД ПРИСЯЖНЫХ*/
    function juryСourt() {
      const rnd1 = getRandomRange(0, 2); // запустить генератор случайного числа

      if (rnd1 == 0) {
        /* не виновен */
        const rnd2 = getRandomRange(1000, 3000);

        compensation.innerHTML = rnd2; // компенсация
        notGuilty.style.display = 'block';
        moneyPlayer += rnd2; //добавить сумму компенсации к деньгам игрока
        infoValuePlayer.innerHTML = moneyPlayer; // вывод значения счета игрока на страницу
        modal2BtnСontinue[1].style.display = 'inline-block';
      } else {
        /* виновен */
        const rnd3 = getRandomRange(200, 1000),
          rnd4 = getRandomRange(100, 750);

        payFine.innerHTML = rnd3; //штраф
        courtCosts.innerHTML = rnd4; // судебные издержки
        guilty.style.display = 'block';
        moneyPlayer -= rnd3;//отнять сумму штрафа от денег игрока
        moneyPlayer -= rnd4;//отнять сумму суд.издержек от денег игрока
        infoValuePlayer.innerHTML = moneyPlayer; // вывод значения счета игрока на страницу
        modal2BtnСontinue[2].style.display = 'inline-block';
      }
    }

    /**обработчик каждому элементу коллекции*/
    modal2BtnСontinue.forEach((item) => {
      item.addEventListener('click', () => {
        modal2.classList.remove('modal2--show');
      });
    });

    /** === БЛОК дам взятку ===*/
    modal2BtnYes1.addEventListener('click', () => {
      modal2BtnYes1.classList.add('btn--disabled');
      modal2BtnNo1.style.display = 'none';
      wrapBribeYes.style.display = 'block';
    }, { once: true });

    inputEnterBribe.addEventListener('focus', () => {
      inputEnterBribe.value = "";
      modal2BtnBribe.style.display = 'inline-block';
    });

    modal2BtnBribe.addEventListener('click', (event) => {
      const bribe = inputEnterBribe.value;
      const reg = /\D/ig; // паттер регулярного выражения; ищем НЕ-цифры
      if (reg.test(bribe) || bribe < 500) {
        modal2BtnBribe.style.display = 'none';
        modal2TextNo.style.display = 'block'; //Шериф не доволен
        modal2BtnСontinue[0].style.display = 'inline-block';
      } else {
        modal2BtnBribe.style.display = 'none';
        modal2TextOk.style.display = 'block'; //Шериф не доволен
        modal2BtnСontinue[0].style.display = 'inline-block';
      }

      moneyPlayer -= bribe; //отнять сумму взятки от денег игрока
      infoValuePlayer.innerHTML = moneyPlayer; // вывод значения счета игрока на страницу
    }, { once: true });


    /** === БЛОК НЕ дам взятку ===*/
    modal2BtnNo1.addEventListener('click', () => {
      modal2BtnYes1.style.display = 'none';
      modal2BtnNo1.classList.add('btn--disabled');
      wrapBribeNo.style.display = 'block';
    }, { once: true });

    /** === БЛОК подам жалобу в суд*/
    modal2BtnYes2.addEventListener('click', () => {
      modal2BtnYes2.classList.add('btn--disabled');
      modal2BtnNo2.style.display = 'none';
      juryСourt();
      //modal2BtnСontinue[1].style.display = 'inline-block';
    }, { once: true });

    /** === БЛОК не-подам жалобу в суд*/
    modal2BtnNo2.addEventListener('click', () => {
      modal2BtnYes2.style.display = 'none';
      modal2BtnNo2.classList.add('btn--disabled');
      juryСourt();
      //modal2BtnСontinue[2].style.display = 'inline-block';
    }, { once: true });
  }
}

export default kazino;
