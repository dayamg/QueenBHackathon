async function fetchData() {
    const url = "http://localhost:3000/api/v1/wordMatch"; // our server api
    const bodyData = "https://wikipedia.com"; // the requested page
    console.log("hello from log");
    const res = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        // headers: {
        //   'Content-Type': 'application/json'
        //   // 'Content-Type': 'application/x-www-form-urlencoded',
        // },
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: bodyData // body data type must match "Content-Type" header
      });
    const record = await res.json();
    // console.log(record);
    // console.log(record.count);
    var result = "";
    if(record.count > 0) {
        result = "Be cerful! There are " + record.count + " distructions!";
    } else {
        result = "The page is fine."
    }
    document.getElementById("result").innerHTML = result;
    // document.getElementById("areaName").innerHTML=record.count;
    // document.getElementById("date").innerHTML="hello";
    // document.getElementById("areaName").innerHTML=record.data[0].areaName;
    // document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
    // document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
}
fetchData();