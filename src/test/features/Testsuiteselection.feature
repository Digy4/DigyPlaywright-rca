Feature:Functionality of test suite section when test type=API 

Background:
    Given Enter the Digydashboard login page
    When Enter the digy username "digykube"
    And Enter the digy password "Digy4101!"
    Then Land on the homepage

Scenario Outline: Functionality of test suite section when test type is API Test Scenario
  Given user ran API test from editor
  Given user has provided "<Project Name>", "<Framework>", "<Suite Name>", "<Release>", "<Test Type>" in digy4.config.properties file
  Then the datas should match with the one provided by user in digy4.config.properties file during execution
  And user is validating "<Total>","<Pass>","<Fail>","<Duration>","<Start Time>","<End Time>" records
  Then it should show as per execution performed by user 
  Examples:
    | Project Name  | Framework  | Suite Name  | Release   | Test Type | Total | Pass | Fail | Duration | Start Time | End Time |
    | DIGYDASHBOARD | CUCUMBER   | REGRESSION  | RELEASE7  | WEB       | 83 | 40 | 43 | :27 s | /14/2025 08:50:30 AM | /14/2025 08:53:56 AM |


Scenario Outline: Functionality of test suite section when user remove filter
  Given user ran API test from editor
  Given user has provided "<Project Name>", "<Framework>", "<Suite Name>", "<Release>", "<Test Type>" in digy4.config.properties file
  And user click on "Clear All" filter
  Then it should show as per execution performed by user
  Examples:
    | Project Name  | Framework  | Suite Name  | Release   | Test Type |
    | DIGY4 TEST PROJECT | CUCUMBER   | REGRESSION  | RELEASE7  | WEB  |


# Examples:
# |projectName| framework |suiteName    |release  |testType |
# |DIGYDASHBOARD| CUCUMBER     |REGRESSION  | RELEASE7    |WEB  |