// Copyright (c) 2023 Skelton All rights reserved
//
// Created by: Remy Skelton
// Created on: Mar 2022
// This file contains the JS functions for index.html

function enterClicked () {
  const TAX_RATE=0.2005
  
  // User data input
  let hoursWorked = parseFloat(document.getElementById("hours-worked").value)
  let hourlyRate = parseFloat(document.getElementById("hourly-rate").value)
  let totalPay = hoursWorked * hourlyRate;
  let tax = totalPay * TAX_RATE;
  let takeHomeSalary = totalPay - tax;
  
  // Data given back to user
  document.getElementById('takeHomeSalary').innerHTML = 'After taxes your take home slary is $' + takeHomeSalary.toFixed(2)
  document.getElementById('taxPaid').innerHTML = 'Amount of tax money the goverment will resive from you is $ ' + tax.toFixed(2)
}
