const Notification = ({message}) => {
    const styling ={
        color: 'white',
        background: 'green',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    if (message === null) {
        return null
    }
    return (
        <p style={styling}>{message}</p>
    )
}
export default Notification