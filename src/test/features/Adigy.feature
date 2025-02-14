Feature: Login to Digy4

  Background:
    Given Enter the Digydashboard login page

  Scenario: Successful login
    When Enter the digy username "digykube"
    And Enter the digy password "Digy4101!"
    Then Land on the homepage



