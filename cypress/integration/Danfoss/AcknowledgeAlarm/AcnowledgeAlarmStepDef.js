import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import AcknowledgeAlarmPage from '../../PageObjects/AcknowledgeAlarmPage'
import ActiveAlarmPage from '../../PageObjects/ActiveAlarmPage'

const Acknowledgealarm = new AcknowledgeAlarmPage()
const ActiveAlarm = new ActiveAlarmPage()
Given('I click on Acknowledge Alarm', function() {
    Acknowledgealarm.getclickonAlaram().click()
    cy.wait(5000)
    Acknowledgealarm.getclickonacknowledge().click()
    cy.wait(5000)
})
When('I click on Device Name', function() {
    ActiveAlarm.getclickonDevicename().click()
})
When('I verify the Description', function() {
    ActiveAlarm.getDescription().then(function($elem) {
        this.Description=($elem.text())
    ActiveAlarm.getlbldescriptionval().should('contain',this.Description)
})
})
When('I verify the Point', function() {
    ActiveAlarm.getpoint().then(function($elem) {
        this.Point=($elem.text())
    ActiveAlarm.getlblpointval().should('contain',this.Point)
})
})
When('I verify the Address', function() {
    ActiveAlarm.getaddress().then(function($elem) {
        this.Address=($elem.text())
    ActiveAlarm.getlbladdressval().should('contain',this.Address)
})
})
When('I verify the Setting', function() {
    ActiveAlarm.getsetting().then(function($elem) {
        this.Setting=($elem.text())
    ActiveAlarm.getlblsettingval().should('contain',this.Setting)
})
})
When('I verify the Current Value', function() {
    ActiveAlarm.getcurrentvalue().then(function($elem) {
        this.CurrentValue=($elem.text())
    ActiveAlarm.getlblcurrentvalueval().should('contain',this.CurrentValue)
})
})
When('I verify the Occured Time', function() {
    ActiveAlarm.getoccuredtime().then(function($elem) {
        this.Occured=($elem.text())
    ActiveAlarm.getlbloccuredval().should('contain',this.Occured)
})
})
When('I verify the Acknowledge Status', function() {
    ActiveAlarm.getacknowledgestatus().then(function($elem) {
        this.Acknowledge=($elem.text())
    ActiveAlarm.getlblackval().should('contain',this.Acknowledge)
    
})
})
Then('I close', function(){
    Acknowledgealarm.getclose().click()
})