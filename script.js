/*	
var database = [
	{
		username: "albert",
		password: "123"
	},
	{
		username: "amir",
		password: "456"
	},
	{
		username: "amiro",
		password: "789"
	}
];
var newsfeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];


function isUserValid(username,password ){
 for(var i=0; i<database.length; i++){
     if (database[i].username=== username &&
          database[i].password === password){
     	    return true ;
 		} 
 	}
 	return false; 
}

function signIn(username,password){
	if (isUserValid(username,password)) {
		console.log(newsfeed);
	}else {
		alert("your user name or password is incorrect ! Please try again "); 
	}
}

	var userNamePrompt = prompt("Your user name ?");
    var passwordPrompt = prompt("Your user passsword ?");

signIn(userNamePrompt,passwordPrompt);
*/

/* Add and remove Element From the list */
var button=document.getElementById("enter");
var deletebtn =document.getElementById("button");
var input=document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems=document.getElementsByTagName("Li");

function listLength() {
 	console.log(listItems.length);
 	return listItems.length
 };
//create delete buttons for exisiting buttons
for (i = 0; i < listLength(); i++ ) {
    var btn = document.createElement("button");
 		    btn.appendChild(document.createTextNode("Delete!"));
 		    listItems[i].appendChild(btn);
 		    btn.onclick = removeParent;
  	};
//remove an item from the list (had to implement that from another students answer)

function removeParent(evt) {
	evt.target.removeEventListener("click", removeParent, false);
	evt.target.parentNode.remove();
};

//check or uncheck list items

function checked(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
} ;
//et the buttons array 

function deleteBtnsLength() {
	console.log(deleteBtn.length);
	return deleteBtn.length
};

//get user lenght input 
function inputLenght(){
	return input.value.length;
};

function createListElement(cmt){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
       
   //create delete button for each new list item
	var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("X"));
 		li.appendChild(btn);

 		btn.onclick = removeParent;
 	};	
function addListAfterClick(){
	if(inputLenght() > 0){
 	createListElement();
}
};
function addListAfterKeyPress(event){
 	if(inputLenght() > 0 && event.keyCode === 13){
    createListElement();
 	}	
};
 ul.addEventListener("click", checked);
 button.addEventListener("click", addListAfterClick);
 input.addEventListener("keypress", addListAfterKeyPress);
 	

