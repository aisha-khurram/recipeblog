import { notFound } from "next/navigation"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import CommentSection from "@/app/components/CommentSection"
import { recipes } from "../page"

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id.toString(),
  }))
}

export default function RecipePage({ params }: { params: { id: string } }) {
  const recipe = recipes.find((r) => r.id === parseInt(params.id))

  if (!recipe) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <Header />
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <div className="prose max-w-none mb-8">{recipe.content}</div>
      <CommentSection recipeId={recipe.id} />
      <Footer />
    </div>
  )
}

