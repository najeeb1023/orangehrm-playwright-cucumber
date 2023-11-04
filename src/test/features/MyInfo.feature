Feature: User fill the information form 

Background: User logs in.
  Given the user lands at the webpage.
  When User goes to the website and enters and enters "admins" and "admin123"

  Scenario: User is able to fill a form 
    Then User enter a employee full name 
    And  User enter a nick name 
    And  User is able to enter a employee id 
    And  User enter a other id 
    And  User enter a Driving license Number
    And  User is able to select a driver expiry date 
    Then User enter SSN number 
    And  User enter a SIN number
    And  User select a nationality
    And  User select a Marital Status
    And  User select a date of birth
    And  User select a Gender
    And  User select a military service 
    And  User select a smoker 
    And  User select a blood type  
    And  user select a attachment 
