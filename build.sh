#!/bin/sh
# Build the demo pages

# List of markdown files to build (all .md files in md/ directory)
md_files=($(ls md/*.md | sed 's|md/||'))

# Initialize counters and timing
START=$(date +%s%N)
COUNT=0

# Build each markdown file using pandoc template
for file in "${md_files[@]}"; do
    echo "Building $file -> demos/${file%.md}.html"
    pandoc "md/$file" \
        -o "demos/${file%.md}.html" \
        --template="templates/pandoc-template.html" \
        --standalone
    ((COUNT++))
done

# Calculate duration and display summary
END=$(date +%s%N)
DURATION_MS=$(( (END - START) / 1000000 ))

# Format duration display
if [ $DURATION_MS -lt 1000 ]; then
    echo "Build complete! Built $COUNT pages in ${DURATION_MS}ms"
else
    DURATION_S=$((DURATION_MS / 1000))
    echo "Build complete! Built $COUNT pages in ${DURATION_S}s"
fi

