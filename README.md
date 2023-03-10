# Simple REST Api template

A very simple REST api built in Node JS + Express JS using 3-Layer architecture with a minimum Swagger documentation and api cache.

## Installation

To install the application, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/your-repo.git`
2. Navigate to the application directory: `cd your-repo`
3. Install dependencies: `npm install`

## Usage

To start the application, run `npm run dev`. Then, open a web browser and go to `http://localhost:3000` (or the URL specified in your code) to see the application in action.

## Architecture

This application uses a 3-layer architecture with the following layers:

1. **Controller layer**: This layer handles incoming requests and sends responses back to the client. It's responsible for translating the client's request into a format that can be understood by the service layer.
2. **Service layer**: This layer contains the application's business logic. It receives requests from the controller layer, processes them, and sends the results back to the controller layer.
3. **Data layer**: This layer interacts with the database or other data storage mechanisms. It receives requests from the service layer, performs the necessary database operations, and sends the results back to the service layer.

## License

Include information about the license used in the application. If no license is specified, the default assumption is that the MIT License is used.
