function AutosService() {

    //Private
    var cars = []
    var conditions = ['New', 'Like New', 'Fair', 'Junker']


    function Car(make, year, model, price, condition, img) {
        this.make = make
        this.model = model
        this.year = year
        this.price = price
        this.condition = conditions[condition]
        this.img = img
    }

    //Public
    this.getManufacturers = function getManufacturers(cb) {
        $.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json')
            .then(cb)
    }

    this.getModels = function getModels(query, cb){
        $.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/'+query+'?format=json')
            .then(cb)
    }


    this.getCars = function getCars() {
        return JSON.parse(JSON.stringify(cars))
    }

    this.addCar = function addCar(carObj) {
        var newCar = new Car(carObj.make, carObj.model, carObj.year, carObj.price, carObj.condition, carObj.img)
        cars.push(newCar)
    }

    this.removeCar = function removeCar(carObj) {

    }

    cars.push(new Car('Chevy', 1998, 'Blazer', 7800, 2, 'https://media.ed.edmunds-media.com/chevrolet/blazer/1998/oem/1998_chevrolet_blazer_4dr-suv_lt_fq_oem_1_500.jpg'))
    cars.push(new Car('Pontiac', 2001, 'Firebird', 7200, 1, "http://images.gtcarlot.com/pictures/50004306.jpg"))
    cars.push(new Car('Ford', 1990, 'Probe', 200, 4, "https://farm8.static.flickr.com/7555/15730606300_3bf485543c_b.jpg"))
    cars.push(new Car('Toyota', 1992, 'MR2', 18000, 0, "https://www.lamborghini.com/sites/it-en/files/DAM/it/models_gateway/blocks/special.png"))



}