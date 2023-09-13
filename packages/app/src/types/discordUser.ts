export interface DiscordUser {
  id: string;
  username: string;
  name: string;
  avatar: string;
  image: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: null;
  accent_color: number;
  global_name: string;
  avatar_decoration_data: string;
  banner_color: string;
  mfa_enabled: boolean;
  locale: string;
  premium_type: number;
  email: string;
  verified: boolean;
}
