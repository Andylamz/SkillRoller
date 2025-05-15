# SkillRoller

A simple practice tool I built to help myself stay consistent in reviewing fullstack concepts during bootcamp

## Overview

SkillRoller randomly selects one topic from a list of practice areas I am less confident with, then I spend 2 hours focused on that topic.
I use it almost every 3 days to make sure I am not avoiding anthing challenging.

I first built this tool when I had just finished learning Javascript DOM and arrays.
At the time, I did not understand what 'fetch()' or JSON data looked like, I was just looping through a simple array.
So I created a topic list manually in a JavaScript array of objects (called topicsData), like this:

```js

const topicsData = [
{topic: "React: Redux + SPA"},
{topic: "topic: "express + mongoose + JWT + API"},
{topic: "JavaScript ES6 classes"},
...
]

```

Later I realised this structure mirrors how real API responses are typically formatted (an array of objects returned from a server).
That discovery helped me bettwe understand the purpose of JSON and how to work with real data in future projects.

## Features

    - Randomly select one practice topic
    - All topics are stored in a simple array of pbjects
    - Click to draw a topic, focus for 2 hours
    - Repeat every 3 days

## Tech Stack

    - HTML
    - CSS
    - JavaScript(Vanilla)

## Future Ideas

    - Option to add or edit topics in the UI
    - Track completion history

This project reminds me that simple tools can be powerful, especially when they help to build long-term habits.
