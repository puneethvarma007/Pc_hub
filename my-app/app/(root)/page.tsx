import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <>
      <section className="pink_container">
      <h1 className="heading">Pitch Your Startup. <br /> Connect With Entrepreneurs
      </h1>

      <p className="subheading max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in virtual Competetions.
      </p>
          <SearchForm />
      </section>
    </>
  )
}