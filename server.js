const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build/static'));

// app.use('/img', express.static(__dirname + '/build/static/media'));
// app.use('/css', express.static(__dirname + '/build/static/css'));
// app.use('/js', express.static(__dirname + '/build/static/js'));

app.listen(port, () => {
  console.log(`Server spinning up on port ${port}`);
});