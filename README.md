## Framework
**Fixtures** -> contains test data files <br />
**example.json** -> has all the data related to event registration <br />
**integration** -> contains cypress specs, BDD test files and PageObjects <br />
**EventRegistration.feature** file has both positive ad negative scenarios related to the Event Registration workflow <br />
**EventRegistration -> EventRegistration.js** is a step definition file <br />
**cypress-config** -> has all the configurations <br />
**package.json** -> has all the project dependencies <br />

## Testcases
BDD scenarios -- 3 positive and 2 negative scenarios <br />
Scenario 1 and 4 -- showcases the **Data driven approach through cypress** using example.json <br />
Scenario 2,3 and 5 -- showcases the **Data driven approach through BDD dataTables** <br />
Note: Cypress spec file was initially created using **describe** and **it** block to check the workflow <br />

## Object Repository
**PersonalInformationPage** -- Contains page objects and related functions in the Personal information page <br />
**EventInformationPage** -- Contains page objects and related functions in the Event information page <br />
**EventRegistrationPage** -- Contains page objects and related functions in the Event registration page <br />

## Test execution
Once you download the code from GitHub, install all the dependencies with the below command on terminal or command prompt
npm install

Consider running the tests 2 ways <br />
**Cypress runner** -- npx cypress open -- launches cypress runner and runs the tests with .feature file based on the user selection <br />
**VS Terminal** -- npx cypress run -- runs the tests headless mode -- generates html report -- refer to package.json for the path <br />
Note: selective scenario execution can be done using tags -- @positivescenarios @negative scenarios <br />

## Test run screenshots
Refer to the folder **Test Evidence** under root folder for the html report and other relevant screenshots. <br />
