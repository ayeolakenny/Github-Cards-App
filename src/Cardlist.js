import React from "react"
import Card from "./Card"

const Cardlist = props => {
  return(
    <div>
      {props.profiles.map(profile => <Card key={profile.id}{
        ...profile
      } />)}
    </div>
  )
}

export default Cardlist