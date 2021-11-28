import express from 'express';
const app = express()
const PORT : string|number = process.env.PORT || 5000;

app.use(express.static('build'));


app.listen(PORT,() => console.log(`hosting @${PORT}`));
export {}