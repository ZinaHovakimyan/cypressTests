/// <reference types="cypress" />
describe("search product test", () => {
 
    it("search a product", () => {
   
       cy.visit("https://automationteststore.com/");
       cy.get("[class='fa fa-search']").click();
       cy.get("[id='keyword']").type("Conditioner"); 
       cy.get("[id='category_id']").select("Hair Care");
       cy.get("[id='description']").check();
       cy.get("[id='model']").check();
       cy.get("[id='search_button']").click();

       cy.get('body').contains("Conditioner");
    })
    it.only("search a product and sort", () => {
   
        cy.visit("https://automationteststore.com/");
        cy.get("[class='fa fa-search']").click();
        cy.get("[id='keyword']").type("Conditioner"); 
        cy.get("[id='category_id']").select("Hair Care");
        cy.get("[id='description']").check();
        cy.get("[id='model']").check();
        cy.get("[id='search_button']").click();
        cy.get("[name='sort']").select("Price Low > High")
 
        cy.get('body').contains("Conditioner");
     })
})