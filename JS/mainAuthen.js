/*jshint esversion: 6 */
/* JS to implement panel */

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => 
{
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => 
{
	container.classList.remove("right-panel-active");
});

/* End of JS to implement panel  */


/* Convert to uppercase */ 

function convertupper() {
  var x = document.getElementById("name");
  x.value = x.value.toUpperCase();
}

/* End of convert to upper case */  

/* JS validation for password  */

function validatePassword(password) 
{
                
    // Do not show anything when the length of password is zero.
    if (password.length === 0) 
    {
    	document.getElementById("msg").innerHTML = "";
        return;
    }
                
    // Create an array and push all possible values that you want in password
        var matchedCase = new Array();
        matchedCase.push("[$@$!%*#?&]"); // Special Charector
        matchedCase.push("[A-Z]");      // Uppercase Alpabates
        matchedCase.push("[0-9]");      // Numbers
        matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
        var ctr = 0;
        for (var index = 0; index < matchedCase.length; index++) 
        {
            if (new RegExp(matchedCase[index]).test(password)) 
            {
                ctr++;
            }
        }
            
    // Display it
        var color = "";
        var strength = "";
        
        switch (ctr) 
        {
	        case 0:
	        case 1:
	        case 2: strength = "WEAK";
	                color = "red";
	                break;
	        case 3: strength = "MEDIUM";
	                color = "orange";
	                break;
	        case 4: strength = "STRONG";
	                color = "green";
	                break;
	    }
	    
	    document.getElementById("msg").innerHTML = strength;
	    document.getElementById("msg").style.color = color;
}

/* End of JS validation for password  */  