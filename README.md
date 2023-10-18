# Plug-ins
- Cypress-Cucumber-preprocessor
- Browserify
- Visual studio cucumber BDD plug-in
- Cypress cucumber(Gherkin) full support
- Cucumber preprocessor JSON formatter

# Framework
**Fixtures** -> contains Data files <br />
**example.json ** -> has all the data related to event registration 
**integration** -> contains cypress specs, BDD test files and PageObjects 
**EventRegistration.feature** file has both positive ad negative scenarios related to the Event Registration workflow
**EventRegistration -> EventRegistration.js** is a step definition file 
**cypress-config** -> has all the configurations 
**package.json** -> has all the project dependencies

# Testcases
BDD scenarios -- 3 positive and 2 negative scenarios
Scenario 1 and 4 -- showcases the **Data driven approach through cypress** using example.json 
Scenario 2,3 and 5 -- showcases the **Data driven approach through BDD dataTables**
Note: Cypress spec file was initially created using **describe** and **it** block to check the workflow 

# Object Repository
**PersonalInformationPage** -- Contains page objects and related functions in the Personal information page 
**EventInformationPage** -- Contains page objects and related functions in the Event information page 
**EventRegistrationPage** -- Contains page objects and related functions in the Event registration page 

# Test execution
Consider running the tests 2 ways
**Cypress runner** -- npx cypress open -- launches cypress runner and runs the tests with .feature file based on the user selection
**VS Terminal** -- npx cypress run -- runs the tests headless mode -- generates html report -- refer to package.json for the path 
Note: selective scenario execution can be done using tags -- @positivescenarios @negative scenarios

# Test run screenshots
Refer to the folder **Test Evidence** under root folder










