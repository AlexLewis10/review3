A simple spellchecker as part of a review.
This project is in a very early stage, and is by no means finished. 
It is more like a mock tech test. The rest of this readme are the notes that I made as I was taking a brief.

Input String
Single word or sentence
Run through all the words
Are there any incorrectly spelt words?

Output 
Another String 
Incorrect ~ on either side of the word.

If the string is correct then just return the word

You can have a word bank that you can use an input.

Just check that it is a string

You can choose methods

INPUT "These words are spnelt correclty" 
OUTPUT "These words are ~spnelt~ ~correclty~"

| INPUT | OUTPUT | 
|-------|--------|
| "spnelt" |  ~spnelt~ |
| correclty | ~correclty~ | 
| "are"     | "are" |
| "are spnelt" | "are ~spnelt~ |
| "These words are spnelt correclty" | "These words are ~spnelt~ ~correclty~"
| 1   |  Error |

