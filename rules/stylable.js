/**
 * Stylable config
 */

const [stylableInstructions] = require('./concentric-stylable');

module.exports = {
	'plugins': [
		'stylelint-csstree-validator',
		'stylelint-order'
	],
	'rules': {
		'csstree/validator':                {
			ignore: stylableInstructions.map(_ => `-st-${_}`)
		},
		'order/properties-order':           [require('./concentric-stylable').map(properties => ({
			emptyLineBefore: 'never',
			properties
		})), { unspecified: 'bottom' }],
		'selector-pseudo-class-case':         null,
		'selector-pseudo-class-no-unknown':   null,
		'selector-pseudo-element-case':       null,
		'selector-pseudo-element-no-unknown': null,
		'selector-type-case':                 null,
		'no-duplicate-selectors':             null
	}
};
