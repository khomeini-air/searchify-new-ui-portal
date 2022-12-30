import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from '../../../node_modules/faker/index';

const Dashboard = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                // display: false,
            },
            title: {
                display: true,
                text: 'Chart',
            },
        },
    };
    const options2 = {
        responsive: true,
        plugins: {
            legend: {
                // position: 'top',
                display: false,
            },
            title: {
                display: false,
                text: 'Chart',
            },

        },
        scales: {
            display: false,
            x: {
                display: false,
                grid: {
                    display: false
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            }
        }
    };

    const labels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: -600, max: 600 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],

    };
    const data2 = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: -400, max: 400 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],

    };
    return (
        <div className='dashboard-main'>
            <div className='dashboard-sub'>
                <div className='dashboard-first'>
                    <div>
                        abc
                    </div>
                </div>
                <div className='dashboard-second'>
                    <div class="card mb-3 dashboard-second-child">
                        <div class="row g-0 main-card">
                            <div class="col-md-3 card-sub-div">
                                <h6 class="card-title">Cricket </h6>
                                <h6 class="card-title">Football </h6>
                            </div>
                            <div class="col-md-6">
                                <h6 class="card-title">
                                    <Line options={options2} data={data2} />
                                </h6>
                            </div>
                            <div class="col-md-3 card-sub-div">
                                <h6 class="card-title">Cricket</h6>
                                <h6 class="card-title">Football</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='dashboard-third'>
                    <div className='third-child-first'>
                        <Line options={options} data={data} />
                    </div>
                    <div className='third-child-second'>
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard