describe('My Recipe', () => {
    it('click', () => {
        // visit website
        cy.visit('https://cook-book-pied.vercel.app/')

        //click on  MY RECIPETIN
        cy.contains('MY RECIPETIN').click()
        
        //click on Add Recipes
        cy.contains('Add Recipes').click()





        
    });
});