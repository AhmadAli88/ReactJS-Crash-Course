import './App.css';

function App() {
  const name = 'Xeven';
  const x = 10;
  const y = 20;
  const loggedIn = true;
  const names = ['Xeven', 'Xeven', 'Xeven', 'Xeven'];
  const styles = {
    color: 'purple',
    fontFamily: 'Helvetica',
  };
  // if (loggedIn) {
  //   return 'Hi Congrats User';
  // }
  return (
    <>
      {
        <>
          <div className='text-5xl'>Ahmad</div>
          <p style={{ color: 'red', fontSize: '20px' }}>Hi {name}</p>
          <h3 style={styles}>sum of x and y is {x + y}</h3>
          {loggedIn && <div>Hi Congrats User</div>}
          <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </>
      }
    </>
  );
}

export default App;
