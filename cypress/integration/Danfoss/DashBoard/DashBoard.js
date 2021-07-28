import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
import DashBoardPage from '../../PageObjects/DashBoardPage'

const DashBoard = new DashBoardPage()
Given('I off the Alarm',function() {
    DashBoard.getClickonFile().click()//click on File
    DashBoard.getSelectPreferences().click()//SelectPreference
    DashBoard.getDiableenablebox().click()//disable Alarm
    DashBoard.getclosepreference().click()//close window
})
When('Set High temp alarm limit 25.0deg SVB5',function() {
    DashBoard.getSelectDevice().click()//select device
    cy.wait(10000)
    DashBoard.getSelectHighTemp().dblclick()//select Hign Temp
    DashBoard.getEdit().type(this.svb5data.HighTemp)//'25.0')//change temp to 25.0 deg
    DashBoard.getclickok().click()//click ok
})
Then('set Low temp alarm limit -5.0deg SVB5',function() {
    DashBoard.getSelectLowTemp().dblclick()//select Low Temp
    DashBoard.getEdit().type(this.svb5data.LowTemp)//'-5.0')//change the temp to -5.0deg
    DashBoard.getclickok().click() //click ok
})
And('Set Alarm delay 0 SVB5',function() {
    DashBoard.getSelectDelay().dblclick()//select delay
    DashBoard.getEdit().type(this.svb5data.alarmdelay)//'0')//change delay to 0
    DashBoard.getclickok().click()//click ok
})