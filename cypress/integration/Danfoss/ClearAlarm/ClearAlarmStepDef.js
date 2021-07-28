import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import ClearAlarmPage from '../../PageObjects/ClearAlarmPage'
import ActiveAlarmPage from '../../PageObjects/ActiveAlarmPage'

const ActiveAlarm = new ActiveAlarmPage()
const ClearAlarm = new ClearAlarmPage()
Given('I click on Cleared Alarm', function() {
    ActiveAlarm.getclickonalarm().click()
    cy.wait(5000)
    ClearAlarm.getclickonclear().click()
    cy.wait(5000)
})
When('I click on Device Name', function() {
    ClearAlarm.getdevicename().click()
})
Then('I verify the Description',function() {
    ClearAlarm.getDescription().then(function($elem) {
        this.Description=($elem.text())
    ActiveAlarm.getlbldescriptionval().should('contain',this.Description)
    })
})
And('I verify the Point',function() {
    ClearAlarm.getPoint().then(function($elem) {
        this.Point=($elem.text())
    ActiveAlarm.getlblpointval().should('contain',this.Point)
    })
})
And('I verify the Address',function() {
    ClearAlarm.getAddress().then(function($elem) {
        this.Address=($elem.text())
    ActiveAlarm.getlbladdressval().should('contain',this.Address)
    })
})
And('I verify the Setting',function() {
    ClearAlarm.getsetting().then(function($elem) {
        this.Setting=($elem.text())
    ActiveAlarm.getlblsettingval().should('contain',this.Setting)
    })
})
And('I verify the Current Value',function() {
    ClearAlarm.getcurrentvalue().then(function($elem) {
        this.CurrentValue=($elem.text())
    ActiveAlarm.getlblcurrentvalueval().should('contain',this.CurrentValue)
    })
})
And('I verify the Occured Time',function() {
    ClearAlarm.getoccuredTime().then(function($elem) {
        this.Occured=($elem.text())
    ActiveAlarm.getlbloccuredval().should('contain',this.Occured)
    })
})
And('I verify the Acknowledge Status',function() {
    ClearAlarm.getAcknowledgestatus().then(function($elem) {
        this.Acknowledge=($elem.text())
    ActiveAlarm.getlblackval().should('contain',this.Acknowledge)
    })
})
Then('I close',function() {
    ClearAlarm.getclear().click()
})