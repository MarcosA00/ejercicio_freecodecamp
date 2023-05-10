import React from "react";

function TestimonialsBox(){
  return (
    <div clasName='testimonialBox'>
      <img 
      className="testimonialImage" 
      src={require("../images/testimonio-emma.png")} 
      alt="Foto de Emma" />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>nombre</strong> en pais
        </p>
        <p className='cargo-testimonio'>
          cargo en <strong>empresa</strong>
        </p>
        <p className='texto-testimonio'>
          "testimonio" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex sapiente, repellat tenetur amet illum laboriosam dolorem adipisci vel molestias unde labore rem consequuntur nam aut laudantium hic aliquid, ab voluptatum magnam provident autem! Ad inventore, possimus atque dicta maiores tempore ipsam laudantium quibusdam ullam quasi. Quasi ad ratione voluptatibus sit!
        </p>
      </div>
    </div>
  );
}

export default TestimonialsBox;