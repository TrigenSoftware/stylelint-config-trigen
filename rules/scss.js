/**
 * SCSS config
 */

module.exports = {
	'plugins': [
		'stylelint-scss'
	],
	'rules': {
		'at-rule-no-unknown':                                  [true, { ignoreAtRules: [
			'each',
			'else',
			'extend',
			'for',
			'function',
			'if',
			'include',
			'mixin',
			'return',
			'while'
		] }],
		'scss/at-else-closing-brace-newline-after':             'always-last-in-chain',
		'scss/at-else-closing-brace-space-after':               'always-intermediate',
		'scss/at-else-empty-line-before':                       'never',
		'scss/at-extend-no-missing-placeholder':                true,
		'scss/at-function-pattern':                             '^[a-z]+(-[a-z0-9]+)*$',
		'scss/at-if-closing-brace-newline-after':               'always-last-in-chain',
		'scss/at-if-closing-brace-space-after':                 'always-intermediate',
		'scss/at-import-no-partial-leading-underscore':         true,
		'scss/at-mixin-argumentless-call-parentheses':          'never',
		'scss/at-mixin-pattern':                                '^[a-z]+(-[a-z0-9]+)*$',
		'scss/dollar-variable-colon-newline-after':             'always-multi-line',
		'scss/dollar-variable-colon-space-after':               'always-single-line',
		'scss/dollar-variable-colon-space-before':              'never',
		'scss/dollar-variable-no-missing-interpolation':        true,
		'scss/dollar-variable-pattern':                         '^[a-z]+(-[a-z0-9]+)*$',
		'scss/percent-placeholder-pattern':                     '^[a-z]+(-[a-z0-9]+)*$',
		'scss/double-slash-comment-whitespace-inside':          'always',
		'scss/declaration-nested-properties':                   'never',
		'scss/declaration-nested-properties-no-divided-groups': true,
		'scss/dimension-no-non-numeric-values':                 true,
		'scss/function-quote-no-quoted-strings-inside':         true,
		'scss/function-unquote-no-unquoted-strings-inside':     true,
		'scss/operator-no-newline-after':                       true,
		'scss/operator-no-newline-before':                      true,
		'scss/operator-no-unspaced':                            true,
		'scss/partial-no-import':                               true,
		'scss/selector-no-redundant-nesting-selector':          true,
		'scss/no-duplicate-dollar-variables':                   true
	}
};
