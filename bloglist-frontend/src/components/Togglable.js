import { useState, forwardRef, useImperativeHandle } from "react"

const Togglable = forwardRef((props, refs) => {
  const children = props.children
  const buttonText = props.buttonText
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisible = () => {
    setIsVisible(!isVisible)
  }
  const showWhenVisible = {display: isVisible ? '' : 'none'}
  const hideWhenVisible = {display: isVisible ? 'none' : ''}

  useImperativeHandle(refs, () => {
    return {
      toggleVisible
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisible}>{buttonText}</button>
      </div>
      <div style={showWhenVisible}>
        {children}
        <button onClick={toggleVisible}>cancel</button>
      </div>
    </div>
  )
})


export default Togglable