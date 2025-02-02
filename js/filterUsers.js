import { createUserList } from "./renderUsers.js";

export function filterData(e, dataArray, container) {
    const searchedString = e.target.value.toLowerCase().replace(/\s/g, "");

    const filteredArr = dataArray.filter(
        (el) =>
            el.name.first.toLowerCase().includes(searchedString) ||
            el.name.last.toLowerCase().includes(searchedString) ||
            (el.name.first + el.name.last).toLowerCase().replace(/\s/g, "").includes(searchedString) ||
            (el.name.last + el.name.first).toLowerCase().replace(/\s/g, "").includes(searchedString) ||
            el.email.toLowerCase().includes(searchedString) ||
            el.phone.toLowerCase().includes(searchedString)
    );

    createUserList(filteredArr, container);
}
