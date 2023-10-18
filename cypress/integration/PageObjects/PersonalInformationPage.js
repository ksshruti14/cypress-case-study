const example = require ('../../fixtures/example.json')

class PersonalInformationPage{
    getName(){
        return cy.get('.whsOnd.zHQkBf').eq(0);
    }
    GetGender_F(){
        return cy.get('.Od2TWd.hYsg7c').eq(1);    
    }
    GetGender_M(){
        return cy.get('.Od2TWd.hYsg7c').eq(0);    
    }
    GetGender(){
        return cy.get('.Od2TWd.hYsg7c').eq(2);    
    }
    GetGender_Others(){
        return cy.get('.Od2TWd.hYsg7c').eq(3);    
    }
    getGender(str){
        var indx         
        if (str=='Male') {
            indx=0;
        } else if(str=='Female') {
            indx=1;            
        }
        else if(str=='Prefer not to say') {
            indx=2; 
        }
        else{
            indx=3;
        }        
        return cy.get('.Od2TWd.hYsg7c').eq(indx);
    }
    getDOB(){
        return cy.get('.whsOnd.zHQkBf').eq(1);
    }
    getEmail(){
        return cy.get('.whsOnd.zHQkBf').eq(2);
    }
    getEmailId(){
        return cy.get('.whsOnd.zHQkBf').eq(3);
    }
    getOrgName(){
        return cy.get('.KHxj8b.tL9Q4c');
    }
    getNextButton(){
        return cy.get('.uArJ5e.UQuaGc.YhQJj.zo8FOc.ctEux').eq(1);
    }
    getErrorText(){
        return cy.get('.RHiWt');
    }
    
    LaunchRegistrationForm(){        
        cy.visit(example.RegistrationLink);
    }
    SetUserName(){
        this.getName().type(example.Name)
        this.getName().should('have.value',example.Name)      
        cy.log('User name is set') 
    } 
    SelectGender_F(){
        this.GetGender_F().click() 
        this.GetGender_F().should('have.attr','aria-checked','true')
        cy.log('Gender is selected as Female')
    } 
    SelectGender_Oth(){
        this.GetGender_Others().click() 
        this.GetGender_Others().should('have.attr','aria-checked','true')
        cy.log('Gender is selected as Other')        
    }
    SetDOB(){
        this.getDOB().type(example.DOB_YYYYMMDD)
        this.getDOB().should('have.value',(example.DOB_YYYYMMDD))
        cy.log('Date of birth is provided')
    }
    SetEmailID(){
        this.getEmail().clear()
        this.getEmail().type(example.EmailID)
        this.getEmail().should('have.value',(example.EmailID)) 
        cy.log('Email ID is provided')
    }
    SetOrganisation(){
        this.getOrgName().type(example.Organization) 
        this.getOrgName().should('have.value',example.Organization) 
        cy.log('Organisation name is set')
    }
    VerifyErrorText(){
       this.getErrorText().should('have.text',example.ErrText)
    }
}
export default PersonalInformationPage;