// ===========================
// GLOBAL CART SYSTEM
// ===========================
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartUI();
    }

    loadCart() {
        const saved = localStorage.getItem('starShopCart');
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem('starShopCart', JSON.stringify(this.items));
    }

    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                artist: product.artist,
                quantity: 1
            });
        }

        this.saveCart();
        this.updateCartUI();
        this.showNotification(`${product.name} ditambahkan ke keranjang!`);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartUI();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, quantity);
            this.saveCart();
            this.updateCartUI();
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            const price = parseInt(item.price.replace(/\D/g, ''));
            return total + (price * item.quantity);
        }, 0);
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    updateCartUI() {
        const cartCounts = document.querySelectorAll('.cart-count');
        const totalItems = this.getTotalItems();

        cartCounts.forEach(count => {
            count.textContent = totalItems;
            if (totalItems > 0) {
                count.style.display = 'flex';
            } else {
                count.style.display = 'none';
            }
        });
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `cart-notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    clearCart() {
        this.items = [];
        this.saveCart();
        this.updateCartUI();
    }
}

// Initialize global cart
const globalCart = new ShoppingCart();

// ===========================
// PRODUCT FILTER FUNCTIONALITY
// ===========================
function initializeProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (filterButtons.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active to clicked button
            button.classList.add('active');

            const filterCategory = button.getAttribute('data-category');

            // Filter products
            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (filterCategory === 'all' || cardCategory === filterCategory) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===========================
// ADD TO CART BUTTONS
// ===========================
function initializeAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.btn-add-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const productCard = button.closest('.product-card');
            const product = {
                id: productCard.getAttribute('data-id'),
                name: productCard.querySelector('h3').textContent,
                price: productCard.querySelector('.product-price').textContent.trim(),
                image: productCard.querySelector('.product-image img').src,
                artist: productCard.querySelector('.product-artist')?.textContent || 'Unknown Artist'
            };

            globalCart.addItem(product);
        });
    });
}

// ===========================
// QUICK VIEW FUNCTIONALITY
// ===========================
function initializeQuickView() {
    const quickViewButtons = document.querySelectorAll('.btn-quick-view');

    quickViewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const productCard = button.closest('.product-card');
            const productId = productCard.getAttribute('data-id');

            // Redirect to product detail page
            window.location.href = `product-detail.html?id=${productId}`;
        });
    });
}

// ===========================
// Mobile Navigation Toggle
// ===========================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ===========================
// Scroll to Top Button
// ===========================
const scrollTopBtn = document.querySelector('.btn-scroll-top');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================
// Newsletter Form
// ===========================
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;

        globalCart.showNotification(`Terima kasih! Email ${email} telah terdaftar.`);
        newsletterForm.reset();
    });
}

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===========================
// Lazy Loading Images
// ===========================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// Search Functionality
// ===========================
const searchIcon = document.querySelector('.nav-icon .fa-search');

if (searchIcon) {
    searchIcon.parentElement.addEventListener('click', (e) => {
        e.preventDefault();

        const searchModal = document.createElement('div');
        searchModal.className = 'search-modal';
        searchModal.innerHTML = `
            <div class="search-modal-content">
                <button class="search-close">&times;</button>
                <input type="text" placeholder="Search artworks..." class="search-input">
                <div class="search-results"></div>
            </div>
        `;
        searchModal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.8);
            z-index: 10000;
            display: flex;
            align-items: flex-start;
            justify-content: center;
            padding-top: 100px;
        `;

        document.body.appendChild(searchModal);

        const searchInput = searchModal.querySelector('.search-input');
        searchInput.focus();

        searchModal.querySelector('.search-close').addEventListener('click', () => {
            searchModal.remove();
        });

        searchModal.addEventListener('click', (e) => {
            if (e.target === searchModal) {
                searchModal.remove();
            }
        });
    });
}

// ===========================
// Fade In Animation on Scroll
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card, .blog-card, .promo-card').forEach(el => {
    fadeObserver.observe(el);
});

// ===========================
// Performance Optimization
// ===========================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

window.addEventListener('scroll', debounce(() => {
    // Scroll logic here
}, 100));

// ===========================
// Active Page Highlight
// ===========================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-menu a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// ===========================
// Preload Critical Images
// ===========================
function preloadImages(urls) {
    urls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

preloadImages([
    './assets/images/hero-art-1.jpg',
    './assets/images/hero-art-2.jpg'
]);

// ===========================
// Initialize All Features on DOM Load
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    initializeProductFilters();
    initializeAddToCartButtons();
    initializeQuickView();

    console.log('Star Shop Artworks - All Features Loaded Successfully!');
    console.log('Cart Items:', globalCart.getTotalItems());
});
