const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/datos', (req, res) => {
  res.json({ mensaje: "Hola desde Render!" });
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
