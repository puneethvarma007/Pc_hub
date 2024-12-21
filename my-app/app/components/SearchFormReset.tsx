import React from 'react'

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('search-form') as HTMLFormElement;
        
        if(form) return form.reset();
    }
  return (
    <button type='reset' onClick={reset} className='search-btn'>
                        S
                    </button>
  )
}

export default SearchFormReset