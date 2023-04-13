import { FilterCategory } from '../FilterCategory'

export const Filters = () => {
  return (
    <div className="flex gap-3">
      <FilterCategory name="Tudo" defaultSelected />
      <FilterCategory name="Computação" />
      <FilterCategory name="Educação" />
      <FilterCategory name="Fantasia" />
      <FilterCategory name="Ficção científica" />
      <FilterCategory name="Horror" />
      <FilterCategory name="HQs" />
      <FilterCategory name="Suspense" />
    </div>
  )
}
