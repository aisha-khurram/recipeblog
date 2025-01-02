import React from 'react';
import Image from 'next/image';

export default function Gallery() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col items-center">
          <div className="flex w-full mb-20 flex-wrap text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-purple-900 lg:w-1/3 lg:mb-0 mb-4">
              A BLAST OF FLAVORS
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-purple-700">
              Some of our amazing creation that are loved by our lovely followers.
            </p>
          </div>
          <div className="flex flex-wrap justify-center -m-1 md:-m-2 w-full">
            <div className="flex flex-wrap w-full md:w-1/2">
              <div className="p-1 md:p-2 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  width={500}
                  height={300}
                  src="/images/g1.jpg"
                />
              </div>
              <div className="p-1 md:p-2 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  width={501}
                  height={301}
                  src="/images/g2.jpg"
                />
              </div>
              <div className="p-1 md:p-2 w-full">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  width={600}
                  height={360}
                  src="/images/g3.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-full md:w-1/2">
              <div className="p-1 md:p-2 w-full">
                <Image
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  width={601}
                  height={361}
                  src="/images/g4.jpg"
                />
              </div>
              <div className="p-1 md:p-2 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  width={502}
                  height={302}
                  src="/images/g5.jpg"
                />
              </div>
              <div className="p-1 md:p-2 w-1/2">
                <Image
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  width={503}
                  height={303}
                  src="/images/g6.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
