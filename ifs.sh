#!/bin/zsh

# create dummy input lines (think output of say, ls)
read -d '' INPUT_LINES <<EOF
/path/to/first file
/path/to/second file
/path/to/third file
EOF


# without IFS
ecko "${ARROWR[6]} without IFS " 161 112
for item in $(echo "$INPUT_LINES"); do
	echo "$item"
done

echo


# with IFS
#ecko " with IFS=\$'\\\n' " 161 112
ecko " ${ARROWR[6]} with IFS=\$'\\\n'" 112 161
IFS=$'\n'
for item in $(echo "$INPUT_LINES"); do
	echo "$item"
done

# reset back to default value
unset IFS
