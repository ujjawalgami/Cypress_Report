class OrangeHRM {
    elements = {
      usernameInput: () => cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input'),
      passwordInput: () => cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input'),
      loginBtn: () => cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button'),
      //leave: ()=> cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[3]/a/span'),
      //From_Date: ()=>cy.get("cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')"),
      userRole:()=>cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div/div[1]'),
      Employee_Name:()=>cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div'),
      Status:()=>cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div/div[1]'),
      Username:()=>cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input'),
      password:()=>cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input'),
      ConfirmPassword:()=>cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input'),
      

    };
  
    typeUsername(username) {
      this.elements.usernameInput().type(username);
    }
  
    typePassword(password) {
      this.elements.passwordInput().type(password);
    }
  
    clickLogin() {
      this.elements.loginBtn().click();
    }
    EmployeeName(employee__name){
      this.elements.Employee_Name().type(employee__name);
      cy.wait(2000);
      cy.contains('Jacqueline White').click();
    }
    EmployeesStatus(){
      this.elements.Status().click();
      cy.contains('Disabled');
      cy.wait(1000)
    }
    CreateUsername(myUsername){
      this.elements.Username().type(myUsername)
    }
    
    MyPassword(input_the_password){
      this.elements.password().type(input_the_password);
    }
    MyConfirmPassword(input_Confirm_Password)
    {
    this.elements.ConfirmPassword().type(input_Confirm_Password);
    }
  }
  
  
  module.exports = new OrangeHRM();
  