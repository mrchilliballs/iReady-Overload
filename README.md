# iReady-Breaker
iReady is awful. It's the worst education tool anyone could ever use. This code is designed to skip through iready lessons and quizzes, giving you a passing score.
Because of the way iReady works, it will have to leave one lesson segment (usually 10-30 seconds) or one quiz question, but the quiz will always result in a score of 100%.

# How to use
Simply open an iReady lesson, use ctrl + shift + i or "inspect element" to open developer tools, click on "console" and paste the code from [lesson.js](lesson.js) into the console and hit enter. Then, wait a second, click the "x" on the top right of the lesson to go the menu, and paste [external.js](external.js) in the console while on the menu.

Note that so far, it only works on math lessons and quizzes, not reading.

If you see an error saying `Uncaught (in promise) SyntaxError: Unexpected end of JSON input`, then just close the lesson and try again.
