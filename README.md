# Node.js Cluster Project

This Node.js Cluster project is designed to demonstrate the use of the cluster module to create a multiprocessor Node.js
application for better utilization of CPU cores. The project includes a simple Express application in `app.js` and a
clustering logic in `cluster.js`.

## Requirements

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.0.0 or higher)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Project Structure

- **app.js**: Contains the main Express application logic.
- **cluster.js**: Manages the creation of multiple worker processes using the cluster module.
- **package.json**: Project configuration file with dependencies and start script.

## How to Run

1. Clone the repository:

    ```bash
    git clone https://github.com/saeedNW/node.js-cluster.git
    ```

2. Navigate to the project directory:

    ```bash
    cd node.js-cluster
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the application:

    ```bash
    npm start
    ```

   This will launch the application and utilize multiple CPU cores via the cluster module.

## Load Testing with `loadtest`

To test the application's performance, you can use the `loadtest` module. Follow these steps:

1. Install `loadtest` globally:

    ```bash
    npm install -g loadtest
    ```

2. Run the load test:

    ```bash
    loadtest -c 10 -t 10 -n 100 http://localhost:3000/cluster
    ```

   This command will simulate 10 clients (-c) making requests for 10 seconds (-t) with a total of 100 requests (-n) to
   the specified endpoint. Adjust the parameters as needed for your testing requirements.