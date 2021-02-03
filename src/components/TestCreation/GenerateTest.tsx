const test = `const { expect } = require('chai'); 
const puppeteer = require('puppeteer'); 

describe('Your generated test: ', function() {
  let browser;
  let page;
  
  before(async function(){
    browser = await puppeteer.launch({
      headless: true,
    });
    page = await browser.newPage();
  });
  
  after(function(){
    browser.close();
  })
`;

const endString = '});';

const actionMap = {
  getValue: '(el) => el.value',
  getLength: '(el) => el.length',
  getInnerText: '(el) => el.innerText',
};

function GenerateTest(testObject: any, APP: any) {
  const dBlockDescription = testObject.dDescription;
  const its = testObject.nestedIts;

  // input: object of puppeteer actions
  // output: a string of test code that transcribes the actions object to puppeteer code

  const puppeteerGeneration = (puppeteerActionObj: any) => {
    let result = '';

    for (let keys in puppeteerActionObj) {
      let thisAction = `${puppeteerActionObj[keys].action}(`
      if (puppeteerActionObj[keys].selector.length) {
        thisAction += `'${puppeteerActionObj[keys].selector}', `;
      }
      if (puppeteerActionObj[keys].text.length) {
        thisAction += `'${puppeteerActionObj[keys].text}', `;
      }
      if (puppeteerActionObj[keys].key.length) {
        thisAction += `'${puppeteerActionObj[keys].key}', `;
      }
      result += thisAction + ');\n';
    }

    return result;
  };

  const assertionGeneration = (assertionObj: any) => {
    const result = `await page.waitForSelector('${assertionObj.selector}');
    const result = page.$eval('${assertionObj.selector}', ${actionMap[assertionObj.callback]});
    expect(result).${assertionObj.assertion}('${assertionObj.userInput}')`;

    if (!Object.keys(assertionObj).length) return '';
    return result;
  };

  const itGeneration = (itObj: any) => {
    let result = '';
    for (let key in itObj) {
      const puppeteerActionTest = puppeteerGeneration(itObj[key].actions);
      const assertionTest = assertionGeneration(itObj[key].assertions);
      result += `it('${itObj[key].itDescription}', async function() {
      ${puppeteerActionTest}
      ${assertionTest}
    });\n`
    }

    return result;
  };

  const itTests = itGeneration(its);
  const actualTest = `describe('${dBlockDescription}', function(){
    before(function() {
      page.goto('${APP}');
    })
    after(function() {
      page.close();
    })
    ${itTests};
  })`;

  return test + actualTest + endString;
}

export default GenerateTest;
