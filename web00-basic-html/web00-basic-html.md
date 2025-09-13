# WEB00 – A Basic HTML Page

**Objectives**

Create a basic HTML page.

**Tools Needed**

A code editor and a web browser.

Refer to the [code editors page](../code-editors.html) for more information.

## HTML Page Setup

Create a new html file named `index.html` or the name of your project.

Add the standard HTML elements.

Change the **title** and the **h1**.

<pre>
<code>
&lt;!doctype html&gt;
    &lt;html lang="en-US"&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8" /&gt;
        &lt;meta name="viewport" content="width=device-width" /&gt;
        &lt;title&gt;My Basic Webpage&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;My Basic Webpage&lt;/h1&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code>
</pre>

## Document Structure

- **`<!DOCTYPE html>`** - Declares the document type and HTML version
- **`<html>`** - Root element that wraps all content on the page
- **`<head>`** - Contains metadata not displayed on the page (title, links to CSS, etc.)
- **`<body>`** - Contains all visible content

## Text Elements

- **`<h1>` to `<h6>`** - Headings in decreasing order of importance
- **`<p>`** - Paragraphs of text
- **`<span>`** - Inline text container for styling specific words/phrases
- **`<div>`** - Block-level container for grouping content

## Viewport Meta Tag

The `<meta name="viewport" content="width=device-width" />` line is crucial for responsive web design:

- **What it does:** Tells the browser how to control the page's dimensions and scaling on different devices
- **Why it's important:** Without it, mobile browsers assume your page is designed for desktop and show a tiny, hard-to-read version
- **The result:** Your page will be sized appropriately for each device (mobile, tablet, desktop)
- **The breakdown:** `name="viewport"` specifies viewport configuration, `content="width=device-width"` sets the viewport width to match the device's actual screen width

## Linking to a stylesheet

Create a link to an external stylesheet (e.g. styles.css). use the name of your stylesheet.

Add this line to the head:

<pre>
<code>
&lt;link rel="stylesheet" href="styles.css"&gt;
</code>
</pre>

## Linking to a JS file

Add a link to an external JS file (e.g. script.js) in the head. Use the name of your script.

The *defer* statement will load the file *after* the page loads.

<pre>
<code>
&lt;script src="script.js" defer&gt;&lt;/script&gt;
</code>
</pre>

## Final Basic Template

<pre>
<code>
&lt;!doctype html&gt;
    &lt;html lang="en-US"&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8" /&gt;
        &lt;meta name="viewport" content="width=device-width" /&gt;
        &lt;link rel="stylesheet" href="styles.css"&gt;
        &lt;script src="script.js" defer&gt;&lt;/script&gt;
        &lt;title&gt;My Basic Webpage&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;My Basic Webpage&lt;/h1&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code>
</pre>