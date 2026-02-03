import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  status: "Live" | "In Progress";
  image: string;
};

export default function ProjectCard({
  title,
  description,
  status,
  image,
}: ProjectCardProps) {
  return (
    <div className="rounded-2xl bg-black p-6 border border-neutral-800 hover:border-purple-500 transition">
      <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-semibold">{title}</h3>

        <span
          className={`text-sm px-3 py-1 rounded-full ${
            status === "Live"
              ? "bg-green-600 text-white"
              : "bg-yellow-600 text-black"
          }`}
        >
          {status}
        </span>
      </div>

      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
