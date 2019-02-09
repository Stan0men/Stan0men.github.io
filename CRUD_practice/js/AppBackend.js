export class AppBackend {
    constructor() {
        this.baseUrl = 'https://5bf417c491c25b0013a3b9a2.mockapi.io/users';
    }

    get({search, startPage, limit, /**/} = {}) {
        return fetch(`${this.baseUrl}?page=${startPage}&${limit}=10`)
            .then((response) => response.json());

    }

    create(object) {
        return fetch(`${this.baseUrl}`, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(object),
        })
    }

    delete(id) {
        return fetch(`${this.baseUrl}/${id}`, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
    }
}
