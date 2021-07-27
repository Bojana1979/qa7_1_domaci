/// <reference types="Cypress" />

describe("Login", () => {
    it ("Visit gallery page", () => {
        cy.visit("/")
    })

    it ("Click button", () => {
        cy.visit("/")
        cy.get(".nav-link").eq(1).click()
    })

    it ("Login with valid data", () => {
        cy.visit("/")
        cy.get(".nav-link").eq(1).click()
        cy.get("#email").type("bojana_jakovljevic@yahoo.com")
        cy.get("#password").type("Bojana79")
        cy.get("button").click()
    })

    it.only("Logout", () => {
        cy.visit("/")
        cy.get(".nav-link").eq(1).click()
        cy.get("#email").type("bojana_jakovljevic@yahoo.com")
        cy.get("#password").type("Bojana79")
        cy.get("button").click()
        cy.get(".nav-link").should("have.length", 4)
        cy.get(".nav-link").eq(3).click()
    })
})