import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import ImagesBox from '../Components/Image';
import {BoxStyle, Images , Button,Box} from '../Components/ImegeStyle';
import {useState, useEffect} from 'react';


const Animal=()=>{
  return(
  <>
  <Head>
    <title>Animal</title>
  </Head>
    <h1>"Animal world!!!"</h1>
  <Box>
<BoxStyle>
  <ImagesBox>
  <b>Red deer or real deer (lat. Cervus elaphus) is
     an artiodactyl mammal from the deer family.
    </b>
  <Images src = "/deer.img" width = {200} height={150} alt=""/>
  <Button href="/forma"><button>choose</button></Button>
  </ImagesBox>
</BoxStyle>

<BoxStyle>
  <ImagesBox>
  <b>Large (up to 95 cm long) parrots with very bright colors of green,
     red, blue and yellow tones.</b>
  <Images  src ="/parrot.img" width = {200} height={150} alt=""/>
  <Button href="/forma"><button>choose</button></Button>
  </ImagesBox>
</BoxStyle>


<BoxStyle>
  <ImagesBox>
  <b>The fox is a predatory mammal, belongs to the carnivorous order,
     the canine family.</b>
   <Images  src ="/fox.img" width = {200} height={150} alt=""/>
   <Button href="/forma"><button>choose</button></Button>

  </ImagesBox>
</BoxStyle>
<BoxStyle>
  <ImagesBox>
  <b>Zebras (lat. Hippotigris) - a subgenus of the horse genus,
     including species of Burchell's zebra (Equus quagga).</b>
  <Images  src ="/zebra.img" width = {200} height={150} alt=""/>
  <Button href="/forma"><button>choose</button></Button>

  </ImagesBox>
</BoxStyle>
<BoxStyle>
  <ImagesBox>
  <b>Wild horse (lat. Equus ferus) is a herbivorous equine mammal,
    a species of the genus of horses (Equus) of the equine family (Equidae)</b>
   <Images  src ="/horse.img" width = {200} height={150} alt=""/>
   <Button href="/forma"><button>choose</button></Button>

  </ImagesBox>
</BoxStyle>
<BoxStyle>
  <ImagesBox>
  <b>Tiger (lat. Panthera tigris) is a species of predatory mammals of the cat family.</b>
  <Images  src ="/tiger.img" width = {200} height={150} alt=""/>
  <Button href="/forma"><button>choose</button></Button>

  </ImagesBox>
</BoxStyle>
</Box>

  </>
  )
}
export default  Animal;
