import './App.css';
// import BrowseJobs from './components/BrowseJobs';
// import Hero from './components/Hero';
// import HomeCards from './components/HomeCards';
// import Main from './components/Main';
// import Navbar from './components/Navbar';
// import ViewAllJobs from './components/ViewAllJobs';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import HomePage from './pages/HomePage';

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage />} />)
);
function App() {
  return <RouterProvider router={router} />;
  // const name = 'Xeven';
  // const x = 10;
  // const y = 20;
  // const loggedIn = true;
  // const names = ['Xeven', 'Xeven', 'Xeven', 'Xeven'];
  // const styles = {
  //   color: 'purple',
  //   fontFamily: 'Helvetica',
  // };
  // if (loggedIn) {
  //   return 'Hi Congrats User';
  // }
  //   return (
  //     <RouterProvider/>
  //       {/* {
  //         <>
  //           <Navbar />
  //           <Hero title='Test Title' subtitle='This is subtitle' />
  //           <HomeCards />
  //           <BrowseJobs />
  //           <ViewAllJobs />
  //           <div className='text-5xl'>Ahmad</div>
  //           <p style={{ color: 'red', fontSize: '20px' }}>Hi {name}</p>
  //           <h3 style={styles}>sum of x and y is {x + y}</h3>
  //           {loggedIn && <div>Hi Congrats User</div>}
  //           <ul>
  //             {names.map((name, index) => (
  //               <li key={index}>{name}</li>
  //             ))}
  //           </ul>
  //         </>
  //       } */}

  //   );
  // }
}
export default App;
