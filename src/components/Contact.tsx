
type Props = {
  senderNickname: string
}

const Contact = ({ senderNickname }: Props) => {
  return (
    <li className='flex items-center py-4 border-b-2 border-gray-50'>
      <img
        className='flex items-center justify-center w-12 h-12 mr-3 rounded-full'
        src='https://via.placeholder.com/150'
        alt=''
      />
      <p className='flex-1 font-bold'>{senderNickname}</p>
      <span className='arrow right '></span>
    </li>
  )
}

export default Contact
