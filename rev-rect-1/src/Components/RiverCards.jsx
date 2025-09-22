import React from 'react'

function Card() {

      const Data = [
    {
      image: "https://t4.ftcdn.net/jpg/04/08/25/05/360_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg",
      riverName: "Ganga",
      description: "Also known as the Ganges, it is the longest and most sacred river in India.",
      Size: 2525
    },
    {
      image: "https://images.unsplash.com/photo-1516568826584-fb60af6b2559?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWFtdW5hJTIwcml2ZXJ8ZW58MHx8MHx8fDA%3D",
      riverName: "Yamuna",
      description: "The largest tributary of the Ganga, it originates from the Yamunotri glacier and merges with the Ganga at Prayagraj.",
      Size: 1376
    },
    {
      image: "https://warontherocks.com/wp-content/uploads/2020/12/8362720041_b31c5bdb39_o-1.jpg?v=1608681284",
      riverName: "Brahmaputra",
      description: "A transboundary river originating in Tibet, it enters India through Arunachal Pradesh.",
      Size: 2900
    },
    {
      image: "https://thumbs.dreamstime.com/b/scenic-arch-railway-bridge-across-godavari-river-rajahmundry-andhrapradesh-india-bowstring-girder-spans-latest-220890136.jpg",
      riverName: "Godavari",
      description: "Originating in Maharashtra, this is the longest river in South India.",
      Size: 1465
    },
    {
      image: "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2F534600a/MediaObjects/41586_2016_BF534600a_Figa_HTML.jpg",
      riverName: "Indus",
      description: "This major river flows through India and Pakistan, originating from the Tibetan Plateau and emptying into the Arabian Sea.",
      Size: 2900
    }
  ]


  return <>
    <div className='bg-blue-200 border'>
        <div className='w-full h-screen p-4 bg-blue-200 flex gap-10 justify-center items-center'>
        {Data.map((elem, index) => (
          <div key={index} className='w-sm h-84 bg-blue-100 rounded-xl overflow-hidden'>
            <div className='w-full h-40'>
              <img className='w-full h-full object-cover' src={elem.image} alt="River Images" />
            </div>
            <div className='w-full p-4 py-4'>
              <h1 className='text-xl pb-4 font-semibold'>{elem.riverName}</h1>
              <p className='text-sm'>{elem.description}</p>
              <h1 className= {`text-sm border rounded-full w-fit p-2 ${elem.Size>1500 ? "bg-blue-400" : "bg-green-200"} `}>
                    {elem.Size>1500 ? "Above 1.5k KMs" : "Below 1.5k KMs"}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
}


export default Card

