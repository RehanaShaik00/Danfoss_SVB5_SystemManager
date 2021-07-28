import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import DetailPage from '../../PageObjects/DetailPage'

const Detail = new DetailPage
Given('I click on Details',function() {
    Detail.getclickonDetails().click()
    cy.wait(5000)
})
When('I click on History Login',function() {
    Detail.getclickonHistoryLogin().click()
    cy.wait(3000)
})
And('I set Date',function() {
    cy.wait(1000)
    Detail.getclickoncalenderimage().click({multiple: true, force: true})
    //Detail.getselectmonth().select(this.svb5data.Month)//'Feb')
    //Detail.getselectyear().select(this.svb5data.Year,{multiple: true, force: true})//'2011')
    Detail.getselectdate().click({multiple: true, force: true})
    
})
Then('I change Time',function() {
    Detail.getchangetime().click({multiple: true, force: true})
})
And('I close',function() {
    Detail.getclose().click({multiple: true, force: true})
    
})