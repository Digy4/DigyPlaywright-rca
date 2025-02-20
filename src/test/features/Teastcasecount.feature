# Feature:No.of entries feature for Dashboard search functionality

#     Background:
#         Given Enter the Digydashboard login page
#         When Enter the digy username "digykube"
#         And Enter the digy password "Digy4101!"
#         Then Land on the homepage

#     Scenario Outline: Viewing testsuite
#         Given the user is on Dashboard button
#         When the user clicks on execution Dashboard
#         And the user clicks on testsuite
#     # Then the testsuite should be visible

#     Scenario Outline:Number of entries feature for Dashboard search functionality Test Scenario
#         Given user is on Dashboard
#         And search result conatins more than 5 test suite
#         Then user should be able to change the entries and the result should show based on the entries"<entries>"

#         Examples:
#             | entries |
#             | 10      |


# Scenario Outline: 'Executed By' column in test suite page Test Scenario
# Given user is on Dashboard
# And user naviagtes to test suite page from left naviagtion panel
# Then user should see the 'Executed By' column in test suite page.

# Scenario Outline: Functionality of full screen icon for test suite history section Test Scenario
# Given user is on Test suite history page
# And user is viewing test suite history section
# And user clicks on full screen icon
# And the widget should gets in full screen mode
# And again user clicks on the full screen icon
# Then the widget should return to previous state

# Scenario Outline: User is able to drill down from Test Suite to Test details page
# Given user is on Test suite history page
# And user select on test suit history for particular project
# And user select on toggle for viewing test cases
# And user select on toggle for viewing test details
# Then test detail page should be visible

# # Scenario Outline: Global search result should not show new fields in Test Suite/Test case
# # Given user is on Test suite history page
# # And user has provided <build id>, <project name> and <test case name>
# # Then user is only able to see <framework>, <suite name>, <release>, <test type>, <total>,<pass>,<fail>,<start time>, <end time>

# # Examples:
# # |build id | project name| test case name |
# # |     auto  |vcsh |dashjh|


