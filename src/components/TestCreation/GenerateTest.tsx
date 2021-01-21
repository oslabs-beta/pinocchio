

// You will need to install mocha chai and puppeteer
// ----> give those commands here and maybe a website to docs


// Boilerplate Function
let test = `const { expect } = require('chai'); \n
const puppeteer = require('puppeteer'); \n
\n
describe('Your generated test: ', function() {\n
  let browser;\n
  let page;\n
  \n
  before(async function(){\n
    browser = await puppeteer.launch();\n
    page = await browser.newPage();\n
  });\n
  \n
  after(function(){\n
    browser.close();\n
  })\n
\n`

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

function GenerateTest(testObject: any, APP: any){
  const dBlockDescription = testObject.dDescription;
  const itDescription = testObject.nestedIts.itDescription;
  const assertion = testObject.nestedIts.assertions[0].assertion;
  const userInputAssertion = testObject.nestedIts.assertions[0].userInput;
  const puppeteerAction = testObject.nestedIts.actions[0].action;
  const puppeteerHtmlNode = testObject.nestedIts.actions[0].htmlNode;

const actualTest = `describe('${dBlockDescription}', function(){\n
    before(){\n
      page.goto('${APP}');\n
    }\n
    after(){\n
      page.close();\n
    }\n
    \n
    it('${itDescription}', async function() {\n
      await page.waitForSelector('${puppeteerHtmlNode}');\n
      const result = page.$eval(${puppeteerHtmlNode}, ${actionMap[puppeteerAction]});\n
      expect(result).${assertion}(${userInputAssertion});\n
      \n
    })\n
  })`

  return test + actualTest + endString;
}

//FOR FURTURE USE IN THE CASE OF MULTIPLE IT BLOCKS
// function generateItBlocks(itObject: any) {
//     for(let key in itObject){
//       `it('${itObject[key].itDescription}')`
//     }

//   }