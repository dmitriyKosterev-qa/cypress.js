describe('Тестирование https://login.qa.studio/', function () {
    it('Проверка на позитивный кейс авторизации', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');   
         cy.get('#exitMessageButton > .exitIcon');  
     })

     it('Проверка логики восстановления пароля:', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('luba@kirova.ru');
        cy.get('#restoreEmailButton').click();
        cy.contains('Успешно отправили пароль на e-mail');   
        cy.get('#exitMessageButton > .exitIcon');
    })

    it('Проверка на негативный кейс авторизации, неверный пароль', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveasfasfa1');
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет');   
         cy.get('#exitMessageButton > .exitIcon'); 
    })

    it('Проверка на негативный кейс авторизации, неверная почта', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('lolita@grud.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Такого логина или пароля нет');   
         cy.get('#exitMessageButton > .exitIcon'); 
     })

     it('Проверка на негативный кейс валидации, почта без "@"', function () {
            cy.reload();
            cy.visit('https://login.qa.studio/');
             cy.get('#mail').type('germandolnikov.ru');
             cy.get('#pass').type('iLoveqastudio1');
             cy.get('#loginButton').click();
             cy.contains('Нужно исправить проблему валидации');   
             cy.get('#exitMessageButton > .exitIcon'); 
    })

    it('Проверка на привидение к строчным буквам в логине', function () {
        cy.reload();
        cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('GerMan@Dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.contains('Авторизация прошла успешно');   
         cy.get('#exitMessageButton > .exitIcon');
        })
 })