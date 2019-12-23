import { browser, by, element } from 'protractor';
describe('Protractor Demo', () => {
    browser.get('https://www.delta.com/');
  it('Fill in search request',() => {
    expect(element(by.id("selectTripType-val")).click());
    let oneWay = element(by.id('ui-list-selectTripType1'))
    let calendar = element(by.className('calenderDepartSpan'));
    let date = element(by.xpath('/html/body/app-root/app-home/ngc-global-nav/header/div/div[1]/ngc-book/div[1]/div/form/div[1]/div/div[1]/div[1]/div[3]/date-selection-view/div/div/div/div/div[4]/div/div[2]/div[1]/div[2]/table/tbody/tr[5]/td[3]'));
    let passenger = element(by.id('passengers-val'));
    let number = element(by.id('ui-list-passengers2'));
    let submit = element(by.id('btn-book-submit'));
    expect(oneWay.click());
    browser.pause(1000);
    expect(calendar.click());
    browser.pause(2000);
    expect(date.click())
    browser.pause(2000);
    expect(passenger.click());
    browser.pause(1000);
    expect(number.click());
    browser.pause(1000);
    expect(submit.click());
    browser.pause(1000);
  });
});