

  const form = document.getElementById('form') as HTMLFormElement;
  const btnGuardar = document.getElementById('btnGuardar') as HTMLFormElement;

  btnGuardar.addEventListener('click' , (e) => {
    e.preventDefault(); 
    console.log('ingreso al form')

    // Validaci'on del form

    
    // Capturo los inputs
    const tipodeIdentificacion = document.getElementById('tipodeIdentificacion') as HTMLInputElement;
    const numerodeIdentificacion = document.getElementById('numerodeIdentificacion') as HTMLInputElement;
    const nombres = document.getElementById('nombres') as HTMLInputElement;
    const apellidos = document.getElementById('apellidos') as HTMLInputElement;
    const celular = document.getElementById('celular') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    const usuarioLinkedin = document.getElementById('usuarioLinkedin') as HTMLInputElement;
    const ususarioGithub = document.getElementById('ususarioGithub') as HTMLInputElement;

    console.log(`tipodeIdentificacion: ${tipodeIdentificacion}`)
    console.log(`numerodeIdentificacion: ${numerodeIdentificacion}`)
    console.log(`nombres: ${nombres}`)
    console.log(`apellidos: ${apellidos}`)
    console.log(`celular: ${celular}`)
    console.log(`email: ${email}`)
    console.log(`usuarioLinkedin: ${usuarioLinkedin}`)
    console.log(`ususarioGithub: ${ususarioGithub}`)







  })