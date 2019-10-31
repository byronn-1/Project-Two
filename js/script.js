/*
Things I Still Need To Do
1) &#10003 make sure that the programe enters at page one
2)  connect the left and right buttons
3)  add the search bar logic
4) &#10003 add the active class to the pagination buttons
*/
var studentListItem = document.querySelectorAll('.student-item'); 
const page = document.getElementsByClassName("page")[0];
console.log(page)

console.log("the amount of students is " + studentListItem.length);

const appendPageLinks = (studentListItem, page) => {
  let pageDiv = document.createElement('div');
  page.appendChild(pageDiv);
  pageDiv.className = 'pagination';
  let pageUl = document.createElement('ul');
  pageUl.className = 'paginationUl';
  pageDiv.appendChild(pageUl);
  let howManyPages = Math.ceil((studentListItem.length + 1) / 10);

  console.log("the amount of pages is " + howManyPages);

  for (let i = 1; i < (howManyPages + 1); i++){
    appendPageLink(i);
  }
  if(howManyPages > 3){
    appendStartEndArrows();
  }
}

function appendPageLink(howManyPages){
  let grabUl = document.getElementsByClassName('paginationUl')[0];
  let li = document.createElement('li');
  li.className = "paginationNumButton"
  grabUl.appendChild(li);
  let a = document.createElement('a');
  li.appendChild(a);
  a.innerHTML = howManyPages;
}

appendPageLinks(studentListItem, page);

function appendStartEndArrows(){
  let grabUl = document.getElementsByClassName('paginationUl')[0];
  let theFirstChild = grabUl.firstChild;
  let startButtonLi = document.createElement('li');
  let startButtonA = document.createElement('a');
  startButtonLi.className = 'scrollListButton leftButton';
  startButtonA.innerHTML = '<';
  let endButtonLi = document.createElement('li');
  let endButtonA = document.createElement('a');
  endButtonLi.className = 'scrollListButton rightButton';
  endButtonA.innerHTML = '>';
  grabUl.insertBefore(startButtonLi,theFirstChild)
  startButtonLi.appendChild(startButtonA);
  grabUl.appendChild(endButtonLi);
  endButtonLi.appendChild(endButtonA);
}

const  appendSearchBar = () => {
  let pageHeader = document.getElementsByClassName('page-header cf')[0];
  let inputSearch = document.createElement('INPUT');
  pageHeader.appendChild(inputSearch); 
  inputSearch.setAttribute("placeholder", "  Student Name...") 
  inputSearch.className = 'student-search';
}

appendSearchBar();


const showPage = (endIndex, parseIntE, e ) => {

  //   let endIndex = (parseIntE * 10) - 1;
  let startIndex = endIndex - 9;
  //  console.log(lastPageValue);
if(isNaN(parseIntE)){
   if (e.target.innerHTML == "&lt;"){
       endIndex -= 10;
      let startIndex = endIndex - 9;
      loopNodeList(endIndex, startIndex);
   console.log(endIndex, 2);   
   }
   else if(e.target.innerHTML == "&gt;"){
         endIndex += 10 ;
     loopNodeList(endIndex);
   console.log(endIndex, 3);   
   } 
} 
else {
      loopNodeList(endIndex);
   console.log(endIndex, 1);   
   }
 
  function loopNodeList(endIndex){
      let startIndex = endIndex - 9;
      for (var i=0; i < startIndex ;i+=1){
         if (i < startIndex ){
         studentListItem[i].style.display = 'none';
      }
   }
      for (var i = endIndex; i < studentListItem.length ;i += 1){
         if (i > endIndex){
      studentListItem[i].style.display = 'none';
      }
    }
  }
}
// let pageDiv = document.getElementByTagName('DIV')[0][1];


//could be the way to do it ............. 
var pageDiv = document.getElementsByClassName('paginationNumButton');
for (var i = 0; i < pageDiv.length; i++) {
  pageDiv[i].addEventListener('click', showPage);
}

// function printDetails(e) {
//   console.log("Clicked " + this.id);
// }
/* page.addEventListener('click', (e) => {
  let parseIntE = parseInt(e.target.innerHTML);
  let endIndex = (parseIntE * 10) - 1;
  let grabUl = document.getElementsByClassName('paginationNumButton');
  for (var i=0; i < grabUl.length ;i+=1){
    grabUl[i].firstChild.classList.remove("active");
  }
  e.target.className = 'active';
  for (var i = 0; i < studentListItem.length ;i+=1){
  studentListItem[i].style.display = '';

 console.log(e.target.innerHTML);
}  
   showPage(endIndex, parseIntE, e);
});
 */
window.onload = (e) => {
   let parseIntE = -1;
   showPage(10, parseIntE);
   console.log('page is fully loaded');
 };

function searchBarLogic(){
  // steal logic from w3 schools remember this is set up to work from an inline function call.    // Declare variables
    var inputSearch, filter, ul, li, a, i, txtValue;
    inputSearch = document.getElementByClassName('student-search');
    filter = inputSearch.value.toUpperCase();
    ul = document.getElementsByClassName("student-list");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }


