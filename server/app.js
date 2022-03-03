const express = require('express');
const cors = require('cors');
const app = express();
const knex = require('./db/knex.js');

app.use(cors());
app.use(express.json());

app.get('/movies', async (req, res) => {
  try {
    const movies = await knex.select().table('movies');
    return res.json({
      movies,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: e,
    });
  }
});

app.listen(8000, () => console.log('Listening to 8000'));
