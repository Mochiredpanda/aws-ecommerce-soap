import Card from './Card';

export default function CardRow() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card
                imageSrc="/images/news/lavender_1.png"
                category="Discover"
                title="Lavender & Orange Soaps"
                link="/blends"
            />
            {/* Card 2 */}
            <Card
                imageSrc="/images/news/lavender_1.png"
                category="Discover"
                title="Title 2"
                link="/blends"
            />
            {/* Card 3 */}
            <Card
                imageSrc="/images/news/lavender_1.png"
                category="Discover"
                title="Title 3"
                link="/blends"
            />
        </section>
    );
}

