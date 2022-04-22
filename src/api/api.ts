export const getUsersApi = (): Promise<any> => {
    return fetch(`https://jsonplaceholder.typicode.com/users`,
    { method: 'GET' }).then(response => response.json());
}