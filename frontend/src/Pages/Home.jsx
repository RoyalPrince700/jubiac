import React from 'react'
import CategoryList from '../components/CategoryList'
import SubCategoryList from '../components/SubCategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'
import VerticalSubCardProduct from '../components/VerticalSubCardProduct'
import VerticalHotDealCard from '../components/VerticalHotDealCard'
import Hero from '../components/Hero'


function Home() {
  return (
    <div className='mt-8 lg:mt-2'>
      <Hero />
      <div className='my-8'>
        <CategoryList/>
      </div>
      <VerticalCardProduct  category={"baking"} heading={"Baking Essentials"} />
      <VerticalCardProduct  category={"decoration"} heading={"Decoration Supplies"} />
      <VerticalCardProduct  category={"equipment"} heading={"Professional Equipment"} />



      {/* <VerticalHotDealCard hotDeal={"Hot_Deal"} />
      <VerticalCardProduct  category={"speakers"} />
      <VerticalCardProduct  category={"earphones"} />
      <VerticalCardProduct  category={"camera"} />
      <VerticalCardProduct  category={"mobiles"} />

      <VerticalCardProduct  category={"refrigerator"} />
      <VerticalCardProduct category={"food"} />
      <VerticalCardProduct  category={"mobiles"} />
      <VerticalCardProduct  category={"camera"} />
      <VerticalCardProduct  category={"earphones"} /> */}





      {/* <VerticalSubCardProduct subCategory={"Item7"} /> */}
      {/* <VerticalSubCardProduct subCategory={"Nutri_C"} /> */}

      {/* <VerticalCardProduct subCategory={"Item7"} /> */}
      {/* <VerticalCardProduct category={"watches"} /> */}
      
      {/* <VerticalCardProduct  category={"mouse"} heading={"Mouse"}/> */}
      {/* <VerticalCardProduct  category={"televisions"} /> */}
      {/* <VerticalCardProduct  category={"printers"} /> */}

      {/* <HorizontalCardProduct category={"speakers"} heading={"Popular Speakers"}/> */}
      {/* <HorizontalCardProduct category={"mobiles"} heading={"mobiles"}/> */}
      {/* <VerticalCardProduct  category={"trimers"} heading={"Trimers"}/> */}
      {/* <VerticalCardProduct  category={"processor"} heading={"Processor"}/> */}
    </div> 
  )
}

export default Home