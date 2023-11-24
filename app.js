/** import express module */
const express = require("express");
/** create application instance */
const app = express();
/** import cluster module */
const cluster = require("cluster");

/** start application on port 3000 */
app.listen(3000, () => {
    console.log("server ready on : http://localhost:3000");
});

/** create a simple route to test cluster worker */
app.get("/cluster", (req, res) => {
    /**
     * define a variable to save the sum process result
     * @type {number}
     */
    let sum = 0;
    
    /** loop from 0 to 1e9 */
    for (let index = 0; index < 1e9; index++) {
        /** sum up the numbers */
        sum += index
    }

    cluster.worker.kill()
    res.send(`the end request on process ID[${process.pid}]`)
});

