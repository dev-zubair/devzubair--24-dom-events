function makered(){
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'white';
}

// Handle blue button click by setting function name.
 
const blueButton = document.getElementById('make-blue-button');
        // just set the name of the Function - শুধু ফাংশনকে সেট করা হয়েছে । কল করা হয়নি । তাই () দেইনি । 
        blueButton.onclick = makeBlue;

        function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }


//Handle Events using Anonymous Function

const greenButton = document.getElementById('make-green-button');
        //Anonymous function - এখানে ফাংশনের পরে কোননাম লেখা হয়নি । ৯৫% ক্ষেত্রে ফাংশনের পর নাম লেখা হয় না । 
        greenButton.onclick = function (){
            document.body.style.backgroundColor = 'green';
        }


//Handle Events using addEventLisenter

        const goldenButton = document.getElementById('make-goldenrod');
        goldenButton.addEventListener('click', makeGoldenRoad);

        function makeGoldenRoad(){
            document.body.style.backgroundColor = 'goldenrod';
        }

        //Handle Events using addEventLisenter (alternative way)

        const hotPinkButton = document.getElementById('make-hot-pink');
       hotPinkButton.addEventListener('click', function(){
           document.body.style.backgroundColor = 'hotpink';
       })


       //Direct Shortcut
      
       document.getElementById('make-light-blue').addEventListener('click', function(){
        document.body.style.backgroundColor = 'lightblue';
    })

