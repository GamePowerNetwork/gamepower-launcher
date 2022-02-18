const { contextBridge, ipcRenderer } = require('electron')
const customTitlebar = require('custom-electron-titlebar')

contextBridge.exposeInMainWorld(
    "api", {
        send: (channel:any, data:any) => {
            // whitelist channels
            let validChannels = ["toMain"];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        receive: (channel:any, func:Function) => {
            let validChannels = ["fromMain"];
            if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender` 
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        },
        launch: (data:any) => {
            ipcRenderer.send("launchApp", data);
        }
    }
);

window.addEventListener('DOMContentLoaded', () => {
  new customTitlebar.Titlebar({ titleHorizontalAlignment: "left"})

  const replaceText = (selector:any, text:any) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})