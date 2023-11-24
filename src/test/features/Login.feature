@Login @Regression
Feature: User Login Test

    Background: User logs in.
        Given the user lands at the webpage.
        
    Scenario: User is able to login with correct credentials.
        When User goes to the website and enters "<USERNAME>" and "<PASSWORD>".
        Then The user is logged in.


        Examples:
        |   USERNAME      |   PASSWORD |
        |   Admin         |   admin123 |

    Scenario: User is not able to login due to incorrect credentials.
        When User goes to the website and enters wrong "<USERNAME>" and "<PASSWORD>".
        Then The user is not logged in.

        Examples:
        |   USERNAME      |   PASSWORD |
        |   AnotherAdmin       |   admin124 |