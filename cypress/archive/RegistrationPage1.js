import { cyan } from "ansi-colors";
const example = require('../../fixtures/example.json')

class RegistrationPage1
{
    
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
    getOrgName(){
        return cy.get('.KHxj8b.tL9Q4c');
    }
    getNextButton(){
        return cy.get('.uArJ5e.UQuaGc.YhQJj.zo8FOc.ctEux').eq(1);
    }
    
    LaunchRegistrationForm(){        
        cy.visit(example.RegistrationLink);
    }
    SetUserName(){
        this.getName().type(example.Name)
        this.getName().should('have.value',example.Name)       
    } 
    SelectGender_F(){
        this.GetGender_F().click() 
        cy.GetGender_F().should('have.attr','aria-checked','true')
    } 
    SetDOB(){
        this.getDOB().type(this.data.DOB_YYYYMMDD)
        this.getDOB().should('have.value',(this.data.DOB_YYYYMMDD))
    }
    SetEmailID(){
        this.getEmail().type(this.data.EmailID)
        this.getEmail().should('have.value',(this.data.EmailID)) 
    }
    SetOrganisation(){
        this.getOrgName().type(this.data.Organization) 
        this.getOrgName().should('have.value',this.data.Organization) 
    }
    
    

}

export default RegistrationPage1;