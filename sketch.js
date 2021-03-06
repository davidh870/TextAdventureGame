
// Variables ---------------------------------------------
let font;
let state = 0;
let typed = "";

let money = false; // Checks if you brought money from the safe
let lotteryTicket = false; // Checks if you bought lottery ticket


// Blood rectange variables
let rectBloodX;
let rectBloodY
let rectBloodWidth;
let rectBloodHeight;

// Images Variables
let whiteRoomImg;
let pillImg;
let tvImg;
let roomDoorImg;
let dresserImg;
let pocketknifeImg;
let gunImg;
let moneyImg;
let safeImg;
let gasolineStationImg;
let lotteryTicketImg;
let cigarImg;
let lighterImg;
let registerImg;
let bloodShotImg;
let winnerImg;

// Positions of text
let textPosX;  
let textPosY;

// Story Text
let storyText = [/*0*/'You are in a white room. There is nothing but a table across the room.',  
/*1*/'You walk to the table and you see a red pill and a blue pill with a note that says “Choose one pill wisely as it will determine your destiny”.',
/*2*/'You wake up and check for any mail. You see that you are getting an eviction notice. You are late on all your bills and you become desperate for any source of income.  You walk to the living room and sit down with the remote on your hand.',
/*3*/'You turn on the tv and start watching “Baby Driver”. You become so desperate for money that maybe robbing a bank doesn’t sound like a bad plan when executed perfectly but a bank would require a team.  You look towards your room.',
/*4*/'You walk to your room and start looking for things to use to rob a bank. You remember and head towards a dresser.', 
/*5*/'You open the dresser and you see a pocket knife.', /*6*/'You grab a pocket knife and start digging even deeper hoping that you might find something useful. Until you remembered that under your bed you have a safe with a weapon inside. You slowly start walking towards the safe as you are thinking how real this is getting.  You lean towards the safe.',
/*7*/'You see the gun in the safe and some money.', 
/*8*/'You grab the things in the safe and start heading to your car. You are finally sitting in your car and think about this again.',
/*9*/'You go back to bedroom and take a nap and pretend you never thought of this situation again.',
/*10*/'You drive to a gasoline station an hour away from home that way you won’t get caught as easy. You park at the gasoline station and walk towards the gasoline station door.',
/*11*/'You open the door and walk in instantly greeted by the cashier. You start roaming the store nervously debating if you should proceed the robbery. You walk up to the cashier and see....',
/*12*/'You buy a lottery ticket.',
/*13*/'You buy cigarettes',
/*14*/'You buy a lighter',
/*15*/'You look at the cash register and then the cashier nervously. The cashier asks you if you are looking for something. You reply saying ....',
/*16*/'You did not bring any money',
/*17*/'You drive back home with empty pockets and feel like a failure. You go to bed and sleep your failures away ....',
/*18*/'You are finally home with empty pockets and feel like a failure. You then remembered you bought a lottery ticket. Impatiently the lottery winners won’t be announced for three more hours. All the driving and nervousness got you tired. ',
/*19*/'You wake up and see that in a few minutes the winner of the lottery ticket is going to be announced. You anxiously turn on the tv and tune in the channel where they announce the winner. You got excited for a second but then realized that winning is very slim and lost all hope.\n\nIt is finally time! The announcer draws each number one by one. Announcer finished drawing all numbers. You quickly pull out your lottery ticket and start matching each number slowly. Your lottery ticket matched what the announcer drawn. You reassure your lottery ticket again since there is no chance of winning. YOU FREAKING WON!!',
/*20*/'You pull out your gun and aim at the cashier like a mad man. The cashier shaking like a blender starts pulling out the money slowly trying to buy time. You tell him to hurry up. You look back to see if anyone was in the store.',
/*21*/'BOOM! You are dead. The cashier shot you.',
/*22*/ 'You take some money'
]

// Action hyperlinks
let hyperlinks = ['watch tv', 'open safe', '"Am I crazy?"', '"Lets do this"', 'lottery tickets', 'cigarettes', 'lighters', 'the cash register', 'go back', '"yeah money"', '"no thanks"', 'take a nap', 'turn around back to the cashier', 'start over'];


function preload(){
    font = loadFont('font/font.ttf');
    
    // Initialize blood rectange info 
    rectBloodX = 0;
    rectBloodY = 0
    rectBloodWidth = 800;
    rectBloodHeight = 0;

    // Preload Images
    whiteRoomImg = loadImage('images/whiteRoom.jpg');
    pillImg = loadImage('images/pill.png');
    tvImg = loadImage('images/tv.png');
    dresserImg = loadImage('images/dresser.png');
    roomDoorImg = loadImage('images/roomDoor.jpg');
    pocketknifeImg = loadImage('images/pocketknife.png');
    gunImg = loadImage('images/gun.png');
    moneyImg = loadImage('images/money.png');
    safeImg = loadImage('images/safe.png');
    gasolineStationImg = loadImage('images/gasolineStation.jpg');
    lotteryTicketImg = loadImage('images/lotteryTicket.png');
    cigarImg = loadImage('images/cigar.png');
    lighterImg = loadImage('images/lighter.png');
    registerImg = loadImage('images/register.png');
    bloodShotImg = loadImage('images/blood.png');
    winnerImg = loadImage('images/winner.png')
}

function setup(){
    // Setup Canvas
    let cnv = createCanvas(800, windowHeight);

    // Text Modifications
    textFont(font);
    textAlign(CENTER);
    textSize(20);
    textPosX = 4;
    textPosY = height/4;
    fill(255);
}

function draw(){
    background(0); // black Canvas
    fill(255); // White Text
    
    // LINES 
    /*
    stroke(120);
    line(0, windowHeight - 400, 800,  windowHeight - 400);
    line(0, windowHeight - 380, 800,  windowHeight - 380);

    line(0, windowHeight - 360, 800,  windowHeight - 360);
    line(0, windowHeight - 340, 800,  windowHeight - 340);

    line(0, windowHeight - 320, 800,  windowHeight - 320);
    line(0, windowHeight - 300, 800,  windowHeight - 300);

    line(0, windowHeight - 280, 800,  windowHeight - 280);
    line(0, windowHeight - 260, 800,  windowHeight - 260);
    */

    if(state == 0){
        text(storyText[state], textPosX, textPosY, 800, 800);

        // Load money image
        image(whiteRoomImg, 300, 20, 200, 200);

        // Typed Text
        fill(255, 0, 0);
        text(typed, textPosX, windowHeight - 400, 800, 800);
    }
    else if(state == 1){
        text(storyText[state], textPosX, textPosY, 800, 800);

        // Load pill image
        image(pillImg, 250, 10, 300, 200);

        // Typed Text
        fill(255, 0, 0);
        text(typed, textPosX, windowHeight - 400, 800, 800);
    }
    else if(state == 2){
        text(storyText[state], textPosX, textPosY, 800, 800);

        fill(255, 0, 0); // Red Text for action
        text(hyperlinks[0], textPosX, windowHeight - 400, 800, 800)

        // load tv image
        image(tvImg, 280, 0, 250, 250);
    }
    else if(state == 3){
        text(storyText[state], textPosX, textPosY, 800, 800);

        // Load room door image
        image(roomDoorImg, 300, 10, 200, 200);

        // Typed Text
        fill(255, 0, 0);
        text(typed, textPosX, windowHeight - 400, 800, 800);
    }
    else if(state == 4){
        text(storyText[state], textPosX, textPosY, 800, 800);

        // Load dresser image
        image(dresserImg, 250, 10, 300, 200);

        // Typed Text
        fill(255, 0, 0);
        text(typed, textPosX, windowHeight - 400, 800, 800);
    }
    else if(state == 5){
        text(storyText[state], textPosX, textPosY, 800, 800);

        // Load pocket knife image
        image(pocketknifeImg, 250, 10, 300, 200);

        // Typed Text
        fill(255, 0, 0);
        text(typed, textPosX, windowHeight - 400, 800, 800);
    }
    else if(state == 6){
        text(storyText[state], textPosX, textPosY, 800, 800);

        fill(255, 0, 0); // Red Text for action
        text(hyperlinks[1], textPosX, windowHeight - 400, 800, 800)

        // Load safe image
        image(safeImg, 320, windowHeight / 16, 150, 150);
    }
    else if(state == 7){
        text(storyText[state], textPosX, textPosY, 800, 800);

        // Load money image
        image(moneyImg, 450, windowHeight / 16, 150, 150);

        // Load gun image
        image(gunImg, 200, windowHeight / 16, 150, 150);

        // Typed Text
        fill(255, 0, 0);
        text(typed, textPosX, windowHeight - 400, 800, 800);
    }
    else if (state == 8){
        text(storyText[state], textPosX, textPosY, 800, 800);

        fill(255, 0, 0); // Red Text for action
        text(hyperlinks[2], textPosX, windowHeight - 400, 800, 800);
        text(hyperlinks[3], textPosX, windowHeight - 360, 800, 800);

    }
    else if(state == 9){
        text(storyText[state], textPosX, textPosY, 800, 800);

        fill(255, 0, 0); // Red Text for action
        // start over
        text(hyperlinks[13], textPosX, windowHeight - 400, 800, 800);
    }
    else if(state == 10){
        text(storyText[state], textPosX, textPosY, 800, 800);

        // Load dresser image
        image(gasolineStationImg, 250, 10, 300, 200);

        // Typed Text
        fill(255, 0, 0);
        text(typed, textPosX, windowHeight - 400, 800, 800);
    }
    else if (state == 11){
        text(storyText[state], textPosX, textPosY, 800, 800);

        fill(255, 0, 0); // Red Text for action
        text(hyperlinks[4], textPosX, windowHeight - 400, 800, 800);
        text(hyperlinks[5], textPosX, windowHeight - 360, 800, 800);
        text(hyperlinks[6], textPosX, windowHeight - 320, 800, 800);
        text(hyperlinks[7], textPosX, windowHeight - 280, 800, 800);

        // Load lottery ticket image
        image(lotteryTicketImg, 50, 30, 150, 150);

        // Load cigar image
        image(cigarImg, 200, 0, 200, 200);

        // Load lighter image
        image(lighterImg, 380, 10, 200, 200);

        // Load register image
        image(registerImg, 580, 0, 200, 200);
    }
    else if (state == 12){
        text(storyText[state], textPosX, textPosY, 800, 800);

        fill(255, 0, 0); // Red Text for action
        // Go back
        text(hyperlinks[8], textPosX, windowHeight - 400, 800, 800);
    }
    else if (state == 13){
        text(storyText[state], textPosX, textPosY, 800, 800);

        fill(255, 0, 0); // Red Text for action
        // Go back
        text(hyperlinks[8], textPosX, windowHeight - 400, 800, 800);
    }
    else if (state == 14){
        text(storyText[state], textPosX, textPosY, 800, 800);

        fill(255, 0, 0); // Red Text for action
        // Go back
        text(hyperlinks[8], textPosX, windowHeight - 400, 800, 800);
    }
    else if (state == 15){
        text(storyText[state], textPosX, textPosY, 800, 800);

        fill(255, 0, 0); // Red Text for action
        text(hyperlinks[9], textPosX, windowHeight - 400, 800, 800);
        text(hyperlinks[10], textPosX, windowHeight - 360, 800, 800);
    }
    else if (state == 16){
        text(storyText[state], textPosX, textPosY, 800, 800);

        fill(255, 0, 0); // Red Text for action
        // Go back
        text(hyperlinks[8], textPosX, windowHeight - 400, 800, 800);
    }
    else if(state == 17){
        text(storyText[state], textPosX, textPosY, 800, 800);

        fill(255, 0, 0); // Red Text for action
        // start over
        text(hyperlinks[13], textPosX, windowHeight - 400, 800, 800);
    }
    else if (state == 18){
        text(storyText[state], textPosX, textPosY, 800, 800);

        fill(255, 0, 0); // Red Text for action
        text(hyperlinks[11], textPosX, windowHeight - 400, 800, 800);
    }
    else if(state == 19){
        text(storyText[state], textPosX, textPosY, 800, 800);

        // load winner image
        image(winnerImg, 300, 10, 200, 200);


        fill(255, 0, 0); // Red Text for action
        // start over
        text(hyperlinks[13], textPosX, windowHeight - 400, 800, 800);
    }
    else if (state == 20){
        text(storyText[state], textPosX, textPosY, 800, 800);

        fill(255, 0, 0); // Red Text for action
        text(hyperlinks[12], textPosX, windowHeight - 400, 800, 800);
    }
    else if(state == 21){
        background(255); // White background

        // Animate blood background rectangle
        fill(255, 0, 0);
        rect(rectBloodX, rectBloodY, rectBloodWidth, rectBloodHeight);
        if(rectBloodHeight <= windowHeight){
            rectBloodHeight += 3;
        }
        else{
            fill(0); // Red Text for action
            // start over
            text(hyperlinks[13], textPosX, windowHeight - 400, 800, 800);
        }
        

        fill(0);
        text(storyText[state], textPosX, textPosY, 800, 800);

        // Load blood shot image
        image(bloodShotImg, 250, 10, 300, 200);

         
    }
    else if (state == 22){
        text(storyText[state], textPosX, textPosY, 800, 800);

        fill(255, 0, 0); // Red Text for action
        // Go back
        text(hyperlinks[8], textPosX, windowHeight - 400, 800, 800);
    }
    else{
        text(storyText[state], textPosX, textPosY, 800, 800);
    }


    
   
}


function keyPressed(){
    if(keyCode == BACKSPACE){
        typed = ''
    }

}


function keyTyped(){
    if(keyCode == RETURN){
        if(typed == "walk to table" || typed == "go to table"){
            if(state == 0){
                state++;
            }
        }
        else if(typed == "walk to room" || typed == "go to room"){
            if(state == 3){
                state++;
            }
        }
        else if(typed == "red pill" || typed == "take red pill" || typed == "grab red pill" || typed == "choose red pill" ) {
            if(state == 1){
                state++;
            }
            
        }
        else if(typed == "blue pill" || typed == "take blue pill" || typed == "grab blue pill" || typed == "choose blue pill" ) {
            if(state == 1){
                state = 10;
            }
            
        }
        else if(typed == "open dresser" && state == 4){
            state++;
        }
        else if(typed == "grab pocket knife" || typed == "take pocket knife"){
            state++;
        }
        else if (typed == "grab gun" || typed == "take gun"){
            state++;
        }
        else if (typed == "grab money" || typed == "take money"){
            state = 22;
            money = true;
        }
        else if (typed == "open door" && state == 10){
            state++;
        }

        typed = "";
    }
    else{
        typed += key;
    }
    
}

function mousePressed(){
    if(mouseX >= width / 4 && mouseX <= width - 100 && mouseY >= windowHeight - 400 && mouseY <= windowHeight - 380){  
        if(state == 2 || state == 6 || state == 18){
            state++;
        }
        // Am I crazy
        else if(state == 8){
            state = 9;
        }
        // Go back state 22
        else if (state == 22){
            state = 7;
        }
        // Go back
        else if (state == 12 || state == 13 || state == 14 || state == 16){
            state = 11;
        }
        // Lottery tickets
        else if(state == 11){
            // If brought money
            if(money == true){
                state = 12; 
                lotteryTicket = true;
            }
            else{
                state = 16;
            }
        }
        // Yeah money
        else if(state == 15){
            state = 20;
        }
        // Turn around back
        else if(state == 20){
            state = 21;
        }
        // Start over
        else if(state == 21 || state == 9 || state == 17 || state == 19){
            state = 0;
        }
        
        typed = "";
    }
    else if(mouseX >= width / 4 && mouseX <= width - 100 && mouseY >= windowHeight - 360 && mouseY <= windowHeight - 340){
        // Lets do this
        if(state == 8){
            state = 10;
        }
        // Cigarettes
        else if(state == 11){
            // If brought money
            if(money == true){
                state = 13;
            }
            else{
                state = 16;
            }
             
        }
        // No thanks
        else if(state == 15){
            // If no lottery ticket
            if (lotteryTicket == false){
                state = 17;
            }
            else{
                state = 18;
            }
        }
        typed = "";
    }
    else if(mouseX >= width / 4 && mouseX <= width - 100 && mouseY >= windowHeight - 320 && mouseY <= windowHeight - 300){
        // Lighters
        if(state == 11){
            // If brought money
            if(money == true){
                state = 14; 
            }
            else{
                state = 16;
            }
            
        }

        typed = "";
    }
    else if(mouseX >= width / 4 && mouseX <= width - 100 && mouseY >= windowHeight - 280 && mouseY <= windowHeight - 260){
        // The cash registers
        if(state == 11){
            state = 15; 
        }

        typed = "";
    }

    

   
}