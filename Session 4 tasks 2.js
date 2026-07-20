function calculateShipping(weight) {
    return new Promise((resolve, reject) => {
        if (weight >0) {
            resole(`shipping cost:$[weight * 5]`);
        } else {
            reject("Invalid weight");
        }
    });
}
calculateShipping(10)
.then(cost => console.log(cost))
.catch(error => console.error(error));