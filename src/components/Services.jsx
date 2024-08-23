import React from 'react';

const Services = () => {
  return (
    <section className="services" style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
      <h2 style={{ textAlign: 'center' }}>Serviços Disponíveis</h2>
      <div className="card-container" style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div className="card" style={{ backgroundColor: 'white', padding: '20px', width: '30%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <img src="/src/assets/Tosa.jpeg" alt="Tosa" style={{ width: '100%', borderRadius: '8px' }} />
          <h3>Tosa</h3>
          <p>Serviço de tosa para cães e gatos.</p>
        </div>
        <div className="card" style={{ backgroundColor: 'white', padding: '20px', width: '30%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <img src="/src/assets/Banho.jpeg" alt="Banho" style={{ width: '100%', borderRadius: '8px' }} />
          <h3>Banho</h3>
          <p>Serviço de banho para pets.</p>
        </div>
        <div className="card" style={{ backgroundColor: 'white', padding: '20px', width: '30%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <img src="/src/assets/vacinação.jpeg" alt="Vacinação" style={{ width: '100%', borderRadius: '8px' }} />
          <h3>Vacinação</h3>
          <p>Vacinação para pets.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
