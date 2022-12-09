const TextField = ({text, val, setVal}) => {
  return (
    <div style={{paddingBottom: '4px'}}>
      {text}
      <input
        value={val}
        onChange={(e) => setVal(e.target.value)}
      ></input>
    </div>
  )
}

export default TextField