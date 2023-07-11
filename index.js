const { app, BrowserWindow } = require("electron");

// start app
app.on("ready", () => {
    const mainWindow = new BrowserWindow({});
    mainWindow.loadFile("./index.html");
});
