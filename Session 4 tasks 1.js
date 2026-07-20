const product ={
    1:"laptop",
    2: "phone",
    3: "Tablet"

};
function getProduct (Id){
    return new Promise ((resolve , reject ) => {
if (product [Id]){
    resolve (product[Id]);

}
else{
    reject ("product not found");

}
    });
}
getProduct(2)
.then(product => console.log(product))
.catch (error => console.log (error));
