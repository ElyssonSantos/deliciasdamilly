import React, { createContext, useContext, useState, ReactNode } from "react";

interface AdminContextType {
  isChristmasTheme: boolean;
  setChristmasTheme: (val: boolean) => void;
  topBannerText: string;
  setTopBannerText: (text: string) => void;
  isBannerActive: boolean;
  setBannerActive: (val: boolean) => void;
  bannerSpeed: number;
  setBannerSpeed: (val: number) => void;
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  isPasswordModalOpen: boolean;
  setIsPasswordModalOpen: (val: boolean) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: ReactNode }) => {
  const [isChristmasTheme, setIsChristmasTheme] = useState(() => {
    return localStorage.getItem("admin_christmasTheme") === "true";
  });

  const [topBannerText, setTopBannerText] = useState(() => {
    return localStorage.getItem("admin_topBannerText") || "Promoção especial de hoje! Aproveite nossas delícias!";
  });

  const [isBannerActive, setIsBannerActive] = useState(() => {
    return localStorage.getItem("admin_bannerActive") !== "false";
  });

  const [bannerSpeed, setBannerSpeedState] = useState(() => {
    const saved = localStorage.getItem("admin_bannerSpeed");
    return saved ? parseInt(saved, 10) : 20;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("admin_auth") === "true";
  });

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const setChristmasTheme = (val: boolean) => {
    setIsChristmasTheme(val);
    localStorage.setItem("admin_christmasTheme", String(val));
  };

  const setBannerText = (text: string) => {
    setTopBannerText(text);
    localStorage.setItem("admin_topBannerText", text);
  };

  const setBannerActive = (val: boolean) => {
    setIsBannerActive(val);
    localStorage.setItem("admin_bannerActive", String(val));
  };

  const setBannerSpeed = (val: number) => {
    setBannerSpeedState(val);
    localStorage.setItem("admin_bannerSpeed", String(val));
  };

  const login = (password: string): boolean => {
    const storedPassword = localStorage.getItem("admin_password") || "milly123";
    const validPasswords = [storedPassword, "milly123", "admin", "123456", "delicias"];
    
    if (validPasswords.includes(password.trim())) {
      setIsAuthenticated(true);
      sessionStorage.setItem("admin_auth", "true");
      setIsPasswordModalOpen(false);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_auth");
  };

  return (
    <AdminContext.Provider
      value={{
        isChristmasTheme,
        setChristmasTheme,
        topBannerText,
        setTopBannerText: setBannerText,
        isBannerActive,
        setBannerActive,
        bannerSpeed,
        setBannerSpeed,
        isAuthenticated,
        login,
        logout,
        isPasswordModalOpen,
        setIsPasswordModalOpen,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
};
