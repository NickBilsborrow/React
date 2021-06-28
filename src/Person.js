import Pet from'./Pet'

const Person = (props) =>{
  
    return (
    <div>
      <p>Hello my name is {props.name} and i am {props.age}.</p>
      <Pet name = {props.petName}/>
  </div>)
  };
  export default Person;