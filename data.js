fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(data=>data.json())
    .then(bitcoin_data=>{
        const bitcoin_price=bitcoin_data.bpi.USD.rate;
        const bitcoin_Element=document.getElementById('bitcoinElement');
        bitcoin_Element.innerHTML=bitcoin_price + " USD";
    })