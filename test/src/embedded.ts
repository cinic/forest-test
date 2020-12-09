import { styled } from 'foliage'
import { using, h } from 'forest'
import { createURLRouter} from 'forest-url-router'

const Block = styled.div`
  display: flex;
`
const Header = styled.h1`
  color: magenta;
`

const Hello = () =>
  Block({
    fn() {
      Header({ text: 'Hello' })
    },
  })
const Users = () =>
  Block({
    fn() {
      Header({ text: 'Users' })
    },
  })

const routes = [
  {
    path: '/',
    exact: true,
    component: Hello,
  },
  {
    path: '/users',
    exact: true,
    component: Users,
  },
]
const { Router, Link } = createURLRouter({ routes })

using(document.getElementById('root') as HTMLElement, () => {
  h('ul', () => {
    h('li', () => {
      Link({ text: 'Home', attr: { href: '/' } })
    })
    h('li', () => {
      Link({ text: 'Users', attr: { href: '/users' } })
    })
  })
  Router()
})
