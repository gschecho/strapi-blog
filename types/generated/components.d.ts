import type { Schema, Struct } from '@strapi/strapi';

export interface SharedRelatedArticles extends Struct.ComponentSchema {
  collectionName: 'components_shared_related_articles';
  info: {
    displayName: 'relatedArticles';
    icon: 'manyWays';
  };
  attributes: {
    blogs: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'>;
    intro: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'articleSEO';
  };
  attributes: {
    articles: Schema.Attribute.Component<'shared.related-articles', false>;
    keywords: Schema.Attribute.String & Schema.Attribute.Required;
    media: Schema.Attribute.Component<'shared.shared-image', false>;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    preventIndexing: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    structuredData: Schema.Attribute.JSON & Schema.Attribute.Required;
  };
}

export interface SharedSharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_images';
  info: {
    displayName: 'sharedImage';
  };
  attributes: {
    alt: Schema.Attribute.Text & Schema.Attribute.Required;
    media: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.related-articles': SharedRelatedArticles;
      'shared.seo': SharedSeo;
      'shared.shared-image': SharedSharedImage;
    }
  }
}
