// src/api/map/content-types/map/lifecycles.ts
import type { Strapi } from '@strapi/strapi';

interface StrapiFile {
  width: number;
  height: number;
}

export = {
  beforeCreate: async (event: {
    params: {
      data: {
        image?: number | string;
        width?: number;
        height?: number;
      };
    };
    state: any;
  }) => {
    const { data } = event.params;
    if (data.image) {
      const imageFile = await strapi
        .plugin('upload')
        .service('upload')
        .findOne(data.image) as StrapiFile;
        
      data.width = imageFile.width;
      data.height = imageFile.height;
    }
  },

  beforeUpdate: async (event: {
    params: {
      data: {
        image?: number | string;
        width?: number;
        height?: number;
      };
    };
    state: any;
  }) => {
    const { data } = event.params;
    if (data.image) {
      const imageFile = await strapi
        .plugin('upload')
        .service('upload')
        .findOne(data.image) as StrapiFile;

      data.width = imageFile.width;
      data.height = imageFile.height;
    }
  }
};
