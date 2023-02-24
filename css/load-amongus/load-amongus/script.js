document.addEventListener('mousemove', function(event) {
    var blob = document.getElementById('blob');

    blob.animate ({
        left: event.clientX + 'px',
        top: event.clientY + 'px'  
    }, { duration: 3000, fill: "forwards" });
  });