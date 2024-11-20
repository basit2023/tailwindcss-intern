

# Tailwind CSS Typography Guide Week 1 day2

This guide covers how to effectively use Tailwind CSS typography utilities to style and customize text in your project. Tailwind CSS offers a wide range of utilities to handle fonts, sizes, spacing, line heights, text transformations, and more. This guide also introduces the `@tailwindcss/typography` plugin, which provides beautiful defaults for rich content.

---

## Table of Contents

1. [Basic Typography Utilities](#basic-typography-utilities)
   - [Text Sizes](#text-sizes)
   - [Font Weight](#font-weight)
   - [Line Height (Leading)](#line-height-leading)
   - [Letter Spacing](#letter-spacing)
   - [Text Color](#text-color)
   - [Text Alignment](#text-alignment)
2. [Advanced Typography](#advanced-typography)
   - [Custom Fonts](#custom-fonts)
   - [Responsive Typography](#responsive-typography)
3. [Prose Plugin for Rich Text](#prose-plugin-for-rich-text)
   - [Installing the Plugin](#installing-the-plugin)
   - [Using the Prose Plugin](#using-the-prose-plugin)
   - [Customizing the Prose Plugin](#customizing-the-prose-plugin)

---

## 1. Basic Typography Utilities

### Text Sizes

Tailwind CSS provides utilities for setting text sizes. Example usage:

```html
<p class="text-xs">Extra small text</p>
<p class="text-base">Base text (default)</p>
<p class="text-lg">Large text</p>
<p class="text-4xl">4x large text</p>
```

Common sizes include `text-xs`, `text-sm`, `text-base`, `text-lg`, up to `text-9xl`.

### Font Weight

Control font weight using classes like `font-light`, `font-normal`, `font-bold`, etc.

```html
<p class="font-thin">Thin weight text</p>
<p class="font-semibold">Semibold weight text</p>
<p class="font-black">Black weight text</p>
```

### Line Height (Leading)

You can set the line height using `leading-*` utilities:

```html
<p class="leading-none">No line spacing</p>
<p class="leading-tight">Tight line height</p>
<p class="leading-relaxed">Relaxed line height</p>
<p class="leading-loose">Loose line height</p>
```

### Letter Spacing

Adjust the letter spacing using `tracking-*` utilities:

```html
<p class="tracking-tighter">Tighter letter spacing</p>
<p class="tracking-normal">Normal letter spacing</p>
<p class="tracking-wide">Wide letter spacing</p>
```

### Text Color

Set text colors using Tailwind's color utilities:

```html
<p class="text-red-500">This text is red</p>
<p class="text-blue-700">This text is dark blue</p>
<p class="text-gray-900">This text is nearly black</p>
```

### Text Alignment

Align text with utilities like `text-left`, `text-center`, `text-right`, or `text-justify`:

```html
<p class="text-left">Left aligned text</p>
<p class="text-center">Center aligned text</p>
<p class="text-right">Right aligned text</p>
<p class="text-justify">Justified text</p>
```

---

## 2. Advanced Typography

### Custom Fonts

You can add custom fonts by extending the `fontFamily` key in your `tailwind.config.js` file:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
};
```

Example usage:

```html
<p class="font-sans">This text uses a custom sans-serif font</p>
<p class="font-serif">This text uses a custom serif font</p>
```

### Responsive Typography

Apply different typography settings based on screen sizes using responsive modifiers. For example:

```html
<p class="text-base md:text-lg lg:text-xl">This text size changes based on screen size.</p>
```

---

## 3. Prose Plugin for Rich Text

The `@tailwindcss/typography` plugin is designed for content-rich pages (e.g., blog posts).

### Installing the Plugin

Install the plugin using npm:

```bash
npm install @tailwindcss/typography
```

Add it to your `tailwind.config.js` file:

```javascript
// tailwind.config.js
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
```

### Using the Prose Plugin

The `prose` utility applies beautiful default styling to rich content elements:

```html
<article class="prose">
  <h1>Article Title</h1>
  <p>This is a paragraph inside a rich text article.</p>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</article>
```

### Customizing the Prose Plugin

You can extend or customize the plugin's default styles:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700'),
              },
            },
          },
        },
      }),
    },
  },
};
```

Use the `prose` utility with responsive variants:

```html
<article class="prose lg:prose-xl">
  <p>This paragraph uses responsive typography.</p>
</article>
```

---

## Additional Resources

- [Tailwind CSS Typography Utilities](https://tailwindcss.com/docs/typography)
- [Typography Plugin Documentation](https://tailwindcss.com/docs/typography-plugin)
