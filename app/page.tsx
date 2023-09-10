import Image from 'next/image'
// import SignUp from "./Component/User/SignUp"

import Link from 'next/link'
import Login from './Component/User/Login/page'
import SignUp from './Component/User/SignUp/page'
import Blog from "./Component/Blog/Home/page"
import MyBlog from "./Component/Blog/MyBlog/page"


export default function Home() {
  return (
    <>
    <Login/> 
    <SignUp/>
    <Blog/>
    {/* <MyBlog/> */}
    
    


      {/* <Link href={"/Component/User/SignUp"}> Sign Up
      </Link>
      <br/>

      <Link href={"/Component/User/Login"}> Login User
      </Link> */}
    </>
  )
}