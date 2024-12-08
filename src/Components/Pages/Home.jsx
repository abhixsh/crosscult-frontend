import img1 from '../../assets/Home_page/backdrop.png'
import img_home1 from '../../assets/Home_page/img1_home.png'

function Home() {
  return (
    <div>
      <div className='mx-4 md:mx-16'>
        <div className='relative'>
          <img src={img1} className='mt-12 md:mt-12 rounded-2xl relative' style={{ right: '10px', bottom: '10px' }} />
          <div className='absolute top-20 left-4 bg-black bg-opacity-75 text-white p-4 rounded-lg'>
            <p className="font-bold text-4xl">Traditional Concepts</p>
            <p className='mt-2 font-semibold text-3xl text-orange-600'>Beyond Limits</p>
            <p className='text-lg mt-3'>Celebrate diversity, learn traditions, and connect with global <br />heritage through stories, art, and more.</p>
          </div>
        </div>
        <br /><br /><br />
        <p className='font-bold text-3xl text-center'>The Power of Cultural Exchange     </p><br />
        <p className='mr-4 w-200 h-48 bg-gray-300 rounded-md text-center'>
          Culture encompasses the beliefs, values, norms, customs, arts, and practices that define a group or society. It shapes how people view the world, interact with each other, and express themselves, giving each community a distinct identity. Culture includes language, religion, cuisine, social habits, music, and arts, which are passed down through generations, fostering a sense of belonging and continuity.
          <br /><br />
          In addition to visible aspects like festivals, clothing, and food, culture also includes more subtle elements, such as attitudes toward authority, gender roles, family structures, and time. It acts as a guiding framework for people, influencing their behaviors, traditions, and ways of communicating. Culture evolves over time, influenced by historical events, geographic surroundings, and interactions with other societies, but its core purpose remains to provide unity and a sense of collective identity.
        </p><br /><br /> <br />
        <div className="grid grid-cols-2 gap-2">
          <img src={img_home1}></img>
          <div>
            <p className='font-bold text-3xl text-orange-400'>Traditional Concepts</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Home
