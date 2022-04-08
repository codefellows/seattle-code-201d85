# Class 05 - Lecture Notes

## CSS Units

### Absolute

**Absolute Units** are the same size regardless of the parent element or window size.

Absolute units are not recommended for responsive sites!

- PX - by far the most commonly used absolute unit

### Relative

**Relative Units** are used for styling responsive sites. They scale relative to the parent element or to the window size.

#### `%` - percentages

- Percentages are always relative to some other value.
- Sometimes it's a value from the parent and other times it's a value from the element itself.
- `width: 50%` - half the width of the parent
- `line-height: 50%` - half the font-size of the element itself
- Usually more appropriate for layout-related properties.

#### `em`

- `font-size: 1em` - equals the font-size of the parent
- `font-size: 2em` - twice the font-size of the parent, etc
- With other properties, 1em is equal to the computed font-size of the element itself... like with `line-height`.

```css
   h1 {
     font-size: 20px;
     /* using em here the line height would be half of the element itself */
     line-height: 50%;
   }
```

- Defining font-size using `em` can cause problems when you have nested elements which all define font-size using `em`. This is because the inherited font-size is calculated from parent elements font-size value and passed down to child elements. Nested elements could have ever decreasing font-sizes.

#### `rem` - root em

- Relative to the **root `<html>` element**'s font size. Often easier to work with.
- Browers genereally set the root font size at `16 pixels`
  - If the root font size is 16px, 1 rem is 16px, 2rem is 32px, etc.

#### `vw` & `vh` - view height & view width

- `1vw` is 1% of the width of the viewport(area of the window in which web content can be seen)
- `1vh` is 1% of the height of the viewport
- `height: 100vh` - would make that element take up the full height on the screen
- Because you never know what screen size will access your code, this unit allows you to set exactly how much of the screen will be occupied by a given element.
