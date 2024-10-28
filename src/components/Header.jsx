import { AutoComplete } from 'antd'
import React, { useState } from 'react'
import { UseAxios } from '../hooks/UseAxios'
import { KEY, TOKEN } from '../hooks/UseEnv'

export default function Header({ title,page}) {
    const [options,setOptions] = useState([])
    function handleChangeInput(a){
        UseAxios().get(`/search/movie?include_adult=false&api_key=${KEY}`, {
             headers:{
                "Authorization":`Bearer ${TOKEN}`
              }
        }).then(res => {
            console.log(res);
            
            // setOptions(res.data.results.map(item => ({value:item.title, id:item.id})))
        })
    }
    return (
        <div className='flex justify-between items-center bg-[#001529] w-full px-[40px] py-[15px] sticky top-0 z-40'>
            <h2 className='font-bold text-[35px] text-white'>{title}</h2>
            <AutoComplete
                onChange={handleChangeInput}
                style={{
                    width: 200,
                }}
                options={options}
                placeholder="Search movie..."
            />
        </div>
    )
}
