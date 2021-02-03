// These interfaces are currently not being fully implemented

export interface assertionInterface {
  assertion: string,
  userInput: string,
  selector: string,
  callback: string,
}

export interface puppeteerActionInterface {
  action: string,
  selector: string,
  text: string,
  key: string,
}

export interface itInterface {
  description: string,
  assertions: Array<assertionInterface>,
  puppeteerActionInterface: Array<puppeteerActionInterface>
}

export interface describeInterface {
  description: string,
  nestedIts: itInterface,
}
