import React from 'react';

const Carrossel = () => {
  return (
    <section className="Carrossel" style={{ textAlign: 'center', margin: '20px 0' }}>
      <div className="Carrossel-container" style={{ display: 'flex', overflowX: 'auto' }}>
        <div className="Carrossel-slide" style={{ minWidth: '100%', position: 'relative' }}>
          <img src="/src/assets/Recepção.jpg" alt="Recepção" style={{ width: '100%' }} />
          <div className="caption" style={{ position: 'absolute', bottom: '10px', left: '20px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px' }}>RECEPÇÃO</div>
        </div>
        <div className="Carrossel-slide" style={{ minWidth: '100%', position: 'relative' }}>
          <img src="/src/assets/Canil.jpg" alt="Dormitórios" style={{ width: '100%' }} />
          <div className="caption" style={{ position: 'absolute', bottom: '10px', left: '20px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px' }}>DORMITÓRIOS</div>
        </div>
        <div className="Carrossel-slide" style={{ minWidth: '100%', position: 'relative' }}>
          <img src="/src/assets/Recreação.png" alt="Recreação" style={{ width: '100%' }} />
          <div className="caption" style={{ position: 'absolute', bottom: '10px', left: '20px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px' }}>RECREAÇÃO</div>
        </div>
      </div>
    </section>
  );
};

export default Carrossel;
