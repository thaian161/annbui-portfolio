# Project Set up:

1. Go to [NextJS](https://nextjs.org/docs/getting-started), copy and run the command `npx create-next-app@latest annbui-portfolio` to create NextJS project
2. Go to [TailwindCSS](https://tailwindcss.com/docs/installation), copy and run the command `npm install -D tailwindcss` to install Tailwind
3. Generate tailwind config file `npx tailwindcss init`
4. To see project on browser, run `npm run dev`

# Clean Up Unused Files/Code

- Clean unused files/code. We won't be using className={styles.container} which is NextJS modules => remove all of that. Edit app title and favicon accordingly
- In `styles/globals.css` remove `@media query` since we will be using Tailwind instead
- In `styles/globals.css` add `@tailwind base; @tailwind components; @taildwind utilities;`
