export interface assertionInterface {
  assertion: string,
  input: unknown
}

export interface puppeteerActionInterface {
  method: string,
  tag: string | undefined,


}

export interface itInterface {
  description: string,
  assertions: Array<assertionInterface>,
  puppeteerActionInterface: Array<puppeteerActionInterface>
}

export interface describeInterface {
  description: string,
  nestedIts: Array<itInterface>,
  nestedDescribes: Array<describeInterface>
}
