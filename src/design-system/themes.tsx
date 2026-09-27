import { createContext, useState } from "react";
import styled from "styled-components";
const cndUrl = (process.env.CDN_URL as string) || "";
export const ThemeRoot = styled.div`
  display: contents;
  @font-face {
    font-family: font-06837810-bacc-11f1-a453-2b32363983db;
    src: url("assets/fonts/4d11dbe8-1928-4ff2-97a7-5a94930aec07.woff2")
      format("woff2");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: font-06837810-bacc-11f1-a453-2b32363983db;
    src: url("assets/fonts/6813758f-074f-4af1-9b50-7a0e675596ab.woff2")
      format("woff2");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: font-06837810-bacc-11f1-a453-2b32363983db;
    src: url("assets/fonts/e5c3e351-4325-42fc-a0ea-e0be6162e9f7.woff2")
      format("woff2");
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: font-06837810-bacc-11f1-a453-2b32363983db;
    src: url("assets/fonts/c0186162-83bf-4952-86a0-923a3bbc98dc.woff2")
      format("woff2");
    font-weight: 700;
    font-style: normal;
  }
  --colors-primitive-landing-blue: #0147ffff;
  --colors-primitive-landing-grey: #dedee0ff;
  --colors-primitive-landing-dark: #1c1a1aff;
  --colors-primitive-landing-white: #ffffffff;
  --svgs-types-landing-avatar_natali: url("${cndUrl}/assets/images/e16a1203-583f-491b-8756-b4f277b15869.png");
  --svgs-types-landing-avatar_aliah: url("${cndUrl}/assets/images/9851f06d-a56a-4529-9b2d-a69e277a8414.png");
  --svgs-types-landing-avatar_loki: url("${cndUrl}/assets/images/a3dbc53a-1e2d-4952-9ad7-070d4a08e5d5.png");
  --svgs-types-landing-avatar_alisa: url("${cndUrl}/assets/images/4348a0a7-7ede-40bf-8030-db0fb6621311.png");
  --svgs-types-landing-avatar_orlando: url("${cndUrl}/assets/images/d13bb17b-fae6-4414-bf7b-3a7e1199c83b.jpg");
  --svgs-types-landing-speaker_photo_1: url("${cndUrl}/assets/images/c07c2c4c-f689-4dad-af4b-47b4dc4a7822.jpg");
  --svgs-types-landing-speaker_photo_3: url("${cndUrl}/assets/images/1428fbab-53cd-4719-b2d6-74ca9780aacd.jpg");
  --svgs-types-landing-speaker_photo_4: url("${cndUrl}/assets/images/a33db578-138c-4c08-b38d-5e908e65fa7d.jpg");
  --svgs-types-landing-speaker_photo_2: url("${cndUrl}/assets/images/4941ee97-362b-484d-a07d-ce8f9aa6d81a.jpg");
  --svgs-types-landing-venue_map: url("${cndUrl}/assets/images/efdaf7a3-baa6-45df-9623-8051fa77c0ce.jpg");
  --svgs-types-landing-arrow_white: url("${cndUrl}/assets/images/a403eb9a-8d79-48ca-b701-b5d122f6a44a.svg");
  --svgs-types-landing-arrow_dark: url("${cndUrl}/assets/images/17df895a-0d21-43cb-8168-5cb3d5f42b01.svg");
  --svgs-types-landing-arrow_white_ticket: url("${cndUrl}/assets/images/4664d978-c2df-446e-9d69-0fe5ba6644c1.svg");
  --svgs-types-landing-nav_arrow_right: url("${cndUrl}/assets/images/b595415c-eda5-4019-b9df-aaa80bea062c.svg");
  --svgs-types-landing-nav_arrow_left: url("${cndUrl}/assets/images/b630b284-23ae-47f0-970e-2a43570f56c9.svg");
  --svgs-types-landing-agenda_frame: url("${cndUrl}/assets/images/5e71ebb0-4860-4c50-8491-13129b8d7eb3.svg");
  --svgs-types-landing-countdown_frame: url("${cndUrl}/assets/images/9a266a4a-8a41-4859-97be-d1394d87aeca.svg");
  --svgs-types-landing-hero_b1: url("${cndUrl}/assets/images/666108e3-1ebb-49cb-a7d2-fa9d67b1a3d7.svg");
  --svgs-types-landing-speakers_group: url("${cndUrl}/assets/images/07b19893-f91d-41ed-84d0-26ea9e98f5a0.svg");
  --svgs-types-landing-logo_1: url("${cndUrl}/assets/images/f9b9ec04-30b0-4588-9198-3c5917ce2af9.svg");
  --svgs-types-landing-logo_2: url("${cndUrl}/assets/images/7aba3a60-5271-4a6b-8ee7-2d1669d5caf5.svg");
  --svgs-types-landing-logo_3: url("${cndUrl}/assets/images/081d2013-8507-411e-9b3b-4ba2fd3d7c36.svg");
  --svgs-types-landing-logo_4: url("${cndUrl}/assets/images/85138ca9-8dd6-4e45-8e5b-9be6e3b5891a.svg");
  --svgs-types-landing-logo_5: url("${cndUrl}/assets/images/0a23a686-670e-4906-a8ef-46d63f027d7f.svg");
  --svgs-types-landing-social_icons_contact: url("${cndUrl}/assets/images/2614e661-e021-4a8b-b14e-7e4de79d733d.svg");
  --svgs-types-landing-social_icons_footer: url("${cndUrl}/assets/images/e3e5c6dd-638f-4872-9a84-ad811b79d664.svg");
  --svgs-types-landing-line_413: url("${cndUrl}/assets/images/5a3029fd-9fd3-4128-8d19-0792439fcecf.svg");
  --svgs-types-landing-line_462: url("${cndUrl}/assets/images/819a02d4-5571-4d4b-8d4f-6dbca814dba7.svg");
  --svgs-types-landing-map_pin: url("${cndUrl}/assets/images/eeb2449b-afe2-4233-8e6a-014f218c0593.svg");
  &.default_1 {
  }
  &.default_2 {
  }
  &.default_3 {
  }
  &.default_4 {
  }
`;
export const Themes = { default: "default" };
export type ThemeType = keyof typeof Themes;
export type Layer = 1 | 2 | 3 | 4;

export const ComponentFileContext = createContext<{
  type: ThemeType;
  layer: Layer;
  setTheme: (type: ThemeType) => void;
  setLayer: (layer: Layer) => void;
}>({
  layer: 1,
  type: "default",
  setTheme: () => {},
  setLayer: () => {},
});

export const ThemesLayer = ({
  defaultType,
  children,
  defaultLayer,
}: {
  defaultType: ThemeType;
  defaultLayer: 1 | 2 | 3 | 4;
  children: React.JSX.Element;
}) => {
  const [currentTheme, setTheme] = useState(defaultType);
  const [currentLayer, setLayer] = useState(defaultLayer);
  return (
    <ComponentFileContext.Provider
      value={{
        layer: currentLayer,
        type: currentTheme,
        setTheme: (type) => setTheme(type),
        setLayer: (layer) => setLayer(layer),
      }}
    >
      <ThemeRoot className={`${currentTheme}_${currentLayer}`}>
        {children}
      </ThemeRoot>
    </ComponentFileContext.Provider>
  );
};
