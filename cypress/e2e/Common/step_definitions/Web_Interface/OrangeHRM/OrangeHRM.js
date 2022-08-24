import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { And } from "@badeball/cypress-cucumber-preprocessor/lib/methods";
const OrangeHRM = require("../../../../../pages/OrangeHRM");

  Given("I visit to OrangeHRM Login page", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  // cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').type("Admin");
  });
  When("I input the Username {string}", (username)=>{
    OrangeHRM.typeUsername(username);
    
  });
  When("I input the Password {string}", (password)=>{

    OrangeHRM.typePassword(password)
  });
  When("I click the Login button", ()=>{
    OrangeHRM.clickLogin();
  });
  When("I click on Admin", ()=>{
    //OrangeHRM.leaveButton();
   // OrangeHRM.FromDate();
   cy.contains("Admin").click();
  });
  And("I add System User",()=>{
    cy.contains("Add").click();
    cy.get(".oxd-select-text-input").eq(0).click();
    cy.contains('ESS').click();

  })
  And("I select the Employee name {string}",(employee__name)=>{
  OrangeHRM.EmployeeName(employee__name);

  })
  And("I select the Status",()=>{
    cy.get(".oxd-select-text-input").eq(1).click();
    cy.contains('Disabled').click();
   // OrangeHRM.EmployeesStatus();
  
    })
    And("I create a Username {string}",(myUsername)=>{
     
     OrangeHRM.CreateUsername(myUsername);
    
      })
      And("I create a Password {string}",(input_the_password)=>{
     
        OrangeHRM.MyPassword(input_the_password);
       
         })
         And("I confirm the Password {string}",(input_Confirm_Password)=>{
     
          OrangeHRM.MyConfirmPassword(input_Confirm_Password);
         
           })
           And("I click on Save button",()=>{
            cy.wait(2000)
           cy.contains("Save").click();
           
             })
             Then("Verify User is added {string}",(added_username)=>{
              cy.wait(6000)
              cy.contains(added_username).should('be.visible');              
             })
      
  
