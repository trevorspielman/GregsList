function PropertiesService() {

    var properties = []
    var saleStatus = ['For Sale', 'For Sale By Owner', 'Short Sale', 'Foreclosure', 'Auction']
    var familyNumbers = ['Single Family', 'Multi-Family', 'Apartment', 'Townhome']

    function Property(familyStatus, beds, baths, sqrFoot, lotSize, year, price, saleMethod, img) {
        this.familyStatus = familyNumbers[familyStatus]
        this.beds = beds
        this.baths = baths
        this.sqrFoot = sqrFoot
        this.lotSize = lotSize
        this.year = year
        this.price = price
        this.saleMethod = saleStatus[saleMethod]
        this.img = img
    }


    this.getProperties = function getProperties() {
        return JSON.parse(JSON.stringify(properties))
    }

    this.addProperty = function addProperty(propertyObj) {
        var newProperty = new Property(propertyObj.familyStatus, propertyObj.beds, propertyObj.baths, propertyObj.sqrFoot, propertyObj.lotSize, propertyObj.year, propertyObj.price, propertyObj.saleMethod, propertyObj.img)
        properties.push(newProperty)
    }

    properties.push(new Property(0, 3, 2, 1200, 3.3, 1980, 240000, 0, 'https://hips.hearstapps.com/hbu.h-cdn.co/assets/15/21/1432311144-54eb988c272f0_-_tiny-houses-tumbelweed-0215-xln-61183729.jpg'))
    properties.push(new Property(0, 3, 2, 1200, 3.3, 1980, 240000, 0, 'https://hips.hearstapps.com/hbu.h-cdn.co/assets/15/21/1432311144-54eb988c272f0_-_tiny-houses-tumbelweed-0215-xln-61183729.jpg'))
    properties.push(new Property(0, 3, 2, 1200, 3.3, 1980, 240000, 0, 'https://hips.hearstapps.com/hbu.h-cdn.co/assets/15/21/1432311144-54eb988c272f0_-_tiny-houses-tumbelweed-0215-xln-61183729.jpg'))
    properties.push(new Property(0, 3, 2, 1200, 3.3, 1980, 240000, 0, 'https://hips.hearstapps.com/hbu.h-cdn.co/assets/15/21/1432311144-54eb988c272f0_-_tiny-houses-tumbelweed-0215-xln-61183729.jpg'))
}