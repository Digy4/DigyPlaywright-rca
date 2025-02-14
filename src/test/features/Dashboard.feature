Feature: Dashboard functionality

  Background:
    Given Enter the Digydashboard login page
    When Enter the digy username "digykube"
    And Enter the digy password "Digy4101!"
    Then Land on the homepage

  Scenario: Verify Dashboard elements
    Then I should see "Digy4 Apps" on the page

