/*

Option 1: do what you are doing now ( copy and paste)

Option 2: make a function to help you simplify your code

let bottleX;
let bottleY;

let bottleX;
let bottleY;

let bottleX;
let bottleY;

let bottleX;
let bottleY;

function moveBottle(x,y){
    // write the code to move the bottle from top to bottom 

    // Check if bottle has fallen out of the canvas
        if (bottleY > height) {
            // Restart the bottle position
            bottleX = random(50, width -50);
            bottleY = random(-500,-50);
        }

}

Option 3: use arrays to help store the positions
let allBottleX = [];
let allBottleY = [0, 0, 0];


// repeat this procces 100 times ( create bottle random x positions)
for (......){
    allBottleX.push(random(0,255));
}


// used to draw bottles and implement the logic
Ex: 0 - 2
for (.......){

    rect(allBottleX[i],allBottleY[i], 50,50);
}


*/





//X & Y Coords 
let levelsXPos = 235;
let level1YPos = 300;
let level2YPos = 450;
let level3YPos = 600;

//Switch levels
let One = false;
let Two = false;
let Three = false;
let clickbutton = true;

//Preload Images 
let fish;
let bottle;
let scuba;
let bg;
let bg_fail;
let scubaImg;


//Adinsonn Variables
let myxPos = 100;
let myYpos = 100;

let bottleX;
let bottleY;
let fishX;
let fishY;



let trashScore = 0;
let lives = 3;



function preload(){
    fish = loadImage("images/fish.png");// changed to fish it was in bg
    bottle = loadImage("images/bottle.png");
    scuba = loadImage("images/scuba.png");
    bg = loadImage("images/bg.png");
    bgFail = loadImage("images/bg_fail.jpg");
    scubaImg = loadImage("images/scuba.png");
}

function setup() {
    createCanvas(500, 800);
    noStroke();
    rectMode(CENTER);

    background(135,206,235);
    image(bg, 0, 0, 500, 800);
    rect(235, 80, 274, 133);

    textSize(30);
    stroke(1);
    text("Scuba Heritage", 235, 100, 100, 100);

    // Rectangle to Click Level 1
    fill(178, 154, 131);
    rect(levelsXPos, level1YPos, 274, 105); // changed indentation as there was indents after rect
    textSize(30);
    stroke(1);
    fill(0,0,0);
    textAlign(CENTER);
    text("Easy", 250, 335, 120, 100);

    // Rectangle to Click Level 2
    fill(178, 154, 131);
    rect(levelsXPos, level2YPos, 274, 105);
    textSize(30);
    stroke(1);
    fill(0,0,0);
    textAlign(CENTER);
    text("Medium", 250, 487, 120, 100);

    // Rectangle to Click Level 3
    fill(178, 154, 131);
    rect(levelsXPos, level3YPos, 274, 105);
    textSize(30);
    stroke(1);
    fill(0,0,0);
    textAlign(CENTER);
    text("Hard", 250, 635, 120, 100);

}


function draw() {  // changed indentation so everything is following after the if one == true statement

    if(trashScore>=10){
        //Completion Screen
        background(135,206,235);
        image(bg, 0, 0, 500, 800);
        //Scuba Img
        image(scubaImg, 235, 10, 50, 50);
        textSize(22);
        stroke(1);
        text("Ocean Crew", 345, 120, 300, 100);

        //Seperation line from Top
        fill(255)
        rect(100, 100, 800, 10);

//Box for Level Completed
        fill(255);
        rect(250, 200, 300, 100);

//Text within Level Completed Box
        fill(0);
        textSize(30);
        stroke(1);
        text("Level Completed!!", 280, 240, 300, 100);

        //Box for Congratulations
        fill(255);
        rect(250, 350, 300, 100);

        //Text within Congratulations Box
        fill(0);
        textSize(30);
        stroke(1);
        text("Congratulations!", 280, 340, 300, 50);
        textSize(25);
        text("You saved the Ocean", 275, 380, 300, 30);
        One == false;
    } else if ( lives == 0){
        background(135,206,235);
        image(bgFail, 0, 0, 500, 800);

        image(scubaImg, 230, 10, 50, 50);
        textSize(22);
        stroke(1);
        text("Ocean Crew", 260, 120, 300, 100);

        //Seperation line from Top
        fill(255)
        rect(100, 100, 800, 10);

//Box for Level Fail
        fill(255);
        rect(250, 200, 300, 100);

//Text within Level Failed Box
        fill(0);
        textSize(30);
        stroke(1);
        text("Level Failed :(", 260, 240, 300, 100);

        //Box for Fail
        fill(255);
        rect(250, 350, 300, 100);

        //Text within Fail Box
        fill(0);
        textSize(30);
        stroke(1);
        text("Oh No", 250, 340, 300, 50);
        textSize(25);
        text("The Ocean is polluted!", 255, 380, 300, 30);
    }

    else if(One == true) {
        console.log("Inside level1");
        background(135,206,235)
        image(bg, 0, 0, 500, 800);
        textSize(20);
        text("Ocean Crew", 60, 30);
        text("Score: " + trashScore, 45, 60);
        text("Lives: " + lives, 45, 40);

        // Draw the bottle
        bottleY += 3;
        image(bottle, bottleX, bottleY);

        // Check if bottle has fallen out of the canvas
        if (bottleY > height) {
            // Restart the bottle position
            bottleX = random(50, width -50);
            bottleY = random(-500,-50);
        }

        // Check for collision with the scuba diver
        if (bottleX > myxPos - 20 && bottleX < myxPos + 80 && bottleY > myYpos - 20 && bottleY < myYpos + 80) {
            trashScore++;
            // Restart the bottle position after collection
            bottleX = random(50, width -50);
            bottleY = random(-500, -50);
            bottleX = random(50, width -50);
            bottleY = random(-500, -50);
        }    
        // Draw the fish
        fishY += 3;
        image(fish, fishX, fishY);


        if(fishX > myxPos-20 && fishX < myxPos + 80 && fishY > myYpos -20 && fishY < myYpos + 80){
            lives--;
            fishX = random(50,width-50);
            fishY = random(-500,-50)
            
        }
        
        if(trashScore >= 7){
            //Completion Screen
            background(135,206,235);
            image(bg, 0, 0, 500, 800);
            //Scuba Img
            image(scubaImg, 235, 10, 50, 50);
            textSize(22);
            stroke(1);
            text("Ocean Crew", 255, 120, 300, 100);

            //Seperation line from Top
            fill(255)
            rect(100, 100, 800, 10);

            //Box for Level Completed
            fill(255);
            rect(250, 200, 300, 100);

            //Text within Level Completed Box
            fill(0);
            textSize(30);
            stroke(1);
            text("Level Completed!!", 255, 240, 300, 100);

            //Box for Congratulations
            fill(255);
            rect(250, 350, 300, 100);

            //Text within Congratulations Box
            fill(0);
            textSize(30);
            stroke(1);
            text("Congratulations!", 255, 340, 300, 50);
            textSize(25);
            text("You saved the Ocean", 255, 380, 300, 30);
        }
        
    
        // Check if fish has fallen out of the canvas
        if (fishY > height) {
            // Restart the fish position
            fishX = random(50,width-50);
            fishY = random(-500,-50);
        }

        //Draw scuba Image 
        image(scuba, myxPos, myYpos, 50, 50);

        //Movement keys
        if (keyIsDown(LEFT_ARROW)) {
            myxPos -= 10;
        } 
    
        if (keyIsDown(RIGHT_ARROW)) {
            myxPos += 10;
        } 
    
        if (keyIsDown(UP_ARROW)) {
            myYpos -= 10;
        } 
    
        if (keyIsDown(DOWN_ARROW)) {
            myYpos += 10;
            }
        }
}


function mouseClicked() {
    if (mouseX > levelsXPos - 137 && mouseX < levelsXPos + 137 &&  mouseY > level1YPos - 52.5 && mouseY < level1YPos + 52.5 &&  clickbutton == true) {
        console.log("Level 1 clicked");
        background(135,206,235);
        One = true;
        clickbutton == false; 
    } 

    fishX = random(50, width - 50);   
    fishY = random(-500, -50);
    bottleX = random(50, width - 50); 
    bottleY = random(-500, -50); 

    if (mouseX > levelsXPos - 137 && mouseX < levelsXPos + 137 && mouseY > level2YPos - 52.5 && mouseY < level2YPos + 52.5 && clickbutton == true) {
        console.log("Level 2 clicked");
        background(135,206,235);
        Two = true;
    }   
    
    if (mouseX > levelsXPos - 137 && mouseX < levelsXPos + 137 &&  mouseY > level3YPos - 52.5 && mouseY < level3YPos + 52.5 && clickbutton == true) {
        console.log("Level 3 clicked");
        background(135,206,235);
        Three = true;
    }
}


//Create a function that spawns a bottle at random X position from top of the screen (y = 0 or less than). 
// Since draw() runs infinite amount of times, if you call the function, it'll probably spawn a bunch