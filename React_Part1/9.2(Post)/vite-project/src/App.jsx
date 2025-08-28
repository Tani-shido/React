import { useState } from 'react';
import { PostComponent } from "./Post";

// Thiis App() is exported in index file and whatever html we return in it exported in index.html file and it renders passes html on screen
function App() {

  const [posts , setPosts] = useState([]);

  const postComponents = posts.map(post => <PostComponent 
    name = {post.name}
    subtitle = {post.subtitle}
    time = {post.time}
    description = {post.description}
    image = {post.image}
  />)

  function addPost() {
    setPosts([...posts , {
  name: "Tanishq Dehariya",
  subtitle: "Proud Stoner",
  time: "420m ago",
  description: "To smoke weed in peace",
  image: "https://www.shutterstock.com/image-vector/vector-illustration-red-stoned-eyes-260nw-2259730105.jpg"

    }])
  }

  return (
    <div style={{ backgroundColor: "#b2bec3", height: "100vh" }}>
      <button onClick={addPost}>Add Posts</button>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
          {postComponents}
        </div>
      </div>
    </div>
  )

} 























// Basics Are Here

// components

// const style = { padding: 10, borderWidth: 2, borderRadius: 10, borderColor: "gray", width: 200, backgroundColor: "#dfe6e9" }

// function PostComponent({image, name, subtitle, time, description}){
//   return <div style={style}>

//     <div style={{ display: "flex" }}>
//     <div>
//       <img src={image} alt="profile picture" style={{
//           width: 50,
//           height: 50,
//           borderRadius: 20
//         }} />
//     </div>

//     <div style={{ fontSize: 10 , marginLeft: 10 }}>
//       <b>{name}</b> <br />
//       <div>{subtitle}</div>
//       {/* This is Conditional rendering */}
//       {(time !== undefined) ? <div>{time}</div> : null}  
//     </div>
//   </div>

//   <div style={{fontSize: 12}}>
//     {description}
//   </div>

//   </div>
// }
//   return (
//     <div style={{ backgroundColor: "#b2bec3", height: "100vh" }}>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <div>
//           <div>
//           <PostComponent 
//           image = {"https://www.shutterstock.com/image-vector/vector-illustration-red-stoned-eyes-260nw-2259730105.jpg"}
//           name = {"Tanishq Dehariya"}
//           subtitle = {"8 followers"}
//           time = {"12h ago"}
//           description = {"Want to smoke? Check out how we roll joints and shares with all."}
//           />
//         </div> <br />
//         <div>
//           <PostComponent image = {"https://hempstreet.in/wp-content/uploads/2020/02/a-man-holding-a-marijuana-leaf.jpg"}
//           name = {"Alka The Pedlar"}
//           subtitle = {"Promoted by us"}
//           time = {""}
//           description = {"Want to buy some doobie? Check out my stuff and You will be begging for more and MORE."}
//           />
//         </div> <br />
//         <div>
//           <PostComponent
//           image = {"https://www.shutterstock.com/image-vector/vector-illustration-red-stoned-eyes-260nw-2259730105.jpg"}
//           name = {"Tanishq Dehariya"}
//           subtitle = {"8 followers"}
//           time = {"12h"}
//           description = {"Want to smoke? Check out how we roll joints and shares with all."}
//           />
//         </div>
//         <div>
//           <ToggleButton/>
//           </div>
//         </div>
//       </div>
      
// //     </div>
//     )
// function ToggleButton() {
//   let [isVisible, setisVisible] = useState(true); //This is defining  state variable (State variable is a var which gets rendered by react if there is any changes)

//   function toggle() {
//     setisVisible(!isVisible);
//   }

//   return (
//   <div>
//     <button onClick={toggle} style={{ marginTop: 10 }}>Toggle message</button>
//     {isVisible && <p>This is a conditional message!</p>}
//   </div>
//   )
// }

export default App
