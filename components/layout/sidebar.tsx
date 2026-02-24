import Link from "next/link";

type Item = { href: string; label: string };

export function Sidebar({ items, title }: { items: Item[]; title: string }) {
  return (
    <aside className="glass h-fit w-full space-y-4 p-4 lg:w-64">
      <h2 className="text-lg font-semibold text-primary">{title}</h2>
      <nav className="flex flex-col gap-2">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="rounded-xl px-3 py-2 text-sm hover:bg-red-50">
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
