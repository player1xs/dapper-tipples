import { IoClose as CloseIcon } from 'react-icons/io5'

export default function Sidebar(isOpen, closeSidebar) { //not sure if they have to be in squiggles
  return (
    <div className={`sidebar ${ isOpen && open }`}>
      <span className="classIcon">
        <CloseIcon size={30} onClick={closeSidebar}/>
      </span>
    </div>
  )
}