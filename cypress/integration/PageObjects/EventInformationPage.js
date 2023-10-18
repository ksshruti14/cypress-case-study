const example = require ('../../fixtures/example.json')

class EventInformationPage
{
    getRadioButton(){
        return cy.get('.bzfPab.wFGF8');
    }
    GetEventDay_M(){
        return cy.get('.bzfPab.wFGF8').eq(0);      
    }
    GetEventDay_Tu(){
        return cy.get('.bzfPab.wFGF8').eq(1);      
    }
    GetEventDay_W(){
        return cy.get('.bzfPab.wFGF8').eq(2);      
    }
    GetEventDay_Th(){
        return cy.get('.bzfPab.wFGF8').eq(3);      
    }
    GetEventDay_F(){
        return cy.get('.bzfPab.wFGF8').eq(4);      
    }
    GetEventDayToAssert_M(){
        return cy.get('.Od2TWd.hYsg7c').eq(0);      
    }
    GetEventDayToAssert_Tu(){
        return cy.get('.Od2TWd.hYsg7c').eq(1);      
    }
    GetEventDayToAssert_W(){
        return cy.get('.Od2TWd.hYsg7c').eq(2);      
    }
    GetEventDayToAssert_Th(){
        return cy.get('.Od2TWd.hYsg7c').eq(3);      
    }
    GetEventDayToAssert_F(){
        return cy.get('.Od2TWd.hYsg7c').eq(4);      
    }    
    getAvailableFromHour(){
        return cy.get('.whsOnd.zHQkBf').eq(0);
    }
    getAvailableFromMin(){
        return cy.get('.whsOnd.zHQkBf').eq(1);
    }
    getAvailableToHour(){
        return cy.get('.whsOnd.zHQkBf').eq(2);
    }
    getAvailableToMin(){
        return cy.get('.whsOnd.zHQkBf').eq(3);
    }
    getListBox(){
        return cy.get('.MocG8c.HZ3kWc.mhLiyf.LMgvRb.KKjvXb.DEh1R').contains('Choose');
    }
    getExpandedList(){
        return cy.get('.KKjvXb > .vRMGwf');
    }
    getYesCheckbox(){
        return cy.get('.uVccjd.aiSeRd.FXLARc.wGQFbe.BJHAP.oLlshd');
    }
    getConfirmationMesg(){
        return cy.get('.vHW8K');
    }
    getSubmitButton(){
        return cy.get('.uArJ5e.UQuaGc.Y5sE8d.VkkpIf.QvWxOd').eq(0);
    }
    SelectEventDay_Tu(){
        this.GetEventDay_Tu().click()      
        this.GetEventDayToAssert_Tu().should('have.attr','aria-checked','true')
        cy.log('Event Day is selected as Tuesday')
    }
    SetAvailableFromTime(){
        this.getAvailableFromHour().type(example.AvailableFromTime_HH)
        this.getAvailableFromMin().type(example.AvailableFromTime_MM)

        this.getAvailableFromHour().should('contain.value',example.AvailableFromTime_HH)
        this.getAvailableFromMin().should('contain.value',example.AvailableFromTime_MM)
     
        cy.log('Available From time for the event is provided')
    }
    SetAvailableToTime(){
        this.getAvailableToHour().type(example.AvailableToTime_HH)
        this.getAvailableToMin().type(example.AvailableToTime_MM)
        this.getAvailableToHour().should('contain.value',example.AvailableToTime_HH)
        this.getAvailableToMin().should('contain.value',example.AvailableToTime_MM)
        cy.log('Available To time for the event is provided')
    }
    SelectDietaryRestrictions(){
        this.getListBox().click()

        //this.getExpandedList().type('{downArrow}'+'{enter}')
        this.getExpandedList().type(example.Dietary_Restrictions + '{enter}')
        cy.log('Dietary restriction is selected')
        cy.wait(2000)
    }
    PaymentConsentCheckBox(){
        this.getYesCheckbox().click()
        cy.log('Payment consent check box is selected')
    }
    SubmitForm(){
        this.getSubmitButton().click() 
        cy.log('Clicked on Submit button')       
    }
    

}
export default EventInformationPage;