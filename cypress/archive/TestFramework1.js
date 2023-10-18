import RegistrationPage1 from '../PageObjects/RegistrationPage1'

describe('Second Testsuite',function(){
    //Adding Hooks - before annotation -runs before all 'it' blocks

    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        }) 
           
    })
    it('First Testcase',function(){
        const registrationPage1 = new RegistrationPage1();

        //Navigate to Registration webpage
        //cy.visit(this.data.RegistrationLink)
        registrationPage1.LaunchRegistrationForm()


        //Click on Next 
        cy.contains('Next').click()
        
        //Name
        registrationPage1.SetUserName()
        //registrationPage1.getName().type(this.data.Name)
        //registrationPage1.getName().should('have.value',this.data.Name) 
        //cy.get('.whsOnd.zHQkBf').eq(0).type(this.data.Name) 
        //Assert the Name field
        
        
        // ********Radio button: Below code is to compare the data-value with the testdata -- not working
        //cy.get('.Od2TWd.hYsg7c').each(($el,index) => {            
            //cy.get('.Od2TWd.hYsg7c').eq(index).wrap($el.attr('data-value')===this.data.Gender)
            //.then(function(){
            //    cy.get('.Od2TWd.hYsg7c').eq(index).click
            //})  
        //}) 
        //********************************************************************************** 
         
        // Select Gender by clicking on the radio button
        registrationPage1.SelectGender_F()
        //cy.get('.Od2TWd.hYsg7c').eq(this.data.Female).click()
        //registrationPage1.GetGender_F().click()  
        
        //cy.get('.Od2TWd.hYsg7c').eq(this.data.Female).click()
        // Assert if the radio button is set to true/checked
        //cy.get('.Od2TWd.hYsg7c').eq(this.data.Female).should('have.attr','aria-checked').should('equal','true')
        
        //Enter date of birth in the field
        registrationPage1.SetDOB()
        //registrationPage1.getDOB().type(this.data.DOB_YYYYMMDD)
        //registrationPage1.getDOB().should('have.value',(this.data.DOB_YYYYMMDD))
        //cy.get('.whsOnd.zHQkBf').eq(1).type(this.data.DOB_YYYYMMDD)
        //Assert the date of birth field
        //cy.get('.whsOnd.zHQkBf').eq(1).should('have.value',(this.data.DOB_YYYYMMDD))

        //Enter email Id in the textbox
        registrationPage1.SetEmailID()
        //registrationPage1.getEmail().type(this.data.EmailID)
        //registrationPage1.getEmail().should('have.value',(this.data.EmailID)) 
        //cy.get('.whsOnd.zHQkBf').eq(2).type(this.data.EmailID) 
        //Assert Email ID field
        //cy.get('.whsOnd.zHQkBf').eq(2).should('have.value',(this.data.EmailID))
        
        //Enter the name of the organization
        registrationPage1.SetOrganisation()
        //registrationPage1.getOrgName().type(this.data.Organization) 
        //registrationPage1.getOrgName().should('have.value',this.data.Organization) 
        //cy.get('.KHxj8b.tL9Q4c').type(this.data.Organization) 
        //Assert the Organization field
        //cy.get('.KHxj8b.tL9Q4c').should('have.value',this.data.Organization)        
        
        //Click on the Next button to navigate to next page
        registrationPage1.getNextButton().click()
        //cy.get('.uArJ5e.UQuaGc.YhQJj.zo8FOc.ctEux').eq(1).click()

        // **** Next Page *** 

        //Click on a day: Select Tuesday radio button
        registrationPage1.GetDay(this.data.Getday_Tu).click()
        //cy.get('.bzfPab.wFGF8').eq(this.data.Tuesday).click()
        //Assert Day
        registrationPage1.GetDayAssert(this.data.Getday_Tu).should('have.attr','aria-checked','true')

        //cy.get('.Od2TWd.hYsg7c').eq(this.data.Tuesday).should('have.attr','aria-checked').should('equal','true')

        //Enter available from time
        registrationPage1.getAvailableFromHour().type(this.data.AvailableFromTime_HH)
        registrationPage1.getAvailableFromMin().type(this.data.AvailableFromTime_MM)
        //cy.get('.whsOnd.zHQkBf').eq(this.data.AvailableFromHour).type(this.data.AvailableFromTime_HH)
        //cy.get('.whsOnd.zHQkBf').eq(this.data.AvailableFromMin).type(this.data.AvailableFromTime_MM)

        //Assert Available from time
        registrationPage1.getAvailableFromHour().should('contain.value',this.data.AvailableFromTime_HH)
        registrationPage1.getAvailableFromMin().should('contain.value',this.data.AvailableFromTime_MM)
        //cy.get('.whsOnd.zHQkBf').eq(this.data.AvailableFromHour).should('contain.value',this.data.AvailableFromTime_HH)
        //cy.get('.whsOnd.zHQkBf').eq(this.data.AvailableFromMin).should('contain.value',this.data.AvailableFromTime_MM)

        //Enter Available to time
        registrationPage1.getAvailableToHour().type(this.data.AvailableToTime_HH)
        registrationPage1.getAvailableToMin().type(this.data.AvailableToTime_MM)
        //cy.get('.whsOnd.zHQkBf').eq(this.data.AvailableToHour).type(this.data.AvailableToTime_HH)
        //cy.get('.whsOnd.zHQkBf').eq(this.data.AvailableToMin).type(this.data.AvailableToTime_MM)
        
        //Assert Available To time
        registrationPage1.getAvailableToHour().should('contain.value',this.data.AvailableToTime_HH)
        registrationPage1.getAvailableToMin().should('contain.value',this.data.AvailableToTime_MM)
        //cy.get('.whsOnd.zHQkBf').eq(this.data.AvailableToHour).should('contain.value',this.data.AvailableToTime_HH)
        //cy.get('.whsOnd.zHQkBf').eq(this.data.AvailableToMin).should('contain.value',this.data.AvailableToTime_MM)
        
        //Select Dietary Restrictions from the dropdown
        registrationPage1.getListBox().click()
        registrationPage1.getExpandedList().type(this.data.Dietary_Restrictions+'{enter}')

        //cy.get('.MocG8c.HZ3kWc.mhLiyf.LMgvRb.KKjvXb.DEh1R').contains('Choose').click()
        //cy.get('.KKjvXb > .vRMGwf').type(this.data.Dietary_Restrictions+'{enter}')  
          
        //Assert Dietary Restrictions  --- To be worked
        //cy.get('.MocG8c.HZ3kWc.mhLiyf.LMgvRb.KKjvXb.DEh1R').should('contain.value',this.data.Dietary_Restrictions)

        //Select checkbox to agree for payment

        //cy.get('.uVccjd.aiSeRd.FXLARc.wGQFbe.BJHAP.oLlshd').click()  

        // Submit the form
        registrationPage1.getYesCheckbox().click()
        //cy.get('.uArJ5e.UQuaGc.Y5sE8d.VkkpIf.QvWxOd').eq(0).click()

        //Verify the confirmation message
        registrationPage1.getConfirmationMesg().should('contain.text',this.data.Registration_Message) 
        //cy.get('.vHW8K').should('contain.text',this.data.Registration_Message)                   
        
    })

})