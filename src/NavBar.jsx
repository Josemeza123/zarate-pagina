import logozarate from './assets/logotipo.png'

export const NavBar = () => {
  return (
    <>
      <nav className='flex'>
        <div className='basis-1/8 '> 
          <img src={logozarate} className='h-20'></img>
        </div>
        <div className='basis-3/4'> 
          <ul className='p-4 h-20 grid grid-cols-5  content-between '>
            <li className='text-center'><a href="#">Inicio</a></li>
            <li className='text-center'><a href="#">Programas</a></li>
            <li className='text-center'><a href="#">Contactanos</a></li>
            <li className='text-center'><a href="#">Nosotros</a></li>
            <li className='text-center'><a href="#">Intranet</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}
