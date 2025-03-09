interface CardProps {
    label: string;
    value: number | string;
    color: string; // To change color of value text
}

const TargetsCard: React.FC<CardProps> = ({ label, value, color }) => {
    return (
        <div className="bg-white shadow-md rounded-md p-4 border border-gray-200 w-48">
            <div className="grid grid-cols-[0.4fr_1fr]  gap-1 items-center">
                <p className={`font-bold text-3xl ${color} text-center`}>{value}</p>
                <p className="text-left">{label}</p>
            </div>
        </div>
    );
};

export default TargetsCard;