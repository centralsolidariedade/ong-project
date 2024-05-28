import React from 'react';
import './TableFilter.css';

const formatCPF = (cpf) => {
    if (cpf && cpf.length === 11) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    return cpf;
};

const formatCEP = (cep) => {
    if (cep && cep.length === 8) {
        return cep.replace(/^(\d{5})(\d{3})$/, '$1-$2');
    }
    return cep;
};

const TableFilter = ({ data, onRowClick }) => {
    return (
        <table className='contentTable'>
            <thead>
                <tr className='titleTable'>
                    <th>Status</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>CEP</th>
                    <th>Última Entrega</th>
                </tr>
            </thead>
            <tbody>
                {data.length === 0 ? (
                    <tr>
                        <td colSpan="5" className="no-results">Não há resultados para a busca.</td>
                    </tr>
                ) : (
                    data.map((item, index) => (
                        <tr className='line' key={index} onClick={() => onRowClick(item)}>
                            <td>
                                <div
                                    className={`statusBorder ${
                                        item.status === 'entregue'
                                            ? 'status-entregue'
                                            : item.status === 'não entregue'
                                            ? 'status-não-entregue'
                                            : ''
                                    }`}
                                >
                                    {item.status}
                                </div>
                            </td>
                            <td>{item.nome}</td>
                            <td>{formatCPF(item.cpf)}</td>
                            <td>{formatCEP(item.cep)}</td>
                            <td>{item.data_coleta}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    );
};

export default TableFilter;
