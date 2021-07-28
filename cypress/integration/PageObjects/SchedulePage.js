class SchedulePage
{
getclickonschedule()
{
    return cy.get(':nth-child(7) > .submenu-toggle > .menu-text')
}
getclickonviewtext()
{
    return  cy.get('.buttonrow > .ng-star-inserted')
}
getdownloadpdf()
{
    return cy.get('.buttonrow > :nth-child(3)')
}
}
export default SchedulePage