/** Import the 'cluster' module for managing a multiprocessor Node.js application */
const cluster = require("cluster");
/** Import the 'os' module for interacting with the operating system */
const os = require("os");

/** Check if the current process is the master process */
if (cluster.isMaster) {
    /** If it's the master process, loop through the available CPU cores */
    for (let index = 0; index < os.cpus().length; index++) {
        /** Fork a new worker process for each CPU core */
        cluster.fork();
    }

    /** Listen for the 'exit' event, which is emitted when a worker process exits */
    cluster.on("exit", (worker, code, signal) => {
        /** Fork a new worker process when an existing one exits */
        cluster.fork();
    });
} else {
    /** If it's not the master process, require and run the application logic from the 'app' module */
    require("./app");
}
