/// <reference types="Cypress" />

describe("Register", () => {
    it ("Registration", () => {
        cy.visit("/")
        cy.get("a[href='/register']").click()
        cy.get("#first-name").type("Mirjana")
        cy.get("#last-name").type("Mitrovic")
        cy.get("#email").type("mitmir4321@yahoo.com")
        cy.get("#password").type("Mirjana11")
        cy.get("#password-confirmation").type("Mirjana11")
        cy.get('[type="checkbox"]').check()
        cy.get(".btn").eq(0).click()
    })
})