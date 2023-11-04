@TimeSheet
Feature: User searches other users Time Sheet

    Background: User logs in.
        Given the user lands at the webpage.
        When User goes to the website and enters "Admin" and "admin123".
    
    Scenario: User is able to check time of people.
        And User navigates to Time Sheet page
        When User is able to sort users
        Then Time is returned for users