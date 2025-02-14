Feature: Functionality of collapse and expand icon for widgets

Background:
    Given Enter the Digydashboard login page
    When Enter the digy username "digykube"
    And Enter the digy password "Digy4101!"
    Then Land on the homepage

Scenario Outline: Functionality of collapse and expand icon for widgets Test Scenario
Given user is on Homepage
And user clicks on first expand icon 
And the widget gets expand
And again user clicks on the collapse icon
Then the widget should get collapse