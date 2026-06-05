import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  variant?: "default" | "orange" | "outline" | "success" | "subtle" | "red";
  size?: "sm" | "md";
  className?: string;
};

export default function Badge({
  children,
  variant = "default",
  size = "sm",
  className,
}: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium rounded-full",
        size === "sm" ? "text-xs px-2.5 py-1" : "text-sm px-3.5 py-1.5",
        {
          "bg-white/[0.06] text-slate-300 border border-white/[0.08]": variant === "default",
          "bg-orange-500/10 text-orange-300 border border-orange-500/25": variant === "orange",
          "bg-red-500/10 text-red-300 border border-red-500/20": variant === "red",
          "border border-white/[0.15] text-slate-400 bg-transparent": variant === "outline",
          "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20": variant === "success",
          "bg-white/[0.04] text-slate-400 border border-white/[0.06]": variant === "subtle",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
