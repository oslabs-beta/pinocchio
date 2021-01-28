

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
  //       actions: {0: {action: '', selector: '', text: '', key: ''}},
  //     },
const actionMap = {
  getValue: `(el) => el.value`,
  getLength: `(el) => el.length`,
  getInnerText: `(el) => el.innerText`
}
//page.type: `page.type(${puppeteerActionObj[key].selector}, ${puppeteerActionObj[key].text}
  //page.focus: `page.focus(
function GenerateTest(testObject: any, APP: any) {
  const dBlockDescription = testObject.dDescription;
  const itDescription = testObject.nestedIts.itDescription;
  const assertion = testObject.nestedIts.assertions[0].assertion;
  const userInputAssertion = testObject.nestedIts.assertions[0].userInput;
  const puppeteerAction = testObject.nestedIts.actions;
  // const puppeteerHtmlNode = testObject.nestedIts.actions[0].htmlNode;

const puppeteerGeneration = (puppeteerActionObj: any ,) => {
  let result = ``;
  for (let keys in puppeteerActionObj) {
    let thisAction = `${puppeteerActionObj[keys].action}` //page.type(
    if (puppeteerActionObj[keys].selector.length)
    thisAction += puppeteerActionObj[keys].selector + `,`; //page.type('input',
    //if text.length
    //thisaction concats text -->  page.type('input', 'birthdays',




    thisAction+= `);`; //page.type('input', 'birthdays', );
  }
}

  // function myFunc(arg1,) {
//   console.log(arg1)
//   console.log(...arguments)
// }

// myFunc('1', '2',)

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