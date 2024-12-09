if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('/serviceworker.js')
          .then((registration) => {
              console.log('Service Worker registrado con éxito:', registration.scope);

              // Manejo de actualizaciones del Service Worker
              registration.onupdatefound = () => {
                  const newWorker = registration.installing;
                  console.log('Nuevo Service Worker encontrado:', newWorker);

                  newWorker.onstatechange = () => {
                      if (newWorker.state === 'installed') {
                          if (navigator.serviceWorker.controller) {
                              // Nuevo contenido disponible
                              console.log('Nuevo contenido disponible. Actualiza la página.');
                          } else {
                              // El contenido está en caché para su uso sin conexión
                              console.log('Contenido en caché para su uso sin conexión.');
                          }
                      }
                  };
              };
          })
          .catch((error) => {
              console.error('Error al registrar el Service Worker:', error);
          });
  });
} else {
  console.warn('Service Worker no es compatible con este navegador.');
}
