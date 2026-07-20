import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Lock, KeyRound } from "lucide-react";
import { useAdmin } from "@/contexts/AdminContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface AdminAuthModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  redirectToAdminOnSuccess?: boolean;
}

const AdminAuthModal: React.FC<AdminAuthModalProps> = ({
  open,
  onOpenChange,
  redirectToAdminOnSuccess = true,
}) => {
  const { isPasswordModalOpen, setIsPasswordModalOpen, login } = useAdmin();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const isOpen = open !== undefined ? open : isPasswordModalOpen;

  const handleOpenChange = (newOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(newOpen);
    } else {
      setIsPasswordModalOpen(newOpen);
    }
    if (!newOpen) {
      setPassword("");
      setError(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      toast.success("Acesso concedido com sucesso!");
      handleOpenChange(false);
      if (redirectToAdminOnSuccess) {
        navigate("/admin");
      }
    } else {
      setError(true);
      toast.error("Senha incorreta. Tente novamente.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border shadow-2xl">
        <DialogHeader className="space-y-3 text-center sm:text-left">
          <div className="mx-auto sm:mx-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <Lock className="w-6 h-6" />
          </div>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Área Restrita
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Digite a senha administrativa para acessar as configurações do sistema.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <div className="space-y-2">
            <Label htmlFor="admin-password">Senha de Acesso</Label>
            <div className="relative">
              <Input
                id="admin-password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={`pl-10 ${error ? "border-destructive focus-visible:ring-destructive" : ""}`}
                autoFocus
              />
              <KeyRound className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
            </div>
            {error && (
              <p className="text-xs text-destructive font-medium">
                Senha inválida. Tente novamente.
              </p>
            )}
          </div>

          <DialogFooter className="pt-2 sm:justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>
              Cancelar
            </Button>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Entrar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminAuthModal;
