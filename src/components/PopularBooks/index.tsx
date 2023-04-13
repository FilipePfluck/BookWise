import { BookCard } from '../BookCard'
import { ListHeading } from '../ListHeading'

export const PopularBooks = () => {
  return (
    <section className="flex flex-col max-w-[324px]">
      <ListHeading title="Livros populares" seeMoreButtonLabel="Ver todos" />

      <div className="flex flex-col gap-3">
        <BookCard
          src="https://m.media-amazon.com/images/I/91BsZhxCRjL.jpg"
          bookName="Revolução dos bichos"
          authorName="George Orwell"
          rate={3.5}
        />
        <BookCard
          src="https://m.media-amazon.com/images/I/91BsZhxCRjL.jpg"
          bookName="Revolução dos bichos"
          authorName="George Orwell"
          rate={3.5}
        />
        <BookCard
          src="https://m.media-amazon.com/images/I/91BsZhxCRjL.jpg"
          bookName="Revolução dos bichos"
          authorName="George Orwell"
          rate={3.5}
        />
      </div>
    </section>
  )
}
