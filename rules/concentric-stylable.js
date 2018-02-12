/**
 * Concentric Stylable
 */

const concentricCss = require('./concentric-css').slice();

module.exports = [
	// Stylable instructions
	[
		'states',
		'extends',
		'compose',
		'mixin',
		'from',
		'default',
		'named',
		'theme',
		'global'
	]
].concat(concentricCss);
