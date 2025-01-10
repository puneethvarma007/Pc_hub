import { client } from '@/sanity/lib/client';
import { STARTUPS_BY_ID_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import React from 'react'

export const experimental_ppr = true;
const  page = async({params}: {params:Promise<{id:string}>}) => {
    const id = (await params).id;
    console.log(id , 'id');

    const posts = await client.fetch(STARTUPS_BY_ID_QUERY,{id});
    console.log(posts , 'postsssssssssssssssssssssss');
    if(!posts) return notFound();
  return (
    <>
    <h1 className='text-3xl '>{posts?.title}</h1>
    </>
  )
}

export default page;