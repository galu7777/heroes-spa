import React from 'react'
import { Link } from 'react-router-dom'
//import { heroes } from '../data/heroes'
//import './herocards.css'
const charaHero = ({alter_ego, characters}) => {
  //if( alter_ego === characters ) return (<></>)
  //return <p>{ characters }</p>
  return ( alter_ego === characters )
  ? <></>
  : <p>{ characters }</p>
}
export const HeroCards = ({
    id,
    superhero, 
    publisher, 
    alter_ego,
    first_appearance,
    characters,
}) => {

  
  const heroImageUrl = `/assets/heroes/${ id }.jpg`
  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card'>

        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageUrl} className='card-img img-1' alt={ superhero }/>
          </div>
        </div>

        <div className="col-8">
          <div className="card-body">
            <h5 className='card-title'>{ superhero }</h5>
            <p className='card-text'>{ alter_ego }</p>
            {/*{
              (alter_ego !== characters) && (<p>{ characters }</p>)
            }*/}
            <charaHero alter_ego={alter_ego} characters={characters} />
            
            <p className='card-text'>
              <small className='text-muted'>{ first_appearance }</small>
            </p>

            <Link to={`/hero/${ id }`}>
              Mas...
            </Link>

          </div>

        </div>

      </div>

    </div>
  )
}
