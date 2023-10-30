@Admin
Feature: User navigates to Admin Tab

    Background: Below given step is to access Admin Page

        Given User is already at the website



    Scenario Outline: User visits the website and logs in
        When User clicks on Admin Tab
        Then User is redirected to Admin Tab
