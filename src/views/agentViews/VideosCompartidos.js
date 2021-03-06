import React from 'react';
import "../Assets/CSS/VideoFilter.css";

class VideosCompartidos extends React.Component {

    render() {

        let compartidos = [
            {
                nombre: 'José Pedraza',
                id: '345601',
                fecha: '12-03-2022 11:34:11'
            },

            {
                nombre: 'Fernanda Cazado',
                id: '345602',
                fecha: '12-03-2022 11:36:01'
            },

            {
                nombre: 'Fernanda Cazado',
                id: '345602',
                fecha: '12-03-2022 11:45:59'
            },

            {
                nombre: 'José Pedraza',
                id: '345601',
                fecha: '12-03-2022 12:01:18'
            },

            {
                nombre: 'José Pedraza',
                id: '345601',
                fecha: '12-03-2022 12:12:12'
            },

            {
                nombre: 'Fernanda Cazado',
                id: '345602',
                fecha: '12-03-2022 12:13:01'
            },

            {
                nombre: 'Luis Orozco',
                id: '345603',
                fecha: '12-03-2022 12:13:02'
            },

            {
                nombre: 'José Pedraza',
                id: '345601',
                fecha: '12-03-2022 12:18:39'
            },

            {
                nombre: 'Luis Orozco',
                id: '345603',
                fecha: '12-03-2022 12:19:18'
            },


        ];

        return (
            <div>

                <div className='upperBox'>
                    <h1>Videos Compartidos</h1>
                    <div className='searchBox'>
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </div>
                </div>
                <div className='middleBox'></div>

                <div className='VideoInfo'>
                    <ol>
                        {
                            compartidos.map((videos, iterador) => {
                                return (
                                    <li className='videos' key={iterador}>
                                        <div className='name'>
                                            {videos.nombre}
                                        </div>
                                        -
                                        <div className='id'>
                                            {videos.id}
                                        </div>


                                        <br></br>
                                        <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                                        <br></br>
                                        <div className='date'>
                                            {videos.fecha}
                                        </div>
                                        <br></br>
                                    </li>
                                );
                            })
                        }
                    </ol>
                </div>
            </div>
        );

    }
}

export default VideosCompartidos;