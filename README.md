<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Kristiyan-Ivanov/repo_name">
    <img src="src/assets/calculator.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Simple React Calculator</h3>

  <p align="center">
    This is a simple calculator application build with React. With the main purpouse of me learning frontend development with React.
    <br />
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

This repo represent my first steps in learning React and expanding my frontend knowledge.

Topics covered:

- React hooks: `useState`, `useCallback`, `useEffect`
- Custom hook architecture (`useCalculator`) for separating UI from business logic
- Component composition and props (`Calculator`, `Display`, `ButtonsGrid`, `Button`)
- Rendering from configuration data (`buttons` constants)
- Utility-driven validation and expression handling (`calculatorLogic.js`)
- Conditional rendering and timed UI feedback (`ErrorNotification`)
- Dynamic UI styling based on state (adaptive display font size)
- Third-party library integration (`mathjs`) for expression evaluation

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- <a href="https://mathjs.org/"><img src="https://mathjs.org/css/img/mathjs.svg" style="width:86.25px;height:28px"></img></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Set up the calculator locally with npm.

### Prerequisites

You need:

- Node.js (LTS recommended, v20 or newer)
- npm (comes with Node.js)
- Git (optional, for cloning)

Check your versions:

```sh
node -v
npm -v
```

### Installation

1. Clone the repo
   ```sh
   git clone <your-repo-url>
   cd react-calculator
   ```
2. Install dependencies
   ```sh
   npm install
   ```
3. Start the development server
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[product-screenshot]: src/assets/calculator.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
