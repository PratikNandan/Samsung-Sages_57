describe('Signup', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('signup', () => {

        // visit website
        cy.visit('https://cook-book-pied.vercel.app/') 


        //click on Sign up button
        //but we are redirected to Login page

       cy.xpath('//button[normalize-space()="SignUp"]').click()
        
       //to click sign up link displayed on login page
       

       cy.xpath('//span[@class="chakra-text css-avlmb5"]').click()

       //name //input[@placeholder="Your Name"]
       //email //input[@type="email"]
       //pass //input[@placeholder="Password"]
       //confirm //input[@placeholder="Confirm Password"]

       cy.xpath('//input[@placeholder="Your Name"]').type('Pratik Nandan')
       cy.xpath('//input[@type="email"]').type('pratikdnandan568@gmail.com')
       cy.xpath('//input[@placeholder="Password"]').type('Pratik@123')
       cy.xpath('//input[@placeholder="Confirm Password"]').type('Pratik@123')

       cy.xpath('//button[@type="submit"]').click()




        
    });
});