Feature: OrangeHRM
 Scenario: visiting site
        Given I visit to OrangeHRM Login page
        When I input the Username "Admin"
        When I input the Password "admin123"
        And I click the Login button
         When I click on Admin
         And I add System User
       #   And I add User Role
         And I select the Employee name "Jacqueline"
        And I select the Status
          And I create a Username "forTestingf"
         And I create a Password "9031@Saif"
         And I confirm the Password "9031@Saif"
        And I click on Save button
        Then Verify User is added "forTestingf"
