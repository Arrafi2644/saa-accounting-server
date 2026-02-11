import mongoose, { Schema } from "mongoose";
import { IBranch, ISiteInfo } from "./siteInfo.interface";


const BranchSchema = new Schema<IBranch>(
  {
    name: { type: String, required: true },
    address: { type: String, required: true }
  },
  { _id: false }
);

const SiteInfoSchema = new mongoose.Schema<ISiteInfo>(
  {
    siteTitle: { type: String },
    siteTagline: { type: String },
    mainLogo: { type: String, required: true },
    faviconLogo: { type: String },
    footerLogo: { type: String, required: true },

    mainEmail: { type: String },
    supportEmail: { type: String },
    phone: { type: String },
    supportPhone: { type: String },
    address: { type: String },
    mapEmbedUrl: { type: String },

    facebook: { type: String },
    linkedin: { type: String },
    youtube: { type: String },
    twitter: { type: String },
    instagram: { type: String },
    tiktok: { type: String },
    pinterest: { type: String },
    whatsapp: { type: String },
    branches: { type: [BranchSchema]},
  },
  { timestamps: true }
);

export const SiteInfo = mongoose.model<ISiteInfo>("SiteInfo", SiteInfoSchema);
