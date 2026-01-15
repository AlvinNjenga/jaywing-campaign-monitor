# Campaign Performance Monitor
Pull campaign performance metrics which are normalised and presented in a simple table with highlighting for a ROAS above 50.

## How to run:

Navigate to the client directory and run: `npm install`.

Navigation to the server directory and run: `npm install`.

Navigate to the root directory and run: `npm run dev`. This will spin up both the client and the server..

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

Run test with: `npm run test` in server.

## How it's made:

**Tech used:** React, Vite, TailwindCSS & Node.js, Express, Jest

### Server:
The Express server has a single endpoint which returns the campaign data it gets from the "legacy ad-server". For now this is hardcoded into a file and passed into a service in the main controller. It uses the campaign service to validate the properties on each campaign metric, following the rules in the design document, before returning the normalised campaign metric data to the client. 

### Client:

The client has a minimal UI, with a simple header, a table that presents the campaign metrics from our server. There is a loader to handle the wait and a fail state for no data.

Campaigns with a ROAS higher than 50 will be highlighted in the table with green.

## Potential additions
*(If I had longer)*

Enhanced reporting could be done with extra information for each campaign in a field such as errors, that recorded which field has invalid properties, what type and how often and could be used for further normalising.

Authorisation to avoid having the server of the project accessible by any user from the correct domain. Currently only security is CORS restriction.

Filtering: allowing the user to enter a name or ID to pull data for a certain campaign or group of campaigns.




