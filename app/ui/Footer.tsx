import React from 'react'

export const Footer = () => {
  return (
    <>
      <footer className='flex flex-col h-32 px-2 bg-secondary justify-center items-center'>
        <ul className='flex gap-6 items-center justify-center'>
          <li>Quienes somos</li>
          <li>|</li>
          <li>Política de privacidad</li>
          <li>|</li>
          <li>Términos y Condiciones</li>
          <li>|</li>
          <li>Configuración de las cookies</li>
        </ul>
        <div className="flex justify-center pt-3">
          <h3 className='text-white font-thin'>© 2024 alconcher - thiessen - ningun derecho reservado -  Argentina</h3>
        </div>
      </footer>
    </>
  )
}

export default Footer