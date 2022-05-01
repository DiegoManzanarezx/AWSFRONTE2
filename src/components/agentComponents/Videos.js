import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu';
import VideoFilter from '../VideoFilter';


export default function Videos() {
    return (
        <>
          <Menu/>
          <VideoFilter/>
        </>
      );
}