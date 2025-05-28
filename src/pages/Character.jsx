import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Character() {
    const [name, setname] = useState("")
    const [gender, setgender] = useState("")
    const [imge, setimge] = useState("")
    const [characters, setCharacters] = useState([])
    let url = 'https://6823a18e65ba0580339768c2.mockapi.io/characters';

    let Enter = () => {
        axios.post(url, {
            name,
            imge,
            gender,
        }).then(() => {

            axios.get(url).then((res) => {
                setCharacters(res.data)

            })

        });

    }

    useEffect(() => {
        axios.get(url).then((res) => {
            setCharacters(res.data)

        })
    })

    return (
        <div className=''>

            <div className='bg-gray-200 flex flex-col justify-around items-center rounded-lg shadow text-xl w-lvw h-[40vh] sm:w-sm md:w-md lg:w-lg mx-auto py-5 px-10'>
                <input className='border rounded-md bg-white p-2' value={name} type="text" placeholder='Enter Character Name' onChange={(e) => { setname(e.target.value) }} />
                <input className='border rounded-md bg-white p-2' value={gender} type="text" placeholder='Enter Character Gender' onChange={(e) => { setgender(e.target.value) }} />
                <input className='border rounded-md bg-white p-2' value={imge} type="text" placeholder='Enter Character url image' onChange={(e) => { setimge(e.target.value) }} />
                <button className='bg-green-500 rounded-md p-3 ' onClick={Enter}>Add</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4 mx-3'>

                {
                    characters.map((i) => {
                        return (
                            <div className='bg-gray-200 flex flex-col justify-around items-center rounded-lg p-2'>
                                <img src={i.imge} />
                                <p>Name: {i.name}</p>
                                <p>Gender: {i.gender}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}
