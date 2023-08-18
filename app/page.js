
import React from 'react';
import Feed from '@components/Feed';
function Home() {
  return (
    <section className=' w-full  flex-center flex-col'
    >

      <h1 className=' head_text text-center flex flex-col'>
        Discover & share
        {/* <br className="max-md:hidden" /> */}
      <span className='orange_gradient text-center text-4xl font-bold '
      >
        AI powered chatbot
      </span>
        </h1>

      <p  className='desc text-center text-xl font-medium max-w-2xl mx-auto mt-5 '
      >
        ChatGPT is a chatbot powered by GPT-3. It is a simple
        chatbot that can be used to chat with your friends.
      </p>
      <Feed   className=" max-w-2xl mx-auto mt-5"
      />
    </section>
  )
}

export default Home
