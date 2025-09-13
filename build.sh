#!/bin/sh
# Build the demo pages

# List of markdown files to build
md_files=(
    "web00-basic-html"
    "web03-happy-sad"
    "web04-links"
    "code-editors"
)

# Build each markdown file using pandoc template
for file in "${md_files[@]}"; do
    echo "Building $file.md -> demos/$file.html"
    pandoc "md/$file.md" \
        -o "demos/$file.html" \
        --template="templates/pandoc-template.html" \
        --standalone
done

echo "Build complete!"

