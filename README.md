## International Vehicle Registration Code

With this module you can search for country codes for vehicles, or vice versa.
You can also simply use this [JSON file](https://raw.githubusercontent.com/JFKoder/International-vehicle-registration-code/main/CarCountryCodes.json)

### How to install
    npm i international-vehicle-registration-code
### How to Use

    const IVRC = require('international-vehicle-registration-code')
    const ivrc_instance = new IVRC()
    // findByName('Aus') => [{"Code":"A","Country":"Austria"},{"Code":"AUS","Country":"Australia"}
    ivrc_instance.findByName('CountryName')
    // findByCode('Aus') => [{"Code":"AUS","Country":"Australia"}]
    ivrc_instance.findByCode('CountryCode')


The origin of the data comes from:
https://en.wikipedia.org/wiki/International_vehicle_registration_code#Current_codes

