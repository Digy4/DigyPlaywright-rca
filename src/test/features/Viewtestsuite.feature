Feature: Dashboard functionality

  Background:
    Given Enter the Digydashboard login page
    When Enter the digy username "digykube"
    And Enter the digy password "Digy4101!"
    Then Land on the homepage

  Scenario: Viewing testsuite
    Given the user is on Dashboard button
    When the user clicks on execution Dashboard
    And the user clicks on testsuite
    # Then the testsuite should be visible