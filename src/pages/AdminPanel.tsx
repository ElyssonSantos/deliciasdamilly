import { useState } from "react";
import { useAdmin } from "@/contexts/AdminContext";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import AdminAuthModal from "@/components/AdminAuthModal";
import AdminProductManagement from "@/components/AdminProductManagement";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, LogOut, Lock, KeyRound, Settings, Package } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const AdminPanel = () => {
  const {
    isChristmasTheme,
    setChristmasTheme,
    topBannerText,
    setTopBannerText,
    isBannerActive,
    setBannerActive,
    bannerSpeed,
    setBannerSpeed,
    isAuthenticated,
    logout,
    login,
  } = useAdmin();

  const [inputPassword, setInputPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    if (newPassword.trim()) {
      localStorage.setItem("admin_password", newPassword.trim());
      setNewPassword("");
      toast.success("Configurações e nova senha salvas com sucesso!");
    } else {
      toast.success("Configurações salvas com sucesso!");
    }
  };

  const handleDirectLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(inputPassword)) {
      toast.success("Acesso concedido!");
      setInputPassword("");
    } else {
      toast.error("Senha incorreta. Tente novamente.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header onCartClick={() => {}} onOrderClick={() => {}} />
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="bg-card text-card-foreground p-8 rounded-2xl shadow-elevated border border-border max-w-md w-full space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                <Lock className="w-7 h-7" />
              </div>
              <h1 className="text-2xl font-bold">Painel Administrativo</h1>
              <p className="text-sm text-muted-foreground">
                Digite a senha de acesso para continuar.
              </p>
            </div>

            <form onSubmit={handleDirectLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-pass">Senha</Label>
                <div className="relative">
                  <Input
                    id="admin-pass"
                    type="password"
                    placeholder="••••••••"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    className="pl-10"
                    autoFocus
                  />
                  <KeyRound className="w-4 h-4 absolute left-3 top-3 text-muted-foreground" />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Entrar no Painel
              </Button>
            </form>

            <Button variant="ghost" className="w-full text-sm text-muted-foreground" onClick={() => navigate("/")}>
              <ChevronLeft className="mr-2 h-4 w-4" /> Voltar à loja
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onCartClick={() => {}} onOrderClick={() => {}} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <Button variant="ghost" onClick={() => navigate("/")}>
            <ChevronLeft className="mr-2 h-4 w-4" /> Voltar para a loja
          </Button>
          <Button
            variant="outline"
            className="text-destructive border-destructive/30 hover:bg-destructive/10"
            onClick={() => {
              logout();
              navigate("/");
              toast.info("Você saiu do painel administrativo.");
            }}
          >
            <LogOut className="mr-2 h-4 w-4" /> Sair
          </Button>
        </div>

        <div className="bg-card text-card-foreground p-4 sm:p-8 rounded-xl shadow-elevated border border-border">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">Painel Administrativo</h1>

          <div className="space-y-8">
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50 p-1 rounded-xl">
                <TabsTrigger value="products" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm py-3 text-sm sm:text-base">
                  <Package className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Gerenciamento de Produtos</span>
                  <span className="sm:hidden">Produtos</span>
                </TabsTrigger>
                <TabsTrigger value="settings" className="rounded-lg data-[state=active]:bg-background data-[state=active]:shadow-sm py-3 text-sm sm:text-base">
                  <Settings className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Configurações Avançadas</span>
                  <span className="sm:hidden">Avançado</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="products" className="space-y-6 animate-fade-in">
                <AdminProductManagement />
              </TabsContent>

              <TabsContent value="settings" className="space-y-8 animate-fade-in">
                <div className="flex flex-col gap-4 border-b pb-6">
                  <h2 className="text-xl font-semibold">Tema Sazonal</h2>
                  <div className="flex items-center justify-between bg-muted/30 p-4 rounded-lg">
                    <div className="space-y-0.5">
                      <Label className="text-base">Especial de Natal</Label>
                      <p className="text-sm text-muted-foreground">
                        Ativa a neve caindo, estilos e mensagens com o tema natalino.
                      </p>
                    </div>
                    <Switch
                      checked={isChristmasTheme}
                      onCheckedChange={setChristmasTheme}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-b pb-6">
                  <h2 className="text-xl font-semibold">Rodapé Superior Rotatório (Banner)</h2>
                  <div className="flex items-center justify-between bg-muted/30 p-4 rounded-lg mb-4">
                    <div className="space-y-0.5">
                      <Label className="text-base">Ativar Banner</Label>
                      <p className="text-sm text-muted-foreground">
                        Mostra um banner animado no topo da loja.
                      </p>
                    </div>
                    <Switch
                      checked={isBannerActive}
                      onCheckedChange={setBannerActive}
                    />
                  </div>
                  <div className="space-y-4 pt-4 border-t border-border/50 mt-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="banner-speed">Velocidade do Banner (segundos)</Label>
                        <span className="text-sm font-medium">{bannerSpeed}s</span>
                      </div>
                      <input
                        id="banner-speed"
                        type="range"
                        min="5"
                        max="60"
                        step="1"
                        value={bannerSpeed}
                        onChange={(e) => setBannerSpeed(parseInt(e.target.value))}
                        disabled={!isBannerActive}
                        className="w-full accent-primary"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Mais rápido (5s)</span>
                        <span>Mais lento (60s)</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="banner-text">Texto do Banner</Label>
                      <Input
                        id="banner-text"
                        value={topBannerText}
                        onChange={(e) => setTopBannerText(e.target.value)}
                        disabled={!isBannerActive}
                        placeholder="Ex: Promoção especial!"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-b pb-6">
                  <h2 className="text-xl font-semibold">Segurança</h2>
                  <div className="space-y-2 max-w-md">
                    <Label htmlFor="new-password">Alterar Senha de Acesso</Label>
                    <Input
                      id="new-password"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Nova senha (opcional)"
                    />
                    <p className="text-xs text-muted-foreground">
                      Deixe em branco se não quiser alterar a senha atual.
                    </p>
                  </div>
                </div>

                <Button size="lg" className="w-full sm:w-auto" onClick={handleSave}>
                  Salvar Configurações
                </Button>

                <div className="flex flex-col gap-4 pt-4">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Lock className="h-5 w-5" />
                    <h2>Acesso e Segurança</h2>
                  </div>
                  
                  <Button
                    variant="destructive"
                    className="w-full sm:w-auto self-start"
                    onClick={() => {
                      logout();
                      toast.success("Sessão encerrada com sucesso!");
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" /> Sair
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
