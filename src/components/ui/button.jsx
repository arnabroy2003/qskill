export function Button({ children, className = "", variant = "default", asChild = false, ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50";

  const variants = {
    default: "bg-brandPurple text-white hover:bg-brandPurple",
    outline: "border border-brandPurple text-brandPurple hover:bg-brandPurple-50",
  };

  if (asChild) {
    return <span className={`${base} ${variants[variant]} ${className}`} {...props}>{children}</span>;
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}