Feature:Functionality of test suite section when test type=API 

Background:
    Given Enter the Digydashboard login page
    When Enter the digy username "digykube"
    And Enter the digy password "Digy4101!"
    Then Land on the homepage

Scenario: Viewing user profile
    Then User is on profile page

Scenario Outline: viewing purging options
    Given User is on profile page
    When User click on purging
    Then User able to see three "<purging option>"
Examples:
|purging option|
|Time Based Purging|
|Limit Based purging|
|On-Demand Purging|

Scenario Outline: Do time base purging
Given User is on profile page
And User click on purging
When User selects time base purging
Then User can set limit based on "<Days>" or "<Months>"
Then Save the limit to do purging

Examples:
|Days | Months |
|0  | 0 |