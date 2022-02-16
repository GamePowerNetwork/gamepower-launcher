import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as isDev from 'electron-is-dev';
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";
const {ipcMain} = require('electron');

var child = require('child_process').exec;
let win: BrowserWindow | null = null;

function createWindow() {
  win = new BrowserWindow({
    width: 1380,
    height: 800,
    minWidth: 1000,
    minHeight: 700,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
      preload: path.resolve(path.join(__dirname, "preload.js"))
    }
  })

  if (isDev) {
    win.loadURL('http://localhost:3183/index.html');
  } else {
    // 'build/index.html'
    win.loadURL(`file://${__dirname}/../index.html`);
  }

  win.on('closed', () => win = null);

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
  if (win === null) {
    createWindow();
  }
});

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