# protractorexample
<b>About Protractor:</b>

The first version of Protractor was released in July 2013. 

Protractor is an E2E testing framework is an open source functional automation framework designed specifically for AngularJS applications - combining powerful tools and technologies such as NodeJS, Selenium, webDriver, Jasmine, Cucumber and Mocha.  

Google, with the support of the testing community, is evolving the framework to follow the evolution of AngularJS and to meet the needs of the community that is using AngularJS

Protractor is a Node.js program built on top of WebDriverJS.

It runs on real browsers and headless browsers


<b>Salient features of the Protractor Automation tool: </b>

1.	Built on the top of WebdriverJS and Selenium server

2.	Introduced new simple syntax to write tests

3.	Allows running tests targeting remote addresses

4.	Can take advantage of Selenium grid to run multiple browsers at once

5.	Can use Jasmine or Mocha to write test suites


<b>Setup:</b>

Protractor is a Node.js program. To run Protractor, you will need to have Node.js installed. 

Use npm to install Protractor globally with:
<i>npm install -g protractor </i>

This will install two command line tools, <b>protractor and webdriver-manager</b>. Try running <i>protractor --version</i> to make sure it's working.

The <b>webdriver-manager</b> is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:

<i>webdriver-manager update </i>

Now start up a server with:
<i>webdriver-manager start </i>

This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. Leave this server running throughout the tutorial. You can see information about the status of the server at <i>http://localhost:4444/wd/hub.</i>
