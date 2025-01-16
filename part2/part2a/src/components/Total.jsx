const Total = ({ parts }) => {
    let sum = parts.reduce((total, part) => total + part.exercises, 0)

    return (
        <p> <b >Total of {sum} exercises </b></p>
    )

}

export default Total