import {styled} from '../../foliage/dist'
import {using, h} from 'forest'

const Block = styled.div`
  display: flex;
`
const Header = styled.h1`
  color: magenta;
`

const Users = () =>
  Block({
    fn() {
      Header({text: 'Hello'})
    },
  })

using(document.getElementById('root') as HTMLElement, () => {
  Users()
})