// eslint-disable-next-line import/no-extraneous-dependencies
import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';
// eslint-disable-next-line import/no-extraneous-dependencies
// import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';

let mainWindow;

// eslint-disable-next-line no-console
console.log('electron version', process.versions.electron);

// when electron is initialized, install react dev tools
// app.whenReady().then(() => {
//   installExtension(REACT_DEVELOPER_TOOLS)
//     eslint-disable-next-line no-console
//     .then((name) => console.log(`Added Extension:  ${name}`))
//     eslint-disable-next-line no-console
//     .catch((err) => console.log('An error occurred: ', err));
//   });

function createWindow() {
  // create a new instance of BrowserWindow w/ specifications on the chromium browser itself
  mainWindow = new BrowserWindow({
    minWidth: 650,
    minHeight: 600,
    height: 800,
    width: 800,
    title: 'pinocchio',
    // icon
    icon: path.join(__dirname, 'assets/icon.png'),
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
    },
    backgroundColor: '#ffffff',
  });
  // if in development mode, launch electorn app at localhost:4000 and immediately open dev tools
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:4000');
    mainWindow.webContents.openDevTools();
  } else {
    // if not in development mode, do the following...
    mainWindow.loadURL(
      url.format({
        pathname: path.resolve(__dirname, '../dist/renderer/index.html'), // whatever index.html file that is in the dist that we need to render
        protocol: 'file:',
        slashes: true,
      }),
    );
  }
  // when electron app is closed, set mainWindow to null
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}
// when electron has finished initializing, invoke createWindow to launch electron application
app.on('ready', createWindow);
// ensure that renderer processes are not restarted after every navigation
app.allowRendererProcessReuse = true;
