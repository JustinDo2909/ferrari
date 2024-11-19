import { NavLinks } from "../Type";

const navLinks: NavLinks[] = [
  { path: "/", name: "Home" },
  { path: "/Racing", name: "Racing" },
  { path: "/Sports Cars", name: "Sports Cars" },
  { path: "/Collections", name: "Collections" },
  { path: "/Experiences", name: "Experiences" },
  { path: "/AboutUs", name: "About Us" },
];
const videos = [
  "https://ferrari-cdn.thron.com/static/IVSOQM_GT-Ferrari_Gamma_Copertina_Short_A6KHBL.mp4?xseo=",
  "https://ferrari-cdn.thron.com/static/NUNFBN_WVP_Ferrari_FW24_ADV_60_Mix_16x9_FBSUFV.mp4?xseo=",
  "https://ferrari-cdn.thron.com/static/5JQP4R_loop-sf-24-desk_MS2LGI.mp4?xseo=",
];
const contentVideo = [
  {
    type: "Racing",
    title: "Scuderia Ferrari",
    titleLink: "Discover",
    link: "/Racing",
  },
  {
    type: "Sport Car",
    title: "Start Your Engine",
    titleLink: "Discover the ferrari line up",
    link: "/SportCar",
  },
  {
    type: "Collection",
    title: "Holiday season",
    titleLink: "Discover ferrari gifts",
    link: "/Collection-gifts",
  },
];
const pictures = [
  "https://cdn.ferrari.com/cms/network/media/img/resize/6733148ca60d1d00116d6491-scuderia-ferrari-hp-celebrates-together-with-paramount-the-release-of-gladiator-ii-gtw2?width=530&height=597",
  "https://cdn.ferrari.com/cms/network/media/img/resize/670fdd53dcd6130010c3513d-ferrari-12cilindri-magazine-rullo2?width=530&height=597",
  "https://cdn.ferrari.com/cms/network/media/img/resize/672a1a9a26b4eb000fcee857-maranello-clutch-tailor-made-for-the-hand-gtw2?width=530&height=597",
];
const content = [
  {
    title:
      "scuderia ferrari hp celebrates together with paramount the release of gladiator ii",
    content:
      "The Maranello Clutch shifts Ferrari fashion accessories into high gear. As with the Tailor Made programme for its cars, the brand’s clients can now personalise their handbags, choosing from a vast selection of colours and materials",
    link: "/formula1/articles/scuderia-ferrari-hp-celebrates-together-with-paramount-the-release-of-gladiator-ii",
  },
  {
    title: "precise muscular sensuous",
    content:
      "Not just an homage to the marque’s most historical engine, the new 12Cilindri deploys an array of technical innovation to offer unprecedented performance with unequalled driving control",
    link: "/magazine/articles/precise-muscular-sensuous-the-12cilindri",
  },
  {
    title: "Tailor made for the hand",
    content:
      "The Maranello Clutch shifts Ferrari fashion accessories into high gear. As with the Tailor Made programme for its cars, the brand’s clients can now personalise their handbags, choosing from a vast selection of colours and materials",
    link: "/magazine/articles/maranello-clutch-tailor-made-for-the-hand",
  },
];
const picture2 = [
  "https://1.bp.blogspot.com/-u91UQFstar4/VSIfoOoeboI/AAAAAAAAmfg/QIBsw5iYBfw/s1600/ferrari-f458-front.jpg",
  "https://3.bp.blogspot.com/-FF9KMHA0Rm4/VSIfjfL93AI/AAAAAAAAmec/6W9-tmYofYc/s1600/Ferrari-458-15-HD-Screensavers.jpg",
  "https://static.ferrarinetwork.ferrari.com/images/ferrari-spanish-gp-2017-practice-3_1dyAqPGS.jpg",
  "https://averagejoes.co.uk/wp-content/uploads/2016/10/ferrari-70th-anniversary-special-edition-liveries-bold-yellow.jpg",
  "https://photo2.tinhte.vn/data/attachment-files/2022/10/6165650_2022_1410_Ferrari_296GTB-169.jpg",
  "https://www.supercars.net/blog/wp-content/uploads/2018/09/Ferrari-Monza_SP2-2019-1600-01-e1537357663534.jpg",
];
const contentPicture2 = [
  {
    type: "Collections",
    title: "Gift guide ferrari",
    titleLink: "Explore",
    link: "/Collections",
  },
  {
    type: "Ferrari Museums",
    title: "Live Your Dream",
    titleLink: "discover more",
    link: "/Museums",
  },
  {
    type: "Sports Cars",
    title: "Ferrari F80",
    titleLink: "Discover More",
    link: "/Sports",
  },
  {
    type: "Magazine",
    title: "Celebrating the gto",
    titleLink: "Discover more",
    link: "/Magazine",
  },
  {
    type: "Ferrari Approved",
    title: "Pre-Owned",
    titleLink: "Discover More",
    link: "/Approved",
  },
  {
    type: "Sports Cars",
    title: "Past Models",
    titleLink: "Discover More",
    link: "/Sports",
  },
];
export {
  navLinks,
  videos,
  content,
  contentVideo,
  pictures,
  picture2,
  contentPicture2,
};
