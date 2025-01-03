import Link from 'next/link'
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

export interface Recipe {
  id: number
  title: string
  content: string
  image:string
}

export const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Strawberry Shortcake',
    content: 'Fluffy and Yummy strawbwerry Dessert ...',
    image:"/images/cake.jpg"
  },
  {
    id: 2,
    title: 'Nachos and Salsa',
    content: 'A filling and appetizing Mexican Snack...',
    image:"/images/salsa.jpg"
  },
  {
    id: 3,
    title: 'Beef Burger ',
    content: 'Juicy patties and velevty buns...',
    image:"/images/burger.jpg"
  },
]

export default function RecipesPage() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <Header />
      <h1 className="text-3xl font-bold mb-6">My Recipe Blog</h1>
      <ul className="space-y-4">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link href={`/recipes/${recipe.id}`} className="text-blue-600 hover:underline">
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  )
}

