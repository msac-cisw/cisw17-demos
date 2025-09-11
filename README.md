# Pages Index

A modern, responsive index page that dynamically loads page listings from a JSON configuration file.

## Adding New Pages

To add a new page, simply edit the `pages.json` file and add a new entry:

```json
{
  "title": "Your Page Title",
  "description": "Brief description of what this page does",
  "filename": "your-page.html",
  "icon": "🎨",
  "status": "active"
}
```

### Configuration Options

- **title**: The display name for your page
- **description**: A brief description shown on the card
- **filename**: The HTML file to link to (leave empty for coming soon pages)
- **icon**: An emoji or icon to display
- **status**: Either "active" or "coming-soon"

### Layout Behavior

- **3 or fewer pages**: Displays in a responsive card grid
- **4+ pages**: Automatically switches to a compact list view

## Example

```json
{
  "pages": [
    {
      "title": "My New Demo",
      "description": "An awesome interactive demo",
      "filename": "demo.html",
      "icon": "✨",
      "status": "active"
    }
  ]
}
```

Just save the `pages.json` file and refresh the index page - no HTML editing required!