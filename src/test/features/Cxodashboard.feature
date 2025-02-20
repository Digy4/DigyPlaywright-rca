Feature: Dashboard functionality

    Background:
        Given Enter the Digydashboard login page
        When Enter the digy username "digykube"
        And Enter the digy password "Digy4101!"
        Then Land on the homepage

    Scenario: Verify Dashboard elements
        Then I should see "Digy4 Apps" on the page

    Scenario Outline: Navigate to CXO Dashboard
        Given the user is on Homepage
        When the user clicks on the DASHBOARDS button
        And the user clicks on the CXO Dashboard button
        Then the CXO Dashboard should be displayed

    Scenario Outline: Functionality of collapse and expand icon for widgets Test Scenario
        Given the user is on Homepage
        And user clicks on first expand icon
        And the widget gets expand
        And again user clicks on the collapse icon
        Then the widget should get collapse

    Scenario Outline: Functionality of full screen icon for widgets Test Scenario
        Given the user is on Homepage
        And user clicks on full screen icon
        And the widget should gets in full screen mode
        And again user clicks on the full screen icon
        Then the widget should return to previous state

    Scenario Outline: Overview of test coverage widget Test Scenario
        Given the user is on Homepage
        And user is viewing test coverage widget
        Then user should see pie chart and "<browser name boxes>"
        Examples:
            | browser name boxes |
            | Covered            |
            | Not Covered        |
            | Not Applicable     |

    Scenario Outline: viewing widgets
        Given the user is on Homepage
        When the user is on dashboard homepage
        And the user clicks on the "<Day>" from the dropdown
        Then the user able to see widgets on Dashboard

        Examples:
            | Day           |
            | Last 2 days   |
            | Last 6 months |
