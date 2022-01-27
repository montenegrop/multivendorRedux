import { ExperienceRow } from "../components/ExperienceRow"

const Experiences = ({ data, title }) => {
  return (
    <section className="p-4">
      <h2 className="has-text-grey-light has-text-weight-light mb-3">{title}</h2>
      {data &&
        data.edges.map((item) => {
          return <ExperienceRow data={item.node} key={item.node.id} />
        })}
    </section>
  )
}
export default Experiences
