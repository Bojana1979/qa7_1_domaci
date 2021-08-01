/// <reference types="Cypress" />

const Locators = require('../../fixtures/Locators.json');
const faker = require('faker');

let userData = {
    randomEmail  : faker.internet.email(),
    randomPassword : faker.internet.password()
}

let newUserData = {
    randomFirstName : faker.name.findName(),
    randomLastName : faker.name.findName(),
    randomEmail  : faker.internet.email(),
    randomPassword : faker.internet.password()
}

describe("Poboljsani testovi", () => {

    let correctEmail = "bojana_jakovljevic@yahoo.com"
    let correctPassword = "Bojana79"


    beforeEach(() => {
        cy.visit("/")
        cy.url().should('contain', 'https://gallery-app')
    })
    
    it("Login with valid credentials", () => {
        cy.get(Locators.Header.Login).click(),
        cy.get(Locators.Login.Email).type(correctEmail),
        cy.get(Locators.Login.Password).type(correctPassword),
        cy.get(Locators.Login.Submit).click()
    })

    it ("Logout", () => {
        cy.get(Locators.Header.Login).click()
        cy.get(Locators.Login.Email).type(correctEmail)
        cy.get(Locators.Login.Password).type(correctPassword)
        cy.get(Locators.Login.Submit).click()
        cy.get(Locators.Login.Logout)
    })

    it ("Registration", () => {
        cy.get(Locators.Header.Register).click(),
        cy.get(Locators.Register.firstName).type("Mirjana"),
        cy.get(Locators.Register.lastName).type("Mitrovic"),
        cy.get(Locators.Register.Email).type("mitmir4321@yahoo.com"),
        cy.get(Locators.Register.Password).type("Mirjana11"),
        cy.get(Locators.Register.PassConfirmation).type("Mirjana11"),
        cy.get(Locators.Register.Checkbox).check(),
        cy.get(Locators.Register.Submit).click()
    }),

    it("Login with valid credentials", () => {
        cy.get(Locators.Header.Login).click(),
        cy.get(Locators.Login.Email).type(userData.randomEmail),
        cy.get(Locators.Login.Password).type(userData.randomPassword),
        cy.get(Locators.Login.Submit).click()
    })

    it.only ("Registration with faker", () => {
        cy.get(Locators.Header.Register).click(),
        cy.get(Locators.Register.firstName).type(newUserData.randomFirstName),
        cy.get(Locators.Register.lastName).type(newUserData.randomLastName),
        cy.get(Locators.Register.Email).type(newUserData.randomEmail),
        cy.get(Locators.Register.Password).type(newUserData.randomPassword),
        cy.get(Locators.Register.PassConfirmation).type(newUserData.randomPassword),
        cy.get(Locators.Register.Checkbox).check(),
        cy.get(Locators.Register.Submit).click()
    })

})