const Template = (props) =>{
  
    return (<div className="div">
        <img src = {props.Img} alt={props.imgalt}/>
        <h1> {props.Title}</h1>
        <p>{props.Info}</p>
    </div>)
  
  };
  export default Template;