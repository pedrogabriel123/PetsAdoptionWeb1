import React from 'react';

const PetsTable = () => {
  return (
    <section className="pets" style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Pets Disponíveis para Adoção</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
            <th style={{ padding: '10px', textAlign: 'left' }}>Imagem</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Nome</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Idade</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Raça</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Sexo</th>
            <th style={{ padding: '10px', textAlign: 'left' }}>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px' }}><img src="/src/assets/Cão-labrador.jpeg" alt="Cão Labrador" style={{ width: '100px' }} /></td>
            <td style={{ padding: '10px' }}>Rex</td>
            <td style={{ padding: '10px' }}>2 anos</td>
            <td style={{ padding: '10px' }}>Labrador</td>
            <td style={{ padding: '10px' }}>Macho</td>
            <td style={{ padding: '10px' }}>Amigável e energético.</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}><img src="/src/assets/Gata-siamesa.jpeg" alt="Gata Siamesa" style={{ width: '100px' }} /></td>
            <td style={{ padding: '10px' }}>Mimi</td>
            <td style={{ padding: '10px' }}>1 ano</td>
            <td style={{ padding: '10px' }}>Siamesa</td>
            <td style={{ padding: '10px' }}>Fêmea</td>
            <td style={{ padding: '10px' }}>Calma e carinhosa.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default PetsTable;
