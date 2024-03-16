import React from 'react'

const GenderCheckbox = ({inputs, setInputs}) => {
 const handleGenderChange = (gender) => {
  
    setInputs(prev => ({
      ...prev,
      gender: gender,
    }));
 };
  return (
    <div className='flex'>
      <div className='form-control'>
        <label htmlFor="" className={`label gap-2 cursor-pointer ${inputs==='male'?'selected':''}`}>
          <span className='label-text'>Male</span>
          <input onChange={() => handleGenderChange('male')} checked={inputs === 'male'?true:false} type="checkbox" name="" id="" className='checkbox border-slate-900'/>
        </label>
        
      </div>
      <div className='form-control'>
        <label htmlFor="" className={`label gap-2 cursor-pointer ${inputs==='female'?'selected':''}`}>
          <span className='label-text'>Female</span>
          <input onChange={() => handleGenderChange('female')} checked={inputs === 'female'?true:false} type="checkbox" name="" id="" className='checkbox border-slate-900'/>
        </label>
      </div>
    </div>
  )
}

export default GenderCheckbox
