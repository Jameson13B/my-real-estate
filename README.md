![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

# My Real Estate

This project is the beginning of a service to offer real estate agents their own website. This website will be customizable and can be self served by the agent themselves. The goal is to provide agents the ability to integrate their business digitally while saving money on expensive managed sites.

## Authors

- Engineer - [@Jameson13B](https://github.com/Jameson13B)
- UI/UX Designer - [@Christopher-Brown1](https://github.com/Christopher-Brown1)

## Roadmap

- Design Files and Wireframes
- Discovery of MVP Features
- Build MVP product
- Discovery of future enhancements
- Build future enhancements

## Tech Stack

**Client:** <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="60"/> <img src="https://vitejs.dev/logo.svg" width="60"/> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png" width="90">

**Serverless:**<img src="https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" alt="drawing"/> <img src="https://firecms.co/img/firecms_logo.svg" alt="drawing" width="60"/>

## Run Locally

Clone the project, installs dependencies, and start dev server

```bash
  git clone https://link-to-project
  cd my-project
  npm install
  npm run dev
```

## Acknowledgements

- [FireCMS](https://firecms.co)
- [Atomic10 Studio](https://atomic10.studio)
- [Barely Fiction Design](https://barelyfiction.design)

---

---

---

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
