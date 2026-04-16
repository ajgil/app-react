import React from "react";

export interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = "md",
  className = "",
}) => {
  // Size styles
  const sizeStyles = {
    xs: "w-6 h-6 text-[10px]",
    sm: "w-8 h-8 text-[11px]",
    md: "w-10 h-10 text-[12px]",
    lg: "w-12 h-12 text-[14px]",
    xl: "w-16 h-16 text-[16px]",
  };

  // Get initials from name
  const getInitials = (fullName?: string) => {
    if (!fullName) return "?";
    const names = fullName.split(" ");
    if (names.length >= 2) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return fullName.slice(0, 2).toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <div
      className={`relative flex items-center justify-center rounded-full bg-primarysource text-white font-semibold overflow-hidden flex-shrink-0 ${sizeStyles[size]} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt || name || "Avatar"}
          className="w-full h-full object-cover"
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};

// Avatar Group component for displaying multiple avatars
export interface AvatarGroupProps {
  avatars: Array<{ src?: string; name?: string }>;
  max?: number;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  avatars,
  max = 4,
  size = "sm",
  className = "",
}) => {
  const displayedAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  return (
    <div className={`flex items-center ${className}`}>
      {displayedAvatars.map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar.src}
          name={avatar.name}
          size={size}
          className={index > 0 ? "-ml-2" : ""}
        />
      ))}
      {remainingCount > 0 && (
        <div
          className={`flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 font-medium ${
            size === "xs"
              ? "w-6 h-6 text-[10px]"
              : size === "sm"
              ? "w-8 h-8 text-[11px]"
              : size === "md"
              ? "w-10 h-10 text-[12px]"
              : size === "lg"
              ? "w-12 h-12 text-[14px]"
              : "w-16 h-16 text-[16px]"
          } -ml-2`}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
};
