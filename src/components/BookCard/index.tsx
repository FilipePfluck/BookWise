import { BookNameAndAuthor } from '../BookNameAndAuthor'
import { Stars } from '../Stars'

export const BookCard = () => {
  return (
    <div className="px-5  py-[18px] bg-gray-700  flex gap-5  rounded-lg ">
      <img
        className="w-16 h-[94px] rounded"
        src="https://m.media-amazon.com/images/I/91BsZhxCRjL.jpg"
        alt="Revolução dos bichos"
      />

      <div className="flex flex-col justify-between">
        <BookNameAndAuthor name="Revolução dos bichos" author="George Orwell" />
        <Stars number={3.5} />
      </div>
    </div>
  )
}
