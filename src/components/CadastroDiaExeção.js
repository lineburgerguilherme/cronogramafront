import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function CadastroDiaExcecao() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [motivo, setMotivo] = useState('');

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const handleMotivoChange = event => {
        setMotivo(event.target.value);
    };

    const handleSalvar = () => {
        // fazer o metodo para salvar
        console.log('Data selecionada:', selectedDate);
        console.log('Motivo:', motivo);
    };

    return (
        <div>
            <h2>Cadastrar Exceção</h2>
            <div>
                <label>Data:</label>
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                />
            </div>
            <div>
                <label>Motivo:</label>
                <input
                    type="text"
                    value={motivo}
                    onChange={handleMotivoChange}
                />
            </div>
            <button onClick={handleSalvar}>Salvar</button>
        </div>
    );
}

export default CadastroDiaExcecao;
