$('.project').click(function(){
 var title = $(this).find('h3').text();
 $('#modal-container .firstp').text(projectIntro[$(this).find('input').val()]);
 $('#modal-container .secondp').text(projectDetail[$(this).find('input').val()]);
 $('#modal-container h2').text("<    " + title + "    />");

 if (projectLinks[$(this).find('input').val()].length === 0){
   $('.linkp').text("Contact me for code");
   $(".linkp").attr("href", "mailto:msorbaro@gmail.com")
   $('.linkpp').css('display', 'none');
 }
 else if (projectLinks[$(this).find('input').val()].length === 2){
   var client = "See the Client code here";
   $(".linkp").attr("href", projectLinks[$(this).find('input').val()][0])
   var api = "See the API code here"
   $(".linkpp").attr("href", projectLinks[$(this).find('input').val()][1])
   $('.linkp').text(client);
   $('.linkpp').css('display', 'block');
   $('.linkpp').text(api);
 }
 else {
   $('.linkp').text("See the Code here");
   $(".linkp").attr("href", projectLinks[$(this).find('input').val()] )
   $('.linkpp').css('display', 'none');
 }



 if (projectImages[$(this).find('input').val()].length === 0){
   console.log("0 images");
   $('.secondi').css('display', 'none');
   $('.firsti').css('display', 'none');

 }
 else if (projectImages[$(this).find('input').val()].length === 1){
   console.log("1 images");
   $('.firsti').attr('src', projectImages[$(this).find('input').val()][0]);
   $('.firsti').css('height', '300px');
   $('.firsti').css('width', 'auto');
   $('.secondi').css('display', 'none');
   $('.firsti').css('display', 'inline');


 }
 else {
   console.log(projectImages[$(this).find('input').val()][0]);
   $('.firsti').attr('src', projectImages[$(this).find('input').val()][0]);
   $('.firsti').css('height', '200px');
   $('.firsti').css('width', 'auto');
   $('.secondi').attr('src', projectImages[$(this).find('input').val()][1]);
   $('.secondi').css('height', '200px');
   $('.secondi').css('width', 'auto');
   $('.secondi').css('display', 'inline');
   $('.firsti').css('display', 'inline');
 }
 $('#modal-container').removeAttr('class').addClass("two");
 $('body').addClass('modal-active');

})

$('#modal-container').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});




var projectIntro = {
  "atnow": "To connect Dartmouth Students looking to make a little money with peers who needed small favors done, I worked on a team and created a web application that would allow students to post and respond to small job listings. This is created with React and Redux and the front end is deployed to surge while the back end used Mongo and is deployed with Heroku. ",
  "gem" : "Created a mobile app for Android and IOS using React Native and Expo that consisted of two econ games. This app helps the first year students in Global Economic Market (GEM) at Tuck Business School by reinforcing basic economics concepts through an easily accessible quiz style app. ",
  "rex": "Proved to the company REX Real estate that it was possible to virtually unlock a house and tour it without a real estate agent using a smartphone. Coded an iPhone app in Swift using XCode and used a Smart Lock  to unlock the house and then displayed house specific information.",
  "chess" :"I created a chess AI that can play chess against a human player using python. The Chess package was used as starter code. I implemented both the minimax algorithm and alpha beta pruning and found that alpha beta creates much more successful moves. I also researched opening books and had the AI use them before starting the complex algorithms.",
  "rmp" : "In playing with robot programming I coded simulations in python. The first uses a probabilistic roadmap to have a robot arm with many kinks bend around objects to get to a goal location. The second was a program that created a path simulation for a car driving around obstacles using rapidly exploring random tree (RRT) path planning.",
  "tse" : "I created my own tiny search engine using a crawler, indexer, and query engine. This search engine was able to go through web pages on the Dartmouth server and find key terms using AND and OR statements with different words. This program was written in C. ",
  "sudoku" : "I wrote a program that uses binary constraints to solve a sudoku board. I solved sudoku boards with both a GSAT and a walk SAT algorithm and had a class that consisted of all of this information. This code was written in python.",
  "constraint" : "I applied the constraint satisfaction challenge to three problems and tackled them by using a back tracking algorithm. The first problem was a map coloring challenge, the second is a circuit board piece fitting challenge, and the third is matching student to Teachers Assistants to fill all sections depending on time availabilities.",
  "pebble" : "Created a game in C with two other people that uses a pebble watch to help the players go on a scavenger hunt. Each player has a pebble watch and uses it to enter the code to join a team. Once they are on a team, they can scavenge around campus and find clues and input those codes on their watch to get hints for the next location. ",
  "huffman" : "Created a program in java using the Huffman encoding method that could compress a normal text file and write the output into bits and then read in the file with the bits into texts again to decompress it. ",
  "pos" : "Used Hidden Markov Models and the Viterbi algorithm to be able to tag parts of speech of a user inputted sentence. Wrote this program in java and needed to both train the model and use the resulting graph to find the parts of speech.",
  "web" : "I created this website, morgansorbaro.com completely from scratch with my own HTML, CSS and Javascript knowledge. I designed the website myself using figma and inspirations from Codepen.io. "
}

var projectDetail = {
  "atnow": "In short, a user would create an account using their Dartmouth email. Each time someone applies to a job post, the person who posted it will get an email alerting them. Eventually when that user selects someone for their job, those two will be CCed on an email confirming the match (Left). Since this was a small team of four, I had many specific roles. First, I worked with axios calls to determine the user currently logged in, and edited the permissions so only a user who created a post can edit or delete it, and only someone who did not create a post can apply. Similarly, I created the Your Posts page which shows all the posts you have applied to or created. I also created the Responses schema which was used to determine if someone applied to a post. I then was able to allow someone who responded to a post to take back their application as well as create small algorithms to sort the posts by date created, date expired, and number of people who have already replied.",

  "gem" :"The first game (Left) allows the user to choose different economy types for a randomly selected country and quizzes the user about that economy. For example, if Closed Economy Opening to Trade is selected, questions about that economy will be asked on the following pages. After the answers have been submitted, the correct answers and graph animations are shown. The second game (Right) is a rocket that simulates the speed of the economy, and the user has to pull the lever to bring the economy to a safe speed. When this game is in monetary setting, the user will increase or decrease interest rates to achieve a safe speed and if it is in fiscal setting, the user increases and decreases government spending. Because the economy is unpredictable, with a table of probabilities even the right move can make the economy do the wrong thing. After three wrong moves, the user loses. As one of two developers, I worked extensively on every part of this app. ",

  "rex": "This app proved to REX Real Estate that two things were possible. First, a smart lock could be programmed to unlock their houses. Second, information about each house can be formatted and displayed using beacons to detect what room a user is in. Both these points  furthered REXs belief that a real estate agent is unnecessary. I specifically worked on three features within our team of three developers. The first was creating classes and data structures to store information relevant to each home. This was used to display key information about the house and its features (Left). I also worked with the phones GPS location to find houses nearby the user could also be interested in touring. If the user did not allow the app to use their location, a search bar asking for a zip code would appear instead. Lastly, I worked on the dynamic button that acted as a menu (Right). I worked on the functionality of each menu item but especially taking a photo, contacting agent and room info.",

  "chess" : "In the minimax algorithm, I kept track of the each move in a minimax_node class which also stored the value of that move which was calculated by a simple utility function. This function takes the board and checks for how many pieces are on the board. I add the pieces on the AI's side and subtract the pieces on it's opponent's side because I want the AI to choose the maximum value because that means it pieces with high values on the board. I also tried this with iterative deepening which took a depth as a parameter and ran minimax up to that depth. The alpha beta pruning class is very similar to the minimax class. However, the difference is that it also takes alpha and beta as values. To find these values, I must compare the previous values to the current value of the node. The same list organizing and utility heuristic function are used as with the minimax algorithm. This allowed the AI to run at higher depths much faster since less nodes are being explored.",

  "rmp" : "For the robot arm, I used a method that would return information about the dimensions and coordinates of the arm as well as a method that created the probabilistic roadmap. This calculated a graph for all the potential angles of the arm and how to get the arm to the most functional location. I then used this information in a breadth first search. To make this code work with my BFS, I needed to make a robot arm problem class that would have the methods and variables needed for the search. Lastly, using simple python graphics I drew the shortest path the arm needed to take to get to the goal location (Left). The car driving with obstacles creates a map with the RRT algorithm.  The graph is calculated by choosing a random configuration and finding the nearest vertex which  generates new configurations from that spot. Each of the returning new configurations is added to the graph. This is also then sent in a BFS and the RRT graph and shortest path is displayed (Right).",

  "tse" : "The crawler receives a input URL and then looks through the web page and gathers the other links that are on the page. The crawler continues to go through the list of links on that page and gathers all the links and repeats this cycle up to a given depth. Each link and its depth is stored in a directory as the crawler goes. The indexer then looks through each of these files and parses the HTML in order to count the occurrences of each word found in the document. It then stores the word and its occurrence in the document in a data structure which outputs the information to a file. The last part, the query engine, receives the user input for the queries and checks the index to see the results matching the query. It ranks the list of results by frequency of occurrences in each word and the use of AND or OR operators. It then displays the result to the user. ",

  "sudoku" : "The GSAT method loops through all potential assignments and first calculates a random value and then does one of two things depending on the value. It can either choose a random variable and switch the random variable, or calculates scores for each variable and choose the best one. Scores are calculated by looping through all the constraints and seeing how many the variable will satisfied if it is switched. I store all the largest scores in a dictionary. The walk SAT algorithm is a bit less random than the GSAT algorithm and loops a lot less, making it more efficient. The walk Sat method looks at whole clauses and calculates scores within the clause instead of overall. Because there is less looping in the walk SAT method, it has a faster runtime and is much more efficient. At the end of the program I print the filled in sudoku board as shown above.",

  "constraint" : "In the map problem, Australia is colored so each country is a color but cannot be touching a country assigned the same color. The constraint satisfaction backtracking algorithm uses the inference technique and checks to see if the current path will cause an issue in the future, and if so, returns out of that branch. By using this method, I was able to quickly color the map. In the circuit board problem the constraints are harder to match because I had to account for different sized shapes. However, with the same algorithm used at first this is possible and is able to lay a bunch of pieces together as if solving a puzzle. Lastly, I laid out the problem in the same way to match constraints of time sections with people’s availabilities. By changing the constraints to make sure there is one TA in each section, I was able to solve to find a way to have even sections and account for students being able to indicate if they dislike each other.",

  "pebble" : "There was also a team leader who was on their computer and could see where each team member was through the GPS coordinates of their teammates pebble. The only way that each team member could coordinate with each other was through the team leader who could send individual members messages. Both the pebble and the client (team leader) communicated with the server. I was in charge of creating the client and having the team leader send messages to the server with information that needed to be sent to a specific person. The client also received all the clues and completed quests that had been collected throughout the game. The dashboard that the client saw showed all this information as well as the team standings that showed each team and their current scores.",
  "huffman" : "To compress and decompress files, I used hash maps to calculate words and frequencies, a priority queue to order the frequencies, and then made the priority queue into a binary tree where each leaf node was a letter and its frequency. When traversing the tree to get to each letter, the left side of the tree corresponded to 0 and the right side to 1. This created a string by then end of the traversal, and the string corresponds to a bit sequence which is written out into the compressed file. The same methods were used to decompress the file but in reverse.",
  "pos" : "I trained the model with files that had sentences with the parts of speech already tagged. I computed both the frequency that a transition occurs and frequency that a word is a particular part of speech and placed all this information into a graph. When a sentence was inputted by the user, I used the Viterbi algorithm and the model graph created to calculate the score for each word and compute the probabilities of each word being a specific part of speech.",
  "web" : "To actually code this website I used atom and a simple python server while in development. I decided to use jquery instead of react so I could continue to use github as my page host. I had a lot of fun coding this website and learned a lot about CSS transitions to get a lot of the animations to work. "
}

var projectImages = {
  "atnow": ["./images/specifics/atnow1.gif", "./images/specifics/atnow2.gif"],
  "gem" : ["./images/specifics/gem1.png", ".//images/specifics/gem2.png"],
  "rex": ["./images/specifics/rex2.png", "./images/specifics/rex1.png"],
  "chess": ["./images/specifics/chess1.png"],
  "rmp" : ["./images/specifics/rmp1.png", "./images/specifics/rmp2.png"],
  "tse" : [],
  "sudoku" : ["./images/specifics/sudoku1.png"],
  "constraint" : [],
  "pebble" : ["./images/specifics/pebble1.png"],
  "huffman" : ["./images/specifics/huffman1.png"],
  "pos" : ["./images/specifics/hmm1.png"],
  "web" : ["./images/specifics/web1.png"]
}

var projectLinks = {
  "atnow": ["https://github.com/dartmouth-cs52-18S/project-client-now", "https://github.com/dartmouth-cs52-18S/project-api-now"],
  "gem" : "https://github.com/dali-lab/18s-gem",
  "rex": "https://github.com/dali-lab/rex",
  "chess": "https://github.com/msorbaro/chessAI",
  "rmp" : "https://github.com/msorbaro/robotPlanning",
  "tse" : "",
  "sudoku" : "https://github.com/msorbaro/sudoku ",
  "constraint" : "https://github.com/msorbaro/csp ",
  "pebble" : "",
  "huffman" : "",
  "pos" : "",
  "web" : "https://github.com/msorbaro/msorbaro.github.io"
}
