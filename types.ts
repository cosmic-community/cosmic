export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Feature extends CosmicObject {
  type: 'features';
  metadata: {
    name?: string;
    description?: string;
    icon?: string;
    display_order?: number;
  };
}

export interface PricingTier extends CosmicObject {
  type: 'pricing-tiers';
  metadata: {
    plan_name?: string;
    price?: string;
    billing_period?: string;
    feature_list?: string;
    is_featured?: boolean;
    cta_label?: string;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    role?: string;
    bio?: string;
    headshot?: {
      url: string;
      imgix_url: string;
    };
    linkedin_url?: string;
    twitter_url?: string;
  };
}

export interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    excerpt?: string;
    content?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    author?: TeamMember;
    published_date?: string;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    person_name?: string;
    company?: string;
    role?: string;
    quote?: string;
    avatar?: {
      url: string;
      imgix_url: string;
    };
    rating?: number;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}