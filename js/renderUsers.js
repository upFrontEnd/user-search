export function createUserList(usersList, container) {
    container.innerHTML = usersList
      .map((user) => `
        <div class="table-item">
          <div class="container-img">
            <img src="${user.picture.medium}" alt="">
            <p class="name">${user.name.last} ${user.name.first}</p>
          </div>
          <p class="email">${user.email}</p>
          <p class="phone">${user.phone}</p>
        </div>`
      )
      .join("");
  }
  