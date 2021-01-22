

// You will need to install mocha chai and puppeteer
// ----> give those commands here and maybe a website to docs


// Boilerplate Function
let test = `const { expect } = require('chai'); 
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
`

const endString = `});`


// From Context
  // const [test, setTest] = useState({
  //   dDescription: "",
  //   nestedIts: 
  //     {
  //     itDescription: "",

  //       assertions: {0: {assertion: '', userInput: ''}},
  //       actions: {0: {action: '', htmlNode: ''}},
  //     },
const actionMap = {
  getValue: `(el) => el.value`,
  getLength: `(el) => el.length`,
  getInnerText: `(el) => el.innerText`
}

function GenerateTest(testObject: any, APP: any) {
  const dBlockDescription = testObject.dDescription;
  const itDescription = testObject.nestedIts.itDescription;
  const assertion = testObject.nestedIts.assertions[0].assertion;
  const userInputAssertion = testObject.nestedIts.assertions[0].userInput;
  const puppeteerAction = testObject.nestedIts.actions[0].action;
  const puppeteerHtmlNode = testObject.nestedIts.actions[0].htmlNode;

const actualTest = `describe('${dBlockDescription}', function(){
    before(){
      page.goto('${APP}');
    }
    after(){
      page.close();
    }
    it('${itDescription}', async function() {
      await page.waitForSelector('${puppeteerHtmlNode}');
      const result = page.$eval('${puppeteerHtmlNode}', ${actionMap[puppeteerAction]});
      expect(result).${assertion}('${userInputAssertion}')
    })
  })`;

  return test + actualTest + endString;
}

export default GenerateTest;

//FOR FURTURE USE IN THE CASE OF MULTIPLE IT BLOCKS
// function generateItBlocks(itObject: any) {
//     for(let key in itObject){
//       `it('${itObject[key].itDescription}')`
//     }

//   }