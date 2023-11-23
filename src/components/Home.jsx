import { Link } from 'react-router-dom'

//Alfred makes a baller Logo - Dapper Tipples

import bartenders from '../assets/image.jpg'


export default function Home() {
  return (
    <>
      <section className="home-container">
        <p className="about">We are just dapper gents bemused at inventing tipples to tickle even the most elementary of pallets.<br />
        Be beguiled at what our DrinkS-Smiths and Spirits-Engineers may fabricate right before your eyes.<br  />
        A palace of wonder and imagination. Our GinSlingers and RumRamblers welcome you through the doors and on this adventurous journey of your hearts desire
        </p>
        <img className="sexypeople" src={bartenders} alt="bartenders" />
        <Link to="/cocktails" className='btn-menu'>A lexicon of libations to quench your unbearable parchedness</Link>
      </section>
    </>
  )
}