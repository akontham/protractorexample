describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(browser.getTitle()).toEqual('Super Calculator');
    element(by.model('first')).sendKeys('200');
    element(by.model('operator')).sendKeys('*');
    element(by.model('second')).sendKeys('2');
    element(by.id('gobutton')).click();
    browser.waitForAngular();
    // Successful Test
    expect(element(by.css('h2.ng-binding')).getText()).toEqual('400','200 * 2 doesn\'t match 400');
    // Assertion will fail with provided error message
    expect(element(by.css('h2.ng-binding')).getText()).toEqual('300','200 * 2 doesn\'t match 400');
  });
});