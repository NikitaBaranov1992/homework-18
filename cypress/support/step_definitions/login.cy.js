import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const users = require("../../fixtures/users.json");

Given("user is on secret santa login page", function () {
  cy.visit("/login");
});

When("user logs in", function () {
  cy.login(users.userAutor.email, users.userAutor.password);
});

Then("user is on dashboard page", function () {
  cy.contains("Создать коробку").click();
});
