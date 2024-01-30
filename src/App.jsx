import React from 'react'
import AOS from 'aos'

/*** Images ***/
import HeroImageOne from "./assets/doraemon1.png";
import HeroImageTwo from "./assets/doraemon2.png";

/*** Componenst ***/
import Header from './components/Header/Header';

/*** Sections ***/
import Hero from './sections/Hero/Hero'

/*** data ***/
const data = {
  MenuLinks: [
    {
      name: 'Episodes',
      link: '#/',
      active: true
    },
    {
      name: 'Store',
      link: '#/store',
      active: false
    },
    {
      name: 'Toys',
      link: '#/toys',
      active: false
    },
    {
      name: '3D videos',
      link: '#/videos',
      active: false
    },
  ],
  ["main-page"]: {
    hero: [
      {
        title: 'Watch Now in',
        ["title-accent"]: '3D',
        description: 'The first full story in the Doraemon series was published in January 1970',
        button: 'Play on',
        ["has-video"]: true,
        video: 'https://youtu.be/8-brLaV193c?si=NeXyJyadtGcEFWSQ',
        author: 'Kolkata',
        country: 'India',
        date: '26Jan, 2024',
        image: HeroImageOne
      },
      {
        title: 'Watch Now in',
        ["title-accent"]: '2D',
        description: 'The first full story in the Doraemon series was published in January 1970',
        button: 'Play on',
        ["has-video"]: false,
        video: '',
        author: 'Kolkata',
        country: 'India',
        date: '25May, 2023',
        image: HeroImageTwo
      }
    ]
  }
}
window.data = data;

const App = () => {
  console.log(data);
  React.useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      offset: 100,
    })
  }, []);

  return (
    <>
      <Header menu={data.MenuLinks} />
      <Hero data={data["main-page"].hero} />
    </>
  )
}

export default App
