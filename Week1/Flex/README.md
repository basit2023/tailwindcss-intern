
# Tailwind CSS Flex Utilities

Tailwind CSS provides powerful utilities for creating responsive and flexible layouts using CSS Flexbox. These utilities allow you to control the layout, alignment, and spacing of elements with minimal effort.

## Table of Contents

1. [Introduction](#introduction)  
2. [Getting Started](#getting-started)  
3. [Flexbox Utilities](#flexbox-utilities)  
   - Display  
   - Direction  
   - Wrap  
   - Alignment  
   - Justify Content  
   - Gap  
   - Order  
   - Grow and Shrink  
4. [Examples](#examples)  
5. [Customization](#customization)  
6. [References](#references)

---

## Introduction

Flexbox is a CSS layout model designed to create flexible and efficient layouts. Tailwind CSS simplifies the use of Flexbox by providing a wide range of utility classes.

---

## Getting Started

To use Flex utilities, ensure that Tailwind CSS is installed and configured in your project. You can apply Flexbox utilities directly to your HTML elements using Tailwind’s class-based approach.

---

## Flexbox Utilities

### 1. **Display**
Control whether an element behaves like a Flexbox container.  

- `flex` - Apply Flexbox.  
- `inline-flex` - Apply Flexbox and make the container inline.  

#### Examples:
```html
<div class="flex">Flexbox Container</div>
<div class="inline-flex">Inline Flex Container</div>
```

---

### 2. **Direction**
Set the direction of the Flexbox items.  

- `flex-row` (default)  
- `flex-row-reverse`  
- `flex-col`  
- `flex-col-reverse`  

#### Examples:
```html
<div class="flex flex-row">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<div class="flex flex-col">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

### 3. **Wrap**
Control whether items wrap to the next line.  

- `flex-wrap`  
- `flex-wrap-reverse`  
- `flex-nowrap`  

#### Example:
```html
<div class="flex flex-wrap">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

### 4. **Alignment**

#### Align Items
Control the alignment of items along the cross-axis.  

- `items-start`  
- `items-center`  
- `items-end`  
- `items-baseline`  
- `items-stretch` (default)

#### Align Content
Align the entire content of the Flexbox container when there are multiple rows.  

- `content-start`  
- `content-center`  
- `content-end`  
- `content-between`  
- `content-around`  
- `content-evenly`  

#### Align Self
Align individual items inside the Flex container.  

- `self-auto` (default)  
- `self-start`  
- `self-center`  
- `self-end`  
- `self-stretch`  

#### Examples:
```html
<div class="flex items-center">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

### 5. **Justify Content**
Control how items are aligned along the main axis.  

- `justify-start` (default)  
- `justify-center`  
- `justify-end`  
- `justify-between`  
- `justify-around`  
- `justify-evenly`  

#### Example:
```html
<div class="flex justify-center">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

### 6. **Gap**
Add spacing between Flexbox items.  

- `gap-{value}`  

#### Example:
```html
<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

---

### 7. **Order**
Control the order of items within the Flexbox container.  

- `order-{number}`  
- `order-first`  
- `order-last`  
- `order-none`  

#### Example:
```html
<div class="flex">
  <div class="order-2">Item 1</div>
  <div class="order-1">Item 2</div>
</div>
```

---

### 8. **Grow and Shrink**
Control the ability of items to grow or shrink.  

- `flex-grow` / `grow-{value}`  
- `flex-shrink` / `shrink-{value}`  
- `flex-none`  

#### Examples:
```html
<div class="flex">
  <div class="flex-grow">Item 1</div>
  <div>Item 2</div>
</div>
```

---

## Examples

### Centering an Item
```html
<div class="flex items-center justify-center h-screen">
  <p class="text-center">Centered Content</p>
</div>
```

### Responsive Flex Layout
```html
<div class="flex flex-wrap md:flex-nowrap gap-4">
  <div class="flex-1 bg-blue-200">Item 1</div>
  <div class="flex-1 bg-blue-300">Item 2</div>
  <div class="flex-1 bg-blue-400">Item 3</div>
</div>
```

---

## Customization

You can extend Tailwind's default Flexbox utilities in the `tailwind.config.js` file.

```js
module.exports = {
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
      },
    },
  },
};
```

---

## References

- [Tailwind CSS Flex Documentation](https://tailwindcss.com/docs/flex)
- [CSS Flexbox Guide - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

