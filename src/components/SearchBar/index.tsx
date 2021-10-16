import Image from 'next/image'

import React, { ChangeEvent, FormEvent, useState } from 'react'

import { SearchBarContainer, Input } from './style'
import { Button } from '../Button/index'
import duckduckgoImg from '../../assets/duckduckgo.svg'

export function SearchBar() {
  const [search, setSearch] = useState('')

  function handleInputChange (event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  function handleSearch(e: FormEvent) {
    e.preventDefault()
    window.open( `https://duckduckgo.com/?q=${search}`, '_blank')
  }

  return (
    <>
      <SearchBarContainer onSubmit={handleSearch}>
        <Button className="search-icon" type="submit" >
          <Image src={duckduckgoImg} alt="DuckDuckGo" width="42" height="42" />
        </Button>
        <Input
          type="text"
          value={search}
          onChange={handleInputChange}
        />
      </SearchBarContainer>
    </>
  )
}
