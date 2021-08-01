/// <reference types="Cypress" />

const Locator = require("../../fixtures/Locators.json");

describe("Header button", () => {

    beforeEach(() => {
        cy.visit("/")
        cy.url().should("contain", 'https://gallery-app')
    })
    it("GalleryApp button", () => {
        cy.get(Locator.Header.GalleryApp).click()
    }),
    it("All Galleries button", () => {
        cy.get(Locator.Header.AllGalleries).eq(0).click()
    })
})