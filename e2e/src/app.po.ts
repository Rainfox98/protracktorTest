import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  static openTab() {
    throw new Error("Method not implemented.");
  }
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  openDocumentation(){
    return element(by.className('sub-menu-opener')).click();
  }

}
