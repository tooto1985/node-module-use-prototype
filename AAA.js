function AAA(username) {
	this.username = username;
}
AAA.prototype.showname = function() {
	return this.username;
}
module.exports = AAA;