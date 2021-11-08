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
        cy.get("[data-cy='conversation-list-item']").should('have.length', 3);
    })

    it('Should render the last message received value', () => {
        cy.get("[data-cy='conversation-list-item']").should('contain.text', 'Bonjour c\'est le troisième message de la première conversation');
    })

    it('User should send a new message', () => {
        cy.get("[data-cy='textarea-message']").type('Hello world');
        cy.get("[data-cy='submit-button']").click();

        cy.get("[data-cy='conversation-list-item']").should('have.length', 4);
    })
})
