export interface fileInterface {
  filePath: string,
  fileName: string,
  files: Array<fileInterface> | fileInterface
}
