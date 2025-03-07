async function getData() {
    try {
        //const adminJSON = (await fetch("./admin.json")).json();
        //console.log(adminJSON);
        const requestURL = "http://194.87.252.234:6060/api/authentication/token";
        const requestVis = new Request(requestURL);
        const responseVis = await fetch(requestVis, {
            method: "POST",
            body: JSON.stringify({
                "username": "admin",
                "password": "megasecurepasswordforadmins"
            }),
            headers: {
                "Content-Type": "application/json"
            }
          });
        
        console.log(responseVis)
        console.log('Yes!');
    } catch (error) {
        console.log('error >> ', error.message);
    }
}

async function refreshToken() {
    try {
        //const adminJSON = (await fetch("./admin.json")).json();
        //console.log(adminJSON);
        const adminToken = "eyJhbGciOiJSUzI1NiJ9.eyJyb2xlIjoiVVNFUiIsImlhdCI6MTc0MTI4NjcyMSwiZXhwIjoxNzQxMzIyNzIxfQ.MwfjPvPCokuHEcHKtRuZRU2nRbYMnu_43EFSzem91qHH1PhePn7hYoI995mi_VxCVlJXzN8UHz_kBdW1AGhMFvK7ZqXFE9yPd94bvybzKVck1jH1Nd-321-HeFOUiF-Q4_JSLfgJWwCNvqNMXhEqSVCF0Ndio-BmtiFgzXeAbJ5mceE1vWCoNZOE8BHXXWP0tBdw44m3k6qJrZqdsSNcoO4Xkr0CvqfhoUM_BdGv5RD6eg__CMwoJ-MAtxrzQaHHJeJbS42Dhm6jPV1PyuGtaz-wI4xxCAlP-MPoN1JJ6bnu-kKXWRGYdcLbpEQMyx5po-59wVjRSUfkcIsD8reCPg";
        const requestURL = "http://194.87.252.234:6060/api/authentication/" + adminToken;
        const requestVis = new Request(requestURL);
        const responseVis = await fetch(requestVis);
        
        console.log(responseVis)
        console.log('Yes!');
    } catch (error) {
        console.log('error >> ', error.message);
    }
}

refreshToken();