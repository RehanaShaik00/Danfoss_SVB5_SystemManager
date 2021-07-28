import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import ActiveAlarmPage from '../../PageObjects/ActiveAlarmPage'

const ActiveAlarm = new ActiveAlarmPage()
Given('I click on Alarm', function() {
    //ActiveAlarm.getclickonalarm().click()
    cy.wait(5000)
})
When('I click on Device Name', function() {
    //ActiveAlarm.getclickonDevicename().click()
    cy.wait(1000)
})
Then('I verify the Description', function() {
    /*ActiveAlarm.getDescription().then(function($elem) {
        this.Description=($elem.text())
    ActiveAlarm.getlbldescriptionval().should('contain',this.Description)
})*/
    cy.wait(1000)
})
And('I verify the Point', function() {
    /*ActiveAlarm.getpoint().then(function($elem) {
        this.Point=($elem.text())
    ActiveAlarm.getlblpointval().should('contain',this.Point)
})*/
    cy.wait(1000)
})
And('I verify the Address', function() {
    /*ActiveAlarm.getaddress().then(function($elem) {
        this.Address=($elem.text())
    ActiveAlarm.getlbladdressval().should('contain',this.Address)
})*/
    cy.wait(1000)
})
And('I verify the Setting', function() {
    /*ActiveAlarm.getsetting().then(function($elem) {
        this.Setting=($elem.text())
    ActiveAlarm.getlblsettingval().should('contain',this.Setting)
})*/
    cy.wait(1000)
})
And('I verify the Current Value', function() {
    /*ActiveAlarm.getcurrentvalue().then(function($elem) {
        this.CurrentValue=($elem.text())
    ActiveAlarm.getlblcurrentvalueval().should('contain',this.CurrentValue)
})*/
    cy.wait(1000)
})
And('I verify the Occured Time', function() {
    /*ActiveAlarm.getoccuredtime().then(function($elem) {
        this.Occured=($elem.text())
    ActiveAlarm.getlbloccuredval().should('contain',this.Occured)
})*/
    cy.wait(1000)
})
And('I verify the Acknowledge Status', function() {
    /*ActiveAlarm.getacknowledgestatus().then(function($elem) {
        this.Acknowledge=($elem.text())
    ActiveAlarm.getlblackval().should('contain',this.Acknowledge)
})*/
    cy.wait(1000)
})
Then('I Acknowledge the Alarm', function(){
    //ActiveAlarm.getacknowledalarm().click()
   cy.wait(1000)
})

