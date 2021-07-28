class DetailPage
{
getclickonDetails()
{
    return cy.get(':nth-child(6) > .submenu-toggle > .menu-text')
}
getclickonHistoryLogin()
{
    return cy.get(':nth-child(3) > .nav-link')
}
getclickoncalenderimage()
{
    return cy.get(':nth-child(1) > button > img')
    //return cy.get(':nth-child(9) > .modal-dialog > .modal-content > collect-datapoints-modal > .modal-body > .row > .col-md-5 > :nth-child(3) > button')
}
getselectmonth()
{
    return cy.get('select[aria-label="Select month"]')
}
getselectyear()
{
    return cy.get('select[aria-label="Select year"]')
}
getselectdate()
{
    return cy.get('body > ngb-modal-window > div > div > collect-datapoints-modal > div.modal-body > div > div.col-xs-12.col-md-5 > div:nth-child(1) > ngb-datepicker > div.ngb-dp-months > div > ngb-datepicker-month-view > div:nth-child(3) > div:nth-child(6)')
}
getchangetime()
{
    return cy.get(':nth-child(2) > .ng-untouched > fieldset > .ngb-tp > .ngb-tp-hour > :nth-child(1) > .chevron')
}
getclose()
{
    return cy.get('collect-datapoints-modal > .modal-footer > .close-btn')
}
}
export default DetailPage