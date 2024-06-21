import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [products, setProducts] = useState([]);
    const [formVisible, setFormVisible] = useState(true);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productValue, setProductValue] = useState('');
    const [productAvailable, setProductAvailable] = useState('Sim');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            name: productName,
            description: productDescription,
            value: parseFloat(productValue),
            available: productAvailable,
        };
        setProducts((prevProducts) => [...prevProducts, newProduct].sort((a, b) => a.value - b.value));
        setFormVisible(false);
        resetForm();
    };

    const resetForm = () => {
        setProductName('');
        setProductDescription('');
        setProductValue('');
        setProductAvailable('Sim');
    };

    const showForm = () => {
        setFormVisible(true);
    };

    return (
        <div className="App">
            <h1>Cadastro de Produtos</h1>
            {formVisible ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome do Produto:
                        <input
                            type="text"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Descrição do Produto:
                        <input
                            type="text"
                            value={productDescription}
                            onChange={(e) => setProductDescription(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Valor do Produto:
                        <input
                            type="number"
                            value={productValue}
                            onChange={(e) => setProductValue(e.target.value)}
                            required
                        />
                    </label>
                    <br />
                    <label>
                        Disponível para Venda:
                        <select
                            value={productAvailable}
                            onChange={(e) => setProductAvailable(e.target.value)}
                            required
                        >
                            <option value="Sim">Sim</option>
                            <option value="Não">Não</option>
                        </select>
                    </label>
                    <br />
                    <button type="submit">Cadastrar Produto</button>
                </form>
            ) : (
                <>
                    <h2>Listagem de Produtos</h2>
                    <button onClick={showForm}>Cadastrar Novo Produto</button>
                    <table>
                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.value.toFixed(2)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default App;
