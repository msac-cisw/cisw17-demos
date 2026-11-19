# WEB03 – Happy Or Sad

**Objectives**

Create a simple web app with buttons that display various images or emoji's.

Use JavaScript to dynamically update the web page.

**Tools Needed**

You will need a [code editor](code-editors.html) and a web browser.

## HTML Page Setup

Create a working folder named `HappyOrSad`.

Navigate to the new folder. Open the folder in your IDE if you are using one.

Create a [basic html files](web00-basic-html.html) named `happy-sad.html`

Change the **title** to show "Happy or Sad".

Change the **h1** to show "How are you feeling?".

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

Create a **div** for your result with `id="mood"`.

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

<img src="../imgs/web03-basic.png" width="400px" alt="The unstyled page shows the How are you feeling heading, two small buttons, and a small smiling face.">

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

<img src="../imgs/web03-styled.png" width="400px" alt="The styled page centers the heading and two mood buttons, with a large smiling face below them.">


<details style="margin: 10px; padding: 10px;">
<summary style="cursor: pointer;">Check your work. View the project code.</summary>
<pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Happy or Sad&lt;/title&gt;
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
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;How are you feeling?&lt;/h1&gt;
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

    &lt;div id="mood"&gt;&lt;/div&gt;
    
&lt;/body&gt;
&lt;/html&gt;

</code></pre></details>


## Conclusion

You built a page whose buttons change the face on screen. The click handlers update a single element with JavaScript, which lets the page respond as soon as someone chooses a mood.

## Next steps

How would you add another emotion? What would you add?

How would you show an animated GIF in place of an emoji?

Which would be cuter: puppies or kittens? Try it!
