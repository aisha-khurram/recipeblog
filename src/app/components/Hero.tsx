"use client"; // Mark this as a client component

import Image from "next/image";
import Link from "next/link";
import { Recipe } from "../recipes/page";

interface HeroProps {
    recipes: Recipe[]; // Use the Recipe interface
}

export default function Hero({ recipes }: HeroProps) {

    return (
        <section className="bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-6">Featured Posts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {recipes.map((recipe) => (
                        <div className="overflow-hidden rounded-lg shadow-lg" key={recipe.title}>
                            <Image
                                src={recipe.image}
                                alt={`Featured Post: ${recipe.title}`}
                                width={400}
                                height={300}
                                className="object-cover w-full h-48"
                            />
                            <div className="text-center mt-2">
                                <h3 className="text-lg font-semibold underline hover:text-purple-600">
                                    <Link href={`/recipes/${recipe.id}`} className="text-blue-600 hover:underline">
                                        {recipe.title}
                                    </Link>
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}