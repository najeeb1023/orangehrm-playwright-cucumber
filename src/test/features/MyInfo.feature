@addInfo
Feature: User fill the information form 

Background: User logs in.
  Given the user lands at the webpage.
  When User goes to the website and enters "Admin" and "admin123".

Scenario: User click on InfoTab
  Then User click the info tab