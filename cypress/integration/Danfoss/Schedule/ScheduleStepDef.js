import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import SchedulePage from '../../PageObjects/SchedulePage'

const Schedule = new SchedulePage()
Given('I navigate to Schedules',() =>{
    Schedule.getclickonschedule().click()
})
When('I Click on view text',()=>{
    Schedule.getclickonviewtext().click()
    cy.wait(2000)
})
Then('I click on Pdf',()=>{
    Schedule.getdownloadpdf().click()
})