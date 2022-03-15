//for the assignment, we need a timer to count down from 50 to 0 by 5 second inrecements and show blast off at 0
//for my example we are going to coun down from 20 to 0 by 2 second increments and show "blastoff" at 0
function Blastofftimer()
    console.log(Blastofftimer() started");
    var currtime =20;
    Document.getelementbyid("Blastofftext").innerhtml = currtime;
    console.log("20");
    currtime=currtime - 2;
    setTimeout(Function)(){
        console.log(currtime);
        Document.getelementbyid("Blastofftext").innerhtml =currtime;
        currtime = currtime - 2;
    },2000);
}
console.log(currtime);
Document.getelementbyid("Blastofftext").innerhtml =currtime;
currtime = currtime - 2;
},4000);
} console.log(currtime);
Document.getelementbyid("Blastofftext").innerhtml =currtime;
currtime = currtime - 2;
},6000);
} console.log(currtime);
Document.getelementbyid("Blastofftext").innerhtml =currtime;
currtime = currtime - 2;
},8000);
} console.log(currtime);
Document.getelementbyid("Blastofftext").innerhtml =currtime;
currtime = currtime - 2;
},10000);
} console.log(currtime);
Document.getelementbyid("Blastofftext").innerhtml =currtime;
currtime = currtime - 2;
},12000);
} console.log(currtime);
Document.getelementbyid("Blastofftext").innerhtml =currtime;
currtime = currtime - 2;
},14000);
} console.log(currtime);
Document.getelementbyid("Blastofftext").innerhtml =currtime;
currtime = currtime - 2;
},16000);
} console.log(currtime);
Document.getelementbyid("Blastofftext").innerhtml =currtime;
currtime = currtime - 2;
},18000); console.log(currtime);
Document.getelementbyid("Blastofftext").innerhtml ="BLASTOFF";
currtime = currtime - 2;
},20000);


function BetterCTdown()  {
    console.log("TestCTDown() started");
    //Variable to track time 
    currtime = 50
    //for loop to save typing 
    for (var i = 0; i <= 10; i++) {
        console.log (i);
        setTimeout(function()  {
            document.getelementbyid("blastoff Text").innerhtml = currtime;
            if (currtime == 0) {
                //if we are done and need blastoff
                document.getElementById("BlastOffText").innerHTML = "Blastoff"
            }
            else if(currtime < 25) {
                //bc the admiral wants this 
                document.getelementbyid("blastofftext")innerhtml =
                "warning less that 1/2 way to launch, time left = " + currtime;
            }else {
                //everything else 
                document.getelementbyid("blastofftext").innerHTML =
                "warning less than 1/2 way to launch, time left = " +currtime;
            }
            // we are irrterating by 5's 
            currtime =currtime - 5;
            //5000 to wait 54 seconds between counts 
        }, 500 * i);  
    }    
}
//THERE IS A PORTION MISSING IN THIS CODE AS THIS IS THE VIDEO THAT IS NOT PRESENT WITHIN TEAMS //

function Playcraps(){
    console.log("Playcraps() started....");
    var die1 = 7 *  Math.random();
    var roundDie1 = Math.floor(die1);
    console.log("the random number is: " + die1)
    console.log("the rounded number is: + " + roundDie1)
}
