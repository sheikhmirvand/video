const { app, BrowserWindow } = require("electron");

app.on("ready", () => {
    const mainWindow = new BrowserWindow({});
    mainWindow.loadFile("./index.html");
});
