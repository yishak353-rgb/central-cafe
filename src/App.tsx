import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Coffee,
  MapPin,
  Menu as MenuIcon,
  Phone,
  Sparkles,
  Star,
  Utensils,
  X,
} from 'lucide-react';

const logo =
  '/assets/images/ChatGPT_Image_Sep_7,_2026,_12_44_54_PM.png';

const PHONE = '0905402180';

const images = {
  hero:
    'https://images.pexels.com/photos/13062450/pexels-photo-13062450.jpeg?auto=compress&cs=tinysrgb&w=1800',

  burger:
    'https://images.pexels.com/photos/20652774/pexels-photo-20652774.jpeg?auto=compress&cs=tinysrgb&w=1400',

  pizza:
    'https://images.pexels.com/photos/10875297/pexels-photo-10875297.jpeg?auto=compress&cs=tinysrgb&w=1400',

  pasta:
    'https://images.pexels.com/photos/21821564/pexels-photo-21821564.jpeg?auto=compress&cs=tinysrgb&w=1400',

  coffee:
    'https://images.pexels.com/photos/2112749/pexels-photo-2112749.jpeg?auto=compress&cs=tinysrgb&w=1400',

  juice:
    'https://images.pexels.com/photos/16724961/pexels-photo-16724961.jpeg?auto=compress&cs=tinysrgb&w=1400',

  mango:
    'https://images.pexels.com/photos/5817621/pexels-photo-5817621.jpeg?auto=compress&cs=tinysrgb&w=1400',

  cake:
    'https://images.pexels.com/photos/17939225/pexels-photo-17939225.jpeg?auto=compress&cs=tinysrgb&w=1400',

  interior:
    'https://images.pexels.com/photos/11439363/pexels-photo-11439363.jpeg?auto=compress&cs=tinysrgb&w=1600',

  interior2:
    'https://images.pexels.com/photos/12802124/pexels-photo-12802124.png?auto=compress&cs=tinysrgb&w=1600',

  dessert:
    'https://images.pexels.com/photos/31651609/pexels-photo-31651609.jpeg?auto=compress&cs=tinysrgb&w=1400',
};

type Category =
  | 'All'
  | 'Burgers & Fast Food'
  | 'Pizza & Pasta'
  | 'Snacks'
  | 'Fresh Drinks'
  | 'Hot Drinks'
  | 'Cakes';

type MenuItem = {
  name: string;
  category: Category;
  description: string;
  image: string;
  featured?: boolean;
  confirmed?: boolean;
};

const menuItems: MenuItem[] = [
  {
    name: 'Special Burger',
    category: 'Burgers & Fast Food',
    description:
      'Fresh vegetables, cheese and a flavorful patty.',
    image: images.burger,
    featured: true,
    confirmed: true,
  },
  {
    name: 'Sandwich Burger',
    category: 'Burgers & Fast Food',
    description:
      'A satisfying sandwich-style burger.',
    image: images.burger,
    confirmed: true,
  },
  {
    name: 'French Fries',
    category: 'Burgers & Fast Food',
    description:
      'Crispy golden fries, made to share.',
    image: images.hero,
    confirmed: true,
  },
  {
    name: 'Chicken Burger',
    category: 'Burgers & Fast Food',
    description:
      'A delicious chicken burger with fresh toppings.',
    image: images.burger,
  },
  {
    name: 'Chicken Sandwich',
    category: 'Burgers & Fast Food',
    description:
      'Chicken, fresh vegetables and sauce in a toasted sandwich.',
    image: images.burger,
  },
  {
    name: 'Special Pizza',
    category: 'Pizza & Pasta',
    description:
      'Freshly prepared with generous toppings.',
    image: images.pizza,
    featured: true,
    confirmed: true,
  },
  {
    name: 'Special Pasta',
    category: 'Pizza & Pasta',
    description:
      'Comforting pasta prepared with a rich sauce.',
    image: images.pasta,
    featured: true,
    confirmed: true,
  },
  {
    name: 'Chicken Pasta',
    category: 'Pizza & Pasta',
    description:
      'Pasta with chicken and flavorful sauce.',
    image: images.pasta,
  },
  {
    name: 'Creamy Pasta',
    category: 'Pizza & Pasta',
    description:
      'Rich, creamy pasta for a comforting meal.',
    image: images.pasta,
  },
  {
    name: 'Chicken Wings',
    category: 'Snacks',
    description:
      'A savory snack for sharing with friends.',
    image: images.burger,
  },
  {
    name: 'Toasted Sandwich',
    category: 'Snacks',
    description:
      'Warm, satisfying and perfect for a quick bite.',
    image: images.hero,
  },
  {
    name: 'Mango Juice',
    category: 'Fresh Drinks',
    description:
      'A naturally sweet and refreshing favorite.',
    image: images.mango,
    featured: true,
    confirmed: true,
  },
  {
    name: 'Avocado Juice',
    category: 'Fresh Drinks',
    description:
      'Creamy, cool and made for refreshment.',
    image: images.juice,
    featured: true,
    confirmed: true,
  },
  {
    name: 'Sprite',
    category: 'Fresh Drinks',
    description:
      'A crisp, sparkling refreshment.',
    image: images.mango,
    confirmed: true,
  },
  {
    name: 'Mixed Fruit Juice',
    category: 'Fresh Drinks',
    description:
      'A vibrant blend of refreshing fruit flavors.',
    image: images.juice,
  },
  {
    name: 'Pineapple Juice',
    category: 'Fresh Drinks',
    description:
      'Bright, tropical and refreshing.',
    image: images.juice,
  },
  {
    name: 'Cappuccino',
    category: 'Hot Drinks',
    description:
      'Smooth espresso with steamed milk.',
    image: images.coffee,
    featured: true,
    confirmed: true,
  },
  {
    name: 'Macchiato',
    category: 'Hot Drinks',
    description:
      'Bold espresso softened with silky foam.',
    image: images.coffee,
  },
  {
    name: 'Ethiopian Coffee',
    category: 'Hot Drinks',
    description:
      'Rich, aromatic coffee made for slow moments.',
    image: images.coffee,
  },
  {
    name: 'Latte',
    category: 'Hot Drinks',
    description:
      'Silky steamed milk with espresso.',
    image: images.coffee,
  },
  {
    name: 'Tea',
    category: 'Hot Drinks',
    description:
      'A warm and comforting classic.',
    image: images.coffee,
  },
  {
    name: 'Fresh Cake',
    category: 'Cakes',
    description:
      'Beautiful cakes available to enjoy or order.',
    image: images.cake,
    confirmed: true,
  },
];

const categories: Category[] = [
  'All',
  'Burgers & Fast Food',
  'Pizza & Pasta',
  'Snacks',
  'Fresh Drinks',
  'Hot Drinks',
  'Cakes',
];

const gallery = [
  images.burger,
  images.pizza,
  images.pasta,
  images.coffee,
  images.juice,
  images.cake,
  images.interior2,
  images.hero,
  images.dessert,
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] =
    useState<Category>('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', onScroll, {
      passive: true,
    });

    document.title =
      'Central Cafe & Fast Food | Mersa, Ethiopia';

    const description = document.querySelector(
      'meta[name="description"]'
    );

    description?.setAttribute(
      'content',
      `Central Cafe & Fast Food in Mersa — coffee, burgers, pizza, pasta, fresh juices, cakes and more. Call ${PHONE}.`
    );

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (lightbox === null) return;

      if (event.key === 'Escape') {
        setLightbox(null);
      }

      if (event.key === 'ArrowLeft') {
        setLightbox(
          (lightbox - 1 + gallery.length) % gallery.length
        );
      }

      if (event.key === 'ArrowRight') {
        setLightbox(
          (lightbox + 1) % gallery.length
        );
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightbox]);

  const filteredMenu =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        );

  const featuredItems = menuItems
    .filter((item) => item.featured)
    .slice(0, 6);

  const scrollTo = (id: string) => {
    setMenuOpen(false);

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  };

  const openCategory = (category: Category) => {
    setActiveCategory(category);
    scrollTo('menu');
  };

  return (
    <div className="site-shell">
      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <header
        className={`nav-wrap ${
          scrolled ? 'nav-scrolled' : ''
        }`}
      >
        <nav
          className="nav container"
          aria-label="Main navigation"
        >
          <button
            className="brand-lockup"
            onClick={() => scrollTo('home')}
            aria-label="Central Cafe home"
          >
            <span className="logo-fallback">
              <span>CC</span>

              <img
                src={logo}
                alt="Central Cafe & Fast Food logo"
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
            </span>

            <span>
              <strong>CENTRAL</strong>
              <small>CAFE & FAST FOOD</small>
            </span>
          </button>

          <div className="desktop-nav">
            {[
              'Home',
              'Menu',
              'About',
              'Cakes',
              'Gallery',
              'Location',
            ].map((link) => (
              <button
                key={link}
                onClick={() =>
                  scrollTo(link.toLowerCase())
                }
              >
                {link}
              </button>
            ))}
          </div>

          <a
            href={`tel:${PHONE}`}
            className="nav-call"
          >
            <Phone size={15} />
            Call now
          </a>

          <button
            className="menu-toggle"
            onClick={() =>
              setMenuOpen((value) => !value)
            }
            aria-label={
              menuOpen
                ? 'Close menu'
                : 'Open menu'
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X />
            ) : (
              <MenuIcon />
            )}
          </button>
        </nav>

        <div
          className={`mobile-drawer ${
            menuOpen ? 'drawer-open' : ''
          }`}
        >
          {[
            'Home',
            'Menu',
            'About',
            'Cakes',
            'Gallery',
            'Location',
          ].map((link) => (
            <button
              key={link}
              onClick={() =>
                scrollTo(link.toLowerCase())
              }
            >
              {link}
            </button>
          ))}

          <a href={`tel:${PHONE}`}>
            <Phone size={16} />
            {PHONE}
          </a>
        </div>
      </header>

      <main>
        {/* ===================================================
            HERO
            =================================================== */}

        <section
          className="hero"
          id="home"
          aria-labelledby="hero-title"
        >
          <div
            className="hero-image"
            style={{
              backgroundImage: `url(${images.hero})`,
            }}
          />

          <div className="hero-shade" />

          <div className="hero-content container">
            <div className="eyebrow light">
              <span />
              Welcome to Central Cafe
              <span />
            </div>

            <h1 id="hero-title">
              Good food.
              <br />
              <em>Great coffee.</em>
              <br />
              Good moments.
            </h1>

            <p>
              A warm place for great food, fresh
              drinks, coffee and unforgettable
              moments in Mersa.
            </p>

            <div className="hero-actions">
              <button
                className="button button-gold"
                onClick={() => scrollTo('menu')}
              >
                Explore our menu
                <ArrowRight size={17} />
              </button>

              <a
                className="button button-outline"
                href={`tel:${PHONE}`}
              >
                <Phone size={16} />
                Call {PHONE}
              </a>
            </div>

            <div className="hero-note">
              <span className="hero-note-line" />
              Open for good moments
              <span className="hero-note-dot" />
            </div>
          </div>

          <button
            className="scroll-cue"
            onClick={() => scrollTo('signatures')}
            aria-label="Scroll to signatures"
          >
            <span>Scroll to discover</span>
            <ArrowDown size={17} />
          </button>
        </section>

        {/* ===================================================
            QUICK INFO
            =================================================== */}

        <section
          className="quick-info container"
          aria-label="Central Cafe highlights"
        >
          <div className="quick-intro">
            <span className="gold-rule" />
            <span>Made fresh in Mersa</span>
          </div>

          {[
            [
              'Fresh Food',
              'Prepared with care',
              Utensils,
            ],
            [
              'Hot Coffee',
              'Rich & aromatic',
              Coffee,
            ],
            [
              'Fresh Juices',
              'Made for refreshment',
              Sparkles,
            ],
            [
              'Cakes',
              'Available for orders',
              Star,
            ],
          ].map(([title, sub, Icon]) => (
            <div
              className="quick-item"
              key={title as string}
            >
              <Icon size={18} />

              <div>
                <strong>
                  {title as string}
                </strong>

                <span>
                  {sub as string}
                </span>
              </div>
            </div>
          ))}
        </section>

        {/* ===================================================
            SIGNATURES
            =================================================== */}

        <section
          className="section signatures"
          id="signatures"
        >
          <div className="container section-heading split-heading">
            <div>
              <span className="eyebrow">
                The Central edit
              </span>

              <h2>
                Our <em>signatures.</em>
              </h2>
            </div>

            <p>
              A taste of what makes Central Cafe
              special. Comforting favorites and
              refreshing moments for every kind
              of visit.
            </p>
          </div>

          <div className="signature-grid container">
            {featuredItems.map((item, index) => (
              <article
                className={`signature-card card-${
                  index + 1
                }`}
                key={item.name}
              >
                <img
                  src={item.image}
                  alt={`${item.name} demo imagery`}
                  loading="lazy"
                />

                <div className="card-overlay">
                  <span>{item.category}</span>

                  <h3>{item.name}</h3>

                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="container section-end-link">
            <button
              onClick={() => scrollTo('menu')}
            >
              View the full menu
              <ArrowRight size={16} />
            </button>
          </div>
        </section>

        {/* ===================================================
            MENU
            =================================================== */}

        <section
          className="menu-section section"
          id="menu"
        >
          <div className="container">
            <div className="section-heading centered">
              <span className="eyebrow">
                Come hungry
              </span>

              <h2>
                The <em>menu.</em>
              </h2>

              <p>
                Something for every craving,
                from first coffee to last bite.
              </p>
            </div>

            <div
              className="category-tabs"
              role="tablist"
              aria-label="Menu categories"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  role="tab"
                  aria-selected={
                    activeCategory === category
                  }
                  className={
                    activeCategory === category
                      ? 'active'
                      : ''
                  }
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="menu-grid">
              {filteredMenu.map(
                (item, index) => (
                  <article
                    className="menu-card"
                    key={item.name}
                  >
                    <div className="menu-image">
                      <img
                        src={item.image}
                        alt={`${item.name} demo imagery`}
                        loading="lazy"
                      />

                      <span className="menu-number">
                        {String(index + 1).padStart(
                          2,
                          '0'
                        )}
                      </span>
                    </div>

                    <div className="menu-copy">
                      <div>
                        <h3>{item.name}</h3>

                        {!item.confirmed && (
                          <span className="suggested">
                            Demo suggestion
                          </span>
                        )}
                      </div>

                      <p>{item.description}</p>

                      <span className="no-price">
                        Price on request
                      </span>
                    </div>
                  </article>
                )
              )}
            </div>

            <p className="demo-note">
              <span>*</span>
              Demo imagery and suggested items
              are placeholders. Replace them with
              Central Cafe's actual food photography
              and confirmed menu when provided.
            </p>
          </div>
        </section>

        {/* ===================================================
            DRINK FEATURE
            =================================================== */}

        <section className="drink-feature section">
          <div
            className="drink-image"
            style={{
              backgroundImage: `url(${images.mango})`,
            }}
          />

          <div className="drink-copy">
            <span className="eyebrow light">
              A little sunshine
            </span>

            <h2>
              Fresh &
              <br />
              <em>refreshing.</em>
            </h2>

            <p>
              Bright, cool and made for the
              warm Mersa afternoon. Discover
              the fresh side of Central.
            </p>

            <button
              className="text-link light-link"
              onClick={() =>
                openCategory('Fresh Drinks')
              }
            >
              Explore fresh drinks
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="drink-stamp">
            <Sparkles size={18} />

            <span>
              Fresh
              <br />
              daily
            </span>
          </div>
        </section>

        {/* ===================================================
            YOGURT
            =================================================== */}

        <section className="yogurt-section section">
          <div className="container yogurt-layout">
            <div className="yogurt-copy">
              <span className="eyebrow">
                Cool & creamy
              </span>

              <h2>
                Fresh
                <br />
                <em>yogurt.</em>
              </h2>

              <p>
                A simple, refreshing favorite
                for a lighter moment.
              </p>

              <div className="small-detail">
                <Check size={15} />
                Available at Central Cafe
              </div>
            </div>

            <div className="yogurt-photo">
              <img
                src={images.dessert}
                alt="Fresh yogurt and dessert demo imagery"
                loading="lazy"
              />

              <div className="photo-caption">
                A moment of sweetness
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            CAKES
            =================================================== */}

        <section
          className="cake-section section"
          id="cakes"
        >
          <div className="container cake-layout">
            <div className="cake-photo">
              <img
                src={images.cake}
                alt="Decorated celebration cake demo imagery"
                loading="lazy"
              />

              <span className="vertical-label">
                Made for your moments
              </span>
            </div>

            <div className="cake-copy">
              <span className="eyebrow">
                For every celebration
              </span>

              <h2>
                Made for
                <br />
                <em>your moments.</em>
              </h2>

              <p>
                Fresh cakes for everyday enjoyment
                and special celebrations. Make it
                a little more memorable.
              </p>

              <div className="cake-options">
                <div>
                  <span>01</span>

                  <div>
                    <h3>
                      Enjoy at Central Cafe
                    </h3>

                    <p>
                      Beautiful cakes available
                      to enjoy at the cafe.
                    </p>
                  </div>
                </div>

                <div>
                  <span>02</span>

                  <div>
                    <h3>Order a cake</h3>

                    <p>
                      Custom cakes for birthdays
                      and special occasions.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={`tel:${PHONE}`}
                className="button button-dark"
              >
                Order a cake
                <Phone size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* ===================================================
            ABOUT
            =================================================== */}

        <section
          className="about-section section"
          id="about"
        >
          <div className="container about-layout">
            <div className="about-photo">
              <img
                src={images.interior}
                alt="Warm cafe interior demo imagery"
                loading="lazy"
              />

              <div className="about-badge">
                <span>Made in</span>
                <strong>Central</strong>
                <small>Mersa, Ethiopia</small>
              </div>
            </div>

            <div className="about-copy">
              <span className="eyebrow">
                The place to be
              </span>

              <h2>
                More than
                <br />
                <em>a cafe.</em>
              </h2>

              <p>
                Central Cafe & Fast Food is a
                welcoming destination in Mersa
                for coffee, fresh food, refreshing
                drinks, cakes and good moments.
              </p>

              <p className="about-secondary">
                Drop in for a quick bite, stay for
                the conversation, or take something
                special home.
              </p>

              <button
                className="text-link"
                onClick={() =>
                  scrollTo('location')
                }
              >
                Find your way here
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* ===================================================
            EXPERIENCE
            =================================================== */}

        <section className="experience-section">
          <div
            className="experience-bg"
            style={{
              backgroundImage: `url(${images.interior2})`,
            }}
          />

          <div className="experience-overlay" />

          <div className="experience-content container">
            <span className="eyebrow light">
              The Central feeling
            </span>

            <h2>
              Come hungry.
              <br />
              <em>Leave happy.</em>
            </h2>

            <p>
              Whether you're stopping by for a
              coffee, grabbing a quick meal,
              enjoying fresh juice or ordering
              a cake for a special occasion,
              Central Cafe is here to make the
              moment better.
            </p>

            <button
              className="button button-gold"
              onClick={() => scrollTo('menu')}
            >
              Explore menu
              <ArrowRight size={17} />
            </button>
          </div>
        </section>

        {/* ===================================================
            GALLERY
            =================================================== */}

        <section
          className="gallery-section section"
          id="gallery"
        >
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="eyebrow">
                  A glimpse inside
                </span>

                <h2>
                  Made to be
                  <br />
                  <em>remembered.</em>
                </h2>
              </div>

              <p>
                Good food has a way of making
                moments stay with you. Take a
                look around.
              </p>
            </div>

            <div className="gallery-grid">
              {gallery.map((image, index) => (
                <button
                  className={`gallery-item gallery-${
                    index + 1
                  }`}
                  key={`${image}-${index}`}
                  onClick={() =>
                    setLightbox(index)
                  }
                  aria-label={`Open gallery image ${
                    index + 1
                  }`}
                >
                  <img
                    src={image}
                    alt="Central Cafe demo imagery"
                    loading="lazy"
                  />

                  <span>
                    <ArrowRight size={16} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            LOCATION
            =================================================== */}

        <section
          className="location-section section"
          id="location"
        >
          <div className="container location-layout">
            <div className="location-copy">
              <span className="eyebrow">
                Come say hello
              </span>

              <h2>
                Find us
                <br />
                <em>in Mersa.</em>
              </h2>

              <div className="location-details">
                <div>
                  <MapPin size={19} />

                  <span>
                    <strong>
                      Central Cafe & Fast Food
                    </strong>

                    Mersa, Ethiopia
                  </span>
                </div>

                <div>
                  <Phone size={19} />

                  <span>
                    <strong>Call us</strong>

                    <a href={`tel:${PHONE}`}>
                      {PHONE}
                    </a>
                  </span>
                </div>

                <div>
                  <Clock3 size={19} />

                  <span>
                    <strong>Good moments</strong>
                    Open for your visit
                  </span>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Mersa%2C%20Ethiopia"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Get directions
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="location-art">
              <div className="map-ring ring-one" />
              <div className="map-ring ring-two" />

              <div className="map-pin">
                <MapPin
                  size={28}
                  fill="currentColor"
                />

                <span>Central Cafe</span>
              </div>

              <div className="map-label">
                MERSA
                <br />
                <small>ETHIOPIA</small>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            CONTACT CTA
            =================================================== */}

        <section className="contact-cta">
          <div className="contact-glow" />

          <div className="container contact-content">
            <span className="eyebrow light">
              Your table is waiting
            </span>

            <h2>
              Your next favorite
              <br />
              <em>meal is waiting.</em>
            </h2>

            <p>
              Visit Central Cafe in Mersa or
              give us a call.
            </p>

            <div className="hero-actions">
              <a
                className="button button-gold"
                href={`tel:${PHONE}`}
              >
                Call {PHONE}
                <Phone size={16} />
              </a>

              <button
                className="button button-outline"
                onClick={() => scrollTo('menu')}
              >
                Explore menu
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <span className="footer-logo-fallback">
              CC

              <img
                src={logo}
                alt="Central Cafe & Fast Food"
                onError={(event) => {
                  event.currentTarget.style.display =
                    'none';
                }}
              />
            </span>

            <div>
              <h3>
                Central Cafe
                <br />
                <span>& Fast Food</span>
              </h3>

              <p>
                Good food. Great coffee.
                <br />
                Good moments.
              </p>
            </div>
          </div>

          <div className="footer-col">
            <span className="footer-label">
              Explore
            </span>

            <button
              onClick={() => scrollTo('menu')}
            >
              Menu
            </button>

            <button
              onClick={() => scrollTo('about')}
            >
              About
            </button>

            <button
              onClick={() => scrollTo('cakes')}
            >
              Cakes
            </button>

            <button
              onClick={() => scrollTo('gallery')}
            >
              Gallery
            </button>
          </div>

          <div className="footer-col">
            <span className="footer-label">
              Visit
            </span>

            <p>Mersa, Ethiopia</p>

            <a href={`tel:${PHONE}`}>
              {PHONE}
            </a>

            <span className="footer-label footer-social-label">
              Contact
            </span>

            <a href={`tel:${PHONE}`}>
              Call Central Cafe
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © 2026 Central Cafe & Fast Food.
            All rights reserved.
          </span>

          <span>
            Website by{' '}
            <strong>NovaLabs</strong>
          </span>
        </div>
      </footer>

      {/* =====================================================
          MOBILE CALL BAR
          ===================================================== */}

      <a
        href={`tel:${PHONE}`}
        className="mobile-call"
      >
        <Phone
          size={17}
          fill="currentColor"
        />

        <span>Call Central Cafe</span>

        <strong>{PHONE}</strong>
      </a>

      {/* =====================================================
          LIGHTBOX
          ===================================================== */}

      {lightbox !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery preview"
          onClick={() =>
            setLightbox(null)
          }
        >
          <button
            className="lightbox-close"
            onClick={() =>
              setLightbox(null)
            }
            aria-label="Close gallery"
          >
            <X />
          </button>

          <button
            className="lightbox-arrow lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();

              setLightbox(
                (lightbox -
                  1 +
                  gallery.length) %
                  gallery.length
              );
            }}
            aria-label="Previous image"
          >
            <ChevronLeft />
          </button>

          <img
            src={gallery[lightbox]}
            alt="Central Cafe gallery preview"
            onClick={(event) =>
              event.stopPropagation()
            }
          />

          <button
            className="lightbox-arrow lightbox-next"
            onClick={(event) => {
              event.stopPropagation();

              setLightbox(
                (lightbox + 1) %
                  gallery.length
              );
            }}
            aria-label="Next image"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;