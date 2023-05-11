@runOnly

Feature: User Login Test

    Background: Below given step is to login to Orange HRM

        Given the user lands at the webpage and logs in



    Scenario Outline: User visits the website and logs in
        When User goes to the website and enters "<ID>" and "<PASSWORD>"
        Then The user is logged in


        Examples:
            |   ID      |   PASSWORD
            |   Admin   |   admin123