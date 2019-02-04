import {withRouter} from 'next/router'
import Layout from '../components/CommonLayout'
import fetch from 'isomorphic-unfetch'
import styled from 'styled-components'
import List from '../components/list'

const Item = styled.span`
  display: block;
  font-weight: 300;
  margin: 20px;
`
const PostFlex = styled.div`
  display: flex;
  justify: content;
`

const Post = withRouter((props) => (
  <Layout>
    <PostFlex>
    <List/>
    <div>
      <h1>{props.data[0].name}</h1>
      <Item>{props.data[0].capital}</Item>
      <Item>{props.data[0].reigon}</Item>
      <Item>{props.data[0].population}</Item>
      <Item>{props.data[0].nativeName}</Item>
      <Item>{props.data[0].currencies[0].name}</Item>
      <img width={100} src={props.data[0].flag} />
    </div>
    </PostFlex>
  </Layout>
))


Post.getInitialProps = async function(context) {
  const {id} = context.query;
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${id}`);
  const data = await res.json();
  return { data }
}

export default Post;
