Feature: Dashboard

Scenario: Set High Temp, Low Temp and Delay 
Given I off the Alarm
When Set High temp alarm limit 25.0deg SVB5
Then set Low temp alarm limit -5.0deg SVB5
And Set Alarm delay 0 SVB5