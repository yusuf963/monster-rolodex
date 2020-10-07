import React, {Component} from "react"
import ReactDOm from "react-dom"

let skiDay ={
  total:20,
  powder:10,
  country: 98,
  goal:3
}

class SkiDayCounter extends React.Component{
  
  render(){
    const {total, powder, country, goal}= this.props
    return(
      <section>
        <div>
          <p> Total {total} </p>
        </div>
        <div>
          <p>Powder; {powder}</p>
        </div>
        <div>
          <p> Country : {country}</p>
        </div>
        <div>
          <p>Goal : {goal}</p>
        </div>
      </section>
    )
  }
}

ReactDOm.render(
  <>
  <SkiDayCounter
    total={skiDay.total}
    powder={skiDay.powder}
    country={skiDay.country}
    goal={skiDay.goal}
  />
  </>,
  document.getElementById('root')
)