

const myPromise = new Promise((resolved, rejected) => {
    const user = null;
    if (!user) {
        rejected("Something wend wront ")
    } else {
        setTimeout(() => {
            resolved("Succesfully got the data")
        }, 1000)
    }
});


myPromise
    .then(  res => console.log("Got data from then", res))
    .catch( err => console.log("Got Error from rejected", err))




