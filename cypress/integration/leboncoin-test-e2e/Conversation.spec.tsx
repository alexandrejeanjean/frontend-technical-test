/// <reference types="cypress" />

import { APP_ENDPOINT } from "../../constant";

const OpenFirstConversation = () => cy.get("[data-cy='contact-list']").children().find('button').first().click();

describe('Conversations messages', () => {
    beforeEach(() => {
        cy.visit(APP_ENDPOINT);
        cy.wait(1000);
    })

    it('Should render the list of conversation\'s message list', () => {
        OpenFirstConversation();
        cy.wait(3000);
        cy.get("[data-cy='conversation-list']").should('exist');
    })

    it('Should render the right count of conversation\'s messages', () => {
        OpenFirstConversation();
        cy.wait(3000);
        // If we launch this suite test more than once, 
        // before a new launch we need to delete from DB the last message added
        cy.get("[data-cy='conversation-list-item']").should('have.length', 2);
    })

    it('Should render the last message received value', () => {
        OpenFirstConversation();
        cy.wait(3000);
        cy.get("[data-cy='conversation-list-item']").should('contain.text', 'Hello Elodie :)');
    })

    it('User should send a new message', () => {
        OpenFirstConversation();
        cy.wait(3000);
        cy.get("[data-cy='textarea-message']").focus().type('Hello world');
        cy.get("[data-cy='submit-button']").click();

        cy.get("[data-cy='conversation-list-item']").should('have.length', 3);
    })
})
