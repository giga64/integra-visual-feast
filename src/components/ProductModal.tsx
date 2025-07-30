import { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Minus, Plus, X } from "lucide-react";
import { MenuItem } from "./MenuCard";

interface ProductModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number, observations?: string) => void;
}

const ProductModal = ({ item, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const [observations, setObservations] = useState("");

  if (!item) return null;

  const handleAddToCart = () => {
    onAddToCart(item, quantity, observations.trim() || undefined);
    setQuantity(1);
    setObservations("");
    onClose();
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          
          {item.image && (
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-8">
            <DialogHeader className="mb-6">
              <h2 className="font-playfair text-3xl font-semibold text-foreground">
                {item.name}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                {item.description}
              </p>
            </DialogHeader>

            {/* Campo de observações */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">
                Observações (opcional)
              </label>
              <Textarea
                value={observations}
                onChange={(e) => setObservations(e.target.value)}
                placeholder="Ex: sem cebola, ponto da carne, molho à parte..."
                className="min-h-[80px] resize-none"
                maxLength={200}
              />
              <p className="text-xs text-muted-foreground mt-1">
                {observations.length}/200 caracteres
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="font-medium text-foreground">Quantidade:</span>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={decrementQuantity}
                      className="h-10 w-10"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="font-semibold text-xl w-8 text-center">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={incrementQuantity}
                      className="h-10 w-10"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="text-right">
                  <div className="price-tag text-2xl mb-4">
                    R$ {(item.price * quantity).toFixed(2)}
                  </div>
                </div>
              </div>

              <Button
                onClick={handleAddToCart}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium w-full"
              >
                Adicionar ao Carrinho
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;