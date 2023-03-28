// Copyright (c) 2023 Skelton All rights reserved
//
// Created by: Remy Skelton
// Created on: Mar 2022
// This file contains the JS functions for index.html

function enterClicked () {
  
  // User data input
  let b1Side = parseFloat(document.getElementById("b1-side").value)
  let b2Side = parseFloat(document.getElementById("b2-side").value)
  let height = parseFloat(document.getElementById("height").value)
  //prosses
  let area = ((b1Side + b2Side) * height) / 2;
  
  // Data given back to user
  document.getElementById('area').innerHTML = 'The area of your trapezoid is ' + area.toFixed(2) + 'cm<sup>2</sup>'
}
