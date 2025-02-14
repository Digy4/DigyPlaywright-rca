# Feature: Dashboard search functionality with valid inputs

# Background:
#     Given Enter the Digydashboard login page
#     When Enter the digy username "digykube"
#     And Enter the digy password "Digy4101!"
#     Then Land on the homepage
# Scenario Outline:Dashboard search functionality using <options> with specific timeperiod Test Scenario
#     Given user is on Dashboard
#     And user selects any option from the dropdown <options>,<values>,<timeperiod>
#     # And enters the required <options>,<values>,<timeperiod>
#     # Then search result should get displayed for that specific <options>,<values>,<timeperiod>
# Examples:
# |options              |values                          |timeperiod |
# |BuildId              |10001                           |Last 1 year|  
# |Suite Name           |Digy4Testing                    |Last 1 year| 
# |TestCase Name        |searchTestNGInGoogle            |Last 1 year|