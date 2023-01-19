# Project 2. Build a quiz app. 

This project is the second of four in which we are to hand in for the Code Institute Full Stack Diploma. In this project we were asked to: build an interactive front-end site. The site should respond to the users' actions, allowing users to actively engage with data, alter the way the site displays the information to achieve their preferred goals.

This webapp will feature a small quiz, containing 5 different questions, in the topic of Formula 1, basic facts. 

# Idea
As the skillset was insanely lacking at the start of this project, numerous youtube videos have been extremely helpfull. Up upon 24 hours before handin the idea of an API-driven highscore and Animation in pages. As the hours grew short, and task were becoming harder, this had to be dropped to actually deliver on time. 

85 % of this assignment is done with the help of James Q Quick youtuber and the video sequences 'build a quiz app' https://www.youtube.com/@JamesQQuick

# Front page

The landing page is plain simple. You're met with a single sentence, and just one CTA: start quiz. 
<a href="https://imgbb.com/"><img src="https://i.ibb.co/6nsq5wk/Screen-Shot-2023-01-19-at-7-47-00-PM.png" alt="Screen-Shot-2023-01-19-at-7-47-00-PM" border="0"></a>


<a href="https://imgbb.com/"><img src="https://i.ibb.co/pKth8fr/Screen-Shot-2023-01-19-at-7-45-27-PM.png" alt="Screen-Shot-2023-01-19-at-7-45-27-PM" border="0"></a>


Common for all pages is a centered design who allow for screensizes < 200px .

# Quiz section

As all pages share design, color template is no different here. 
Easily navigated as you only have the option to proceed. 

Made a bit responding with a progressbar following your steps through the 5 questions. As with the score meter. 
#
<a href="https://ibb.co/MSyjD3W"><img src="https://i.ibb.co/sRpDvMk/Screen-Shot-2023-01-19-at-7-47-13-PM.png" alt="Screen-Shot-2023-01-19-at-7-47-13-PM" border="0"></a>

#
The four choices are build from Paragraphs in divs, within a div. Linked to style.css within line 106-143. 
This design also includes the green/red color fill in event of correct/incorrect. Function to build is called from script.js in first 2 constants and again in getNewQuestion from line 69. 

Progressbar is added with Css styling following line 144-174. 
Progressbar follows a division rule, and therefore will adapt if additional or fewer questions would be added. (script.js line 78.)
"Question X/5 is called in questionCounter++ in line 75+76"

Score is calculated in const on script.js line 59. and share design with progressbar in style.css line 168. 

Timeout on the Questions is added in js. 110-113, Allowing the page to load, before just throwing in a new Q, and also for better UX. 

Questions are called upon, and written in line 13-56 (Script.js)

# End page

No matter what outcome your result may be, you ultimately find yourself in the end page. Here you find 3 options,
- to save your username (This will not have an effect, as whether a local, or external highscore has been added.)
- Restart the quiz, which will put you at the start of the quiz. (Note questions are thrown at you random. As the maxquestions are put at 5, you'll be able to add lots of questions, and it will random give you 5 questions to furfill the quiz.)
- Go Home. This will take you to the inspiring front page. 



## Testing. 



# Validator Testing

## HTML 
- Index.html / No errors or faults.
#
<a href="https://ibb.co/8d8d5Lv"><img src="https://i.ibb.co/gPgPTLq/Screen-Shot-2023-01-19-at-8-47-22-PM.png" alt="Screen-Shot-2023-01-19-at-8-47-22-PM" border="0"></a>
- game.html / No errors or faults.
#
<a href="https://ibb.co/3ssjynq"><img src="https://i.ibb.co/kyywgtf/Screen-Shot-2023-01-19-at-8-48-33-PM.png" alt="Screen-Shot-2023-01-19-at-8-48-33-PM" border="0"></a>
- end.html / No errors or faults.
#
<a href="https://ibb.co/jMw0pHv"><img src="https://i.ibb.co/QNHS5XF/Screen-Shot-2023-01-19-at-8-49-12-PM.png" alt="Screen-Shot-2023-01-19-at-8-49-12-PM" border="0"></a>

- style.css / No errors or faults.
#
<a href="https://ibb.co/mzMkFQd"><img src="https://i.ibb.co/s3MnJLc/Screen-Shot-2023-01-19-at-8-59-15-PM.png" alt="Screen-Shot-2023-01-19-at-8-59-15-PM" border="0"></a>