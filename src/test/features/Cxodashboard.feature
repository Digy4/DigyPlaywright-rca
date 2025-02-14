Feature: Dashboard functionality

  Background:
    Given Enter the Digydashboard login page
    When Enter the digy username "digykube"
    And Enter the digy password "Digy4101!"
    Then Land on the homepage

  Scenario: Navigate to CXO Dashboard
    Given the user is on the Universal Enterprise Quality page
    When the user clicks on the DASHBOARDS button
    And the user clicks on the CXO Dashboard button
    Then the CXO Dashboard should be displayed