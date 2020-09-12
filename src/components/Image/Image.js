import React from 'react' 

const Image = (props) => {
console.log(props)

  return ( 
    <div>
      <img src={`https://farm${props.data.farm}.staticflickr.com/${props.data.server}/${props.data.id}_${props.data.secret}.jpg`}  alt= {`${props.data.title}`} width="100" height="60"/>
  
    </div> 
  )
}

export default Image


// {`https://farm${props.data.farm}.staticflickr.com/${props.data.server}/${props.data.id}_${props.data.secret}.jpg`}