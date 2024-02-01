function inicializarMapa() {
    const ubicacion = { lat: 7.841944, lng: -72.500583 }; // Updated coordinates
    const mapa = new google.maps.Map(document.getElementById('mapa'), {
      zoom: 15,
      center: ubicacion
    });
  
    const marcador = new google.maps.Marker({
      position: ubicacion,
      map: mapa,
      title: 'Studying with Nefer'
    });
  }
  