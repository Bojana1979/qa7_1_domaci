import { authLogin } from "../../page_objects/loginObject"
import {header} from "../../page_objects/header_object"

describe ("POM login", () => {
    it ("Login using POM", () => {
        cy.visit("/")
        cy.get(".nav-link").eq(1).click()
        authLogin.login("bojana_jakovljevic@yahoo.com", "Bojana79")
        header.logout()
    })
})