// Organize a complex HTTP server using Express
const express = require('express');

const app = express();
const port = 1245;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
