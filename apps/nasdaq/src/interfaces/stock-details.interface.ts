export interface ISingleStock {
  ticker: string;
  name: string;
  description: string;
  branding: {
    logo_url: string;
  };
  sic_description: string;
  homepage_url: string;
}
