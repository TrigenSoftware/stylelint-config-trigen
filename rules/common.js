/**
 * Common config
 */

module.exports = {
	'plugins': [
		'stylelint-declaration-strict-value',
		'stylelint-order'
	],
	'rules': {
		// Plugins
		'scale-unlimited/declaration-strict-value':          [[
			'font-family',
			'/color/',
			'z-index'
		]],
		'order/declaration-block-order':                     [
			'dollar-variables',
			'custom-properties',
			'declarations',
			'rules',
			{ type: 'at-rule', name: 'media' }
		],
		'order/declaration-block-property-groups-structure': [require('./concentric-css').map(properties => ({
			emptyLineBefore: 'never',
			properties
		})), { unspecified: 'bottom' }],

		// Colors
		'color-hex-case':                                    'lower',
		'color-named':                                       'always-where-possible',
		'color-no-invalid-hex':                              true,

		// Font
		'font-family-name-quotes':                           'always-where-recommended',
		'font-family-no-duplicate-names':                    true,
		'font-weight-notation':                              'named-where-possible',

		// Function
		'function-calc-no-unspaced-operator':                true,
		'function-comma-newline-after':                      'never-multi-line',
		'function-comma-newline-before':                     'never-multi-line',
		'function-comma-space-after':                        'always',
		'function-comma-space-before':                       'never',
		'function-linear-gradient-no-nonstandard-direction': true,
		'function-max-empty-lines':                          0,
		'function-name-case':                                'lower',
		'function-parentheses-newline-inside':               'always-multi-line',
		'function-parentheses-space-inside':                 'never-single-line',
		'function-url-data-uris':                            'always',
		'function-url-quotes':                              ['always', { except: ['empty'] }],
		'function-whitespace-after':                         'always',

		// Number
		'number-leading-zero':                               'never',
		'number-max-precision':                              3,
		'number-no-trailing-zeros':                          true,

		// String
		'string-no-newline':                                 true,
		'string-quotes':                                     'single',

		// Length
		'length-zero-no-unit':                               true,

		// Time
		'time-min-milliseconds':                             100,

		// Unit 
		'unit-case':                                         'lower',
		'unit-no-unknown':                                   true,

		// Value
		// 'value-keyword-case':                                'lower',
		'value-no-vendor-prefix':                            true,

		// Value list
		'value-list-comma-newline-after':                    'always-multi-line',
		'value-list-comma-newline-before':                   'never-multi-line',
		'value-list-comma-space-after':                      'always-single-line',
		'value-list-comma-space-before':                     'never',
		'value-list-max-empty-lines':                        0,

		// Shorthand property
		'shorthand-property-no-redundant-values':            true,

		// Property
		'property-case':                                     'lower',
		'property-no-unknown':                               true,
		'property-no-vendor-prefix':                         true,

		// Keyframe declaration
		'keyframe-declaration-no-important':                 true,

		// Declaration
		'declaration-bang-space-after':                      'never',
		'declaration-bang-space-before':                     'always',
		'declaration-colon-newline-after':                   'always-multi-line',
		'declaration-colon-space-after':                     'always-single-line',
		'declaration-colon-space-before':                    'never',
		'declaration-empty-line-before':                     'never',

		// Declaration block
		'declaration-block-no-duplicate-properties':         [true, { ignore: ['consecutive-duplicates-with-different-values'] }],
		'declaration-block-no-redundant-longhand-properties': true,
		'declaration-block-no-shorthand-property-overrides':  true,
		'declaration-block-semicolon-newline-after':          'always',
		'declaration-block-semicolon-newline-before':         'never-multi-line',
		'declaration-block-semicolon-space-after':            'always-single-line',
		'declaration-block-semicolon-space-before':           'never',
		'declaration-block-single-line-max-declarations':     1,
		'declaration-block-trailing-semicolon':               'always',

		// Block
		'block-closing-brace-empty-line-before':             'never',
		'block-closing-brace-newline-after':                 'always',
		'block-closing-brace-newline-before':                'always',
		'block-closing-brace-space-after':                   'always-single-line',
		'block-closing-brace-space-before':                  'always-single-line',
		'block-no-empty':                                    true,
		'block-opening-brace-newline-after':                 'always',
		'block-opening-brace-newline-before':                'never-single-line',
		'block-opening-brace-space-after':                   'always-single-line',
		'block-opening-brace-space-before':                  'always',

		// Selector
		'selector-attribute-brackets-space-inside':          'never',
		'selector-attribute-operator-space-after':           'never',
		'selector-attribute-operator-space-before':          'never',
		'selector-attribute-quotes':                         'never',
		'selector-class-pattern':                           ['[a-z0-9_-]+', { resolveNestedSelectors: true }],
		'selector-combinator-space-after':                   'always',
		'selector-combinator-space-before':                  'always',
		'selector-descendant-combinator-no-non-space':       true,
		'selector-max-compound-selectors':                   4,
		'selector-no-universal':                             true,
		'selector-no-vendor-prefix':                         true,
		'selector-pseudo-class-case':                        'lower',
		'selector-pseudo-class-no-unknown':                  true,
		'selector-pseudo-class-parentheses-space-inside':    'never',
		'selector-pseudo-element-case':                      'lower',
		'selector-pseudo-element-colon-notation':            'double',
		'selector-pseudo-element-no-unknown':                true,
		'selector-type-case':                                'lower',
		'selector-type-no-unknown':                          true,
		'selector-max-empty-lines':                          0,

		// Selector list
		'selector-list-comma-newline-after':                 'never-multi-line',
		'selector-list-comma-newline-before':                'never-multi-line',
		'selector-list-comma-space-after':                   'always',
		'selector-list-comma-space-before':                  'never',

		// Rule
		'rule-empty-line-before':                           ['always', { except: ['after-single-line-comment'] }],

		// Media feature
		'media-feature-colon-space-after':                   'always',
		'media-feature-colon-space-before':                  'never',
		'media-feature-name-case':                           'lower',
		'media-feature-name-no-unknown':                     true,
		'media-feature-name-no-vendor-prefix':               true,
		'media-feature-parentheses-space-inside':            'never',
		'media-feature-range-operator-space-after':          'always',
		'media-feature-range-operator-space-before':         'always',

		// Media query list
		'media-query-list-comma-newline-after':              'never-multi-line',
		'media-query-list-comma-newline-before':             'never-multi-line',
		'media-query-list-comma-space-after':                'always',
		'media-query-list-comma-space-before':               'never',

		// At-rule
		'at-rule-empty-line-before':                        ['always', { except: ['blockless-after-same-name-blockless', 'first-nested'], ignore: ['after-comment'] }],
		'at-rule-name-case':                                 'lower',
		'at-rule-name-newline-after':                        'always-multi-line',
		'at-rule-name-space-after':                          'always',
		'at-rule-no-unknown':                                true,
		'at-rule-no-vendor-prefix':                          true,
		'at-rule-semicolon-newline-after':                   'always',

		// Comment
		'comment-empty-line-before':                        ['always', { except: ['first-nested'], ignore: ['after-comment', 'stylelint-commands'] }],
		'comment-no-empty':                                  true,
		'comment-whitespace-inside':                         'always',

		// General / Sheet
		'indentation':                                      ['tab', { indentInsideParens: 'twice', indentClosingBrace: false }],
		'max-empty-lines':                                   1,
		// 'no-browser-hacks':                                  true, // deprecated
		'no-descending-specificity':                         true,
		'no-duplicate-selectors':                            true,
		'no-empty-source':                                   true,
		'no-eol-whitespace':                                 true,
		'no-extra-semicolons':                               true,
		// 'no-indistinguishable-colors':                       true, // deprecated
		'no-invalid-double-slash-comments':                  true,
		'no-missing-end-of-source-newline':                  true
		// 'no-unsupported-browser-features':                  [true, { browsers: '> 1%, last 2 versions, iOS > 7, Android > 4.4, not OperaMini all' }] // deprecated
	}
};
