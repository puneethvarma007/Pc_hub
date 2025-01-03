import { Star } from "lucide-react";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: {
  searchParams: Promise<{query:string}>
}) {
  const query = (await searchParams).query || '';

 interface StartupCardType {
    _createdAt: string;
    views: number;
    author: {_id : number};
    _id : number;
    description: string;
    image: string;
    category:string;
    title: string;
  }

  const posts = [{
    _createdAt: new Date(),
    views:55,
    author: {_id : 1 , name:'Puneeth'},
    _id : 1,
    description: 'This is a description',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMqXmYCJKpPN2On5S7Y90Wz0MScDIy7UHgdA&s',
    category:'Robots',
    title: 'We Robots',
  }];
  return (
    <>
      <section className="pink_container">
      <h1 className="heading">Pitch Your Startup. <br /> Connect With Entrepreneurs
      </h1>

      <p className="subheading max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in virtual Competetions.
      </p>
          <SearchForm  query={query} />
      </section>

      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search Results for "${query}"` : "Latest Pitches"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
          posts.map((post:StartupCardType, index:number)=>(
            <StartupCard key={post?._id} post={post} />
          ))
          ) 
          : (
            <p className="no-results">No Startups found</p>
            )}
        </ul>

      </section>
    </>
  )
}