// Boilerplate code that all generated tests will need
const setUpBoilerplate = `// NPM INSTALL PUPPETEER, MOCHA, & CHAI IN ORDER TO RUN THESE TESTS
const { expect } = require('chai'); 
const puppeteer = require('puppeteer'); 

describe('Your generated test: ', function() {
  let browser;
  let page;

  before(async function() {
    browser = await puppeteer.launch({
      headless: true,
    });
    page = await browser.newPage();
  });

  after(function() {
    browser.close();
  });

`;

// Closing bracks, parens, and semicolon for above boilerplate
const endString = '});';

// object to map callback selection to actual callback function
const callbackMap: { [key: string]: string } = {
  getValue: '(el) => el.value',
  getLength: '(el) => el.length',
  getInnerText: '(el) => el.innerText',
};

// helper function to generate the puppeteer portion of code for the test
const puppeteerGeneration = (puppeteerActionObj: any) => {
  let result = '';
  // if no puppeteer actions exist, return blank string
  if (!Object.keys(puppeteerActionObj).length) return '';

  // iterate through the puppeteer action state and conditionally write arguments for each action
  Object.keys(puppeteerActionObj).forEach((keys: string) => {
    let thisAction = `${puppeteerActionObj[keys].action}(`;
    if (puppeteerActionObj[keys].selector.length) {
      thisAction += `'${puppeteerActionObj[keys].selector}', `;
    }
    if (puppeteerActionObj[keys].text.length) {
      thisAction += `'${puppeteerActionObj[keys].text}', `;
    }
    if (puppeteerActionObj[keys].key.length) {
      thisAction += `'${puppeteerActionObj[keys].key}', `;
    }
    result += `${thisAction});\n      `;
  });

  // result should be something like: 'page.focus('example', );
  return result;
};

// helper function to generate the puppeteer/$eval & chai/assertion portion of code for the test
const assertionGeneration = (assertionObj: any) => {
  const result = `await page.waitForSelector('${assertionObj.selector}');
      const result = page.$eval('${assertionObj.selector}', ${callbackMap[assertionObj.callback]});
      expect(result).${assertionObj.assertion}('${assertionObj.userInput}');`;

  // if no assertions exist, return blank string
  if (!Object.keys(assertionObj).length) return '';
  return result;
};

// helper function to generate the mocha/it-block portion of code for the test
const itGeneration = (itObj: any) => {
  let result = '';
  if (!Object.keys(itObj).length) return '';

  // iterate through the nestedIts and apply each label in template literal for each action
  Object.keys(itObj).forEach((key) => {
    // invoke above helper functions to get parts of the test
    const puppeteerActionTest = puppeteerGeneration(itObj[key].actions);
    const assertionTest = assertionGeneration(itObj[key].assertions);

    result += `it('${itObj[key].itDescription}', async function() {
      ${puppeteerActionTest}
      ${assertionTest}
    });\n\n    `;
  });

  return result;
};

function GenerateTest(testObject: any, APP: any) {
  const dBlockDescription = testObject.dDescription;
  const its = testObject.nestedIts;

  // use above helper function to generate code from it-blocks
  const itTests = itGeneration(its);
  // temperate literal containing code from above
  const testBody = `  describe('${dBlockDescription}', function(){
    before(function() {
      page.goto('${APP}');
    });
    after(function() {
      page.close();
    });

    ${itTests}
  });\n`;

  // concatenation of the strings is returned and can be viewed in Code Editor
  return setUpBoilerplate + testBody + endString;
}

export default GenerateTest;
