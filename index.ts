// Import stylesheets
import './style.css';
import { Cookie } from './models/Cookie';
import { Colours } from './models/Colours.Enums';
import { Sprinkle } from './models/Sprinkle';

const appDiv: HTMLElement = document.getElementById('app');


let cookiesList: Cookie[] = [];
//TODO: A cookie class called SprinkleCookie, it inherits from Cookie, but also has an attribute called sprinkleColour.-DONE

//TODO: Create an Enum called Colours.  Colours has the values; Brown, White, Black, Pink, Blue-DONE
let enumColoursList: Colours[] = [];

//TODO: CREATE AN ARRAY FOR THESE ENUMS_
enumColoursList = [Colours.BROWN,Colours.WHITE,Colours.BLACK,Colours.PINK,Colours.BLUE];

// init() will create two cookies called Cookie1 and Cookie2, and add them to the array of cookies-DONE
function init() {
  // create the two cookies
  const C1: Cookie = new Cookie('Cookie1', Colours.PINK);
  const C2: Cookie = new Cookie('Cookie2', Colours.BLUE);
  // Here you need to ADD to this cookieList array
  cookiesList = [C1, C2];
  addToDropDownList();
}
const cookieSelection: HTMLInputElement = <HTMLInputElement>(
  document.getElementById('cookieSelector')
); /*needs to be outside function scope to be available in other parts of code*/

const cookieColor: HTMLInputElement = <HTMLInputElement>(
  document.getElementById('colour-output')
);

const cookieColorSelect: HTMLInputElement = <HTMLInputElement>(
  document.getElementById('newColourUpdated')
);

//TODO: Adjust the Cookie and SprinkleCookie to use the Colours enum.-DONE
//TODO: Create a part of the interface which allows the creation of a Cookie or SprinkleCookie-DONE PARTLY

function addToDropDownList() {
  // add them to the array, add them as options in the select/dropdown (cookieSelector) element-DONE
  // initialise the cookieColour-ID to the colour of the first cookie created-DONE

  for (let i = 0; i < cookiesList.length; i++) {
    cookieSelection.innerHTML += `<option value=${i}>${
      cookiesList[i].name
    }</option>`;
  }
  for (let i = 0; i < enumColoursList.length; i++) {
    ColourChangeUpdate.innerHTML += `<option value=${i}>${
      enumColoursList[i]
    }</option>`;
  }
}
//******ORIGINAL CODE TO DISPLAY INITIAL COLOUR******//

cookieSelection.addEventListener('change', updateDisplayCookieType);
cookieColorSelect.addEventListener('change', updateDisplayCookieType);

function updateDisplayCookieType() {
  /*COOKIE SELECTED ARRAY VALUE */
  const selectValue: number = Number(
    cookieColorSelect.value
  ); /*PARSE entry to convert string into number, value = index value*/

  updateCookieColorDisplay(selectValue); /*TRIGGER THE NEXT FUNCTION WHICH SHOWS THE COLOUR*/
}

function updateCookieColorDisplay(colourCookie) {
  /*SHOWS COLOUR OF COOKIE SELECTED*/
  /*cookieColor.innerHTML = `Colour of cookie selected: ${
    cookiesList[colourCookie].text
    //
  }`;*/

  cookieColor.innerHTML = `Colour of cookie selected: ${
    cookieColorSelect[colourCookie].text
  }`;
}

//***************CHANGING COLOUR OF COOKIE******************** */

const ColourChangeUpdate: HTMLElement = document.getElementById(
  'newColourUpdated'
); /*link into the select ID */

ColourChangeUpdate.addEventListener(
  'change',newChangeColour); /*FYI-Can't add addToDropDownList function as it'll re populate colours*/
let updatedColourChange = ColourChangeUpdate;

function newChangeColour() {}

updateCookieColour(updatedColourChange);

function updateCookieColour(enumIndex) {
  ColourChangeUpdate.innerHTML = `Updated Colour changed: ${cookiesList[enumIndex]}`; 
}

//**********ADDING A CHOC CHIP TO SELECTED COOKIE SECTION*********************

const ChipsOutput: HTMLElement = document.getElementById(
  'chocchip-output'
); /*paragraph ID in HTML shows chips output*/

const chipChangeInput: HTMLInputElement = <HTMLInputElement>(
  document.getElementById(
    'inputChipNum'
  ) /*button id in html, grabbing value of input and link to html ID.*/
);

const addChipBtn: HTMLElement = document.getElementById(
  /*trigger value whenever user clicks button*/
  'addChocolateChip-btn'
);

//TODO:  number of chocolatechips on a cookie needs to be shown */
//TODO: this function needs to be triggered by button addChocolateChip-btn
// upon pressing the button it should add a chocolate chip to cookies selected from the dropdown-html: chocchip-output

addChipBtn.addEventListener(
  'click', addChocolateChip
); /*LISTEN FOR SELECTION AND TRIGGER NEXT FUNCTION*/

function addChocolateChip() {
  const addedchipValue: number = Number(chipChangeInput.value); //*PARSE ENTRY STRING TO NUMBER*/
  let selectedCookieChipValue = cookieSelection.value;
  cookiesList[selectedCookieChipValue].chocolateChipNum = addedchipValue;
  displayChips(selectedCookieChipValue);

  //console.log(selectedCookieChipValue)
  //console.log(addedchipValue);
  // updateChipDisplay(chocChipSelection);
}
function displayChips(selectedCookieChipValue) {
  ChipsOutput.innerHTML = `Chips added: ${
    cookiesList[selectedCookieChipValue].chocolateChipNum
  }`;
}

//*******ADDING CHANGE OF COLOUR-USER INPUT*******
//TODO: this fuction needs to be triggered by button changeColour-btn
// upon pressing the button it should change the colour of the cookie selected in the dropdown to the colour typed in the input element (colour-output
//ADD DROP DOWN BOX FOR NEW COLOUR TO BE SELECTED

//TODO: this function needs to go through the list of cookies and draw them to cookiesDiv
// create the cookies as divs with the class name of cookie - see style.css
// number of chocolatechips needs to be shown on the cookie
//function drawCookies() {

//}

//function updateDisplay() {

//  drawCookies();
//}

init(); /*THIS FUNCTION IS CALLED*/

