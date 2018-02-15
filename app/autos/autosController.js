function AutosController() {
    var autosService = new AutosService()
    var addCarElem = document.getElementById('addCar')
    var carFormElem = document.getElementById('car-form')
    var manufacElem = document.getElementById('manufac-form')
    var modelElem = document.getElementById('model-form')
    var thirdFormElem = document.getElementById('third-form-section')
    var finalFormElem = document.getElementById('final-form-section')
    var carPriceElem = document.getElementById('car-price')
    var submitButtonElem = document.getElementById('submit-button')

    addCarElem.addEventListener("click", function (event) {
        console.log("am I reaching here?")
        addCarElem.classList.add('hidden')
        carFormElem.classList.remove('hidden')
        manufacElem.classList.remove('hidden')
        autosService.getManufacturers(drawManufac)
    })

    manufacElem.addEventListener('change', function (event) {
        modelElem.classList.remove('hidden')
        var query = event.target.value
        autosService.getModels(query, drawModels)
    })
    modelElem.addEventListener('change', function (event) {
        thirdFormElem.classList.remove('hidden')
        finalFormElem.classList.remove('hidden')
    })

    carPriceElem.addEventListener('keydown', function (event) {
        submitButtonElem.classList.remove('hidden')

    })

    function drawManufac(manufacRes) {
        var manufacTemplate = ``
        for (let i = 0; i < manufacRes.Results.length; i++) {
            const manufacturer = manufacRes.Results[i];
            manufacTemplate += `
            <option>${manufacturer.Mfr_CommonName}</option>
            `
        }
        manufacElem.innerHTML = manufacTemplate
    }

    function drawModels(modelsRes) {
        var modelsTemplate = ``
        for (let i = 0; i < modelsRes.Results.length; i++) {
            const model = modelsRes.Results[i];
            modelsTemplate += `
            <option>${model.Model_Name}</option>
            `
        }
        modelElem.innerHTML = modelsTemplate
    }


    function drawCar() {
        var carArr = autosService.getCars()
        var carFormTemplate = `
    <div class="col-6 d-flex justify-content-center">
    <button class="m-2 btn-danger" type="submit" id="addCar">Add a Car?</button>
    <form class="m-2 hidden" onsubmit="app.controllers.autosCtrl.addCar(event)" id="car-form">
        <div class="form-row">
            <label for="manufacturer-select">Manufacturer</label>
            <select multiple class="form-control hidden transition" id="manufac-form" required>
            </select>
            <label for="manufacturer-select">Model</label>
            <select multiple class="form-control hidden transition" id="model-form" required>
            </select>
        </div>
        <div class="form-row hidden transition" id="third-form-section">
            <input type="number" name="year" placeholder="Year" id="model-year" required>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="condition" value="0" required>
                <label class="form-check-label" value="0">New</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="condition" value="1" required>
                <label class="form-check-label">Like New</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="condition" value="2" required>
                <label class="form-check-label">Fair</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="condition" value="3" required>
                <label class="form-check-label">Junker</label>
            </div>
        </div>
        <div class="form-row hidden transition" id="final-form-section">
            <input type="url" name="img" placeholder="Image Link" required>
            <input id="car-price" type="number" name="price" placeholder="Price" required>
            <button class="m-2 btn-success hidden transition" type="submit" id="submit-button">Submit</button>
        </div>
        </div>
        </form>
             `
        var carTemplate = ``
        for (let i = 0; i < carArr.length; i++) {
            const car = carArr[i];
            car.condition = car.condition ? car.condition : "No Condition Provided"
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

        autosService.addCar(carObj)
        document.getElementById('car-form').reset()
        drawCar()
    }



    this.getCars = function getCars() {
        autosService.getCars()
        drawCar()
    }

    //drawCar()
}