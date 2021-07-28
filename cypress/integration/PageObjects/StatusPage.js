class StatusPage
{
getClickonAlarm()
{
    return cy.get(':nth-child(4) > .submenu-toggle > .menu-text')
}
getClickonStatus()
{
    return cy.get('#status')
}
getSelect()
{
    return cy.get('td select')
}
getclickonService()
{
    return cy.get('.nav > :nth-child(2) > a')
}
getVerifyTitle()
{
    return cy.get('.dropbar_title')
}
getClickonInfo()
{
    return cy.get('.nav > :nth-child(3) > a')
}
}
export default StatusPage