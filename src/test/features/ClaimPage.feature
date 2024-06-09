@ClaimTab @Regression
Feature: User goes to Claim Page

    Background: User logs in.
        Given the user lands at the webpage.
        When User goes to the website and enters "Admin" and "admin123".
        When User changes the language to "<En>".
        Then The user is logged in.
    
    Scenario: User is able to check time of people.
        When User navigates to Claim tab
        And User selects status as Submitted
        Then All users will status Enbaled are returned