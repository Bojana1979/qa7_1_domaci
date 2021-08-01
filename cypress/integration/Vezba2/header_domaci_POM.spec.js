import { header2 } from "../../page_objects/header2_object";

describe ("GalleryApp and AllGalleries buttons", () => {

    beforeEach (() => {
        cy.visit("/")
        cy.url().should("contain", 'https://gallery-app')
    })

    it("Gallery App button click", () => {
        header2.GalleryAppButton.click()
    })
    
    it("All Galleries button click", () => {
        header2.AllGalleriesButton.eq(0).click()
    })
})