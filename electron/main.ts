import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as isDev from 'electron-is-dev';
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";

require('update-electron-app')()
const {ipcMain} = require('electron');

var child = require('child_process').exec;
let mainWindow: BrowserWindow | null = null;

// Deep linked url
let deeplinkingUrl: string[] | string;

// Force Single Instance Application
const gotTheLock = app.requestSingleInstanceLock()
if (gotTheLock) {
  app.on('second-instance', (e, argv) => {
    // Someone tried to run a second instance, we should focus our window.

    // Protocol handler for win32
    // argv: An array of the second instance’s (command line / deep linked) arguments
    if (process.platform == 'win32') {
      // Keep only command line / deep linked arguments
      deeplinkingUrl = argv.slice(1)
    }
    logEverywhere('app.makeSingleInstance# ' + deeplinkingUrl)

    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
} else {
  app.quit();
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1380,
    height: 800,
    minWidth: 1000,
    minHeight: 700,
    title: "GamePower Launcher (Beta)",
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: false,
      preload: path.resolve(path.join(__dirname, "preload.js"))
    }
  })

  if (isDev) {
    mainWindow.loadURL('http://localhost:3183/index.html');
  } else {
    // 'build/index.html'
    mainWindow.loadURL(`file://${__dirname}/../index.html`);
  }

  mainWindow.on('closed', () => mainWindow = null);

  // Protocol handler for win32
  if (process.platform == 'win32') {
    // Keep only command line / deep linked arguments
    deeplinkingUrl = process.argv.slice(1)
  }
  logEverywhere('createWindow# ' + deeplinkingUrl)

  // Hot Reloading
  if (isDev) {
    // 'node_modules/.bin/electronPath'
    require('electron-reload')(__dirname, {
      electron: path.join(__dirname, '..', '..', 'node_modules', '.bin', 'electron'),
      forceHardReset: true,
      hardResetMethod: 'exit'
    });
  }

  // DevTools
  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));

  if (isDev) {
    //win.webContents.openDevTools();
  }
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

if (!app.isDefaultProtocolClient('gamepower')) {
  // Define custom protocol handler. Deep linking works on packaged versions of the application!
  app.setAsDefaultProtocolClient('gamepower')
}

app.on('will-finish-launching', function() {
  // Protocol handler for osx
  app.on('open-url', function(event, url) {
    event.preventDefault()
    deeplinkingUrl = url
    logEverywhere('open-url# ' + deeplinkingUrl)
  })
})

// Event handler for asynchronous incoming messages
ipcMain.on('toMain', (event, arg) => {
    console.log("Message: ", arg)
 
    // Event emitter for sending asynchronous messages
    event.sender.send('fromMain', 'async pong')
 })

 // Event handler for launching apps
ipcMain.on('launchApp', (event, arg) => {
    console.log("Launching App:: ", arg)
 
    var executablePath = "open /Users/michaelhuntington/Desktop/NeroNet.app";
    var parameters = ["--tests"];

    child(executablePath, parameters, function(err:any, data:any) {
        console.log(err)
        console.log(data.toString());
    });
 })

 // Log both at dev console and at running node console instance
function logEverywhere(s:string) {
  console.log(s)
  if (mainWindow && mainWindow.webContents) {
    mainWindow.webContents.executeJavaScript(`console.log("${s}")`)
  }
}