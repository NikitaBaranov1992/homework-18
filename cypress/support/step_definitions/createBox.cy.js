const users = require("../fixtures/users.json");
const boxPage = require("../fixtures/pages/boxPage.json");
const generalElements = require("../fixtures/pages/general.json");
const dashboardPage = require("../fixtures/pages/dashboardPage.json");
const invitePage = require("../fixtures/pages/invitePage.json");
const inviteeBoxPage = require("../fixtures/pages/inviteeBoxPage.json");
const inviteeDashboardPage = require("../fixtures/pages/inviteeDashboardPage.json");

let newBoxName = faker.word.noun({ length: { min: 5, max: 10 } });
let boxId = faker.word.noun({ length: { min: 7, max: 8 } });
let wishes = faker.word.noun() + faker.word.adverb() + faker.word.adjective();
let maxAmount = 50;
let currency = "Евро";
let inviteLink;
let baseUrl = "https://santa-secret.ru/";

import { faker } from "@faker-js/faker";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const users = require("../../fixtures/users.json");

Given("user is on secret santa login page", function () {
  cy.visit("/login");
});

//When("user logs in", function () {
//  cy.login(users.userAutor.email, users.userAutor.password);
//});

Given(
  "user logs in as {string} and {string} and creates a box",
  function (string, string2) {
    cy.login(string, string2);
  }
);

/*Given("user logs in with table", function (dataTable) {
  cy.login(dataTable.hashes()[0].login, dataTable.hashes()[0].password);
});*/

Then("a box is created", function () {
  cy.contains("Создать коробку").click();
  cy.get(boxPage.boxNameField).type(newBoxName);
  cy.get(":nth-child(3) > .frm").clear().type(boxId);
  //cy.get(":nth-child(3) > .frm").type(boxId);
  cy.get(generalElements.arrowRight).click();
  cy.get(boxPage.sixthIcon).click();
  cy.get(generalElements.arrowRight).click();
  cy.get(boxPage.giftPriceToggle).check({ force: true });
  cy.get(boxPage.maxAnount).type(maxAmount);
  cy.get(boxPage.currency).select(currency);
  cy.get(generalElements.arrowRight).click();
  cy.get(generalElements.arrowRight).click();
  cy.get(generalElements.arrowRight).click();
  cy.get(dashboardPage.createdBoxName).should("have.text", newBoxName);
  cy.get(".layout-1__header-wrapper-fixed .toggle-menu-item span")
    .invoke("text")
    .then((text) => {
      expect(text).to.include("Участники");
      expect(text).to.include("Моя карточка");
      expect(text).to.include("Подопечный");
    });
});
