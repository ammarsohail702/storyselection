import React from 'react'
import Header from '../../corecomponents/include/Header'
import RightImage from '../../corecomponents/sectionTypes/RightImage'
import LeftImage from '../../corecomponents/sectionTypes/LeftImage'
import ProductSection from '../../corecomponents/sectionTypes/ProductSection'
import ImageinCenter from '../../corecomponents/sectionTypes/ImageinCenter'
import VideoInCenter from '../../corecomponents/sectionTypes/VideoInCenter'

const Passage = () => {
    const p= `The story of Decem Tribus Mirabilis revolves around ten tribes, each with unique special elements that allow them to produce synthetic vials for their survival. These tribes are in search of the Vial of Life, an artifact that can grant eternal life, and they compete to find it.

    As the tribes journey through different lands and encounter various obstacles, they realize that working together may increase their chances of success. However, trust is difficult to establish as each tribe is also guarding their synthetic vials, which hold great value to them.
    
    To foster cooperation and mutual benefit, the tribes begin to barter their synthetic vials with one another. This approach brings new challenges as some tribes may attempt to deceive others or demand a higher price for their vials. The story follows the conflicts and alliances that arise during the tribes' quest for the Vial of Life and the dynamic relationships they develop through bartering. 
    
    As the tribes journey deeper into the unknown lands, they realize that the Vial of Life is much harder to find than they had anticipated. They face new challenges, such as harsh weather conditions, treacherous terrain, and dangerous creatures that lurk in the shadows. As a result, the tribes' supply of synthetic vials dwindles, and they need to produce more to survive.
    
    However, the elements needed to produce the vials are scarce and located in different areas, which puts the tribes at a disadvantage. Some tribes become desperate and resort to stealing vials from others, leading to conflict and mistrust.
    
    To solve this issue, the tribes agreed to set up trading posts where they can barter their vials without fear of being robbed. This leads to the establishment of new alliances and partnerships between tribes, as they begin to see the benefits of working together.
    
    The competition for the Vial of Life intensifies as the tribes get closer to their goal. They encounter clues and puzzles that need to be solved, and they must use their wit and cunning to overcome the challenges that lay ahead. As they get closer to the Vial, the tribes must decide whether to continue competing or to work together and share the reward.
    
    In the end, the tribes realize that cooperation and mutual benefit are more valuable than the Vial of Life itself. They agree to share the Vial and establish a new society based on collaboration and respect for each other's unique elements. The Vial of Life becomes a symbol of their unity and the power of working together towards a common goal.`

   const imgsrc='https://img1.wsimg.com/isteam/ip/25ef4dc2-8044-476f-8a13-fb457c37414f/unnamed.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:400,cg:true'
  return (
    <div>
      {/* <Header/> */}
        <section className='bg-dark'>

        <LeftImage paragraphtext={p} imgsrc={imgsrc}/>
        </section>

        <section className='bg-dark'>

<ProductSection description={true} numberofProductsinRow={3}/>
</section>

<section className='lightblackbg'>
    <ImageinCenter/>

</section>

<section className='lightblackbg'>
    <ImageinCenter/>

</section>

<section className='lightblackbg'>
    <VideoInCenter/>

</section>

<section className='lightblackbg'>
    <ImageinCenter image={'https://img1.wsimg.com/isteam/ip/25ef4dc2-8044-476f-8a13-fb457c37414f/Asset%203.png/:/rs=w:2480,h:1240,cg:true,m/cr=w:2480,h:1240'} description={false}/>
</section>


<section className='lightblackbg'>

<ProductSection description={true} numberofProductsinRow={3}/>
</section>

    </div>
  )
}

export default Passage
