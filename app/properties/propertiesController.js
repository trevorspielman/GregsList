function PropertiesController() {
    var propertiesService = new PropertiesService()

    function drawProperty() {
        var propertiesArr = propertiesService.getProperties()
        var propertyTemplate = ``
        var propertyFormTemplate = `
        <div class="col-8 offset-2 d-flex justify-content-center">
        <form class="m-2" onsubmit="app.controllers.propertiesCtrl.addProperty(event)" id="property-form">
            <div class="form-row">
                <div class="col">
                    <input type="text" name="beds" placeholder="Beds" required>
                    <input type="number" step="0.5" name="baths" placeholder="Baths (i.e. 1, 1.5, 2)" required>
                    <input type="url" name="img" placeholder="Image Link">
                </div>
                <div class="col">
                    <input type="number" name="year" placeholder="Year Built">
                    <input type="number" name="price" placeholder="Price" required>
                    <input type="number" name="sqrFoot" placeholder="Square Feet" required>
                    <input type="number" step="0.1" name="lotSize" placeholder="Lot Size in Acres" required>
                </div>
            </div>
            <div class="form-row">
                <div class="col">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="familyStatus" value="0" required>
                        <label class="form-check-label" value="0">Single Family</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="familyStatus" value="1" required>
                        <label class="form-check-label">Multi-Family</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="familyStatus" value="2" required>
                        <label class="form-check-label">Apartment</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="familyStatus" value="3" required>
                        <label class="form-check-label">Townhome</label>
                    </div>
                </div>
                <div class="col">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="saleMethod" value="0" required>
                        <label class="form-check-label" value="0">For Sale</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="saleMethod" value="1" required>
                        <label class="form-check-label">For Sale By Owner</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="saleMethod" value="2" required>
                        <label class="form-check-label">Short Sale</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="saleMethod" value="3" required>
                        <label class="form-check-label">Forclosure</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="saleMethod" value="4" required>
                        <label class="form-check-label">Auction</label>
                    </div>
                </div>
            </div>
            <button class="m-2 btn-success" type="submit">Submit</button>
        </form>
    </div>
        `
        for (let i = 0; i < propertiesArr.length; i++) {
            const property = propertiesArr[i];
            propertyTemplate += `
            <div class="col-3">
            <h4>${property.familyStatus} Beds:${property.beds} Baths:${property.baths}</h4>
            <img class="listingImage" src="${property.img}" alt="">
            <p>Square Feet:${property.sqrFoot} Lot Size:${property.lotSize}</p>
            <p>Year Built: ${property.year}</p>
            <p><strong>$${property.price}</strong></p>
            <p>Sale Status: ${property.saleMethod}</p>
        </div>
            `
        }
        document.getElementById('form').innerHTML = propertyFormTemplate
        document.getElementById('listingBoard').innerHTML = propertyTemplate
    }

    this.addProperty = function addProperty(event) {
        event.preventDefault()
        var form = event.target
        var propertyObj = {
            beds: form.beds.value,
            baths: form.baths.value,
            year: form.year.value,
            sqrFoot: form.sqrFoot.value,
            lotSize: form.lotSize.value,
            familyStatus: form.familyStatus.value,
            saleMethod: form.saleMethod.value,
            img: form.img.value,
            price: form.price.value
        }
        propertiesService.addProperty(propertyObj)
        document.getElementById('property-form').reset()
        drawProperty()
    }

    this.getProperties = function getProperties(){
        propertiesService.getProperties()
        drawProperty()
    }

}