import styled from 'styled-components'

const SearchBarContainer = styled.form`
  height: 55px;
  display: flex;
  justify-content: center;
  flex-direction: row;

  button {
    div {
      margin: 3px 0 0 1px!important;
    }
  }
`

const Input = styled.input`
  border: none;
  outline: none;
  width: 400px;
  border-radius: 0 15px 15px 0;
  padding-left: 8px;
  padding-right: 8px;

  font: 22px 'Roboto', sans-serif;
  color: #313131;
`

export { SearchBarContainer, Input }
