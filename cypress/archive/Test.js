//cypress - Spec

describe('First Testsuite',function(){
    it('First Testcase',function(){
        //Navigate to the Rhipe form
        cy.visit("https://docs.google.com/forms/d/e/1FAIpQLSe8uL-dd5Z4Pzh1_yo9nB5vPoU2yaNZiulrTAbic8ZZbU-YqA/viewform?vc=0&c=0&w=1&flr=0")
        // click on clear form
        //cy.contains('Clear form').click()
        //Handle the Confirmation pop up
        //cy.on("window:confirm",(popup)=>{
            //verify text on pop up
            //expect.popup.to.contains("This will remove your answers")
            //cy.contains('Clear form').click()
        //    cy.get('.OE6hId > [data-id="EBS5u"] > .l4V7wb > .NPEfkd').click()
        //})
        //click on next button to navigate to the form
        cy.contains('Next').click()
        cy.get('.whsOnd.zHQkBf').eq(0).type('S h r u t i')
        
        // Select Gender by clicking on the radio button
        cy.get('.Od2TWd.hYsg7c').eq(2).click()

        //Enter date of birth in the field
        cy.get('.whsOnd.zHQkBf').eq(1).type('1987-10-14')

        //Enter email Id in the textbox
        cy.get('.whsOnd.zHQkBf').eq(2).type('gombe@gmail.com')

        //Enter the name of the organization
        cy.get('.KHxj8b.tL9Q4c').type('Gombe Handicrafts')

        //Click on the Next button to navigate to next page
        cy.get('.uArJ5e.UQuaGc.YhQJj.zo8FOc.ctEux').eq(1).click()

        // **** Next Page *** 

        //Click on a day
        cy.get('.bzfPab.wFGF8').eq(3).click()

        //Enter available from to available to time
        cy.get('.whsOnd.zHQkBf').eq(0).type('09')
        cy.get('.whsOnd.zHQkBf').eq(1).type('36')
        cy.get('.whsOnd.zHQkBf').eq(2).type('19')
        cy.get('.whsOnd.zHQkBf').eq(3).type('36')

        //Select Dietart Restrictions from the dropdown
        cy.get('.MocG8c.HZ3kWc.mhLiyf.LMgvRb.KKjvXb.DEh1R').contains('Choose').click()
        cy.get('.OA0qNb.ncFHed.QXL7Te').find('.vRMGwf.oJeWuf')
        cy.get('.OA0qNb.ncFHed.QXL7Te').each(($e1,index,$list)=> {
            $e1.find('.MocG8c.HZ3kWc.mhLiyf.OIC90c.LMgvRb').eq(2)
        })

        
        //cy.get('.MocG8c.aHZ3kWc.mhLiyf.LMgvRb.DEh1R.KKjvXb').select('Vegan')
        //cy.get('.MocG8c.aHZ3kWc.mhLiyf.LMgvRb.DEh1R.KKjvXb').type('{downarrow}')
        //cy.get('.MocG8c.aHZ3kWc.mhLiyf.LMgvRb.DEh1R.KKjvXb').type('{enter}')

        //Select checkbox to agree for payment
        cy.get('.uVccjd.aiSeRd.FXLARc.wGQFbe.BJHAP.oLlshd').click()

        // Submit the form
        cy.get('.uArJ5e.UQuaGc.Y5sE8d.VkkpIf.QvWxOd').eq(0).click()
        // cy.get('.rFrNMe.k3kHxc.RdH0ib.yqQS1.zKHdkd') // WIP

        // cy.get()


    
        //cy.get('.geS5n.AFppSc.Jj6Lae').find('.ndJi5d.snByac:visible').type('xyz')

        //cy.get(':nth-child(2) > [jsmodel="CP1oW"] > .geS5n > .AgroKb > .rFrNMe > .aCsJod > .aXBtI > .Xb9hP > .whsOnd').type('xyx')

    })
})