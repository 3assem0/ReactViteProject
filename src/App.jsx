import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Swal from "sweetalert2";
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './Home/Home'
import About from './About/About'
import Contact from './Contact/Contact'
import Portfolio from './Portfolio/Portfolio'
import NotFound from './NotFound/NotFound'
import Layout from './Layout/Layout'


function App() {
  let router = createBrowserRouter([
    {
      path: '',element: <Layout/>,children: [
    { index:true, element: <Home/>},
    { path: 'About', element: <About/>},
    { path: 'Contact', element: <Contact/>},
    { path: 'Portfolio', element: <Portfolio/>},
    { path: '*', element: <NotFound/>}
     ]
    }
  ])
      
  return  <>
      <RouterProvider router={router}></RouterProvider>
    </>
}

export default App




































// function App() {
//   const [products, setproducts] = useState([
//     {
//       name: 'Ipgone 13',
//       price: 1000, 
//       category: 'mobile',
//       desc:'very Good',
//       hasSale: true,
//       count:5
      
//     },{
//       name: 'Ipgone 12',
//       price: 1000, 
//       category: 'mobile',
//       desc:'very Good',
//       hasSale: false,
//       count:5
//     },{
//       name: 'Ipgone 11',
//       price: 1000, 
//       category: 'mobile',
//       desc:'very Good',
//       hasSale: true,
//       count:5
//     },{
//       name: 'Ipgone 10',
//       price: 1000, 
//       category: 'mobile',
//       desc:'very Good',
//       hasSale: false,
//       count:5
//     },{
//       name: 'Ipgone9',
//       price: 1000, 
//       category: 'mobile',
//       desc:'very Good',
//       hasSale: false,
//       count:5
//     },{
//       name: 'Ipgone 8',
//       price: 1000, 
//       category: 'mobile',
//       desc:'very Good',
//       count:5
//     },{
//       name: 'Ipgone 7',
//       price: 1000, 
//       category: 'mobile',
//       desc:'very Good',
//       hasSale: true,
//       count:5
//     },{
//       name: 'Ipgone 6',
//       price: 1000, 
//       category: 'mobile',
//       desc:'very Good',
//       hasSale: true,
//       count:5
//     }
//   ]);


//     // component did mount => fetch APIs
//     // useEffect(() => {
//     //   console.log("mount");
//     // },[])
//     // component did Update
//     // useEffect(() => {
//     //   console.log("update");
//     // })
//     // component will unmount => clean up
//     // useEffect(() => {
//     //   return () => {
//     //   }
//     // })
//     useEffect(() => {
//       console.log("hi");
//     },[products])

//       function deleteProduct(index) {
//         const swalWithBootstrapButtons = Swal.mixin({
//           customClass: {
//             confirmButton: "btn btn-success",
//             cancelButton: "btn btn-danger"
//           },
//           buttonsStyling: true
//         });
//         swalWithBootstrapButtons.fire({
//           title: "Are you sure?",
//           text: "You won't be able to revert this!",
//           icon: "warning",
//           showCancelButton: true,
//           confirmButtonText: "Yes, delete it!",
//           cancelButtonText: "No, cancel!",
//           reverseButtons: true
//         }).then((result) => {
//           if (result.isConfirmed) {
//             swalWithBootstrapButtons.fire({
//               title: "Deleted!",
//               text: "Your file has been deleted.",
//               icon: "success"
//             }).then(() => {
//               // deep copy from products
//             let copyOfProducts = [...products]
//             // Update in deep copy
//             copyOfProducts.splice(index,1);
//             // setState
//             setproducts(copyOfProducts)
//             });
//           } else if (
//             /* Read more about handling dismissals below */
//             result.dismiss === Swal.DismissReason.cancel
//           ) {
//             swalWithBootstrapButtons.fire({
//               title: "Cancelled",
//               text: "Your imaginary file is safe :)",
//               icon: "error"
//             });
//           }
//         });
          
//       }

//       function changeCount(index,count){
//         if(count == 0){
//           deleteProduct(index)
//         }else{
//             // deep copy from products
//             let copyOfProducts = [...products]
//             // Update in deep copy
//             copyOfProducts[index].count = count
//             // setState
//  setproducts(copyOfProducts)
//           }
//         }
       
      
//   return  <>
//     <div className=" container pt-20 mt-8 mx-auto">
//       <div className="grid gap-4 grid-cols-3">
//         {
//           products.map((products,index) => {
//             return <Product key={index} {...products} deleteProduct={deleteProduct} changeCount={changeCount} index={index}/>
//           })
//         }
//       </div>
//     </div>
//     </>
// }

// export default App
