import { When, Then } from "@badeball/cypress-cucumber-preprocessor"

When('I visit the landing page', function () {
    cy.visit('http://www.google.com')
});
