import Image from 'next/image';

type CardProps = {
    imageSrc: string;
    category: string;
    title: string;
    link: string;
};

export default function Card({ imageSrc, category, title, link }: CardProps) {
    return (
        <a href={link} className="block group relative overflow-hidden rounded-lg shadow-lg">
            <Image
                src    = {imageSrc}
                alt    = {title}
                width  = {500}
                height = {500}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6">
                <p className="text-xs font-semibold tracking-wide uppercase text-white/90">{category}</p>
                <h3 className='mt-1 text-xl font-bold text-white'>{title}</h3>
            </div>
        </a>
    );
}
