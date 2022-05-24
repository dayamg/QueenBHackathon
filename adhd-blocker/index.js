import express from 'express'; 
import bodyParser from 'body-parser';
//import scrape from './scraper';
import cors from 'cors';

const app = express()
const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.post('/api/v1/wordMatch', (req, res) => {
    //scrape(req.body.url)
    res.json({
        count: 3,
      });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})