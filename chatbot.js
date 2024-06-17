describe('chatbot', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    it('test', () => {
        //visit website
        cy.visit('https://cook-book-pied.vercel.app/')
        //click on chatbot icon

        cy.xpath('//img[@src="/assets/chatbot-C85w66yl.png"]').click()

        cy.wait(3000)

        //write your message to Chatbot
        cy.xpath('//input[@placeholder="Write your message here"]').type('Hello, I need some help ')

        //click to send message
        cy.xpath('//button[@class="react-chatbot-kit-chat-btn-send"]').click()

        //cy.wait(3000)
        
        //cy.xpath("(//*[name()='path'][@fill='currentColor'])[1]").click()
    });
});