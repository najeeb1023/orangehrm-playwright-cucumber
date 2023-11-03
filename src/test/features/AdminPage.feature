@Admin
Feature: User searches other users for Admin Role

    Background: User logs in.
        Given the user lands at the webpage.
        When User goes to the website and enters "Admin" and "admin123".
    
    Scenario: User is able to search Admins
        And User navigates to Admin Tab
        When User is able to select role.
        Then User is able to search by Admin role

    Scenario: User is able to search ESS
        And User navigates to Admin Tab
        When User is able to select a ESS role.
        Then User is able to search by ESS role