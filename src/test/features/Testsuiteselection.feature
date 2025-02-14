# Feature:Functionality of test suite section when test type=API 

# Background:
#     Given Enter the Digydashboard login page
#     When Enter the digy username "digykube"
#     And Enter the digy password "Digy4101!"
#     Then Land on the homepage

# Scenario Outline:Functionality of test suite section when test type=API Test Scenario
# Given user ran API test from editor
# And user has provided <Project Name>,<Build Execution Id>,<Team Name>,<Suite Name>,<Test Type>,<Module Name>,<App Version>,<Environment> in digy4.config.properties file
# Then the datas should match with the one provided by user in digy4.config.properties file during execution 
# And user is validating <Total>,<Pass>,<Fail>,<Duration>,<Start Time>,<End Time> records
# Then it should show as per execution performed by user
# Examples:
# |Project Name|Build Execution Id|Team Name|Suite Name  |Test Type|Module Name|App Version|Environment|Total|Pass|Fail|Duration|Start Time|End Time|
# |DIGYDASHBOARD|AUTO-a1069777-ec1f-4043-a16a-ee3fd5985b1d    |DIGY4  |REGRESSION  |WEB     |SUBSCRIPTION  |1.0   |test   |83    |40   |43   |3:27 s  |02/14/2025 08:50:30 AM  |02/14/2025 08:53:56 AM|