import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import ActiveAlarmPage from '../../PageObjects/ActiveAlarmPage'
import AcknowledgeAlarmPage from '../../PageObjects/AcknowledgeAlarmPage'
import ClearAlarmPage from '../../PageObjects/ClearAlarmPage'

const ActiveAlarm = new ActiveAlarmPage()
const Acknowledgealarm = new AcknowledgeAlarmPage()
const ClearAlarm = new ClearAlarmPage()
Given('I click on Alarm', function() {
    //ActiveAlarm.getclickonalarm().click()
    cy.wait(5000)
})
When('I click on Device Name', function() {
    //ActiveAlarm.getclickonDevicename().click()
    cy.wait(5000)
})
Then('I verify the Description', function() {
    cy.wait(5000)
    /*ActiveAlarm.getDescription().then(function($elem) {
        this.Description=($elem.text())
    ActiveAlarm.getlbldescriptionval().should('contain',this.Description)
})*/
})
And('I verify the Point', function() {
    cy.wait(5000)
    /*ActiveAlarm.getpoint().then(function($elem) {
        this.Point=($elem.text())
    ActiveAlarm.getlblpointval().should('contain',this.Point)
})*/
})
And('I verify the Address', function() {
    cy.wait(5000)
    /*ActiveAlarm.getaddress().then(function($elem) {
        this.Address=($elem.text())
    ActiveAlarm.getlbladdressval().should('contain',this.Address)
})*/
})
And('I verify the Setting', function() {
    cy.wait(5000)
    /* ActiveAlarm.getsetting().then(function($elem) {
        this.Setting=($elem.text())
    ActiveAlarm.getlblsettingval().should('contain',this.Setting)
})*/
})
And('I verify the Current Value', function() {
    cy.wait(5000)
    /*ActiveAlarm.getcurrentvalue().then(function($elem) {
        this.CurrentValue=($elem.text())
    ActiveAlarm.getlblcurrentvalueval().should('contain',this.CurrentValue)
})*/
})
And('I verify the Occured Time', function() {
    cy.wait(5000)
    /*ActiveAlarm.getoccuredtime().then(function($elem) {
        this.Occured=($elem.text())
    ActiveAlarm.getlbloccuredval().should('contain',this.Occured)
})*/
})
And('I verify the Acknowledge Status', function() {
    cy.wait(5000)
    /*ActiveAlarm.getacknowledgestatus().then(function($elem) {
        this.Acknowledge=($elem.text())
    ActiveAlarm.getlblackval().should('contain',this.Acknowledge)
})*/
})
Then('I Acknowledge the Alarm', function(){
    cy.wait(5000)
    //ActiveAlarm.getacknowledalarm().click()
   
})
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
    cy.wait(1000)
    //Acknowledgealarm.getclose().click()
})
Given('I click on Cleared Alarm', function() {
    ActiveAlarm.getclickonalarm().click()
    cy.wait(5000)
    ClearAlarm.getclickonclear().click()
    cy.wait(5000)
})
When('I click Device Name', function() {
    ClearAlarm.getdevicename().click()
})
Then('I verify Description',function() {
    ClearAlarm.getDescription().then(function($elem) {
        this.Description=($elem.text())
    ActiveAlarm.getlbldescriptionval().should('contain',this.Description)
    })
})
And('I verify Point',function() {
    ClearAlarm.getPoint().then(function($elem) {
        this.Point=($elem.text())
    ActiveAlarm.getlblpointval().should('contain',this.Point)
    })
})
And('I verify Address',function() {
    ClearAlarm.getAddress().then(function($elem) {
        this.Address=($elem.text())
    ActiveAlarm.getlbladdressval().should('contain',this.Address)
    })
})
And('I verify Setting',function() {
    ClearAlarm.getsetting().then(function($elem) {
        this.Setting=($elem.text())
    ActiveAlarm.getlblsettingval().should('contain',this.Setting)
    })
})
And('I verify Current Value',function() {
    ClearAlarm.getcurrentvalue().then(function($elem) {
        this.CurrentValue=($elem.text())
    ActiveAlarm.getlblcurrentvalueval().should('contain',this.CurrentValue)
    })
})
And('I verify Occured Time',function() {
    ClearAlarm.getoccuredTime().then(function($elem) {
        this.Occured=($elem.text())
    ActiveAlarm.getlbloccuredval().should('contain',this.Occured)
    })
})
And('I verify Acknowledge Status',function() {
    ClearAlarm.getAcknowledgestatus().then(function($elem) {
        this.Acknowledge=($elem.text())
    ActiveAlarm.getlblackval().should('contain',this.Acknowledge)
    })
})
Then('I close clear',function() {
    ClearAlarm.getclear().click()
})
