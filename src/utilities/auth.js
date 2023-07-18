export const isAuthenticated = (user) => !!user;

export const isAllowed = (user, allowedAuthorities, authorityKey) =>
  allowedAuthorities.some((permission) => user[authorityKey].includes(permission));

export const isVerified = (verified) => !!+verified;
