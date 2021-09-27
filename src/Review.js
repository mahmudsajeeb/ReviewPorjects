import React,{useState} from 'react'
import people from './data'
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'
export default function Review() {
  const [index,setIndex] = useState(0)
  const {name,job,image,text} =people[index]

  function CheckNumber(number){
    if(number >people.length-1){
      return 0
    }
    if(number <0){
      return people.length-1
    }
    return number
  }
  function prevPerson(){
    setIndex((index)=>{
      let newIndexDec = index - 1
      return CheckNumber(newIndexDec)
    })
  }


  const randomPerson = () =>{
    let randomNumber =Math.floor(Math.random() * people.length)
    if(randomNumber ===index){
      randomNumber = index +1;
    }
    setIndex(CheckNumber(randomNumber))
  }
  function nextPerson(){
    setIndex((index)=>{
      let newIndex = index +1
      return CheckNumber(newIndex)
    })
  }
  return (
    <article className="review">
    <div className="img-container">
        <img src={image} className="person-img" alt={image} />
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <div className="info">{text}</div>
   <div className="button-container">
   <button className="prev-btn" onClick={prevPerson}>
      <FaChevronLeft  />
    </button>
    <button className="next-btn"  onClick={nextPerson}>
      <FaChevronRight  />
    </button>
   </div>
    <button onClick={randomPerson} className="random-btn">Suprise Me </button>
    </article>
  )
}
