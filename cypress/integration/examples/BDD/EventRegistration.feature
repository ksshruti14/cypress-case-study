Feature: Event registration

    This feature verifies positive and negative scenarios for event registration workflow

@PositiveScenarios
    Scenario: User provides all the necessary inputs and registers for the event
    Given I navigate to Registration website
    And click on Next to open the form
    When I enter all the personal details
    And click on Next to navigate to event page
    And I enter all the event related details
    And click on submit
    Then form is submitted and event registration is done

@PositiveScenarios
    Scenario: User provides only required information and registers for the event
    Given I navigate to Registration website
    And click on Next to open the form
    When I fill the below fields under personal information
    |Field|FieldValue|
    |Name|Rocky|  
    |Gender|Prefer not to answer|
    |DOB|2009-12-09| 
    |EmailID|Rocky@gmail.com|
    And click on Next to navigate to event page
    And I fill the below fields under event information
    |Field|FieldValue|
    |EventDay|Friday|
    |AvailableFromHour|11|
    |AvailableFromMin|30|
    |DietaryRestrictions|Kosher|
    And click on submit
    Then form is submitted and event registration is done

    @PositiveScenarios
    Scenario: User provides only required information, registers and edits the response
    Given I navigate to Registration website
    And click on Next to open the form
    When I fill the below fields under personal information
    |Field|FieldValue|
    |Name|Benjin|  
    |Gender|Female|
    |DOB|2009-03-09| 
    |EmailID|Benjin@gmail.com|
    And click on Next to navigate to event page
    And I fill the below fields under event information
    |Field|FieldValue|
    |EventDay|Friday|
    |AvailableFromHour|9|
    |AvailableFromMin|30|
    |DietaryRestrictions|Vegan|
    And click on submit
    And form is submitted and event registration is done 
    And I click on Edit response to update the form
    And click on Next to open the form   
    And I edit the value under personal information
    |Field|FieldValue| 
    |EmailID|Benjamin@gmail.com|
    And click on Next to navigate to event page
    And click on submit
    Then form is submitted and event registration is done

    @NegativeScenarios
 Scenario: Skipping mandatory field DOB throws error and fails to proceed with registration
    Given I navigate to Registration website
    And click on Next to open the form
    When I enter all the personal details except for DOB
    And click on Next to navigate to event page
    Then Displays error text below the field

@NegativeScenarios    
  Scenario: Missed to specify related information for option 'Other' under Gender throws error
    Given I navigate to Registration website
    And click on Next to open the form
    When I enter all the personal details except for Other field
    And click on Next to navigate to event page
    Then Displays a error text below the field 
    |Error text|
    |This is a required question|
    