# Full Stack Lab Experiments (Q1–Q12)

This repository contains twelve independent practical projects. Open the required `Qn` folder in VS Code and follow its README.

## Practical map
- Q1–Q7: HTML, CSS and JavaScript exercises retained from the supplied source folder.
- Q8: Express product API with a client-rendered frontend.
- Q9: Express RESTful product CRUD API (in-memory data).
- Q10: Express RESTful CRUD API backed by MongoDB/Mongoose.
- Q11: E-commerce demo with products, cart, simulated checkout, orders and seller panel.
- Q12: Personal portfolio built with React and Vite.

Do not upload `node_modules` or real `.env` secrets. Run `npm install` inside each Node project. Q10 and Q11 require MongoDB. Q11's payment is a classroom simulation, not a real payment gateway.

## Suggested run order
- Q8: `cd Q8 && npm install && npm start`
- Q9: `cd Q9 && npm install && npm start`
- Q10: start MongoDB, then `cd Q10/backend && npm install && npm start`
- Q11: start MongoDB, then `cd Q11/backend && npm install && npm start`
- Q12: `cd Q12 && npm install && npm run dev`
