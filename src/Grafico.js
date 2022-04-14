import React, { useState, useEffect } from 'react';
import Conecta from './Conecta'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const Grafico = () => {

    const [times, setTimes] = useState([]);

    const getTimes = async () => {
        const lista = await Conecta.get("timesjogadores")
        setTimes(lista.data)
    }

    useEffect(() => {
        getTimes();
    }, []);

    const labels = times.map((marca)=> marca.nome);
    const data1 = times.map((marca) => marca.num);

    const options = {
        responsive: true,
        plugins: {
        legend: {
                position: 'top',
            },
        title: {
                display: true,
                text: 'Nº de jogadores por time',
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'Nº de jogadores',
                data: data1,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <div className="d-flex justify-content-center">
            <div style={{ width: "1000px", height: "800px" }}>
                <Bar options={options} data={data} />;
            </div>
        </div>
    );
}

export default Grafico;