import React from 'react'
import './ToggleSwitch.css'
function ToggleSwitch() {
  return (
    <div>
    <input type="checkbox" class="checkbox" id="checkbox"/>
    <label for="checkbox" class="checkbox-label">
      <i class="bx bxs-moon"></i>
      <i class="bx bxs-sun"></i>
      <span class="ball"></span>
    </label>
  </div>
  )
}

export default ToggleSwitch
