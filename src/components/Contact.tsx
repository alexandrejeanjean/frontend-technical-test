
type Props = {
  senderNickname: string
}

const Contact = ({ senderNickname }: Props) => {

  const handleClick = () => {
    console.log("open tab")
  }

  return (
    <button onClick={handleClick} className='inline-flex items-center w-full h-full px-3 py-4 border-b-2 border-gray-50 hover:bg-indigo-200 focus:bg-indigo-300 active:bg-indigo-100'>
      <div className='flex items-center justify-center w-12 h-12 mr-3 bg-gray-300 bg-indigo-700 rounded-full'>
        <p className="font-medium text-white">{senderNickname[0]}</p>
      </div>
      <p className='flex-1 font-medium text-left text-gray-700'>{senderNickname}</p>
      <span className='arrow right '></span>
    </button>
  )
}

export default Contact
