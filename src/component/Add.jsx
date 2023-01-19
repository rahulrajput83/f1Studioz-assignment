import React from 'react';
import {MdAdd} from 'react-icons/md'
import { Link } from 'react-router-dom';

function Add() {
  return (
    <Link to='/Form1'>
      <MdAdd className="position-fixed Add bg-brown p-2 shadow text-white" />
    </Link>
  )
}

export default Add