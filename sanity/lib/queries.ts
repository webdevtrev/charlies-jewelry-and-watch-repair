// Centralized GROQ queries for the project
export const homePageQuery = `*[_type == "homePage"][0]{
  "hero": {
    "headline": hero.headline,
    "subtext": hero.subtext,
    "backgroundVideo": {
      "videoUrl": hero.backgroundVideo.video.asset->url,
      "posterUrl": hero.backgroundVideo.poster.asset->url,
    },
    "backgroundImage": hero.backgroundImage.asset->url
  },
  "featuredProducts": featuredProducts[]->{_id, name, shortDescription, price, currency, "imageUrl": image.asset->url},
  awards,
  "experience": {
    "title": experience.title,
    "paragraphs": experience.content,
    "imageUrl": experience.image.asset->url
  }
}`;

export const aboutPageQuery = `*[_type == "aboutPage"][0]{
  "hero": { "headline": hero.headline, "backgroundImage": hero.backgroundImage.asset->url },
  "content": { "title": content.title, "text": content.text, "imageUrl": content.image.asset->url }
}`;

export const contactInformationQuery = `*[_type == "contactInformation"][0]{phone, email, address, mapLink, hours}`;

export const servicesPageQuery = `*[_type == "servicesPage"][0]{"hero": {
    "headline": hero.headline,
    "subtext": hero.subtext,
    "backgroundVideo": {
      "videoUrl": hero.backgroundVideo.video.asset->url,
      "posterUrl": hero.backgroundVideo.poster.asset->url,
    },
    "backgroundImage": hero.backgroundImage.asset->url
  }, serviceIntro, processesIntro, processSteps, frequentlyAskedQuestions}`;

export const contactPageQuery = `*[_type == "contactPage"][0]{
  "hero": {
    "headline": hero.headline,
    "subtext": hero.subtext,
    "backgroundVideo": {
      "videoUrl": hero.backgroundVideo.video.asset->url,
      "posterUrl": hero.backgroundVideo.poster.asset->url,
    },
    "backgroundImage": hero.backgroundImage.asset->url
  },
  body
}`;
