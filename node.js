const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.static('.'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

//cerere get pentru preluarea datelor din formular
app.get('submit', (req, res) => {
  const name = req.query.name;
  const email = req.query.email;
  const message = req.query.message;

  res.send('Datele au fost primite cu succes');
});

// Încărcăm datele dintr-un fișier JSON
app.get('formData.json', (req, res) => {
    fs.readFile('formData.json', 'utf8', (err, data) => {
      if (err) {
        res.status(500).send('Internal Server Error');
      } else {
        res.json(JSON.parse(data));
      }
    });
});

//Pagina Erori 404
app.use((req, res) => {
    res.status(404).render('404');
});

//Pornim serverul
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
