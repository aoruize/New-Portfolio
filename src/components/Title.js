import React from "react"

const Title = ({title, subtitle}) => {
  return <div className="section-title">
    <h1>{title || 'default title'}</h1>
    <h4>{subtitle || ''}</h4>
  </div>
}

export default Title
