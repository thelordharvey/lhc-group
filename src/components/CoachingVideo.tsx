import { useState } from "react";
import video from "@/assets/videos/lhc-coaching-process-explainer.mp4.asset.json";
import poster from "@/assets/videos/lhc-coaching-poster.jpg.asset.json";
import { useSiteSettings } from "@/lib/site-settings";
import { mediaUrl } from "@/lib/media-url";

export function CoachingVideo() {
  const { t, language } = useSiteSettings();
  const [failed, setFailed] = useState(false);
  return (
    <figure className="mt-10">
      <figcaption className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-xl font-semibold">{t("How coaching works")}</h3>
        <span className="font-mono text-xs text-muted-foreground">00:26{language === "fr" ? ` · ${t("Video in English")}` : ""}</span>
      </figcaption>
      <video controls playsInline preload="metadata" poster={mediaUrl(poster.url)} aria-label={t("LHC Forex coaching explanation video")} onError={() => setFailed(true)} className="aspect-video w-full rounded-lg border border-border bg-secondary object-contain">
        <source src={mediaUrl(video.url)} type="video/mp4" />
      </video>
      {failed && <p role="alert" className="mt-3 text-sm text-destructive">{t("The video could not load. Please try again later.")}</p>}
    </figure>
  );
}