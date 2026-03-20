"use strict";
console.log("hello")
const countryInput = document.getElementById('countryInput');
    const fetchBtn = document.getElementById('fetchBtn');
    const loadingDiv = document.getElementById('loading');
    const errorDiv = document.getElementById('error');
    const successDiv = document.getElementById('success');
    const inputForm = document.getElementById("input-form")
    const resultsList = document.getElementById('resultsList');

    async function getHoliday() {
     const url = "https://date.nager.at/api/v3/publicholidays/2026/"  
     let countryInputValue = countryInput.value
     console.log(countryInputValue)
    try {
      const response = await fetch(`${url}${countryInputValue}`)
      const data = await response.json()
      console.log(data)
      data.map((item)=>{
const li = document.createElement("li")
      li.textContent = `${item.date}-${item.name}`
      resultsList.appendChild(li)
      })
      
    } catch (error) {
        console.error("error fetching holidays")
    }}
inputForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    getHoliday()
})



    

    
    
    
