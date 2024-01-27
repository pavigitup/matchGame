import './index.css'

const TabsList = props => {
  const {tabsList, getTabList} = props
  const {tabId, displayText} = tabsList

  const selectedTab = () => {
    getTabList(tabId)
  }

  return (
    <li key={tabId}>
      <button type="button" className="btn" onClick={selectedTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabsList
