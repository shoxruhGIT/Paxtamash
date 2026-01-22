import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const products = [
    {
      id: "klp-650",
      name: "КЛП-650",
      description: "Lorem ipsum dolor sit amet, consectetur elit. Donec posuere tellus ut tristique malesuada.",
      color: "black" as const,
    },
    {
      id: "xpp-3",
      name: "ХПП-III",
      description: "Lorem ipsum dolor sit amet, consectetur elit. Donec posuere tellus ut tristique malesuada.",
      color: "lime" as const,
    },
    {
      id: "tsiklon-s6",
      name: "ЦИКЛОН С-6",
      description: "Lorem ipsum dolor sit amet, consectetur elit. Donec posuere tellus ut tristique malesuada.",
      color: "white" as const,
    },
    {
      id: "klp-650-2",
      name: "КЛП-650",
      description: "Lorem ipsum dolor sit amet, consectetur elit. Donec posuere tellus ut tristique malesuada.",
      color: "black" as const,
    },
    {
      id: "xpp-3-2",
      name: "ХПП-III",
      description: "Lorem ipsum dolor sit amet, consectetur elit. Donec posuere tellus ut tristique malesuada.",
      color: "lime" as const,
    },
    {
      id: "tsiklon-s6-2",
      name: "ЦИКЛОН С-6",
      description: "Lorem ipsum dolor sit amet, consectetur elit. Donec posuere tellus ut tristique malesuada.",
      color: "white" as const,
    },
    {
      id: "klp-650-3",
      name: "КЛП-650",
      description: "Lorem ipsum dolor sit amet, consectetur elit. Donec posuere tellus ut tristique malesuada.",
      color: "lime" as const,
    },
    {
      id: "xpp-3-3",
      name: "ХПП-III",
      description: "Lorem ipsum dolor sit amet, consectetur elit. Donec posuere tellus ut tristique malesuada.",
      color: "white" as const,
    },
    {
      id: "tsiklon-s6-3",
      name: "ЦИКЛОН С-6",
      description: "Lorem ipsum dolor sit amet, consectetur elit. Donec posuere tellus ut tristique malesuada.",
      color: "black" as const,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere tellus ut tristique malesuada.
            </h1>
          </div>

          <div className="mt-12">
            <svg viewBox="0 0 600 300" className="w-full max-w-xl">
              <rect x="80" y="120" width="100" height="120" fill="none" stroke="white" strokeWidth="2" rx="8"/>
              <rect x="200" y="80" width="150" height="160" fill="none" stroke="white" strokeWidth="2" rx="8"/>
              <rect x="370" y="40" width="100" height="200" fill="none" stroke="white" strokeWidth="2" rx="8"/>
              <rect x="220" y="100" width="60" height="50" fill="none" stroke="white" strokeWidth="2"/>
              <line x1="350" y1="70" x2="470" y2="30" stroke="white" strokeWidth="2"/>
              <circle cx="110" cy="250" r="15" fill="none" stroke="white" strokeWidth="2"/>
              <circle cx="150" cy="250" r="15" fill="none" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-primary-light">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-accent mb-6">
                Hozirgi akkumulyator ishlab chiqarish texnologiyalari beqaror.
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  <span className="text-white/80">Lorem ipsum dolor sit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  <span className="text-white/80">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere tellus ut tristique malesuada. Integer et arcu magna.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">•</span>
                  <span className="text-white/80">Lorem ipsum dolor sit</span>
                </li>
              </ul>
            </div>

            <div>
              <svg viewBox="0 0 400 300" className="w-full">
                <rect x="50" y="100" width="80" height="100" fill="none" stroke="white" strokeWidth="2" rx="6"/>
                <rect x="150" y="60" width="120" height="140" fill="none" stroke="white" strokeWidth="2" rx="6"/>
                <rect x="290" y="20" width="80" height="180" fill="none" stroke="white" strokeWidth="2" rx="6"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Mahsulotlar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                imageColor={product.color}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
