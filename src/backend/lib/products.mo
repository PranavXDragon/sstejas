import List "mo:core/List";
import Types "../types/products";

module {
  // All 20 products pre-defined as a static array (5 per category).
  // This is the single source of truth — no seeding needed.
  public let ALL_PRODUCTS : [Types.Product] = [
    // ── Men (5 products) ────────────────────────────────────────────────────
    {
      id = "men-001";
      name = "Classic White Oxford Shirt";
      category = #Men;
      price = 4999;
      originalPrice = 4999;
      description = "A timeless Oxford shirt crafted from premium 100% cotton. Button-down collar, chest pocket, and a relaxed fit perfect for office or weekend wear.";
      sizes = ["XS", "S", "M", "L", "XL", "XXL"];
      colors = ["White", "Light Blue", "Pink"];
      images = ["https://images.unsplash.com/photo-1598033109-6dbadad87f82?w=400&h=500&fit=crop&q=80"];
      rating = 4.7;
      reviewCount = 312;
      inStock = true;
      tags = ["shirt", "oxford", "classic", "office", "cotton"];
      featured = true;
    },
    {
      id = "men-002";
      name = "Slim Fit Chinos";
      category = #Men;
      price = 5999;
      originalPrice = 7499;
      description = "Versatile slim-fit chinos in a cotton-stretch blend for all-day comfort. Tapered leg and mid-rise waist for a modern silhouette.";
      sizes = ["28x30", "30x30", "32x30", "32x32", "34x32", "36x32"];
      colors = ["Khaki", "Olive", "Navy", "Charcoal"];
      images = ["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop&q=80"];
      rating = 4.5;
      reviewCount = 228;
      inStock = true;
      tags = ["chinos", "pants", "slim", "stretch", "casual"];
      featured = false;
    },
    {
      id = "men-003";
      name = "Merino Wool Sweater";
      category = #Men;
      price = 8999;
      originalPrice = 11999;
      description = "Luxuriously soft merino wool crewneck sweater. Naturally temperature-regulating and itch-free — a wardrobe essential for cooler months.";
      sizes = ["S", "M", "L", "XL", "XXL"];
      colors = ["Camel", "Charcoal", "Burgundy", "Forest Green"];
      images = ["https://images.unsplash.com/photo-1571455048-0b7c57571e0d?w=400&h=500&fit=crop&q=80"];
      rating = 4.8;
      reviewCount = 189;
      inStock = true;
      tags = ["sweater", "merino", "wool", "knit", "winter"];
      featured = true;
    },
    {
      id = "men-004";
      name = "Tailored Blazer";
      category = #Men;
      price = 14999;
      originalPrice = 14999;
      description = "A sharp single-breasted wool blazer with notched lapels and flap pockets. Structured shoulders and a slim silhouette perfect for formal occasions.";
      sizes = ["S", "M", "L", "XL", "XXL"];
      colors = ["Charcoal", "Navy", "Black"];
      images = ["https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400&h=500&fit=crop&q=80"];
      rating = 4.8;
      reviewCount = 97;
      inStock = true;
      tags = ["blazer", "tailored", "formal", "wool", "office"];
      featured = false;
    },
    {
      id = "men-005";
      name = "Performance Running Shorts";
      category = #Men;
      price = 3499;
      originalPrice = 4999;
      description = "Lightweight 5-inch inseam running shorts with moisture-wicking fabric and an elastic waistband. Zip pockets for a secure, comfortable fit.";
      sizes = ["XS", "S", "M", "L", "XL", "XXL"];
      colors = ["Black", "Navy", "Heather Grey"];
      images = ["https://images.unsplash.com/photo-1618354691373-d851c5c827a4?w=400&h=500&fit=crop&q=80"];
      rating = 4.6;
      reviewCount = 245;
      inStock = true;
      tags = ["shorts", "running", "athletic", "gym", "activewear"];
      featured = false;
    },

    // ── Women (5 products) ──────────────────────────────────────────────────
    {
      id = "women-001";
      name = "Floral Wrap Dress";
      category = #Women;
      price = 6999;
      originalPrice = 8999;
      description = "A flowy wrap dress in a romantic floral print on lightweight chiffon. Smocked bodice and a tiered skirt for effortless summer style.";
      sizes = ["XS", "S", "M", "L", "XL"];
      colors = ["Blush Floral", "Blue Floral", "Sage Floral"];
      images = ["https://images.unsplash.com/photo-1469334031814-7f8f7ff3b5b6?w=400&h=500&fit=crop&q=80"];
      rating = 4.8;
      reviewCount = 341;
      inStock = true;
      tags = ["dress", "floral", "wrap", "summer", "elegant"];
      featured = true;
    },
    {
      id = "women-002";
      name = "High-Waist Skinny Jeans";
      category = #Women;
      price = 7999;
      originalPrice = 9999;
      description = "Classic high-waist skinny jeans in a stretch denim. Five-pocket styling with a flattering high rise that elongates the leg.";
      sizes = ["24", "25", "26", "27", "28", "29", "30", "31", "32"];
      colors = ["Light Wash", "Dark Wash", "Black"];
      images = ["https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop&q=80"];
      rating = 4.7;
      reviewCount = 412;
      inStock = true;
      tags = ["jeans", "skinny", "high-waist", "denim", "casual"];
      featured = false;
    },
    {
      id = "women-003";
      name = "Cashmere Turtleneck";
      category = #Women;
      price = 11999;
      originalPrice = 15999;
      description = "Pure Grade-A cashmere turtleneck with ribbed cuffs and hem. Incredibly soft and warm — a luxury essential for the cold season.";
      sizes = ["XS", "S", "M", "L"];
      colors = ["Cream", "Blush", "Taupe", "Black"];
      images = ["https://images.unsplash.com/photo-1585487384062-19a9e1d51c95?w=400&h=500&fit=crop&q=80"];
      rating = 4.9;
      reviewCount = 156;
      inStock = true;
      tags = ["cashmere", "turtleneck", "knit", "luxury", "winter"];
      featured = true;
    },
    {
      id = "women-004";
      name = "Linen Summer Blouse";
      category = #Women;
      price = 4499;
      originalPrice = 5999;
      description = "A crisp linen blouse with puff sleeves and a rounded collar. Lightweight and easy to care for — a wardrobe hero for any warm season.";
      sizes = ["XS", "S", "M", "L", "XL"];
      colors = ["White", "Pale Yellow", "Sky Blue", "Sage"];
      images = ["https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=400&h=500&fit=crop&q=80"];
      rating = 4.6;
      reviewCount = 183;
      inStock = true;
      tags = ["blouse", "linen", "summer", "casual", "workwear"];
      featured = false;
    },
    {
      id = "women-005";
      name = "Pleated Midi Skirt";
      category = #Women;
      price = 6499;
      originalPrice = 7999;
      description = "A fluid pleated midi skirt in a satin-finish fabric. Elasticated waist and a versatile length that works from office to evening.";
      sizes = ["XS", "S", "M", "L", "XL"];
      colors = ["Blush", "Navy", "Emerald", "Black"];
      images = ["https://images.unsplash.com/photo-1496747986135-6d2158ad57e4?w=400&h=500&fit=crop&q=80"];
      rating = 4.5;
      reviewCount = 218;
      inStock = true;
      tags = ["skirt", "midi", "pleated", "elegant", "office"];
      featured = false;
    },

    // ── Kids (5 products) ───────────────────────────────────────────────────
    {
      id = "kids-001";
      name = "Graphic Print T-Shirt";
      category = #Kids;
      price = 1999;
      originalPrice = 2999;
      description = "Soft cotton jersey tee featuring a fun artistic print. Relaxed fit with a crew neck — the ultimate casual staple for everyday wear.";
      sizes = ["2T", "3T", "4T", "5", "6", "7", "8"];
      colors = ["White", "Grey", "Yellow"];
      images = ["https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400&h=500&fit=crop&q=80"];
      rating = 4.6;
      reviewCount = 324;
      inStock = true;
      tags = ["t-shirt", "graphic", "kids", "cotton", "casual"];
      featured = false;
    },
    {
      id = "kids-002";
      name = "Denim Overalls";
      category = #Kids;
      price = 3999;
      originalPrice = 5499;
      description = "Durable denim overalls with adjustable straps and roomy bib pocket. Double-stitched seams to handle all the adventures of childhood.";
      sizes = ["2T", "3T", "4T", "5", "6", "7", "8"];
      colors = ["Light Wash", "Dark Wash"];
      images = ["https://images.unsplash.com/photo-1518831959056-70ce5d21c6e9?w=400&h=500&fit=crop&q=80"];
      rating = 4.7;
      reviewCount = 267;
      inStock = true;
      tags = ["overalls", "denim", "kids", "casual", "playful"];
      featured = true;
    },
    {
      id = "kids-003";
      name = "Cozy Fleece Hoodie";
      category = #Kids;
      price = 3499;
      originalPrice = 4499;
      description = "Super-soft anti-pill fleece hoodie with a kangaroo pocket and full zip. Machine washable and built to last through countless washes.";
      sizes = ["2T", "3T", "4T", "5", "6", "7", "8", "10"];
      colors = ["Navy", "Pink", "Red", "Grey"];
      images = ["https://images.unsplash.com/photo-1471286174890-9c112ac6edd2?w=400&h=500&fit=crop&q=80"];
      rating = 4.9;
      reviewCount = 512;
      inStock = true;
      tags = ["hoodie", "fleece", "kids", "winter", "zip"];
      featured = false;
    },
    {
      id = "kids-004";
      name = "Striped Polo Shirt";
      category = #Kids;
      price = 2499;
      originalPrice = 3499;
      description = "Classic pique cotton polo with cheerful stripes and a two-button placket. Smart yet relaxed — great for school or a day out.";
      sizes = ["2T", "3T", "4T", "5", "6", "7", "8"];
      colors = ["Navy/White Stripe", "Red/White Stripe", "Green/White Stripe"];
      images = ["https://images.unsplash.com/photo-1503919545889-aef636e10034?w=400&h=500&fit=crop&q=80"];
      rating = 4.5;
      reviewCount = 189;
      inStock = true;
      tags = ["polo", "stripe", "kids", "cotton", "smart-casual"];
      featured = false;
    },
    {
      id = "kids-005";
      name = "Cargo Pants";
      category = #Kids;
      price = 2999;
      originalPrice = 3999;
      description = "Rugged cotton-twill cargo pants with side patch pockets and adjustable waist. Durable and comfortable for outdoor play and everyday adventures.";
      sizes = ["4T", "5", "6", "7", "8", "10", "12"];
      colors = ["Khaki", "Olive", "Navy", "Grey"];
      images = ["https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=500&fit=crop&q=80"];
      rating = 4.5;
      reviewCount = 231;
      inStock = true;
      tags = ["cargo", "pants", "kids", "outdoor", "durable"];
      featured = false;
    },

    // ── Accessories (5 products) ────────────────────────────────────────────
    {
      id = "acc-001";
      name = "Leather Crossbody Bag";
      category = #Accessories;
      price = 8999;
      originalPrice = 11999;
      description = "A compact full-grain leather crossbody bag with gold-tone hardware. Adjustable strap, suede interior, and a secure top zip closure.";
      sizes = ["One Size"];
      colors = ["Black", "Cognac", "Dusty Pink"];
      images = ["https://images.unsplash.com/photo-1548036161-b28af1c44e20?w=400&h=500&fit=crop&q=80"];
      rating = 4.8;
      reviewCount = 231;
      inStock = true;
      tags = ["bag", "crossbody", "leather", "handbag", "everyday"];
      featured = true;
    },
    {
      id = "acc-002";
      name = "Silk Scarf";
      category = #Accessories;
      price = 3999;
      originalPrice = 4999;
      description = "A 90x90cm hand-rolled silk twill scarf featuring an exclusive seasonal print. Wear as a neckerchief, headscarf, or bag accessory.";
      sizes = ["One Size"];
      colors = ["Floral Print", "Abstract Blue", "Classic Stripe"];
      images = ["https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=400&h=500&fit=crop&q=80"];
      rating = 4.7;
      reviewCount = 178;
      inStock = true;
      tags = ["scarf", "silk", "accessories", "luxury", "print"];
      featured = false;
    },
    {
      id = "acc-003";
      name = "Aviator Sunglasses";
      category = #Accessories;
      price = 4999;
      originalPrice = 6999;
      description = "Classic metal-frame aviator sunglasses with teardrop lenses and UV400 polarized protection. Adjustable nose pads for a custom fit.";
      sizes = ["One Size"];
      colors = ["Gold/Green", "Silver/Grey", "Black/Smoke"];
      images = ["https://images.unsplash.com/photo-1553062407-3a4e6a5c63e5?w=400&h=500&fit=crop&q=80"];
      rating = 4.6;
      reviewCount = 224;
      inStock = true;
      tags = ["sunglasses", "aviator", "polarized", "accessories", "summer"];
      featured = false;
    },
    {
      id = "acc-004";
      name = "Canvas Tote Bag";
      category = #Accessories;
      price = 2999;
      originalPrice = 3999;
      description = "A durable heavyweight canvas tote with leather handles and a zip interior pocket. Spacious, eco-friendly, and perfect for everyday use.";
      sizes = ["One Size"];
      colors = ["Natural", "Black", "Navy"];
      images = ["https://images.unsplash.com/photo-1547949003-9792a18a2601?w=400&h=500&fit=crop&q=80"];
      rating = 4.5;
      reviewCount = 167;
      inStock = true;
      tags = ["tote", "canvas", "bag", "eco", "everyday"];
      featured = false;
    },
    {
      id = "acc-005";
      name = "Wool Beanie Hat";
      category = #Accessories;
      price = 2499;
      originalPrice = 3499;
      description = "A classic ribbed wool beanie with a fold-up cuff. Warm, stretchy, and available in versatile neutral and bold tones.";
      sizes = ["One Size"];
      colors = ["Camel", "Grey", "Burgundy", "Navy", "Black"];
      images = ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop&q=80"];
      rating = 4.7;
      reviewCount = 143;
      inStock = true;
      tags = ["beanie", "wool", "hat", "winter", "accessories"];
      featured = false;
    },
  ];

  public func getAll(products : List.List<Types.Product>) : [Types.Product] {
    products.toArray();
  };

  public func getById(products : List.List<Types.Product>, id : Text) : ?Types.Product {
    products.find(func(p) { p.id == id });
  };

  public func getByCategory(products : List.List<Types.Product>, category : Types.ProductCategory) : [Types.Product] {
    products.filter(func(p) { p.category == category }).toArray();
  };

  public func getFeatured(products : List.List<Types.Product>) : [Types.Product] {
    // Return first product from each category as featured (one per category = 4 total)
    let men = products.find(func(p) { p.category == #Men });
    let women = products.find(func(p) { p.category == #Women });
    let kids = products.find(func(p) { p.category == #Kids });
    let acc = products.find(func(p) { p.category == #Accessories });
    let result = List.empty<Types.Product>();
    switch (men) { case (?p) result.add(p); case null {} };
    switch (women) { case (?p) result.add(p); case null {} };
    switch (kids) { case (?p) result.add(p); case null {} };
    switch (acc) { case (?p) result.add(p); case null {} };
    result.toArray();
  };

  public func search(products : List.List<Types.Product>, q : Text) : [Types.Product] {
    let lower = q.toLower();
    products.filter(func(p) {
      let nameMatch = p.name.toLower().contains(#text lower);
      let descMatch = p.description.toLower().contains(#text lower);
      let tagMatch = p.tags.any(func(t) { t.toLower().contains(#text lower) });
      nameMatch or descMatch or tagMatch
    }).toArray();
  };
}
