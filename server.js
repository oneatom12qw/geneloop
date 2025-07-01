
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/api/tree', (req, res) => {
  res.json({
    name: "أحمد",
    relation: "أب",
    alive: true,
    children: [
      { name: "سارة", relation: "ابنة", alive: true },
      { name: "محمد", relation: "ابن", alive: false }
    ]
  });
});

app.listen(port, () => {
  console.log(`GeneLoop MVP listening on port ${port}`);
});
