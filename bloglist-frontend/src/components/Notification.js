import PropTypes from 'prop-types'
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
Notification.propTypes = {
  notification: PropTypes.object
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
    width: '100%',
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
InfoNotification.propTypes = {
  message: PropTypes.string
}

const ErrorNotification = ({message}) => {
  const style = {
    color: 'red',
    fontSize: '20px',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'red',
    backgroundColor: '#f1f2eb',
    paddingTop: '10px',
    paddingBottom: '10px',
    textAlign: 'center',
    width: '100%',
    marginBottom: '10px',
    marginLeft: '10px',
    borderRadius: '20px'
  }
  return (
    <div style={style} id='error'>
      {message}
    </div>
  )
}
ErrorNotification.propTypes = {
  message: PropTypes.string
}





export default Notification 