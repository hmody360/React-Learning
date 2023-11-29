import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header.js"
import MainContent from "./MainContent.js"
import Footer from "./Footer.js"
import "./index.css";

// ReactDOM.render(<h1>Hello, Everyone!</h1>, document.getElementById("root"))

// ReactDOM.render(<ul><li>Omar</li><li>Mohammed</li></ul>, document.getElementById("root"))

//Challenge 1 Completed
//------------------------------------------------------------------

// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// const MainContent = () => {
//     return (<h1>Hello, I'm Learning React</h1>)
// }

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )

// Challenge 2 Completed
//------------------------------------------------------------------

// Vanilla JS
// const root = document.getElementById("root")

// const header = document.createElement("h1")
// header.textContent = "React is AWESOME"
// header.className = "header"
// root.appendChild(header)

// const page = (
// <div>
//     <h1 className="header">React is Awesome</h1>
//     <p>So Learn IT!</p>
// </div>
// )
// // React
// console.log(page);
// ReactDOM.render(page, root)

// Challenge 3 Completed
// Challenge 4 Completed
//------------------------------------------------------------------
// const root = document.getElementById("root")

// const Navbar = (
//     <nav>
//         <h1>GamerZ</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )
// ReactDOM.render(Navbar, root)
//Challenge 5 Completed
//------------------------------------------------------------------
// const page = (
//     <div>
//         <h1>Mario's Pizzaria</h1>
//         <p>This is the best Pizza place</p>
//         <button>Click to Shop</button>
//         <ul>
//             <li>Mario</li>
//             <li>Luigi</li>
//             <li>Princess Peach</li>
//         </ul>
//     </div>
// )

// document.getElementById("root").append(JSON.stringify(page))
// ReactDOM.render(page, document.getElementById("root"))
//Challenge 6 Completed
//------------------------------------------------------------------
// Building HTML for Static React Website

// const root = document.getElementById("root")

// const page = (
//     <div>
//         <img width="90" src="images/React-icon.svg.png"/>
//         <h1>Fun Facts about React</h1>
//         <ul>
//             <li>was first released in 2013</li>
//             <li>was originally created by Jordan Walke</li>
//             <li>has well over 100k stars on Github</li>
//             <li>is maintained by Meta</li>
//             <li>Powers thousands of entrprise apps, including mobile apps</li>
//         </ul>

//     </div>
// )
// ReactDOM.render(page, root)
//Challenge 7 Completed
//------------------------------------------------------------------


const App = () => {
    return (
        <div className="page-container">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)
// Challenge 8 (1&2/2)  & 9 & 10 Completed
//------------------------------------------------------------------