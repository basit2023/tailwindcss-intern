

# Tailwind CSS Installation Guide week1 ,day 1

## Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your system.

## Installation

1. **Create a new project (Optional)**
   ```bash
   mkdir my-tailwind-project
   cd my-tailwind-project
   npm init -y
   ```

2. **Install Tailwind CSS via npm**
   ```bash
   npm install -D tailwindcss@3
   ```

3. **Generate the Tailwind configuration file**
   ```bash
   npx tailwindcss init
   ```
   This will create a `tailwind.config.js` file.

4. **Configure the template paths**
   Add the paths to all of your template files in the `tailwind.config.js` file:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: ["./src/**/*.{html,js}"], // Adjust this to match your project's structure
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

5. **Add Tailwind directives to your CSS file**
   Create a CSS file (e.g., `styles.css`) and add the following:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. **Build your CSS**
   Add a script to your `package.json` for building your CSS:
   ```json
   "scripts": {
     "build": "tailwindcss -i ./src/styles.css -o ./dist/output.css --watch"
   }
   ```
   Run the build process:
   ```bash
   npm run build
   ```

---

## Tailwind CSS Color Property

Tailwind CSS comes with a default color palette that you can easily use to style your application. Colors are defined as utility classes like `bg-blue-500`, `text-red-600`, etc. These color classes are based on a shade scale (from 50 to 900).

### Customizing Colors in the Theme Layer

To customize the color palette, you can extend the `theme` in the `tailwind.config.js` file. Here's how you can extend the colors:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3abff8',
          DEFAULT: '#0284c7',
          dark: '#1d4ed8',
        },
        secondary: '#facc15',
      },
    },
  },
};
```

### Explanation of Color Properties

1. **Default Theme Colors:**
   - Tailwind's default color system includes a range of colors and shades like `bg-blue-500`, `text-red-600`.
   - Example usage:
     ```html
     <div class="bg-blue-500 text-white p-4">Hello World!</div>
     ```

2. **Extended Custom Colors:**
   - When extending the color palette, you can define custom colors as shown above with properties like `primary`, `secondary`.
   - You can use these colors like this:
     ```html
     <div class="bg-primary text-white">Primary Background</div>
     <div class="text-secondary">Secondary Text</div>
     ```

3. **Custom Layers and Variants:**
   - You can create custom layers using Tailwind utilities or custom classes.
   - You may define custom variants (like responsive breakpoints or hover states) using plugins or the `extend` configuration.

### Example of Custom Colors and Variants

Here's an example of how to add custom variants and colors:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0d9488',
          light: '#99f6e4',
          dark: '#115e59',
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // Enable 'active' state
      textColor: ['focus-visible'], // Enable 'focus-visible' variant
    },
  },
};
```

### Using Custom Colors in HTML
You can use the new `brand` colors in your HTML as shown below:

```html
<button class="bg-brand hover:bg-brand-dark text-white p-3 rounded">Click Me</button>
```
