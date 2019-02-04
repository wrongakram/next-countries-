import Link from 'next/link';
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'


const CountriesWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #efefef;
    width: 50%;
    ul {
      overflow-y: scroll;
      height: 100vh;
      padding: 0 100px;
    }
`


const Country = styled.li`
  list-style: none;
  margin: 40px 0;
  a {
    color: #343434;
    font-weight: 900;
    text-decoration: none;
    font-size: 72px;
    text-transform: capitalize;
    &:focus {
      color: #ff0000;
    }
  }
`


const countries = [
  {name: 'italy', id: 1},
  {name: 'france', id: 2},
  {name: 'spain', id: 4},
  {name: 'portugal', id: 5},
  {name: 'mexico', id: 6},
  {name: 'greece', id: 7},
  {name: 'germany', id: 8},
  {name: 'japan', id: 9},
  {name: 'turkey', id: 10},
  {name: 'australia', id: 11},
  {name: 'korea', id: 12},
  {name: 'qatar', id: 13},
  {name: 'oman', id: 14}
]

const List = () => (
  <CountriesWrapper>
    <ul>
      {countries.map(({name, id}) => (
        <Country key={id}>
          <Link as={`/post/${name}`} href={`/post?id=${name}`}>
            <a>{name}</a>
          </Link>
        </Country>
      ))}
    </ul>
  </CountriesWrapper>
)


export default List
