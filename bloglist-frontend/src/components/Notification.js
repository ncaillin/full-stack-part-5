const Notification = ({notification}) => {
  if (notification.message === null) {
    return <div style={{
      paddingTop: '57px',
    }}></div>
  }
  if (notification.type === 'info') {
    return (
      <InfoNotification message={notification.message} />
    )
  }
  if (notification.type === 'error') {
    return (
      <ErrorNotification message={notification.message} />
    )
  }
}

const InfoNotification = ({message}) => {
  const style = {
    color: 'green',
    fontSize: '20px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'black',
    backgroundColor: '#f1f2eb',
    paddingTop: '10px',
    paddingBottom: '10px',
    textAlign: 'center',
    width: '50%',
    marginBottom: '10px',
    marginLeft: '10px',
    borderRadius: '20px'
  }
  return (
    <div style={style}>
      {message}
    </div>
  )
}

const ErrorNotification = ({message}) => {
  const style = {
    color: 'red',
    fontSize: '20px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'black',
    backgroundColor: '#f1f2eb',
    paddingTop: '10px',
    paddingBottom: '10px',
    textAlign: 'center',
    width: '50%',
    marginBottom: '10px',
    marginLeft: '10px',
    borderRadius: '20px'
  }
  return (
    <div style={style}>
      {message}
    </div>
  )
}





export default Notification 