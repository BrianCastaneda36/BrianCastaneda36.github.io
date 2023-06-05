import './App.css';



function MyButton() {
  return (
    <button>Click me!</button>
  );
}

const user = {
  Name: 'Brian Castaneda',
  imageUrl: 'https://media.licdn.com/dms/image/C4E03AQHMlTnFYMv94g/profile-displayphoto-shrink_200_200/0/1549898066475?e=1691625600&v=beta&t=iAHu4xX9Ir2ViTAZXUx4UehGmDXHAZQeBFcosA2GynI',
  imageSize: 300,
};



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{user.Name}</h1>
        <img src={user.imageUrl} className="App-logo" alt="Avatar" style={{width: user.imageSize, height: user.imageSize}}/>
        <p>
          <code>This is written in React</code> <br /> Welcome to my portfolio!
          <br />
          <MyButton />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
