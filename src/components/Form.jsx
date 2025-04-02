import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Form.css'

function ContactForm() {
  const [state, handleSubmit] = useForm("xovekvvj");
  if (state.succeeded) {
      return <p>Gracias por  participar</p>;
  }
  return (
  <>
    <div>
      <p className='informacion'>Regístrate y Forma Parte de Esta Comunidad
      Inscríbete con tu correo para recibir actualizaciones, participar en debates y tener acceso a recursos exclusivos que te ayudarán en cada etapa de tu viaje.</p>
    </div>
    <form onSubmit={handleSubmit} className='form'>
      <div className='separator'>
        <label htmlFor="email">
        Correo electrónico
        </label>
        <input
            id="email"
            type="email" 
            name="email"
        />
        <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
        />
      </div>
      <div className='separator'>
      <label htmlFor="message">
        Mensaje opcional
      </label>
      <input
          id="message"
          name="message"
      />
      <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
      />
      </div>
      <button type="submit" disabled={state.submitting}>
          Enviar
      </button>
    </form>
  </>
  );
}

export default ContactForm