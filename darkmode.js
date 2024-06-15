describe('darkmode', () => {
    it('check', () => {
        cy.visit('https://cook-book-pied.vercel.app/').click()

        cy.xpath("//button[@class='chakra-button css-15w88gn']").click()

        

    });
});