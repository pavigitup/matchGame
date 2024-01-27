import {Component} from 'react'
import './index.css'

class NavItems extends Component {
  render() {
    const {thumbnailUrl} = this.props

    return (
      <li>
        <img src={thumbnailUrl} alt="match" className="fruit-img" />
      </li>
    )
  }
}

export default NavItems
