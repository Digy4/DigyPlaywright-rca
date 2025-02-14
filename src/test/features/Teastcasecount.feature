Feature:No.of entries feature for Dashboard search functionality

Background:
    Given Enter the Digydashboard login page
    When Enter the digy username "digykube"
    And Enter the digy password "Digy4101!"
    Then Land on the homepage
    
Scenario Outline:No.of entries feature for Dashboard search functionality Test Scenario
Given user is on Dashboard
And search result conatins more than 5 test suite
Then user should be able to change the entries and the result should show based on the entries"<entries>"

Examples:
|entries|
|10     |