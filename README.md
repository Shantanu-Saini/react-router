# Project README

This project is a simple React application that demonstrates various concepts such as routing, component composition, state management, and fetching data from an API. Below is a brief summary of the concepts used in this project:

## Components
- **Navbar**: A navigation bar component displayed at the top of each page.
- **Footer**: A footer component displayed at the bottom of each page.
- **Home**: Renders the home page content.
- **About**: Renders information about the project.
- **Contact**: Renders contact information.
- **User**: Renders user-specific information based on the URL parameter.
- **Github**: Fetches and displays the number of public repositories of a GitHub user.

## Routing
- **React Router**: Used for declarative routing in the application.
- Routes are defined using the `createBrowserRouter` function provided by `react-router-dom`.
- Different components are rendered based on the defined routes.
## Routing

Routing in this project is implemented using React Router, a popular library for declarative routing in React applications. Here's how routing is configured and utilized:

### Configuration
- The `createBrowserRouter` function from the `react-router-dom` library is used to create a router instance.
- Routes are defined as an array of route objects containing path and element properties.
- Each route object specifies a path and the corresponding component element to render.

### Route Structure
- The route structure consists of a hierarchy where routes are nested within each other.
- The main route ("/") contains the top-level `App` component.
- Child routes are defined within the `App` component, specifying nested components for different paths.

### Route Rendering
- The `Outlet` component from `react-router-dom` is used to render child routes within the parent route.
- Inside the `App` component, the `Outlet` component renders the appropriate child component based on the current URL path.

### Example:
```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'user/:userid',
        element: <User />
      },
      {
        path: 'github',
        element: <Github />
      }
    ]
  }
])
```
#### Explanation:
- The main route "/" renders the App component.
- Child routes are defined within the App component:
 - An empty path ('') corresponds to the home page (<Home />).
 - Paths like '/about', '/contact', '/user/:userid', and '/github' render their respective components (<About />, <Contact />, <User />, <Github />).
 - The ':userid' parameter in the 'user/:userid' path is a dynamic parameter that captures user IDs.

#### Dynamic Routing
- Dynamic routing is achieved using parameters like ':userid'.
- These parameters can capture dynamic values from the URL, enabling dynamic content rendering.
- The useParams hook from react-router-dom is used to access the parameter values within the component.

## State Management
- **useState**: Used to manage state within functional components.
- State is used in the `Github` component to store data fetched from the GitHub API.

## Effects and Lifecycle
- **useEffect**: Used to perform side effects in functional components.
- Fetches data from the GitHub API when the `Github` component mounts.

## Fetching Data
- **Fetch API**: Used to fetch data from the GitHub API in the `Github` component.
- Data fetched includes the number of public repositories of a GitHub user.

## Styling
- Tailwind CSS classes are used for styling components.
- Classes are applied to elements to achieve layout and styling.

## Project Structure
- Components are organized into separate files within the `components` directory.
- The main `App` component composes the `Navbar`, `Footer`, and other page components.
- Routing configuration is defined in the `index.jsx` file.

## Entry Point
- The application is rendered into the DOM using `ReactDOM.createRoot` method.
- RouterProvider wraps the application with the router configuration.

## Development Environment
- The project uses React development environment to build and run the application.
- Dependencies such as `react`, `react-dom`, and `react-router-dom` are used.

