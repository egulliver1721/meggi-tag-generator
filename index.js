import { tagData } from "./tagData.js";

const tagItemsCheckbox = document.getElementById("tag-checkbox");
const createListBtn = document.getElementById("create-list-btn");
const tagModalInner = document.getElementById("tag-modal-inner");
const tagModal = document.getElementById("tag-modal");
const tagModalCloseBtn = document.getElementById("tag-modal-close-btn");

createListBtn.addEventListener("click", generateTagList);
tagModalCloseBtn.addEventListener("click", closeModal);

function closeModal() {
  tagModal.style.display = "none";
}

// setting up radio boxes
function getEssentialItemsArray(tags) {
  let tagItemsArray = [];
  for (let item of tags) {
    for (let itemName of item.tagItems) {
      tagItemsArray.push(itemName);
    }
  }
  return tagItemsArray;
}

function renderTagItemsCheckbox(tags) {
  let checkboxItems = ``;
  const essentialItems = getEssentialItemsArray(tags);
  for (let item of essentialItems) {
    checkboxItems += `
    <div class="checkbox">
            <label for="${item}">${item}</label>
            <input
                type="checkbox"
                id="${item}"
                value="${item}"
                name="essential-items"
                >
    </div> 
    `;
  }
  tagItemsCheckbox.innerHTML = checkboxItems;
}

// generating custom list from checked checkboxes

function generateTagList() {
  const checkboxes = document.querySelectorAll(
    'input[name="essential-items"]:checked'
  );
  let checkboxesValue = [];
  checkboxes.forEach((checkbox) => {
    checkboxesValue.push(checkbox.value);
  });

  console.log(checkboxesValue);
  renderTagList(checkboxesValue);
}

function renderTagList(checkboxesValue) {
  let selectedItems = ``;
  let selectedEssentialItemsArray = checkboxesValue;
  const createListOnImage = document.getElementById("text-from-list");

  for (let essentialItem of selectedEssentialItemsArray) {
    selectedItems += `<p> ${essentialItem}</p>`;
  }

  createListOnImage.innerHTML = selectedItems;
}

getEssentialItemsArray(tagData);
renderTagItemsCheckbox(tagData);
