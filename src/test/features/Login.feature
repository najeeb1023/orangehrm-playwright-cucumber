@Login
Feature: User Login Test

    Background: User logs in.
        Given the user lands at the webpage.
        
   
    Scenario: User visits the website and logs in.
        When User goes to the website and enters "<USERNAME>" and "<PASSWORD>".
        Then The user is logged in.


        Examples:
            |   USERNAME      |   PASSWORD |
            |   Admin         |   admin123 |