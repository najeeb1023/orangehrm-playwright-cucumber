@DirectoryTab
Feature: User goes to Directory Page

    Background: User logs in.
        Given the user lands at the webpage.
        When User goes to the website and enters "Admin" and "admin123".
        Then The user is logged in.
    
    Scenario: User is check the directory and users.
        When User navigates to Directory tab
        And User selects job title as "<JOBTITLE>"
        Then Users with "<JOBTITLE>" are returned

        Examples:
            | JOBTITLE |
            | Account Assistant |