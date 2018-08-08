const submit = document.getElementById('submit')

submit.addEventListener('submit', (e) => e.preventDefault())
// const acerca = document.getElementById('acerca')
// const body = document.documentElement
// const inicio = document.getElementById('inicio')
// const contacto = document.getElementById('contacto')
// const portafolio = document.getElementById('portafolio')
// const contactame = document.getElementById('contactame')

// const moverA = (e) => {
//   let aPortafolio = 680
//   let aContacto = 2680
//   let aAcerca = 1890
//   let aInicio = 0
//   console.log('body', body.scrollHeight)
//   console.log('contactame', contactame.scrollHeight)
//   body.scrollTop = contactame.scrollHeight
//   const porcentaje = (variable) => {
//     return Math.round((variable * 100) / body.scrollHeight)
//   }

//   const mover = (hacia) => {
//     let distancia = porcentaje(body.scrollTop) - porcentaje(hacia)
//     setTimeout(() => {
//       console.log(distancia)
//     }, 200)
//   }

//   console.log(e.target.id)
//   switch (e.target.id) {
//     case 'inicio':
//       mover(aInicio)
//       break
//     case 'portafolio':
//       mover(aPortafolio)
//       break
//     case 'acerca':
//       mover(aAcerca)
//       break
//     case 'contacto':
//       mover(aContacto)
//       break
//   }
// }

// inicio.addEventListener('click', moverA)
// acerca.addEventListener('click', moverA)
// contacto.addEventListener('click', moverA)
// portafolio.addEventListener('click', moverA)

// $(document).ready(
//   $('a.scroll').click(function (e) {
//     e.preventDefault()
//     $('html, body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top - 60 }, 1000)
//     contador = 1
//     $('nav').animate({
//       left: '-100%'
//     })
//   })
// )

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault()
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target)
          $target.focus()
          if ($target.is(":focus")) { // Checking if the target was focused
            return false
          } else {
            $target.attr('tabindex', '-1') // Adding tabindex for elements not focusable
            $target.focus() // Set focus again
          }
        })
      }
    }
  })
