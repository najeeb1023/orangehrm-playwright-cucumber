@Login
Feature: User Login Test

    Background: Below given step is to login to Orange HRM

        Given the user lands at the webpage



    Scenario Outline: User visits the website and logs in
        When User goes to the website and enters "<USERNAME>" and "<PASSWORD>"
        Then The user is logged in


        Examples:
            |   USERNAME      |   PASSWORD |
            |   Admin         |   admin123 |