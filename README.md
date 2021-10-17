# NOTES


>Quickest way to align center.

 ```
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;
```

>@fontface synthax.

```
@font-face {
    font-family: 'Name';
    src: url('./path');
}
```
## Flex-Box

### Properties for the Parent (flex container)

![flex-box](https://css-tricks.com/wp-content/uploads/2018/10/01-container.svg)
<br>

#### display

This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.

```
.container {
  display: flex; /* or inline-flex */
}
```
<br>

#### flex-direction

![direction](https://css-tricks.com/wp-content/uploads/2018/10/flex-direction.svg)

This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.

```
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```
- **row (default)**: left to right in ltr; right to left in rtl

- **row-reverse**: right to left in ltr; left to right in rtl

- **column:** same as row but top to bottom

- **column-reverse**: same as row-reverse but bottom to top

<br>

#### flex-warp

![flex-warp](https://css-tricks.com/wp-content/uploads/2018/10/flex-wrap.svg)

By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.

```
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- **nowrap** (default): all flex items will be on one line

- **wrap**: flex items will wrap onto multiple lines, from top to bottom.

- **wrap-reverse:** flex items will wrap onto multiple lines from bottom to top.


[**Visualised flex-warp**:crystal_ball:](https://css-tricks.com/almanac/properties/f/flex-wrap/
)

