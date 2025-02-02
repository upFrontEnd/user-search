import { getUsers } from "./fetchUsers.js";
import { createUserList } from "./renderUsers.js";
import { filterData } from "./filterUsers.js";

const searchInput = document.querySelector("#search");
const searchResult = document.querySelector(".table-results");

let dataArray = [];

async function init() {
  dataArray = await getUsers();
  if (dataArray.length > 0) {
    createUserList(dataArray, searchResult);
  } else {
    searchResult.innerHTML =
      "<p>Une erreur est survenue, veuillez réessayer.</p>";
  }
}

searchInput.addEventListener("input", (e) =>
  filterData(e, dataArray, searchResult)
);

init();
