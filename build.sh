#!/bin/sh
# Build the demo pages.
set -e

start=$(date +%s)
count=0

for source in md/*.md; do
    file=${source##*/}
    output="demos/${file%.md}.html"
    echo "Building $source -> $output"
    pandoc "$source" \
        -o "$output" \
        --template=templates/pandoc-template.html \
        --lua-filter=templates/page-title.lua \
        --standalone
    count=$((count + 1))
done

elapsed=$(($(date +%s) - start))
echo "Build complete. Built $count pages in ${elapsed}s."
