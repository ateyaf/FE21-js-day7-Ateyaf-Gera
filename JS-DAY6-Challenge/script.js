let carTypes = JSON.parse(cars);
console.table(carTypes[0])

for (let val of carTypes) {
    document.getElementById("newCreation").innerHTML += `
             <div class="col-lg-3 col-12 col-md-6 mb-5">
                <div class="card" style="width: 18rem;">
                    <img src="${val.carImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${val.carName}</h5>
                        <p class="card-text">Production year: ${val.carProduction}</p>
                        <a href="#">Price: ${val.carPrice}€</a>
                        <div class="d-flex justify-content-end">
                            
                            <button type="button" class="bigC btn btn-primary" data-bs-toggle="modal" data-bs-target="#${val.carName}">Click for more!</button>
                        </div>
                    </div>
                </div>
            </div>
         `
}


var button = document.getElementsByClassName("bigC");

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        bigCards(i)
    })
};


function bigCards(num) {
    var extra =
        `<div class="modal fade" id="${carTypes[num].carName}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${carTypes[num].carName}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img src="${carTypes[num].carImage}" class="card-img-top" alt="...">
                    <p class="card-text">Production year: ${carTypes[num].carProduction}</p>
                        <a href="#" class=" btn btn-primary">Price: ${carTypes[num].carPrice}€</a>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>`
    document.getElementById("extraCard").innerHTML = extra;

    console.table(carTypes[num])
}