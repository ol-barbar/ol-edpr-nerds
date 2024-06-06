const linkForm = document.querySelector(".form-link");   //определяем константу, находим элементы с нужными нам классами
const modalForm = document.querySelector(".modal-form");
const contactForm = modalForm.querySelector(".form-contact")
const nameForm = modalForm.querySelector(".contact-name");
const mailForm = modalForm.querySelector(".contact-mail");
const closeForm = modalForm.querySelector(".modal-close");


linkForm.addEventListener("click", function (evt) {  //добавляем отслеживание собятия по константе - клик
  evt.preventDefault();                               //отменяем в браузере действие по умолчанию (переход на другую страницу)
  modalForm.classList.add("modal-show");
  nameForm.focus();
});

contactForm.addEventListener("submit", function (evt) {  //добавляем отслеживание события у формы - отправка формы (на нажатие по кнопке, а именно отправка)
  if (!nameForm.value || !mailForm.value) {            //если нет значения в поле логина или в поле пароля, то
    evt.preventDefault();                              //отменяем действие по умолчанию
    modalForm.classList.remove("modal-error");         //удаляем класс окна модал эррор
    modalForm.offsetWidth = modalForm.offsetWidth;     //узнаем ширину элемента (трюк для анимации, чтобы браузер сделал следующий шаг, иначе не сделает)
    modalForm.classList.add("modal-error")            //добавляем класс окна модал эррор
  }
});

closeForm.addEventListener("click", function (evt) {   //добавляем отслеживание собятия по константе - клик
  evt.preventDefault();                                 //отменяем в браузере действие по умолчанию (переход на другую страницу)
  modalForm.classList.remove("modal-show");
  modalForm.classList.remove("modal-error");        //удаляем указанные классы
});

window.addEventListener("keydown", function (evt) {     //добавляем отслеживание события - нажатие клавиши эскейп (для закрытия окна)
  if (evt.keyCode === 27) {
    if (modalForm.classList.contains("modal-show")) {  //удаляем указанные ниже классы
      evt.preventDefault();
      modalForm.classList.remove("modal-show");
      modalForm.classList.remove("modal-error");
    }
  }
});
