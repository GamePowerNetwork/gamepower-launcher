const { contextBridge, ipcRenderer } = require('electron')

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