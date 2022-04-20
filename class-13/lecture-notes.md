# Class 13 Lecture Notes

## Data Persistance

### Local Storage

- It is an object is accessed through the browser but it is stored on our computer
- Local storage is specific to one computer
- No expiration time - clears when we clear it

### Other Storage Types

- 301 - NoSQL(MongoDB)
- 401 - SQL(postgres)

### Why

- So users can retain data between page refreshes or accessing different parts of the application

### How it is stored

- JSON - JavaScript Object Notation
- in object key/value pairs
- Convert to JSON - using a method `JSON.stingify()`
  - converting our object to a string

### Methods that we use for Local Storage

- Save something to local storage
  - `setItem('key', value);`
- Get something out of local storage
  - `getItem('key');`
- Update an item in local storage
  - `setItem('key', value);`
- Remove items from local storage
  - `removeItem('key');`
- Clear all from local storage
  - `clear()`

`localStorage.getItem('key')`
