
type personProps = {
    personName: {
        first: string,
        last: string
    }
}

export const Person = (props: personProps)=> {
  return (
    <div> {props.personName.first} {props.personName.last}</div>
  )
}
