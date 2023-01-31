var list = require("./CarCountryCodes.json")
function regcode() {
  this.findByName = function(find) {
	var collect = []
	list.forEach(elem => {
		if(elem.Country.toLowerCase().includes(find.toLowerCase())){
			collect.push(elem)
		}
	});
    return collect;
  }
  this.findByCode = function(find) {
	var collect = []
	list.forEach(elem => {
		if(elem.Code.includes(find.toUpperCase())){
			collect.push(elem)
		}
	});
    return collect;
  }
}

module.exports = regcode;