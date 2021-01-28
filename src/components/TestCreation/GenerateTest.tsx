

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
  //     {0 :{itDescription: "",

  //       assertions: {assertion: '', userInput: '', $evalSelector: '', $evalCallback: ''},
  //       actions: {0: {action: 'keyboardPress', selector: '', text: '', key: 'Backspace'}},
  //     }
  //      1: {
    //        itDesc
  //}

  //}
  //     ,
const actionMap = {
  'getValue': `(el) => el.value`,
  'getLength': `(el) => el.length`,
  'getInnerText': `(el) => el.innerText`,
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
  }
  // await page.waitForSelector('blank');

  // const result = page.$eval('blank', blank);
  // expect(result).${assertion}('${userInputAssertion}')

  // function myFunc(arg1,) {
//   console.log(arg1)
//   console.log(...arguments)
// }

// myFunc('1', '2',)
  const puppeteerActionTest = puppeteerGeneration(puppeteerAction);

  const actualTest = `describe('${dBlockDescription}', function(){
    before(){
      page.goto('${APP}');
    }
    after(){
      page.close();
    }
    it('${itDescription}', async function() {
      ${puppeteerActionTest}
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