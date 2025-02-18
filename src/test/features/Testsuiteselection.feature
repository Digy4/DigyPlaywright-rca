# Feature:Functionality of test suite section when test type=API 

# Background:
#     Given Enter the Digydashboard login page
#     When Enter the digy username "digykube"
#     And Enter the digy password "Digy4101!"
#     Then Land on the homepage

# Scenario Outline: Functionality of test suite section when test type is API Test Scenario
#   Given user ran API test from editor
#   Given user has provided "<Project Name>", "<Framework>", "<Suite Name>", "<Release>", "<Test Type>" in digy4.config.properties file

#   Examples:
#     | Project Name  | Framework  | Suite Name  | Release   | Test Type |
#     | DIGYDASHBOARD | CUCUMBER   | REGRESSION  | RELEASE7  | WEB       |




# Then the datas should match with the one provided by user in digy4.config.properties file during execution 
# And user is validating <Total>,<Pass>,<Fail>,<Duration>,<Start Time>,<End Time> records
# Then it should show as per execution performed by user

# Examples:
# |projectName| framework |suiteName    |release  |testType |
# |DIGYDASHBOARD| CUCUMBER     |REGRESSION  | RELEASE7    |WEB  |