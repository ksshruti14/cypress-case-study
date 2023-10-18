import {Before, After, Given, When, Then, And} from "@badeball/cypress-cucumber-preprocessor";
import EventInformationPage from '../../../PageObjects/EventInformationPage';
import PersonalInformationPage from '../../../PageObjects/PersonalInformationPage';
import EventRegistration from '../../../PageObjects/EventRegistrationPage';

// import example from '../../../../fixtures/example';
const eventInfoPage = new EventInformationPage();
const personalInfoPage = new PersonalInformationPage()
const eventRegPage = new EventRegistration()

beforeEach(()=>{
    cy.fixture('example').then(function(data){
        this.data=data
    }) 
})

//Given Call beforeEach to set the data
Given('Call beforeEach to set the data',()=>{
    cy.fixture('example').then(function(data){
        this.data=data
    })    
})

//Given I navigate to Registration website
Given('I navigate to Registration website',function(){
    //cy.visit(this.data.RegistrationLink)
    personalInfoPage.LaunchRegistrationForm()   
})

//And click on Next to open the form
Given('click on Next to open the form',function(){
    cy.contains('Next').click()
})

//When I enter all the personal details
When('I enter all the personal details',function(){
    personalInfoPage.SetUserName()
    personalInfoPage.SelectGender_F()
    personalInfoPage.SetDOB()
    personalInfoPage.SetEmailID()
    personalInfoPage.SetOrganisation()
    console.log(JSON.stringify(this.data))
})

// And click on Next to navigate to event page
When('click on Next to navigate to event page',function(){
    personalInfoPage.getNextButton().click()
})

//And I enter all the event related details
When('I enter all the event related details',function(){
    eventInfoPage.SelectEventDay_Tu()
    eventInfoPage.SetAvailableFromTime()
    eventInfoPage.SetAvailableToTime()
    eventInfoPage.SelectDietaryRestrictions()
    eventInfoPage.PaymentConsentCheckBox()       
})

//And click on submit
When('click on submit',function(){
    eventInfoPage.SubmitForm()
})

//Then form is submitted and event registration is done
Then('form is submitted and event registration is done',function(){
    eventRegPage.VerifyConfirmationMessage()  
})

//Given I am on Event Registration page
Given('I am on Event Registration page',function(){
    cy.log('User is still on Event registration page')
})

//When I click on edit your response link
When('I click on edit your response link',function(){
     eventRegPage.ClickOnEditResponseLink()   
})

//When I enter all the personal details except for DOB
When('I enter all the personal details except for DOB',function(){
    personalInfoPage.SetUserName()
    personalInfoPage.SelectGender_F()   
    personalInfoPage.SetEmailID()
    personalInfoPage.SetOrganisation()    
})

// And Displays error text below the field
When('Displays error text below the field',function(){
    personalInfoPage.VerifyErrorText()    
})

//When I enter all the personal details except for Other field
When('I enter all the personal details except for Other field',function(){
    personalInfoPage.SetUserName()
    personalInfoPage.SelectGender_Oth()
    personalInfoPage.SetDOB()
    personalInfoPage.SetEmailID()
    personalInfoPage.SetOrganisation()    
})

//When I fill the below fields under personal information
When('I fill the below fields under personal information',function(dataTable){
    personalInfoPage.getName().type(dataTable.rawTable[1][1])
    personalInfoPage.GetGender().click()
    personalInfoPage.GetGender().should('have.attr','aria-checked','true')
    personalInfoPage.getDOB().type(dataTable.rawTable[3][1])
    personalInfoPage.getDOB().should('have.value',(dataTable.rawTable[3][1]))
    personalInfoPage.getEmail().type(dataTable.rawTable[4][1])
    personalInfoPage.getEmail().should('have.value',(dataTable.rawTable[4][1]))
    
}) 

//And I fill the below fields under event information
When('I fill the below fields under event information',function(dataTable){
    eventInfoPage.GetEventDay_F().click()      
    eventInfoPage.GetEventDayToAssert_F().should('have.attr','aria-checked','true')
    //var idn =dataTable.rawTable[2][1].split(',')[2] 
    eventInfoPage.getAvailableFromHour().type(dataTable.rawTable[2][1])
    eventInfoPage.getAvailableFromMin().type(dataTable.rawTable[3][1])

    eventInfoPage.getAvailableFromHour().should('contain.value',dataTable.rawTable[2][1])
    eventInfoPage.getAvailableFromMin().should('contain.value',dataTable.rawTable[3][1])
  
    //eventInfoPage.getListBox().click()
    eventInfoPage.getListBox().click()
    eventInfoPage.getExpandedList().type(dataTable.rawTable[4][1]+'{enter}')
    cy.wait(2000)
    eventInfoPage.getYesCheckbox().click()  
})

//Then Displays a error text below the field 
Then('Displays a error text below the field',function(dataTable){
    personalInfoPage.getErrorText().should('have.text',dataTable.rawTable[1][0])
})  

//And I click on Edit response to update the form
When('I click on Edit response to update the form',function(){
    eventRegPage.getEditResponseLink().click()        
})

//I edit the value under personal information
When('I edit the value under personal information',function(dataTable){
    personalInfoPage.getEmailId().clear()
    personalInfoPage.getEmailId().type(dataTable.rawTable[1][1])
    personalInfoPage.getEmailId().should('have.value',(dataTable.rawTable[1][1])) 
    //personalInfoPage.getOrgName().type(dataTable.rawTable[1][1]) 
    //cy.wait(2000)
    //personalInfoPage.getOrgName().should('have.value',dataTable.rawTable[1][1])
    //personalInfoPage.getOrgName().should('have.value',this.data.Organization)
})
