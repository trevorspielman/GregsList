function AutosController() {
    var autosService = new AutosService()
    var addCarElem = document.getElementById('addCar')
    var carFormElem = document.getElementById('car-form')
    var thirdFormElem = document.getElementById('third-form-section')
    var finalFormElem = document.getElementById('final-form-section')
    var carPriceElem = document.getElementById('car-price')
    var submitButtonElem = document.getElementById('submit-button')
    //region old form info

    // this.getManufacturers = function getManufacturers(){
    //     autosService.getManufacturers(drawManufac)
    //     autosService.getModels(drawModels)
    // }
    // autosService.getManufacturers(drawManufac)
    // autosService.getModels(drawModels)

    // // addCarElem.addEventListener("click", function (event) {
    // //     console.log("am I reaching here?")
    // //     addCarElem.classList.add('hidden')
    // //     carFormElem.classList.remove('hidden')
    // //     manufacElem.classList.remove('hidden')
    // //     autosService.getManufacturers(drawManufac)
    // //  })

    // // manufacElem.addEventListener('change', function (event) {
    // //     //  modelElem.classList.remove('hidden')
    // //     var query = event.target.value
    // //     autosService.getModels(query, drawModels)
    // // })
    // // modelElem.addEventListener('change', function (event) {
    // //     //  thirdFormElem.classList.remove('hidden')
    // //     //  finalFormElem.classList.remove('hidden')
    // // })

    // // carPriceElem.addEventListener('keydown', function (event) {
    // //     //  submitButtonElem.classList.remove('hidden')

    // // })

    // function drawManufac(manufacRes) {
    //     var manufacElem = document.getElementById('manufac-form')
    //     var manufacTemplate = ``
    //     for (let i = 0; i < manufacRes.Results.length; i++) {
    //         const manufacturer = manufacRes.Results[i];
    //         // if(manufacturer == manufacRes.results[i+1]){
    //         //     continue
    //         // }else{
    //         manufacTemplate += `
    //             <option>${manufacturer.Mfr_CommonName}</option>
    //             `
    //         // }
    //     }
    //     manufacElem.innerHTML = manufacTemplate
    // }

    // function drawModels(modelsRes) {
    //     var modelElem = document.getElementById('model-form')
    //     var modelsTemplate = ``
    //     for (let i = 0; i < modelsRes.Results.length; i++) {
    //         const model = modelsRes.Results[i];
    //         modelsTemplate += `
    //         <option>${model.Model_Name}</option>
    //         `
    //     }
    //     modelElem.innerHTML = modelsTemplate
    // }

    //endregion

    function getCars() {
        autosService.getCars(drawCar)
    }

    function drawCar(cars) {
        //var cars = autosService.getCars(carsArr)
        //region carForm
        var carFormTemplate = `
        <div class="col-6 d-flex justify-content-center">
        <form class="m-2" onsubmit="app.controllers.autosCtrl.addCar(event)" id="car-form">
        <div class="form-row">
                <div class="col">
                    <input type="text" name="make" placeholder="Make" required>
                    <input type="text" name="model" placeholder="Model" required>
                    <input type="url" name="img" placeholder="Image Link">
                </div>
                <div class="col">
                    <input type="number" name="year" placeholder="Year Built">
                    <input type="number" name="price" placeholder="Price" required>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="condition" value="0" required>
                        <label class="form-check-label" value="0">New</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="condition" value="1" required>
                        <label class="form-check-label" value="1">Like New</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="condition" value="2" required>
                        <label class="form-check-label" value="2">Fair</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="condition" value="3" required>
                        <label class="form-check-label" value="3">Junker</label>
                    </div>
                </div>
            </div>
            <button class="m-2 btn-success" type="submit">Submit</button>
        </form>
    </div>
             `
        //endregion
        var carTemplate = ``
        for (let i = 0; i < cars.length; i++) {
            const car = cars[i];
            car.condition == car.condition ? car.condition : "No Condition Provided"
            carTemplate += `
            <div class="col-3">
            <h4>${car.year} ${car.make} ${car.model}</h4>
            <img class="listingImage" src="${car.img}" alt="">
            <p>${car.condition}</p>
            <p><strong>$${car.price}</strong></p>
        </div>
            `
        }
        document.getElementById('form').innerHTML = carFormTemplate
        document.getElementById('listingBoard').innerHTML = carTemplate
    }

    this.addCar = function addCar(event) {
        event.preventDefault()
        var form = event.target
        var carObj = {
            make: form.make.value,
            model: form.model.value,
            year: form.year.value,
            price: form.price.value,
            img: form.img.value,
            condition: form.condition.value
        }

        autosService.addCar(carObj, drawCar)
        document.getElementById('car-form').reset()
        getCars()
    }



    this.getCars = function getCars() {
        autosService.getCars(drawCar)
    }

    getCars()
}