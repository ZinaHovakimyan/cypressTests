/// <reference types="cypress" />
describe("specials functionality test", () => {
 
    it.only("specials products", () => {
   
       cy.visit("https://automationteststore.com/index.php?rt=product/special");
       cy.get("[name='sort']").select("Date New > Old");
       cy.get(".maintext")
     
    })
    it("specials products", () => {
   
        cy.visit("https://automationteststore.com/index.php?rt=product/special");
        cy.get("[name='sort']").select("Date New > Old");
        cy.get(':nth-child(1) > .thumbnail > :nth-child(2) > img').click();
        cy.get("[class='productpageprice jumbotron']").contains("$27.00 $31.00")
      
     })
   })