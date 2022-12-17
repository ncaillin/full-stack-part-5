import PropTypes from 'prop-types'
const TextField = ({text, val, setVal, placeholder, id}) => {
  const outerForm={
    backgroundColor: 'lightblue',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'darkgrey',
    width: '90%',
    margin: 'auto',
    padding: '0px',
    borderRadius: '15px',
    marginBottom: '1%',
    lineHeight: '200%'
  }
  const formInput = {
    width:'80%',
    backgroundColor: 'transparent', 
    borderStyle: 'dashed',
    borderWidth: '1px',
    borderColor: 'white',
    marginLeft: '2%',
    lineHeight: '180%',
    borderRadius: '15px'
  }
  return (
    <div style={outerForm}>
      <div style={{width: '15%', textAlign: 'center', display: 'inline-block'}}>
        {text}
      </div>
      <input style={formInput}
        value={val}
        id={id}
        placeholder={placeholder}
        onChange={(e) => setVal(e.target.value)}
      ></input>
    </div>
  )
}
TextField.propTypes = {
  text: PropTypes.string,
  val: PropTypes.string,
  setVal: PropTypes.func,
  placeholder: PropTypes.string,
  id: PropTypes.string
}

export default TextField