# Class 01 Lecture Notes

## Data Types in JavaScript

- A way of labeling and organizing data
- A way to format the data so that our program can anticipate and use the data properly

JavaScript is **loosely typed** and **dynamic** language.

- loosely typed means that we don't have to know the type of data to declare a variable
- variables do not need to be declared with a value or type

```js
let cat;
```

- dynamic meaning I can change the type of data after the variable has been defined

```js
cat = 4;
cat = 'squeeeeee';
cat = false;
```

### Types

#### Numbers

- Numeric value - decimals, negatives

#### Strings

- A sequence of characters - written single quotes
  - `'hello'`
  - `'fe2034u2390refaoe;a'`

#### Booleans

- `true`
- `false`

##### Truthy / Falsey

- Truthy
  - Numbers except for 0
  - Strings except if it is an empty string

- Falsey
  - 0
  - `''`
  - Undefined
  - Null

#### Undefined

- Something that has not yet be defined
  - `let cat'`

#### Null

- Something that has been defined as none
  - `let cat = null;`
