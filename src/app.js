const axios = require('axios')
const express = require('express')

const app=express();
app.use('/',(req,res)=>{
    axios.get(`https://www.azlyrics.com/lyrics/justinbieber/sorry.html`,{
        headers:{
            "Content-Encoding": "gzip",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Accept-Language": "en-US,en;q=0.9",
            "Cookie": "OptanonConsent=isIABGlobal=false&datestamp=Mon+Oct+26+2020+09%3A56%3A37+GMT%2B0530+(India+Standard+Time)&version=6.6.0&hosts=&landingPath=NotLandingPage&groups=C0003%3A1%2CC0004%3A1%2CC0001%3A1&AwaitingReconsent=false&geolocation=IN%3BOR; OptanonAlertBoxClosed=2020-10-26T04:26:37.766Z"
        }
    }).then(function(e){
        res.send(e.data.split('<div>')[1].split('</div>')[0])})
        .catch(function(error){
            console.log(error)
        })
});
app.listen(3000, () => {
    console.log(`Server started on port`);
});