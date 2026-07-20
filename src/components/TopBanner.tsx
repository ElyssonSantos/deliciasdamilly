import { useAdmin } from "@/contexts/AdminContext";

const TopBanner = () => {
  const { isBannerActive, topBannerText, bannerSpeed } = useAdmin();

  if (!isBannerActive || !topBannerText) return null;

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden relative shadow-md z-50">
      <div 
        className="animate-marquee whitespace-nowrap"
        style={{ animationDuration: `${bannerSpeed}s` }}
      >
        <span className="text-sm font-semibold tracking-wider mx-4">
          {topBannerText}
        </span>
        <span className="text-sm font-semibold tracking-wider mx-4">
          {topBannerText}
        </span>
        <span className="text-sm font-semibold tracking-wider mx-4">
          {topBannerText}
        </span>
        <span className="text-sm font-semibold tracking-wider mx-4">
          {topBannerText}
        </span>
      </div>
    </div>
  );
};

export default TopBanner;
