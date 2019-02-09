import {AppBackend} from './AppBackend.js';

export class UsersTable {
    constructor() {
        this.backend = new AppBackend();
        this.users = [];
    }

    async init() {
        await this.loadUsers();
        this.render();

        document.addEventListener('click', async (event) => {
            if (event.target.matches('.btn-outline-danger')) {
                await this.deleteUser(event.target.dataset.id);
                await this.loadUsers();
                this.render();
            }
        });
    }

    async loadUsers() {
        this.users = await this.backend.get()
    }

    async deleteUser(id) {
        await this.backend.delete(id);
    }

    renderUsers() {
        return this.users.map((user) =>
            `<tr>
          <th scope="row">${user.id}</th>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.createdAt}</td>
          <td>${user.description}</td>
          <td>
            <button type="button" class="btn btn-outline-danger" data-id="${user.id}">
              Delete
            </button>
          </td>
        </tr>
      `
        );
    }

    render() {
        document.querySelector('.container').innerHTML = `
      <table class="table table-dark">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">createdAt</th>
            <th scope="col">description</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          ${this.renderUsers().join('')}
        </tbody>
      </table>`;
    }
}
