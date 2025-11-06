# WEB06 – Simple CSS Animations

**Objectives**

Create simple CSS animations.

**Tools Needed**

You will need a [code editor](code-editors.html) and a web browser.

## What are CSS animations?

CSS animations let you animate HTML elements using CSS with no JavaScript required. They will commonly create effect like text that slides in, fades, or bounces.

1. CSS Transitions

Smoothly animates between two states when a property changes.

Define a transition for an element and trigger the change.

**Example: Fade in on Hover**

```css
.text {
  opacity: 0.3;
  transition: opacity 0.6s ease;
}
.text:hover {
  opacity: 1;
}
```

2. CSS Keyframe Animations

Creates for complex, timeline-based animations like slide, spin, or bounce.

Define a keyframe block and apply it with an animation property.

**Example: Slide & Fade In**

```css
@keyframes slideInFade {
  0%   { transform: translateX(-50px); opacity: 0; }
  100% { transform: translateX(0);     opacity: 1; }
}
.text {
  animation: slideInFade 1s ease-out forwards;
}
```

## Step 1 – Page Setup

Create a working folder named **simple-animations**.

Create a [basic html file](web00-basic-html.html) named **simple-animations.html** in your working folder.

Create a blank **styles.css** file in your working folder.

Update the **title** of simple-animations.html to be **Simple Animations**.

Update the **h1** to be **Simple Animations**.

Add two paragraphs of example text.

<pre>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</pre>

Add basic CSS styling.

```css
body {
    width: 600px;
    margin: 0 auto;
}
h1 {
    text-align: center;
}
```

Open your page in the browser.

## Step 2 – Slide the H1 in from the left

We will use a keyframe that starts at 0% with the h1 moved -100% to the left. Then, at 100%, the text will be at the 0 position.

```css
@keyframes slideIn {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}
```

Next we will style a class **slideIn** with the animation paramters.

```css
.slideIn {
    animation: slideIn 1s ease-in-out;
}
```

Add the class to your h1: `<h1 class="slideIn">`.

<style>
@keyframes slideIn {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}
.slideIn {
    animation: slideIn 1s ease-in-out;
}
.example {
    background-color: lightgoldenrodyellow;
    padding: 5px 0px 5px 15px;
}
</style>

**Example (reload the page to view again):**

<div class="example">
<h3 class="slideIn">Simple Animations</h1>
</div>

## Step 3 – Fade the paragraphs in

We will follow the same steps as above to create keframes and a class. This time we will change the opacity from 0 to 1. This will fade in the paragraphs.

```css
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.fadeIn {
    animation: fadeIn 3s ease-in-out;
}
```

Add the class to your paragraphs: `<p class="fadeIn">`.

**Example (reload the page to view again):**

<style>
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.fadeIn {
    animation: fadeIn 3s ease-in-out;
}
</style>

<div class="example">
<p class="fadeIn">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quas
      cupiditate. Ut aliquam, excepturi architecto voluptates, modi officiis
      dolores quaerat dolorem sint dignissimos accusamus temporibus dolor
      voluptatem assumenda repudiandae eos?
</p>
</div>

<br>


<details>
<summary>Click here to see the final page.</summary>
<img src="../imgs/web06-final.gif" width="400px" alt="final">
</details>
