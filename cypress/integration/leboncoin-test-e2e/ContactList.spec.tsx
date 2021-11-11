/// <reference types="cypress" />

import { APP_ENDPOINT } from "../../constant";

describe('Conversations Contact list', () => {
    beforeEach(() => {
        cy.visit(APP_ENDPOINT)
    })

    it('Should render the list of contact conversations', () => {
        cy.get("[data-cy='contact-list']").should('exist');
    })

    it('Should render the right count of contact conversations', () => {
        cy.get("[data-cy='contact-list']").children().find('button').its('length').should('eq', 3);
    })

    it('Should render the right recipient name', () => {
        cy.get("[data-cy='contact-list']").children().find('button').first().should('contain.text', 'Elodie');
    })
})
