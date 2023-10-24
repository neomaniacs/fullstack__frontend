const person = {
  name: "Ranga",
  address: {
    line1: "Baker Street",
    city: "London",
    country: "UL"
  },
  profiles: ["twitter", "linkedin", "instagram"],
  printProfile: () => {
    person.profiles.map(
      profile => console.log(profile)
    )
  }
}

export default function LearningJavascript() {
  return (
    <>
    <div>Learning Javascirpt {person.name}</div>
    <div>{person.address.line1}</div>
    <div>{person.profiles[0]}</div>
    <div>{person.printProfile()}</div>
    </>
  )
}