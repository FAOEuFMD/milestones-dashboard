interface FiltersProps{
    categories: string[];
    selectedCategories: string[];
    filter: 'timeframe' | 'status';
    handleFilterChange: (filter: 'timeframe' | 'status', value: string) => void
}

const Filters: React.FC<FiltersProps> = ({ categories, selectedCategories, filter, handleFilterChange }) => {
    return (

            <div className="flex flex-col gap-2 px-3 mb-4">
            {categories.map((category) => (
                <label key={category} className="flex items-center gap-2">
                <input
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleFilterChange(filter, category)}
                    className="w-4 h-4 accent-greyGreen"
                />
                {category}
                </label>
            ))}
            </div>
    );
};

export default Filters;