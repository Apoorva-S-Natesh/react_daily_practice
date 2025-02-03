import { Route, Routes, Link } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import './components/style.css'
//import {Greeting} from "./Greeting"
//  import React from "react";
//  import Form from "./Form";

// export default function App() {
// 	return (
// 		<>
// 			<Form />
// 		</>
// 	)
// }

export default function App() {
	return (
		<>
		<h1 className='mainheading'>Learning Routing (/home, /about /contact)</h1>
		{/* Navigation Links */}
		<div className='navbar'>
		<Link to='/'><button>Home</button></Link>
		<Link to='/about'><button>About</button></Link>
		<Link to='/contact'><button>Contact</button></Link>
		</div>
		<Routes>
		<Route path="/" element={<Home/>} />
		<Route path="/about" element={<About/>} />
		<Route path="/contact" element={<Contact/>} />
		</Routes>

		</>
	)
}