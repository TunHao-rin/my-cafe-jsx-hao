export default function MenuFilter({
    categories, activeCategory, search, sort,
    onCategoryChange, onSearchChange, onSortChange
})
 {
    return (
        <div className="filters">
            {categories.map((category) => (
            <button
                key={category}
                className={category === activeCategory ? 'chip.active' : 'chip'}
                onClick={() => onCategoryChange(category)}
            >
                {category}
            </button>
            ))}
            <input className="input-search"
            placeholder="Search menu..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            />
            <select className="select-sort"
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
            >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
            </select>
        </div>
    );      
}

