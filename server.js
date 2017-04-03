const express = require('express');
const path = require('path');
const app = new express();
const bodyParser = require('body-parser');


const apiRoutes = require('./routes');
const db = require('./db');


// Static Routes
app.use('/vendor', express.static(path.join(__dirname, '/node_modules/')));
app.use('/dist', express.static(path.join(__dirname, '/dist/')));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/api', apiRoutes);

const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`server listening on port ${port}`));

db.seed().then(() => console.log(`db seeded`));
