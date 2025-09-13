# WEB03 – Happy Or Sad

**Objectives**

Create a simple web app with buttons that display various images or emoji's.

Use JavaScript to dynamically update the web page.

**Tools Needed**

A code editor (VS Code, VIM, Sublime, Notepad++, etc).

## HTML Page Setup

Create a working folder named `HappyOrSad`.

Navigate to the new folder. Open the folder in your IDE if you are using one.

Create a new html file named `happy-sad.html`

Add your standard HTML elements.

Change the `<title>` to show "Happy or Sad".

Change the `<h1>` to show "How are you feeling?".

<pre>
<code>
&lt;!doctype html&gt;
    &lt;html lang="en-US"&gt;
    &lt;head&gt;
        &lt;meta charset="utf-8" /&gt;
        &lt;meta name="viewport" content="width=device-width" /&gt;
        &lt;title&gt;Happy or Sad&lt;/title&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;h1&gt;How are you feeling?&lt;/h1&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code>
</pre>

## Button Setup

Create two HTML buttons.

<pre>
<code>
&lt;button&gt;
    I feel happy!
&lt;/button&gt;

&lt;button&gt;
    I feel sad.
&lt;/button&gt;

</code>
</pre>

## Results area setup

Create a `&lt;div&gt;` for your result with `id="mood"`.

<pre>
<code>
&lt;div id="mood"&gt;&lt;/div&gt;

</code>
</pre>

## Add **onclick** events to the buttons

We want each button to "do something" when we click on it.

We will have each button change the text content showing the proper emoji.

We will use `onclick=""` to provide the command that changes the text content of the results.

<pre>
<code>

&lt;button
    onclick="document.getElementById('mood').textContent='😀'"
&gt;
    I feel happy!
&lt;/button&gt;

&lt;button
    onclick="document.getElementById('mood').textContent='☹️'"
&gt;
    I feel sad.
&lt;/button&gt;

</code>
</pre>

Load your page in the browser and test it out. It should be basic, but functional.

<img src="imgs/basic.png" width="400px">

## Adding some CSS

Let's add a little style to make this page more pleasing to use.

Add a style tag in the **head**.

<pre><code>
&lt;style&gt;
      body {
        margin: 0 auto;
        width: 600px;
        font-size: 18px;
        text-align: center;
      }
      button {
        font-size: 1.1em;
        padding: 10px 20px;
        margin-bottom: 25px;
        cursor: pointer;
      }
      button:hover {
        background-color: #f4f413e1;
        cursor: pointer;
      }
      #mood {
        font-size: 10em;
      }
    &lt;/style&gt;
</code></pre>

<img src="imgs/styled.png" width="400px">

## Going further

What other emotions would you add?

How would you use animated gifs or images instead of the emoji?

Which would cuter: puppies or kittens?
