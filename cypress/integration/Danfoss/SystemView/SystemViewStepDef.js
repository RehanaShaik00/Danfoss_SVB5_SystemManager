import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import SystemViewPage from '../../PageObjects/SystemViewPage'

const SystemView = new SystemViewPage()
Given('I click on Stem View', ()=> {
    SystemView.getclickonSystemView().click()
    cy.wait(3000)
})
When('I select suction MT', () => {
    SystemView.getselectSectionMT().click()
})
And('I click on show details',()=> {
    SystemView.getshowdetails().click()
})
Then('select other Device',()=> {
    SystemView.getSelectOtherDevice().click()
})
And('I click on Show details', ()=> {
    SystemView.getshowdetails().click()
})
And('I Click on Hide details', () => {
    SystemView.getHideDetails().click()
})