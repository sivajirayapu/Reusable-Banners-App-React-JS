// Write your code here.
import './index.css'

const BannerCardItems = props => {
  const {card} = props
  const {headerText, description, className} = card
  const classNames = `list-container ${className}`
  return (
    <li className={classNames}>
      <div className="text-container">
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItems
