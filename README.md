# Project FlashCard Api 🔡

## Database

I'm using Mongodb to develop flashcard system API.
Using Docker to containerize.

## Route API

The routes created in the application are as follows:

**_*GET :*_**

- .../ => index <br/>
- .../flashcards => list every cards <br/>
- .../flashcards/id => the id must be passed as a parameter in the URL

**_*POST:*_**

- .../flashcards => send a JSON object in the body :

```{ javascript}
{ world, translation, descripition }
```

**_*DELETE:*_**

- .../flashcards/id => The card that will be deleted must be passed as a parameter too
