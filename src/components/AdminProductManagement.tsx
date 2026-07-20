import React, { useState } from "react";
import { useProducts } from "@/contexts/ProductContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Trash2, Plus, X, Upload } from "lucide-react";
import { toast } from "sonner";
import { Product } from "@/types/product";

const AdminProductManagement = () => {
  const { productsList, addProduct, updateProduct, deleteProduct } = useProducts();
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Form State
  const [formData, setFormData] = useState<Partial<Product>>({
    id: "",
    name: "",
    description: "",
    price: 0,
    image: "",
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (e.g., max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        toast.error("A imagem deve ter no máximo 2MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setFormData(product);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({ id: "", name: "", description: "", price: 0, image: "" });
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
      deleteProduct(id);
      toast.success("Produto excluído com sucesso!");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.image) {
      toast.error("Por favor, preencha todos os campos obrigatórios (nome, preço, imagem).");
      return;
    }

    if (editingId) {
      updateProduct(editingId, formData as Product);
      toast.success("Produto atualizado com sucesso!");
    } else {
      const newId = formData.id || formData.name!.toLowerCase().replace(/\s+/g, '-');
      addProduct({ ...formData, id: newId } as Product);
      toast.success("Produto adicionado com sucesso!");
    }
    
    handleCancelEdit();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Gerenciamento de Produtos</h2>

      {/* Formulário de Produto */}
      <form onSubmit={handleSubmit} className="bg-muted/30 p-6 rounded-xl border border-border/50 space-y-4">
        <h3 className="font-medium text-lg mb-2">
          {editingId ? "Editar Produto" : "Novo Produto"}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome do Produto</Label>
            <Input 
              id="name" 
              value={formData.name || ""} 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="price">Preço (R$)</Label>
            <Input 
              id="price" 
              type="number"
              step="0.01"
              value={formData.price || ""} 
              onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })} 
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Descrição</Label>
          <Textarea 
            id="description" 
            value={formData.description || ""} 
            onChange={(e) => setFormData({ ...formData, description: e.target.value })} 
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="image">URL da Imagem ou Arquivo do Dispositivo</Label>
          <div className="flex flex-col sm:flex-row gap-2">
            <Input 
              id="image" 
              value={formData.image || ""} 
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              placeholder="Ex: /assets/brigadeiros.jpg ou https://..."
              className="flex-1"
            />
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                title="Carregar imagem do dispositivo"
              />
              <Button type="button" variant="secondary" className="w-full sm:w-auto pointer-events-none">
                <Upload className="w-4 h-4 mr-2" />
                Carregar Imagem
              </Button>
            </div>
          </div>
          {formData.image && (
            <div className="mt-2">
              <p className="text-xs text-muted-foreground mb-1">Pré-visualização:</p>
              <img src={formData.image} alt="Preview" className="h-16 w-16 object-cover rounded-md border border-border/50" />
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2">
          {editingId && (
            <Button type="button" variant="outline" onClick={handleCancelEdit} className="w-full sm:w-auto">
              <X className="w-4 h-4 mr-2" /> Cancelar
            </Button>
          )}
          <Button type="submit" className="w-full sm:w-auto">
            {editingId ? "Salvar Alterações" : (
              <><Plus className="w-4 h-4 mr-2" /> Adicionar Produto</>
            )}
          </Button>
        </div>
      </form>

      {/* Lista de Produtos */}
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
        {/* Mobile Layout (List of Cards) */}
        <div className="block sm:hidden divide-y divide-border/60">
          {productsList.map((product) => (
            <div key={product.id} className="p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-12 h-12 rounded-lg object-cover border border-border/50 flex-shrink-0"
                  onError={(e) => (e.currentTarget.src = "/favicon.ico")}
                />
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground leading-snug truncate">{product.name}</h4>
                  <p className="text-sm font-medium text-primary mt-0.5">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                <Button variant="ghost" size="icon" onClick={() => handleEdit(product)} className="text-primary hover:bg-primary/10 h-8 w-8">
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(product.id)} className="text-destructive hover:bg-destructive/10 h-8 w-8">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
          
          {productsList.length === 0 && (
            <div className="p-6 text-center text-muted-foreground">
              Nenhum produto cadastrado.
            </div>
          )}
        </div>

        {/* Desktop Layout (Table) */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-muted-foreground uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold w-24">Imagem</th>
                <th className="px-6 py-4 font-semibold">Nome</th>
                <th className="px-6 py-4 font-semibold w-32">Preço</th>
                <th className="px-6 py-4 font-semibold text-right w-28">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {productsList.map((product) => (
                <tr key={product.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-12 h-12 rounded object-cover border border-border/50"
                      onError={(e) => (e.currentTarget.src = "/favicon.ico")} // Fallback
                    />
                  </td>
                  <td className="px-6 py-4 font-medium">{product.name}</td>
                  <td className="px-6 py-4">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm" onClick={() => handleEdit(product)} className="text-primary hover:text-primary">
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => handleDelete(product.id)} className="text-destructive hover:bg-destructive/10">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
              
              {productsList.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">
                    Nenhum produto cadastrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProductManagement;
