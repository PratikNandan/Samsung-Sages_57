describe('filter', () => {
    it('veg', () => {
        cy.visit('https://cook-book-pied.vercel.app/')

        //click on filter button

        cy.xpath('//button[@id="menu-button-:r1:"]').click()

        cy.wait(3000)

        cy.xpath('//button[@id="menu-list-:r1:-menuitem-:r2:"]').click()   //veg

        cy.wait(3000)

        


        
    });

    it('Non Veg', () => {
        cy.visit('https://cook-book-pied.vercel.app/')

                //click on filter button


        cy.xpath('//button[@id="menu-button-:r1:"]').click()

        cy.wait(3000)



        cy.xpath('//button[@id="menu-list-:r1:-menuitem-:r3:"]').click()
        cy.wait(3000)


        
    });


    it('Veg and Non-Veg', () => {

        cy.visit('https://cook-book-pied.vercel.app/')

                //click on filter button


        cy.xpath('//button[@id="menu-button-:r1:"]').click()

        cy.wait(3000)



        cy.xpath('//button[@id="menu-list-:r1:-menuitem-:r4:"]').click()
        cy.wait(3000)


        
    });
});