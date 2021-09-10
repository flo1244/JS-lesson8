// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full
const guestFull = document.querySelector(".alert");
//assign button
const assignButton = document.querySelector(".assign");
//assign items button
const assignedItems = document.querySelector(".assigned-items");
//footer-gif to display
const footerGif = document.querySelector("footer");

addGuestButton.addEventListener("click", function () {
  const guest = guestInput.value;
  //console.log(guest);
  if (guest !== "") {
    //let listItem = document.createElement("li");
    //listItem.innerText = guest;
    //guestList.append(listItem);
    addToList(guest);
    updateGuestCount();
    clearInput();
  }
});

const clearInput = function () {
  guestInput.value = "";
};
//Refactor code(let-->const(function scope))
const addToList = function (guest) {
  const listItem = document.createElement("li");
  listItem.innerText = guest;
  guestList.append(listItem);
};

const updateGuestCount = function () {
  const guests = document.querySelectorAll(".guest-list li");
  guestCount.innerText = guests.length;
  if (guests.length === 8) {
    addGuestButton.classList.add("hide");
    guestInput.classList.add("hide");
    guestInputLabel.classList.add("hide");
    guestFull.classList.remove("hide");
  }
};

const assignItems = function () {
  const potluckItems = [
    "Spinach Dip",
    "Pound Cake",
    "Roasted Turkey",
    "Mac and Cheese",
    "Garlic Greenbeans",
    "Biscuits",
    "Potatoe Salad",
    "Greek Salad",
    "Fruit Bowl",
    "Crackers",
    "Veggie Platter"
  ];
  const allGuests = document.querySelectorAll(".guest-list li");
  for (let guest of allGuests) {
    let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
    let randomPotluckItem = potluckItems[randomPotluckIndex];
    //create new list item!
    let listItem = document.createElement("li");
    listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
    assignedItems.append(listItem);

    //prevents assigning duplicate items
    potluckItems.splice(randomPotluckIndex, 1);
  }
};

assignButton.addEventListener("click", function () {
  //displays gif and <h3>See you on Saturday!</h3> at the bottom of page...
  footerGif.classList.add("show-footer");
  assignItems();
  //fixes duplicate dish assignment after calling assignItems(); disables button once loop completes.
  assignButton.disabled = true;
});
