interface BookNameAndAuthorProps {
  name: string
  author: string
}

export const BookNameAndAuthor = ({ author, name }: BookNameAndAuthorProps) => {
  return (
    <div className="flex flex-col">
      <strong className="text-gray-100 bold">{name}</strong>
      <p className="text-gray-400 text-sm">{author}</p>
    </div>
  )
}
