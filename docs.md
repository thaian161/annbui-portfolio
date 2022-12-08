# Project Set up:

1. Go to [NextJS](https://nextjs.org/docs/getting-started), copy and run the command `npx create-next-app@latest annbui-portfolio` to create NextJS project
2. Go to [TailwindCSS](https://tailwindcss.com/docs/installation), copy and run the command `npm install -D tailwindcss` to install Tailwind
3. Generate tailwind config file `npx tailwindcss init`
4. To see project on browser, run `npm run dev`
5. In `styles/globals.css` add `@tailwind base; @tailwind components; @tailwind utilities;` on top of the file

- Install `Tailwind CSS IntelliSense`

```
"editor.quickSuggestions": {
  "strings": true
}
```

6. Install React Icons `npm i react-icons`
7. Run

```
npm install -D tailwindcss postcss aut
oprefixer
npx tailwindcss init -p`
```

# Clean Up Unused Files/Code

- Clean unused files/code. We won't be using className={styles.container} which is NextJS modules => remove all of that. Edit app title and favicon accordingly
- In `styles/globals.css` remove `@media query` since we will be using Tailwind instead

# Develop Mobile First

## Building <Nav>

- Directly styling using className, example `h-screen` = make an element span the entire height of the viewport.
- In `tailwind.config.js` file, follow instruction on [2. Configure your templaye paths](https://tailwindcss.com/docs/installation), add the below code

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts.jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

- Href link open in another tab
  `target="_blank"` = open link in a new tab
  `rel="noopener noreferrer"` = prevent possible malicious attacks from the pages you link to

```
<a
href="https://resume.creddle.io/resume/j1ryfjyu3f1"
target="_blank"
rel="noopener noreferrer">
Resume
</a>
```

- In `index.js` import and use React Icons by `import {BsFillMoonStarsFill} from 'react-icons/bs';`
- `py-10` = padding width 10 (top & bottom) or just use `p` for padding, `pt = padding top`, `pb=padding bottom`...etc

```.py-10 {
  padding-top: 2.5rem/* 40px */;
  padding-bottom: 2.5rem/* 40px */;
}
```

- super cool and fast way to do background gradient, exampl below

```
<a className="bg-gradient-to-r from-cyan-300 to-pink-300 text-white >
```

## Custom Our Own Theme Color

- in the `tailwind.config.js`, under theme > extend, we can customize our own color.
- use google font following this docs [How To use Google Fonts in TailwindCSS](https://dev.to/avneesh0612/how-to-use-google-fonts-in-tailwindcss-5050)

## Import and use Image in Index.js

- import Image to use in index.js using `import Image from 'next/image';` then import your photo `import AnnBuiPhoto from '../public/AnnBuiPhoto.jpeg'; `

# Responsive

- With the Mobile First developing approach, whatever come first will be set as default, use `md:px-20` to set padding for medium screeen, use `lg:px-40` to set padding for large screen.

# Dark Mode

- Import `useState`
- in the `tailwind.config.js` file, add `darkMode: "class"` in the module.exports
- add `className={darkMode ? 'dark' : ''}` to the div that wrap the entire page, if it is darkMode then add class "dark", otherwise, do not add anything (empty string)
- hookup onClick function to the darkMode Toggle Button

```
onClick={() => setDarkMode(!darkMode)}
```

- now add `dark:bg-gray-900` for example to the background of the entire app. Similar to the way we use `md:......` or `lg:.......` for responsive design

# Fix the weirdly uneven larger margin on the right side on Mobile View

- Simply add the `meta tag` to the `Head` component `<meta name="viewport" content="width=device-width, initial-scale=0.7" />`
  BOOMMMMM save the day LOL
