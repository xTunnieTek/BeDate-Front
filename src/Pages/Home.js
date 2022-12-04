import Layout from "../Components/Layout";
import "../Assets/CSS/Pages/Home.css"
import Nope from '@mui/icons-material/Clear';
import Love from '@mui/icons-material/Favorite';
import Back from '@mui/icons-material/SettingsBackupRestore';
import { Fab } from '@mui/material';
import TinderCard from 'react-tinder-card'
import React, { useState, useMemo, useRef } from 'react'


import Photo from '../Assets/Images/Cloud/Jisoo.jpg';
import Photo2 from '../Assets/Images/Cloud/Rose.jpg';
import Photo3 from '../Assets/Images/Cloud/Nancy.jpg';
import Photo4 from '../Assets/Images/Cloud/Min.jpg';

export default function Home() {

const db = [
  {
    name: 'Jisoo',
    url: Photo,
  },
  {
    name: 'Min',
    url: Photo4,
  },
  {
    name: 'Nancy',
    url: Photo3,
  },
  {
    name: 'Rose',
    url: Photo2,
  },
]

const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [ setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0
  const swiped = (direction, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()

  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }


  return (
    <Layout>
      <div className="Home">
      {db.map((character, index) => (
        <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.url + ')' }}
              className='card'
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
      ))}
        <div className="icons">
        <Fab id="hate" sx={{ bgcolor: '#FFF', color: '#F27121' }} onClick={() => swipe('left')} aria-label="hate">
            <Nope />
        </Fab>
        <Fab id="love" sx={{ bgcolor: '#E94057', color: '#FFF', width: 70, height: 70, margin:5 }} onClick={() => swipe('right')} aria-label="like">
            <Love />
        </Fab>
        <Fab sx={{ bgcolor: '#FFF', color: '#8A2387' }} onClick={() => goBack()} aria-label="back">
            <Back />
        </Fab>
        </div>
      </div>
    </Layout>
  );
}
