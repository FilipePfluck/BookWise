import { BookCard } from '../BookCard'
import { ListHeading } from '../ListHeading'

export const PopularBooks = () => {
  return (
    <section className="flex flex-col max-w-[324px]">
      <ListHeading title="Livros populares" seeMoreButtonLabel="Ver todos" />

      <div className="flex flex-col gap-3">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </section>
  )
}
