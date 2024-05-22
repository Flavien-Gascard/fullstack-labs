React Element Attributes
    Since JSX is really JavaScript and JavaScript uses a camelcase naming convention (that is, “camelCase”), attributes are written differently than HTML.
        <div className="container"></div>

React Element Styles
    To apply inline styles, instead of using double quotes (“”), we use two sets of curly braces.
        <h1 style={{ fontSize: 24, margin: '0 auto', textAlign: 'center' }}>My header</h1>

React Fragments
    If we don’t want to wrap our elements in a container element like a div, we can use a fragment:
        // valid syntax
        function MyComponent() {
        return (
            <>
                <h1>My header</h1>
                </p>My paragraph</p>
            </>
            );
        } 

React Components
    We can organize groups of elements into React components.
    A basic function component is written similarly to a regular JavaScript function with a couple of differences.  
        Component names must start with a capital letter (that is, MyComponent, instead of myComponent)
        Components, unlike JavaScript functions, must return JSX.
          
          function App() {
  return (
     <div>Hello world!</div>
  );
}   

React Props
    React components can accept data passed to them called props.
    Props are passed from the parent component to a child component.
    Here we are passing a prop name from App to the User component.
        function App() {
          return <User name="John Doe" />
        }

        function User(props) {
            return <h1>Hello, {props.name}</h1>; // Hello, John Doe!
        }

    Props is an object, so we can select the name prop within User to get its value.

    To embed any dynamic value (that is, a variable or expression) within JSX, you must wrap it in curly braces.
    Since we are only using the name property on the props object, we can make our code simpler with object destructuring:

      function App() {
        return <User name="John Doe" />
    }

        function User({ name }) {
            return <h1>Hello, {name}!</h1>; // Hello, John Doe!
        }

    Any JavaScript value can be passed as a prop, including other elements and components.

React Children Props
    Props can also be passed by placing data between the opening and closing tags of a component.
    Props that are passed this way are placed on the children property.

        function App() {
            return (
                <User>
                <h1>Hello, John Doe!</h1>
                </User>
            );
        }

        function User({ children }) {
            return children; // Hello, John Doe!
        }