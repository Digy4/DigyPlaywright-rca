Feature: Dashboard functionality

  Background:
    Given Enter the Digydashboard login page
    When Enter the digy username "digykube"
    And Enter the digy password "Digy4101!"
    Then Land on the homepage

  Scenario: viewing widgets
    Given the user is on the Universal Enterprise Quality page
    When the user is on homepage
    And the user clicks on the "<Day>" from the dropdown
    Then the user able to see widgets on Dashboard

   Examples:
       | Day | 
       | Last 2 days |
       | Last 6 months |