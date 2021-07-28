import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import StatusPage from '../../PageObjects/StatusPage'

const Statuspage = new StatusPage()
Given('I click on Status', function() {
    Statuspage.getClickonAlarm().click()
    cy.wait(5000)
    Statuspage.getClickonStatus().click()
    cy.wait(2000)
})
When('I verify the DropDown', function()  {
    Statuspage.getSelect().select(this.svb5data.page2)//'Page 2')
    Statuspage.getSelect().select(this.svb5data.page3)//'Page 3')
    Statuspage.getSelect().select(this.svb5data.page4)//'Page 4')
    Statuspage.getSelect().select(this.svb5data.page5)//'Page 5')
    Statuspage.getSelect().select(this.svb5data.page6)//'Page 6')
    Statuspage.getSelect().select(this.svb5data.page7)//'Page 7')
    Statuspage.getSelect().select(this.svb5data.page8)//'Page 8')
    Statuspage.getSelect().select(this.svb5data.page9)//'Page 9')
    Statuspage.getSelect().select(this.svb5data.page1)//'Page 1')
})
Then('I navigate to Service and Verify the Title', function() {
    Statuspage.getclickonService().click()
    Statuspage.getVerifyTitle().should('contain',this.svb5data.servicetitle)//'Service')
})
And('I navigate to Info and Verify the Title', function(){
    Statuspage.getClickonInfo().click()
    Statuspage.getVerifyTitle().should('contain',this.svb5data.infoTitle)//'Info')
})