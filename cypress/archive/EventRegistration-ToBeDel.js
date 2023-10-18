import PersonalInformationPage from '../PageObjects/PersonalInformationPage'
import EventInformationPage from '../PageObjects/EventInformationPage'

describe('Event Registration workflow'),function(){
    //before hook
    beforeEach(function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })

    })
    it('User enters personal details'),function(){
        const PersonalInfo = new PersonalInformationPage()

        //Navigate to Registration URL      


    }
    it('User enters event related details'), function(){

    }
}