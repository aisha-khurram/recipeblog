import { notFound } from "next/navigation";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { recipes } from "../page"; // Correctly import recipes
import CommentSection from "./CommentSection";

export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export default function Recipe({ params }: { params: { id: string } }) {
  const recipe = recipes.find((r) => r.id === params.id);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <Header />
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="mb-4" />
      <p className="prose max-w-none mb-8">{recipe.content}</p>
      <CommentSection recipeId={0}/>
      <Footer />
    </div>
  );
}
