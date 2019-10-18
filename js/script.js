/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
// const studentListItem = document.getElementsByClassName(''); 
// const pageItems10 = document.getElementsByClassName(''); 
   



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

// function showPage needs to return elements to be appended to the div element on the page 
// each element should be 1-10 11-20 20-21 30+ 
function showPage(list, page){
   let startIndex = (page * 10 ) - 10;
   let endIndex = page * 10;

   for( var i = 0; (i >= startIndex) && (i <= endIndex); i++ ){

   }
   console.log(i);

//if there are three or more pages show start and end buttons
if (endIndex > 20 ){
   startAndEnd()
}

}


// create function that adds start and end buttons either side of the pagination links 
function startAndEnd(){
   let page = document.getElementsByTagName('div')[0];
   let startButton = document.createElement('div');
   startButton.className = 'scrollListButton';
   startButton.innerHTML = 'you Done IT';
   let endButton = document.createElement('button');
   endButton.className = 'scrollListButton';
   
   page.appendChild(startButton);
   page.appendChild(endButton);
}



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
// function appendPageLinks(i) {

//    var pageLink = i;
//    var paginationButton = document.createElement('div');
//    var page = document.getElementsByClassName('page');
//    page.appendChild(paginationButton);
//    console.log(i);
// }



// rmember to delete the comments that came with this file, and replace them with your own code comments.

// create a function that creates a search feild and button thats linked to it

// create function that grabs html and creates an array of objects that holds
//student name 
//joined date 
//email

/**
 students [
	 {
      name: ,
      joined: ,
      email: ,
	 },
 ]
 */