
type ButtonFunc = {
  num: number;
  time:number;
  name:string;
}
export default function Card({num,time,name}:ButtonFunc){
  return (
    <>
    
    <h1>{name}</h1>
    {time}
    {num}
    <h1>Hello world </h1>
    </>
  )
}


export function HigherOrderComponent(Card:any){
  return ({num,time,name}:ButtonFunc)=> (
    <div>
    <label>Hello World As a Label</label>
    <Card num={num} time={time} name={name}/>
    </div>

  )
}
