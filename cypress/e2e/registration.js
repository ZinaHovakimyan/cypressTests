/// <reference types="cypress" />
describe("registration test", () => {
 
 it("registration with right data", () => {

    cy.visit("https://automationteststore.com/index.php?rt=account/create");
    cy.get("[name='firstname']").type("Zina");
    cy.get("[name='lastname']").type("Hovakimyan");
    cy.get("[id='AccountFrm_email']").type("zinahovakib@gmail.com");
    cy.get("[name='telephone']");
    cy.get("[name='fax']");
    cy.get("[name='company']");
    cy.get("[name='address_1']").type("Ndjdeh");
    cy.get("[name='address_2']");
    cy.get("[name='city']").type("Ashtarak");
    cy.get("[name='country_id']").select("Armenia");
    cy.get("[name='zone_id']").select("Aragatsotn");
    cy.get("[name='postcode']").type("0204");
    cy.get("[name='country_id']");
    cy.get("[name='loginname']").type("ham1985");
    cy.get("[name='password']").type("12345678");
    cy.get("[name='confirm']").type("12345678");
    cy.get("[id='AccountFrm_agree']").check();
    cy.get('.col-md-2 > .btn').click();

    cy.get('.alert').contains("Error: E-Mail Address is already registered!"); 

 })
})