import { Card } from "@/components/ui/card";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

interface MenuCardProps {
  title: string;
  items: MenuItem[];
  onItemClick: (item: MenuItem) => void;
}

const MenuCard = ({ title, items, onItemClick }: MenuCardProps) => {
  return (
    <Card className="menu-card mb-8">
      <h2 className="font-playfair text-2xl font-semibold text-foreground mb-6">
        {title}
      </h2>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="menu-item"
            onClick={() => onItemClick(item)}
          >
            <div className="flex-1">
              <h3 className="font-medium text-foreground text-lg mb-1">
                {item.name}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {item.description}
              </p>
            </div>
            <div className="price-tag ml-4">
              R$ {item.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MenuCard;
export type { MenuItem };