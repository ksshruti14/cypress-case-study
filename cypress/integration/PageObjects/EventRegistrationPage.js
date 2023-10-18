const example = require('../../fixtures/example.json')

class EventRegistration{
    getConfirmationMesg(){
        return cy.get('.vHW8K')
    }
    getEditResponseLink(){
        return cy.get('.c2gzEf > a');
    }
    VerifyConfirmationMessage(){
        this.getConfirmationMesg().should('contain.text',example.Registration_Message)
        
    }
    ClickOnEditResponseLink(){
        this.getEditResponseLink().click()
    }
}

export default EventRegistration;