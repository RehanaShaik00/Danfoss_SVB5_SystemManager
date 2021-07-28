class SystemViewPage
{
getclickonSystemView()
{
    return cy.get(':nth-child(5) > .submenu-toggle > .menu-text')
}
getselectSectionMT()
{
    return cy.get('[data-uid="node_0"] > .e-list-parent > .e-list-item > .e-fullrow')
}
getshowdetails()
{
    return cy.get('.col-md-8 > .btn')
}
getSelectOtherDevice()
{
    return cy.get('[data-uid="node_2"] > .e-fullrow')
}
getHideDetails()
{
    return cy.get('.col-md-8 > .btn')
}
}
export default SystemViewPage