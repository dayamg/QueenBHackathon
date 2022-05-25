import express from 'express';
import bodyParser from 'body-parser';
import { Scraper, Root, DownloadContent, OpenLinks, CollectContent } from 'nodejs-web-scraper';
import { writeFile } from 'fs';
import puppeteer from 'puppeteer';
import cors from 'cors';


const app = express()
const port = 3000;
 app.use(cors());

// const url = 'https://en.wikipedia.org/wiki/Attention_deficit_hyperactivity_disorder';

async function scrape(url) {
    console.log(url);
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();
    await page.goto(url);
    // const browser = await puppeteer.launch({headless : false}); //browser initiate
    // const page = await browser.newPage();  // opening a new blank page
   // await page.goto('https://en.wikipedia.org/wiki/2019%E2%80%9320_coronavirus_pandemic_by_country_and_territory', {waitUntil : 'domcontentloaded'}) // navigate to url and wait until page loads completely
    const ext = await page.$eval('*', (el)=> el.innerText);
    //const result = ext.indexOf(x => x === 'Attention').length;
    // console.log(ext.indexOf('attention').length);
    await browser.close();
}

//scrape()
   // if(req.body.url==="")


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.post('/api/v1/wordMatch', (req, res) => {
    scrape(req.body.url)
    res.json({
        count: 200,
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
