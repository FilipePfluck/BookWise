import { ListHeading } from '../ListHeading'
import { RatingCard } from '../RatingCard'

export const RecentRatings = () => {
  return (
    <div className="flex flex-col">
      <ListHeading title="Sua última leitura" seeMoreButtonLabel="Ver todas" />
      <RatingCard
        className="mb-10"
        bookAuthor="J.R.R Tolkien"
        bookName="O Hobbit"
        bookSrc="https://m.media-amazon.com/images/I/91M9xPIf10L.jpg"
        postedDate="Hoje"
        poster={{
          name: 'Filipe Pfluck',
          src: 'https://avatars.githubusercontent.com/u/62773200?v=4',
        }}
        review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
        rate={4}
        isMine
      />
      <ListHeading title="Avaliações mais recentes" />
      <div className="flex flex-col gap-3 ">
        <RatingCard
          bookAuthor="J.R.R Tolkien"
          bookName="O Hobbit"
          bookSrc="https://m.media-amazon.com/images/I/91M9xPIf10L.jpg"
          postedDate="Hoje"
          poster={{
            name: 'Diego Fernandes',
            src: 'https://avatars.githubusercontent.com/u/2254731?v=4',
          }}
          review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dolor consequatur incidunt nesciunt laborum, laboriosam exercitationem quibusdam suscipit ipsum saepe "
          rate={4}
        />
        <RatingCard
          bookAuthor="George Orwell"
          bookName="Revolução dos bichos"
          bookSrc="https://m.media-amazon.com/images/I/91BsZhxCRjL.jpg"
          postedDate="Ontem"
          poster={{
            name: 'Diego Fernandes',
            src: 'https://avatars.githubusercontent.com/u/2254731?v=4',
          }}
          review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dolor consequatur incidunt nesciunt laborum, laboriosam exercitationem quibusdam suscipit ipsum saepe, doloribus similique atque earum numquam commodi beatae deserunt possimus dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates cum porro repudiandae sequi. Fugiat tempore dolore eius asperiores, mollitia rerum natus? Sunt officia dolor iste molestias iusto hic perferendis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio laboriosam dolorum dignissimos explicabo nam modi harum excepturi repellendus rerum eius! Eum, quis optio corporis commodi ex magnam velit quidem illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, non sequi cupiditate deleniti et placeat vitae minus delectus. Nisi maxime tempore vero sit facilis dolorum accusantium architecto deserunt animi consequuntur."
          rate={5}
        />
        <RatingCard
          bookAuthor="Zeno Rocha"
          bookName="14 Hábitos de desenvolvedores altamente produtivos"
          bookSrc="https://m.media-amazon.com/images/I/41Xkqy2rMDL.jpg"
          postedDate="Há 2 semanas atrás"
          poster={{
            name: 'Diego Fernandes',
            src: 'https://avatars.githubusercontent.com/u/2254731?v=4',
          }}
          review="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dolor consequatur incidunt nesciunt laborum, laboriosam exercitationem quibusdam suscipit ipsum saepe, doloribus similique atque earum numquam commodi beatae deserunt possimus dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates cum porro repudiandae sequi. Fugiat tempore dolore eius asperiores, mollitia rerum natus? Sunt officia dolor iste molestias iusto hic perferendis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio laboriosam dolorum dignissimos explicabo nam modi harum excepturi repellendus rerum eius! Eum, quis optio corporis commodi ex magnam velit quidem illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, non sequi cupiditate deleniti et placeat vitae minus delectus. Nisi maxime tempore vero sit facilis dolorum accusantium architecto deserunt animi consequuntur."
          rate={5}
        />
      </div>
    </div>
  )
}
