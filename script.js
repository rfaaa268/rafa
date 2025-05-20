document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('message').textContent = 'Terima kasih! Pesan Anda telah terkirim.';
    this.reset();
  });
  