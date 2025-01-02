import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import CommentSection from "@/app/components/CommentSection";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { recipes, Recipe } from "@/app/lib/data";

// Dynamically import the Hero component (client component)
const Hero = dynamic(() => import("@/app/components/Hero"), { ssr: false });

// Generate static paths for all recipes
export function generateStaticParams() {
    return recipes.map((Recipe) => ({
        recipe: encodeURIComponent(Recipe.title), // Ensure the key matches the dynamic route parameter
    }));
}

export default function RecipePage({ params }: { params: { recipe: string } }) {
    const decodedTitle = decodeURIComponent(params.recipe);
    const recipe = recipes.find((r) => r.title === decodedTitle);

    if (!recipe) {
        notFound(); // Show 404 if the recipe is not found
    }

    return (
        <div className="max-w-2xl mx-auto py-8 px-4">
            <Header />
            <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
            <div className="prose max-w-none mb-8">{recipe.content}</div>
            <CommentSection recipeTitle={recipe.title} />
            <Footer />
            <Hero recipes={recipes} /> {/* Pass recipes as a prop to the client component */}
        </div>
    );
}