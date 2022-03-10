/* 
element tab review.
device support and its other tab
=================================
find documentation from google. (chrome dev tools api)
learn debug(function)
=================================
source tab:
1. ctrl + p => to open files.(both source tab and vs code)

2. right click on the file, you can select and deselect the 
file according to your need.(both source tab and vs code)

3. ctrl + shift + t => to bring closed tab.(both source tab and vs code)it brings tab one by one.

4. selecting multiple tab and pressing shift. close all the tab by pressing ctrl + w .

5. click and hold the reload button, while keep opening the inspect tab. gives 3 options, which are reload, heard reload. and empty catch and heard reload.

6. ctrl + shift + o, is to open function.

useful tab is used for debugging.
=>
1. Elements
2. Console
3. Sources
4. Network
5. Application
*/

/*  
/debugging the salary sheet.

/first problem: the chart doesn't show the input person salary chert. 

process:
find the button eventAddListener > follow the line of code > debug the line > find the error

problem was, there was a "!" sign before salary which was making it false value.

/finding second problem: the button adding the wrong info to the innerText field. it should be addition of the all salary.

process:
add break point in chert related function.
in "call stack tab you can see which function is calling which function. find the initialized "

from the button, find the data where from it is generating. check the data with Array.isArray(data), whether it is array or object. 


homeWork: 
clear the input field.
show the last salary in bootstrap modal.


regular expression: find it from google.

to check whether the password has this character or not. to check
const myPassword = "RestrgjeorgrmM"
/[0-9]/.test(myPassword)
/[A-Z]/.test(myPassword)

*/

