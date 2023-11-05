@addInfo
Feature: User fill the information form 

Background: User logs in.
  Given the user lands at the webpage.
  When User goes to the website and enters "Admin" and "admin123".

Scenario: User click on InfoTab
  Then User click the info tab
  Then User type a nickname
  Then User type a other id
  Then User insert a driver liecence number
  Then User insert a SSN number
  Then User insert a SIN number
  Then User insert a Military service 
  Then User click a smoke 
  Then User click save btn
