const numberInputEl = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");


// Function Check Input
const checkUserInput = () => {
  let phoneNumber = numberInputEl.value;
  const regex = /[-\(\)\s]/g;
  const regexChar = /[a-z]/gi;
  const regexPhNum = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
  let isUS = true;
  let hasChar = false;
  let isPhoneNumber = false;

  let cleanNumber = Array.from(phoneNumber.replaceAll(regex,''));

  if (cleanNumber.length === 11) {
    isUS = cleanNumber[0] === "1" ? true : false;
  };

  hasChar = (phoneNumber.match(regexChar)) ? true : false;  
  
  isPhoneNumber = (phoneNumber.match(regexPhNum)) ? true : false;  


  if (!numberInputEl.value) {
    alert("Please provide a phone number");
  } else if (phoneNumber.match(regexChar) || cleanNumber.length > 11 || cleanNumber.length < 10 || isUS === false || hasChar === true || isPhoneNumber === false) {
    results.classList.remove("hide");
    results.textContent = `Invalid US number: ${numberInputEl.value}`;
  } else if (cleanNumber.length === 10 || cleanNumber.length === 11) {
    results.classList.remove("hide");
    results.textContent = `Valid US number: ${numberInputEl.value}`;
  } ;
  return
};


// Function Clear
function hideResults() {
  results.classList.add("hide");
  results.textContent= "";
  numberInputEl.value= "";
}


// Event Listeners
checkBtn.addEventListener("click", checkUserInput);
clearBtn.addEventListener("click", hideResults);