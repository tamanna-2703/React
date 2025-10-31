import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo">Tamannaah's Boutique</div>
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Search products..." />
            <button className="search-btn">🔍</button>
            {/* <ul className="search-results">
              <li>Designer suits</li>
              <li>Designer sarees</li>
              <li>Indo-western</li>
              <li>Party wearsuits</li>
            </ul> */}
          </div>

          <nav className="nav">
            <ul className="nav-list">
              <li><a href="#">Shop</a></li>
              <li><a href="#">New</a></li>
              <li><a href="#">Sale</a></li>
              <li><a href="#">AboutUs</a></li>
            </ul>
          </nav>

          <button className="mobile-menu-btn">☰</button>
         
        </div>
      </header>

      {/* Product Section */}
      <section className="product-section">
        <div className="container">
          <div className="product-container">
            {/* Product Images */}
            <div className="product-images">
              <img 
                src="https://images.unsplash.com/photo-1745482039058-92017fb981cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
                alt="Product"
                className="main-image"
              />

              <div className="thumbnail-list">
                <img src="https://images.unsplash.com/photo-1610030468706-9a6dbad49b0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
                     alt="Thumb 1"
                     className="thumbnail active"
                />
                <img src="https://plus.unsplash.com/premium_photo-1720798653515-90888080b70e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                     alt="Thumb 2"
                     className="thumbnail"
                />
                <img src="https://plus.unsplash.com/premium_photo-1669977749819-d8737b4408f7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1178"
                     alt="Thumb 3"
                     className="thumbnail"
                />
                <img src="https://images.unsplash.com/photo-1732850195250-940dd4d0bb49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
                     alt="Thumb 4"
                     className="thumbnail"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h1 className="product-title">Designer Saree for women</h1>

              <div className="product-rating">
                <span>★★★★★</span>
                <span>(4.8/5 - 234 reviews)</span>
              </div>

              <div className="product-price">$299.99</div>

              <p className="product-description">
                These designer sarees are made from pure silk, fine cotton, and zari and are intricately designed and beautifully crafted in the Madhya Pradesh town of Chanderi. These feather light and transparent sarees, made from one of India’s finest fabrics, are a must-have in every woman’s wardrobe.</p>

              {/* Size Selector */}
              <div className="size-selector">
                <label className="size-label">Select Size:</label>
                <div className="size-options">
                  <button className="size-option">xs</button>
                  <button className="size-option">s</button>
                  <button className="size-option selected">l</button>
                  <button className="size-option">XL</button>
                  <button className="size-option">XXL</button>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="quantity-selector">
                <span className="quantity-label">Quantity:</span>
                <div className="quantity-controls">
                  <button className="quantity-btn">−</button>
                  <span className="quantity-value">1</span>
                  <button className="quantity-btn">+</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn btn-secondary">Add to Wishlist</button>
              </div>

              {/* Features */}
              <div className="features">
                <div className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Free Shipping</span>
                </div>
                <div className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>30-Day Returns</span>
                </div>
                <div className="feature-item">
                  <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default App