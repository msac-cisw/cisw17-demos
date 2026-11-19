# CISW 17 Demo Files

These are classroom demos.

## [🚀 View on the Web](https://msac-cisw.github.io/cisw17-demos/)


## Markdown

Create the markdown tutorial in the `md` folder.

Add the filename to `build.sh`.

Run `build.sh`.

The html file will be in the `demos` folder.

Edit the `pages.json` file and add a new entry:

```json
{
  "title": "Your Page Title",
  "description": "Brief description of what this page does",
  "filename": "your-page.html",
  "status": "active"
}
```

### Configuration Options

- **title**: The display name for your page
- **description**: A brief description shown in the course index
- **filename**: The HTML file to link to (leave empty for coming soon pages)
- **status**: Either "active" or "coming-soon"

## Example

```json
{
  "pages": [
    {
      "title": "My New Demo",
      "description": "An awesome interactive demo",
      "filename": "demo.html",
      "status": "active"
    }
  ]
}
```

**Pandoc required to build files.**
