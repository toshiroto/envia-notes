import './App.css';
import SearchParams from './components/SearchParams';

// const API_URL = "http://localhost:3000/api/v1/women"

// function getAPIData() {
//   return axios.get(API_URL).then((response) => response.data)
// }

// function App() {
//   const[women, setWomen] = useState([]);

//   useEffect(() => {
//     let mounted = true;
//     getAPIData().then((items) => {
//       if (mounted) {
//         setWomen(items);
//       }
//     });

//     return () => (mounted = false)
//   }, []);


//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <Women women={women} />
//     </div>
//   );
// }

const App = () => {
  return (
    <div>
      <h1>The Women of Fundación En Vía</h1>
      <SearchParams />
    </div>
  )
}
export default App;
