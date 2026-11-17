export default function Header() {
    return (
        <div className="header">
            <div>
                <span className="logo">MyApp</span>
                <span className="tagline">order ahead, skip the line</span>
            </div>
                <div className="cart-count">🛒 Cart{CartCount}</div>
        </div>
    );
}