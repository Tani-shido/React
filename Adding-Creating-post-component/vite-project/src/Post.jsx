
const style = { margin:10, padding: 10, borderWidth: 2, borderRadius: 10, borderColor: "gray", width: 200, backgroundColor: "#dfe6e9" }

export function PostComponent({image, name, subtitle, time, description}){
  return <div style={style}>

    <div style={{ display: "flex" }}>
    <div>
      <img src={image} alt="profile picture" style={{
          width: 50,
          height: 50,
          borderRadius: 20
        }} />
    </div>

    <div style={{ fontSize: 10 , marginLeft: 10 }}>
      <b>{name}</b> <br />
      <div>{subtitle}</div>
      {(time !== undefined) ? <div>{time}</div> : null}  
    </div>
  </div>

  <div style={{fontSize: 12}}>
    {description}
  </div>

  </div>
}

export default PostComponent
