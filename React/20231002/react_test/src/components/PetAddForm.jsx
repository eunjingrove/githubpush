import React, { useState } from 'react'

function PetAddForm({ setPetList }) {
    const [name, setName] = useState('')
    const [species, setSpecies] = useState('')
    const [age, setAge] = useState(0)


    function handleOnSubmit(e) {
        e.preventDefault()
        if (name === '' || species === '' || age === '') {
            alert('애완동물의 정보를 정확하게 입력해주세요.')
        }

        setPetList((prev) => {
            return [...prev, { name: name, species: species, age: age, id: new Date() }]
        })
        setName('')
        setSpecies('')
        setAge(0)

    }

    return (
        <form onSubmit={handleOnSubmit}>
            <fieldset> 새로운 애완동물을 추가하세요! <br />
                <label>
                    이름
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </label>

                <label>
                    species
                    <input type='text' value={species} onChange={(e) => setSpecies(e.target.value)} />
                </label>
                <label>
                    나이
                    <input type='number' value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
                <button type='submit'>추가하기</button>
            </fieldset>
        </form>
    )
}

export default PetAddForm