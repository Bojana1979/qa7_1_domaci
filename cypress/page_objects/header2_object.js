class Header2 {
    get GalleryAppButton () {
        return cy.get(".navbar-brand")
    }
    get AllGalleriesButton () {
        return cy.get(".nav-link")
    }
}

export const header2 = new Header2()