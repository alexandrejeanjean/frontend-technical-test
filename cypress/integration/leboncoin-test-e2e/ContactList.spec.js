/// <reference types="cypress" />

import { API_ENDPOINT } from "../../constant";

describe('Conversations Contact list', () => {
    beforeEach(() => {
        cy.visit(API_ENDPOINT)
    })

    it('Should render the list of contact conversations', () => {
        cy.get("[data-cy='contact-list']").should('exist');
    })

    it('Should render the right count of contact conversations', () => {
        // 3 for mobile view & 3 for desktop view
        cy.get("[data-cy='contact-list']").find('li').its('length').should('eq', 6);
    })

    it('Should render the right recipient name', () => {
        cy.get("[data-cy='contact-list']").find('li').first().should('contain.text', 'Jeremie');
    })
})
