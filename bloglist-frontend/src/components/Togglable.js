import { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'

const Togglable = forwardRef((props, refs) => {
  const children = props.children
  const buttonText = props.buttonText
  const hideText = props.hideText || 'cancel'
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

  
  Togglable.displayName = 'Togglable'

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisible}>{buttonText}</button>
      </div>
      <div style={showWhenVisible} className="TogglableContent">
        {children}
        <button onClick={toggleVisible}>{hideText}</button>
      </div>
    </div>
  )
})
Togglable.propTypes = {
  children: PropTypes.any,
  buttonText: PropTypes.string.isRequired,
  hideText: PropTypes.string
}


export default Togglable