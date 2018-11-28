#!/bin/bash

output=$(stylelint valid.css)

if [[ $? -ne 0 ]]; then
	echo "valid.css doesn't passed checking."
	echo "$output"
	exit 1
fi

if [[ $output == *'deprecat'* ]]; then
	echo 'Contains deprecated rule.'
	echo "$output"
	exit 1
fi

output=$(stylelint invalid.css)

if [[ $? -eq 0 ]]; then
	echo 'invalid.css passed checking.'
	echo "$output"
	exit 1
fi

if [[ $output == *'deprecat'* ]]; then
	echo 'Contains deprecated rule.'
	echo "$output"
	exit 1
fi
