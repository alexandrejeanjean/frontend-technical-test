/// <reference types="cypress" />

import { API_ENDPOINT } from "../../constant";

const OpenFirstConversation = () => cy.get("[data-cy='contact-list']").children().first().click();

describe('Conversations messages', () => {
    beforeEach(() => {
        cy.visit(API_ENDPOINT)
        OpenFirstConversation();
    })

    it('Should render the list of conversation\'s message list', () => {
        cy.get("[data-cy='conversation-list']").should('exist');
    })

    it('Should render the right count of conversation\'s messages', () => {
        // 3 for mobile view & 3 for desktop view
        cy.get("[data-cy='conversation-list-item']").should('have.length', 6);
    })

    it('Should render the last message received value', () => {
        cy.get("[data-cy='conversation-list-item']").first().should('contain.text', 'Bonjour c\'est le troisième message de la première conversation');
    })

    it('User should send a new message', () => {
        cy.get("[data-cy='textarea-message']").first().type('Hello world');
        cy.get("[data-cy='submit-button']").first().click();

        // 3 for mobile view & 4 for desktop view
        cy.get("[data-cy='conversation-list-item']").should('have.length', 7);
    })
})
