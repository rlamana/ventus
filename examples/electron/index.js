const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');
const fs = require('fs');

let win;
let startup = () => {
    win = new BrowserWindow({
        width: 1280,
        minWidth: 1024,
        height: 720,
        minHeight: 576
    });

    win.loadURL(`file://${__dirname}/index.html`)
    //win.webContents.openDevTools()

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', startup);
app.on('window-all-closed', () => app.quit());
app.on('activate', () => {
    if (win === null) {
        startup();
    }
});
