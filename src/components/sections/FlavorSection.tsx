import NitroOrange from "@/assets/images/nitro-orange.png";
import NitroRed from "@/assets/images/nitro-red.png";
import NitroGreen from "@/assets/images/nitro-green.png";
import NitroSky from "@/assets/images/nitro-sky.png";
import NitroBlue from "@/assets/images/nitro-blue.png";
import BlurSmall from "@/assets/images/small-plate.png";
import BlurMedium from "@/assets/images/medium-plate.png";
import BlurLarge from "@/assets/images/large-plate.png";
import Heading from "@/components/ui/Heading";

const products = [
  {
    image: NitroOrange,
    title: "Nitro Eng",
    price: "10.58 $",
    height: 442,
    plateImage: BlurSmall,
    plate: {
      width: 169,
      height: 26,
    },
  },
  {
    image: NitroRed,
    title: "Nitro Red",
    price: "11.00 $",
    height: 522,
    plateImage: BlurMedium,
    plate: {
      width: 217,
      height: 33,
    },
  },
  {
    image: NitroGreen,
    title: "Nitro Green",
    price: "12.00 $",
    featured: true,
    height: 676,
    plateImage: BlurLarge,
    plate: {
      width: 325,
      height: 100,
    },
  },
  {
    image: NitroSky,
    title: "Nitro Sky",
    price: "11.00 $",
    height: 522,
    plateImage: BlurMedium,
    plate: {
      width: 217,
      height: 33,
    },
  },
  {
    image: NitroBlue,
    title: "Nitro Blue",
    price: "10.58 $",
    height: 442,
    plateImage: BlurSmall,
    plate: {
      width: 169,
      height: 26,
    },
  },
];

export default function FlavorSection() {
  return (
    <section
      id="flavor-section"
      className="relative min-h-screen bg-black px-20 py-28"
    >
      <div className="absolute left-1/2 top-1/2 h-162.5 w-162.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[168px]" />
      <div className="relative z-20 lg:grid lg:grid-cols-5 items-center gap-14">
        {products.map((product) => (
          <div key={product.title} className="flavor-card">
            <div className="relative flex justify-center">
              {product.plate &&
                (product.featured ? (
                  <div
                    id="flavor-target"
                    className="absolute left-1/2 top-1/2 z-50 w-10 h-10 -translate-x-1/2 -translate-y-1/2"
                  >
                    <img
                      src={product.plateImage}
                      alt={product.title}
                      className="object-contain"
                      style={{
                        width: `${product.plate.width}px`,
                        height: `${product.plate.height}px`,
                      }}
                    />
                  </div>
                ) : (
                  <img
                    src={product.plateImage}
                    alt={product.title}
                    className={`absolute left-1/2 -translate-x-1/2 object-contain ${
                      product.height === 522
                        ? "bottom-11"
                        : product.height === 676
                          ? "bottom-5"
                          : "bottom-9 -ms-1.5"
                    }`}
                    style={{
                      width: `${product.plate.width}px`,
                      height: `${product.plate.height}px`,
                    }}
                  />
                ))}

              <img
                id={product.featured ? "nitro-green-real" : undefined}
                src={product.image}
                alt={product.title}
                className={`relative z-20 object-contain transition duration-500 hover:-translate-y-6 ${product.height == 522 ? "ms-12" : "ms-8"}       ${product.featured ? "opacity-0" : ""}`}
                style={{ height: `${product.height}px` }}
              />
              {product.height == 676 && (
                <img
                  src={product.plateImage}
                  alt={product.title}
                  className={`absolute left-1/2 -translate-x-1/2 object-contain -bottom-5 -ms-1.5`}
                  style={{
                    width: `${product.plate.width}px`,
                    height: `${product.plate.height}px`,
                  }}
                />
              )}
            </div>

            <div className="product-info">
              <Heading
                as="h2"
                align="text-center"
                weight="font-extrabold"
                className="uppercase italic"
                children={product.title}
              />

              <Heading
                as="p"
                variant="secondary"
                align="text-center"
                className="text-xl"
                children="High intensity"
              />

              <Heading
                as="h3"
                align="text-center"
                weight="font-extrabold"
                className="text-2xl mt-3"
                children={product.price}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
