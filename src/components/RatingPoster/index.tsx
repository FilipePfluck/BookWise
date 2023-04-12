import { Avatar } from '../Avatar'

interface RatingPosterProps {
  name: string
  date: string
  src: string
}

export const RatingPoster = ({ date, name, src }: RatingPosterProps) => {
  return (
    <div className="flex text-base gap-4 items-center">
      <Avatar src={src} name={name} />

      <div className="flex flex-col">
        <p className="text-gray-100">{name}</p>
        <p className="text-gray-400">{date}</p>
      </div>
    </div>
  )
}
